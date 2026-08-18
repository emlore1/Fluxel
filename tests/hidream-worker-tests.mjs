
import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const workerScript = path.join(here, "..", "python", "fluxel_hidream.py");
const python = process.env.PYTHON || "python3";

const workDirectory = mkdtempSync(path.join(tmpdir(), "fluxel-hidream-test-"));
const stubDirectory = path.join(workDirectory, "stubs");
const sourceDirectory = path.join(workDirectory, "source");
const modelsPackage = path.join(sourceDirectory, "models");
mkdirSync(stubDirectory, { recursive: true });
mkdirSync(modelsPackage, { recursive: true });

const torchPackage = path.join(stubDirectory, "torch");
mkdirSync(path.join(torchPackage, "nn"), { recursive: true });

writeFileSync(
  path.join(torchPackage, "__init__.py"),
  `
from . import nn

class _Cuda:
    @staticmethod
    def is_available():
        return True

cuda = _Cuda()
float32 = "torch.float32"
bfloat16 = "torch.bfloat16"
float8_e4m3fn = "torch.float8_e4m3fn"
float8_e5m2 = "torch.float8_e5m2"

class no_grad:
    def __enter__(self):
        return self
    def __exit__(self, *args):
        return False
`
);

writeFileSync(
  path.join(torchPackage, "nn", "__init__.py"),
  `
from . import functional

class Module:
    pass

class Linear(Module):
    def __init__(self, weight_dtype):
        self.weight = _Tensor(weight_dtype)
        self.bias = None

class _Tensor:
    def __init__(self, dtype):
        self.dtype = dtype
        self.data = self
    def to(self, dtype):
        return _Tensor(dtype)
`
);

writeFileSync(
  path.join(torchPackage, "nn", "functional.py"),
  `
def linear(inputs, weight, bias=None):
    return inputs
`
);

writeFileSync(path.join(stubDirectory, "flash_attn.py"), "__version__ = '2.8.3'\n");

writeFileSync(
  path.join(stubDirectory, "transformers.py"),
  `
class AutoProcessor:
    @staticmethod
    def from_pretrained(path, *args, **kwargs):
        return {"processor_for": path}
`
);

writeFileSync(path.join(modelsPackage, "__init__.py"), "");

writeFileSync(
  path.join(modelsPackage, "qwen3_vl_transformers.py"),
  `
import torch

class Qwen3VLForConditionalGeneration:
    def __init__(self, path):
        self.path = path
        self._modules_list = [
            torch.nn.Linear("torch.float8_e4m3fn"),
            torch.nn.Linear("torch.bfloat16"),
        ]
    @classmethod
    def from_pretrained(cls, path, *args, **kwargs):
        assert kwargs.get("device_map") == "cuda", "model must be placed on the GPU"
        return cls(path)
    def eval(self):
        return self
    def modules(self):
        return list(self._modules_list)
`
);

writeFileSync(
  path.join(modelsPackage, "pipeline.py"),
  `
import os
import time
from PIL import Image

DEFAULT_TIMESTEPS = [999, 987, 974, 960, 945, 929, 913, 895, 877, 857, 836, 814,
                     790, 764, 737, 707, 675, 640, 602, 560, 515, 464, 409, 347,
                     278, 199, 110, 8]

def generate_image(model, processor, prompt, ref_image_paths=None, height=1440,
                   width=2560, num_inference_steps=50, guidance_scale=5.0,
                   shift=3.0, timesteps_list=None, scheduler_name="default",
                   seed=42, keep_original_aspect=False, layout_bboxes=None,
                   callback=None, **kwargs):
    assert model is not None and processor is not None
    assert isinstance(prompt, str) and prompt
    assert guidance_scale == 0.0, "the distilled checkpoint runs with CFG off"
    assert shift == 1.0, "Dev uses shift 1.0, not the 3.0 default"
    assert timesteps_list is not None, "the distilled schedule must be passed verbatim"
    assert num_inference_steps == len(timesteps_list)
    expected_scheduler = "flow_match" if ref_image_paths else "flash"
    assert scheduler_name == expected_scheduler, scheduler_name
    assert seed >= 0, "the worker must resolve -1 to a concrete seed"
    for step in range(int(num_inference_steps)):
        if callback:
            callback(step)
        time.sleep(0.02)
    if ref_image_paths:
        reference = Image.open(ref_image_paths[0])
        width, height = reference.size
    with open(os.environ["FLUXEL_TEST_CALLS"], "a", encoding="utf8") as handle:
        handle.write("%dx%d:%s:aspect=%s:seed=%d\\n" % (
            width, height,
            "ref" if ref_image_paths else "none",
            keep_original_aspect, seed,
        ))
    return Image.new("RGB", (width or 64, height or 64), (10, 20, 30))
`
);

const callLog = path.join(workDirectory, "calls.txt");
const modelDirectory = path.join(workDirectory, "model");
mkdirSync(modelDirectory, { recursive: true });

const child = spawn(python, [workerScript, modelDirectory, sourceDirectory, "--device", "auto"], {
  stdio: ["pipe", "pipe", "pipe"],
  env: { ...process.env, PYTHONPATH: stubDirectory, FLUXEL_TEST_CALLS: callLog },
});

const events = [];
const waiters = [];
let stderrText = "";
let buffer = "";

child.stderr.on("data", (chunk) => {
  stderrText += String(chunk);
});
child.stdout.on("data", (chunk) => {
  buffer += String(chunk);
  let newline = buffer.indexOf("\n");
  while (newline >= 0) {
    const line = buffer.slice(0, newline).trim();
    buffer = buffer.slice(newline + 1);
    newline = buffer.indexOf("\n");
    if (!line) continue;
    const event = JSON.parse(line);
    events.push(event);
    for (const waiter of [...waiters]) {
      if (waiter.match(event)) {
        waiters.splice(waiters.indexOf(waiter), 1);
        waiter.resolve(event);
      }
    }
  }
});

function waitFor(match, label) {
  const existing = events.find(match);
  if (existing) return Promise.resolve(existing);
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error(`Timed out waiting for ${label}. stderr:\n${stderrText}`)),
      20000
    );
    waiters.push({
      match,
      resolve: (event) => {
        clearTimeout(timer);
        resolve(event);
      },
    });
  });
}

function send(command) {
  child.stdin.write(`${JSON.stringify(command)}\n`);
}

const hello = await waitFor((event) => event.type === "hello", "hello");
assert.equal(hello.protocol, 1, "protocol version must stay pinned");

const loaded = await waitFor((event) => event.type === "loaded", "loaded");
assert.equal(loaded.backend, "hidream");
assert.equal(loaded.device, "cuda");
assert.equal(loaded.flashAttention, true, "flash attention must be used when the wheel is installed");
assert.equal(loaded.fp8Layers, 1, "FP8 linears must be patched to dequantise per layer, BF16 ones left alone");

const generateOutput = path.join(workDirectory, "generate.png");
send({
  type: "generate",
  id: "job-generate-0001",
  prompt: "a lighthouse at dusk",
  steps: 28,
  guidance: 0,
  seed: 42,
  width: 1024,
  height: 768,
  outputPath: generateOutput,
});

const generateResult = await waitFor(
  (event) => event.type === "result" && event.id === "job-generate-0001",
  "generate result"
);
assert.equal(generateResult.outputPath, generateOutput);
assert.ok(existsSync(generateOutput), "the worker must write the PNG it reports");

const generateProgress = events.filter((event) => event.type === "progress" && event.id === "job-generate-0001");
assert.ok(generateProgress.length >= 28, "every sampling step should report progress");
assert.ok(
  generateProgress.every((event) => event.progress > 0 && event.progress <= 0.99),
  "progress must stay inside (0, 0.99] so the UI never shows a finished bar early"
);
const monotonic = generateProgress.map((event) => event.progress);
assert.deepEqual(monotonic, [...monotonic].sort((a, b) => a - b), "progress must never go backwards");

const referencePath = path.join(workDirectory, "reference.png");
const editOutput = path.join(workDirectory, "edit.png");
writeReferencePng(referencePath);
send({
  type: "edit",
  id: "job-edit-000001",
  prompt: "make it snow",
  steps: 28,
  guidance: 0,
  seed: -1,
  referencePath,
  outputPath: editOutput,
});
await waitFor((event) => event.type === "result" && event.id === "job-edit-000001", "edit result");
assert.ok(existsSync(editOutput));

send({
  type: "generate",
  id: "job-cancel-000001",
  prompt: "something long",
  steps: 28,
  guidance: 0,
  seed: 1,
  width: 512,
  height: 512,
  outputPath: path.join(workDirectory, "cancelled.png"),
});
await waitFor((event) => event.type === "progress" && event.id === "job-cancel-000001", "first cancel-job progress");
send({ type: "cancel", id: "job-cancel-000001" });
const cancelled = await waitFor(
  (event) => (event.type === "cancelled" || event.type === "error") && event.id === "job-cancel-000001",
  "cancellation"
);
assert.equal(cancelled.type, "cancelled", "a cancelled job must not surface as an error");
assert.ok(
  !existsSync(path.join(workDirectory, "cancelled.png")),
  "a cancelled job must not leave a half-written image behind"
);

send({ type: "ping", id: "job-ping-00000001" });
await waitFor((event) => event.type === "pong", "pong after cancel");

send({ type: "shutdown" });
await new Promise((resolve) => child.on("close", resolve));

const calls = readFileSync(callLog, "utf8").trim().split(/\r?\n/);
assert.equal(calls[0], "1024x768:none:aspect=False:seed=42", "text-to-image passes the requested dimensions");
assert.match(calls[1], /^96x64:ref:aspect=True:seed=\d+$/, "edit passes the reference and keeps its aspect");
assert.notEqual(calls[1].split("seed=")[1], "-1", "seed -1 must be resolved to a real value before sampling");

function writeReferencePng(target) {
  execFileSync(python, [
    "-c",
    `from PIL import Image; Image.new("RGB", (96, 64), (1, 2, 3)).save(${JSON.stringify(target)})`,
  ]);
}

console.log(
  "HiDream worker tests passed: handshake, upstream generate_image contract, progress, edit reference handling, cancellation, and warm reuse."
);
