import { app, nativeImage } from "electron";
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { createReadStream, createWriteStream, mkdirSync } from "node:fs";
import {
  access,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rename,
  rm,
  stat,
  unlink,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export const PYTHON_RUNTIME = Object.freeze({
  version: "3.12.8",
  release: "20241219",
  archiveName: "cpython-3.12.8+20241219-x86_64-pc-windows-msvc-install_only.tar.gz",
  url: "https://github.com/astral-sh/python-build-standalone/releases/download/20241219/cpython-3.12.8%2B20241219-x86_64-pc-windows-msvc-install_only.tar.gz",
  sha256: null,
  approximateSize: 28_000_000,
});

// pinned, not floated: the flash-attn wheel below is built for this exact combo
export const TORCH_REQUIREMENTS = Object.freeze({
  indexUrl: "https://download.pytorch.org/whl/cu130",
  packages: Object.freeze(["torch==2.10.0", "torchvision"]),
});

// no official windows wheels for flash-attn, and building it needs the cuda toolkit
export const FLASH_ATTENTION = Object.freeze({
  fileName: "flash_attn-2.8.3+cu130torch2.10.0cxx11abiTRUE-cp312-cp312-win_amd64.whl",
  url: "https://huggingface.co/Wildminder/AI-windows-whl/resolve/main/flash_attn-2.8.3%2Bcu130torch2.10.0cxx11abiTRUE-cp312-cp312-win_amd64.whl",
  sha256: null,
  approximateSize: 180_000_000,
});

export const PYTHON_REQUIREMENTS = Object.freeze([
  "transformers==4.57.1",
  "diffusers>=0.36",
  "accelerate",
  "safetensors",
  "einops",
  "numpy",
  "pillow",
  "scipy",
  "tqdm",
  "sentencepiece",
  "protobuf",
]);

export const MODEL_SOURCE = Object.freeze({
  repo: "HiDream-ai/HiDream-O1-Image",
  ref: "refs/heads/main",
  url: "https://github.com/HiDream-ai/HiDream-O1-Image/archive/refs/heads/main.tar.gz",
  sha256: null,
  approximateSize: 2_000_000,
});

export const MODEL_REPO = Object.freeze({
  id: "drbaph/HiDream-O1-Image-Dev-FP8",
  revision: "main",
  approximateSize: 10_500_000_000,
});

const HF_ENDPOINT = "https://huggingface.co";

function diagnosticLogPath() {
  const local = process.env.LOCALAPPDATA;
  return local
    ? path.join(local, "Fluxel", "logs", "hidream.log")
    : path.join(app.getPath("userData"), "logs", "hidream.log");
}

let logStream = null;
export function logHiDream(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  try {
    if (!logStream) {
      const target = diagnosticLogPath();
      mkdirSync(path.dirname(target), { recursive: true });
      logStream = createWriteStream(target, { flags: "a" });
    }
    logStream.write(line);
  } catch {}
}
const WORKER_IDLE_TIMEOUT = 10 * 60 * 1000;

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function sha256File(filePath) {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const stream = createReadStream(filePath);
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(hash.digest("hex")));
  });
}

function runtimeDirectory(packDirectory) {
  return path.join(packDirectory, "runtime");
}

export function pythonExecutable(packDirectory) {
  return path.join(runtimeDirectory(packDirectory), "python", "python.exe");
}

export function workerScriptPath(packDirectory) {
  return path.join(runtimeDirectory(packDirectory), "worker.py");
}

export function modelDirectory(packDirectory) {
  return path.join(packDirectory, "models");
}

export function sourceDirectory(packDirectory) {
  return path.join(runtimeDirectory(packDirectory), "source");
}

function sitePackagesDirectory(packDirectory) {
  return path.join(runtimeDirectory(packDirectory), "site");
}

function dependencyMarker(packDirectory) {
  return path.join(runtimeDirectory(packDirectory), "deps.json");
}

function requirementsSignature() {
  return createHash("sha256")
    .update(
      [
        TORCH_REQUIREMENTS.indexUrl,
        ...TORCH_REQUIREMENTS.packages,
        FLASH_ATTENTION.fileName,
        ...PYTHON_REQUIREMENTS,
      ].join("\n")
    )
    .digest("hex")
    .slice(0, 16);
}

async function workerSourcePath() {
  const candidates = [
    path.join(currentDirectory, "..", "python", "fluxel_hidream.py"),
    path.join(process.resourcesPath || "", "app.asar.unpacked", "python", "fluxel_hidream.py"),
    path.join(process.resourcesPath || "", "python", "fluxel_hidream.py"),
  ];
  for (const candidate of candidates) {
    if (candidate && (await exists(candidate))) return candidate;
  }
  throw new Error("Worker script missing from this Fluxel installation.");
}

export async function refreshWorkerScript(packDirectory) {
  const source = await workerSourcePath();
  const destination = workerScriptPath(packDirectory);
  await mkdir(path.dirname(destination), { recursive: true });
  const contents = await readFile(source);
  const current = (await exists(destination)) ? await readFile(destination) : null;
  if (!current || !current.equals(contents)) await writeFile(destination, contents);
  return destination;
}

async function downloadToFile(url, destination, { signal, expectedSha256, onBytes, headers = {} }) {
  const partial = `${destination}.partial`;
  let downloaded = 0;
  try {
    downloaded = (await stat(partial)).size;
  } catch {
    downloaded = 0;
  }
  const requestHeaders = { ...headers };
  if (downloaded > 0) requestHeaders.Range = `bytes=${downloaded}-`;

  const response = await fetch(url, { headers: requestHeaders, redirect: "follow", signal });
  if (!response.ok || !response.body) {
    throw new Error(`Download failed (${response.status}) for ${path.basename(destination)}.`);
  }
  const resumed = downloaded > 0 && response.status === 206;
  if (!resumed && downloaded > 0) {
    await unlink(partial).catch(() => {});
    downloaded = 0;
  }
  await mkdir(path.dirname(destination), { recursive: true });
  await new Promise((resolve, reject) => {
    const output = createWriteStream(partial, { flags: resumed ? "a" : "w" });
    const input = Readable.fromWeb(response.body);
    input.on("data", (chunk) => {
      downloaded += chunk.length;
      onBytes?.(chunk.length, downloaded);
    });
    input.on("error", reject);
    output.on("error", reject);
    output.on("finish", resolve);
    input.pipe(output);
  });

  if (expectedSha256) {
    const actual = await sha256File(partial);
    if (actual !== expectedSha256) {
      await unlink(partial).catch(() => {});
      throw new Error(
        `${path.basename(destination)} failed its security check (expected ${expectedSha256.slice(0, 12)}…, received ${actual.slice(0, 12)}…). The invalid file was removed; retry the install.`
      );
    }
  }
  await rm(destination, { force: true });
  await rename(partial, destination);
  return destination;
}

async function publishedSha256(url) {
  try {
    const response = await fetch(`${url}.sha256`, { redirect: "follow" });
    if (!response.ok) return null;
    const text = (await response.text()).trim().split(/\s+/)[0];
    return /^[a-f0-9]{64}$/i.test(text) ? text.toLowerCase() : null;
  } catch {
    return null;
  }
}

async function extractTarGz(archivePath, destination) {
  await mkdir(destination, { recursive: true });
  await new Promise((resolve, reject) => {
    const child = spawn(process.platform === "win32" ? "tar.exe" : "tar", ["-xzf", archivePath, "-C", destination], {
      windowsHide: true,
      stdio: ["ignore", "ignore", "pipe"],
    });
    let errorText = "";
    child.stderr.on("data", (chunk) => {
      errorText = `${errorText}${chunk}`.slice(-8192);
    });
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(errorText.trim() || "Could not unpack the Python runtime."))
    );
  });
}

async function installPythonRuntime(packDirectory, controller, report) {
  const runtime = runtimeDirectory(packDirectory);
  const pythonHome = path.join(runtime, "python");
  if (await exists(path.join(pythonHome, "python.exe"))) return;

  const archivePath = path.join(runtime, PYTHON_RUNTIME.archiveName);
  const expected = PYTHON_RUNTIME.sha256 || (await publishedSha256(PYTHON_RUNTIME.url));
  let downloaded = 0;
  await downloadToFile(PYTHON_RUNTIME.url, archivePath, {
    signal: controller.signal,
    expectedSha256: expected,
    onBytes: (_chunk, total) => {
      downloaded = total;
      report({
        phase: "download",
        component: "python",
        componentLabel: "Python runtime",
        componentDownloaded: downloaded,
        componentTotal: PYTHON_RUNTIME.approximateSize,
      });
    },
  });

  report({ phase: "install", component: "python", componentLabel: "Python runtime", componentProgress: 1 });
  const staging = path.join(runtime, "python.extracting");
  await rm(staging, { recursive: true, force: true });
  await extractTarGz(archivePath, staging);
  const extracted = (await exists(path.join(staging, "python", "python.exe")))
    ? path.join(staging, "python")
    : staging;
  await rm(pythonHome, { recursive: true, force: true });
  await rename(extracted, pythonHome);
  await rm(staging, { recursive: true, force: true });
  await unlink(archivePath).catch(() => {});

  if (!(await exists(path.join(pythonHome, "python.exe")))) {
    throw new Error("The Python runtime archive did not contain an interpreter.");
  }
}

function runPython(packDirectory, args, { onOutput, signal } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(pythonExecutable(packDirectory), args, {
      cwd: runtimeDirectory(packDirectory),
      windowsHide: true,
      stdio: ["ignore", "pipe", "pipe"],
      env: {
        ...process.env,
        PYTHONPATH: sitePackagesDirectory(packDirectory),
        PYTHONNOUSERSITE: "1",
        PYTHONUTF8: "1",
      },
    });
    let diagnostics = "";
    const consume = (chunk) => {
      const text = String(chunk);
      diagnostics = `${diagnostics}${text}`.slice(-32768);
      for (const line of text.split(/\r?\n/)) if (line.trim()) logHiDream(`python: ${line.trim()}`);
      onOutput?.(text);
    };
    child.stdout.on("data", consume);
    child.stderr.on("data", consume);
    child.on("error", reject);
    signal?.addEventListener("abort", () => child.kill(), { once: true });
    child.on("close", (code) =>
      code === 0 ? resolve(diagnostics) : reject(new Error(diagnostics.trim() || `Python exited with code ${code}.`))
    );
  });
}

async function installModelSource(packDirectory, controller, report) {
  const destination = sourceDirectory(packDirectory);
  if (await exists(path.join(destination, "models", "pipeline.py"))) return false;

  report({
    phase: "install",
    component: "source",
    componentLabel: "HiDream model code",
    componentProgress: 0,
  });
  logHiDream(`installing model source from ${MODEL_SOURCE.url}`);

  const archivePath = path.join(runtimeDirectory(packDirectory), "hidream-source.tar.gz");
  await downloadToFile(MODEL_SOURCE.url, archivePath, {
    signal: controller.signal,
    expectedSha256: MODEL_SOURCE.sha256,
    onBytes: (_chunk, total) =>
      report({
        phase: "download",
        component: "source",
        componentLabel: "HiDream model code",
        componentDownloaded: total,
        componentTotal: MODEL_SOURCE.approximateSize,
      }),
  });

  const staging = `${destination}.extracting`;
  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  await extractTarGz(archivePath, staging);

  const entries = await readdir(staging, { withFileTypes: true });
  const root = entries.find((entry) => entry.isDirectory());
  if (!root) throw new Error("Model code archive was empty.");
  const extracted = path.join(staging, root.name);
  if (!(await exists(path.join(extracted, "models", "pipeline.py")))) {
    throw new Error("The HiDream model code archive is missing its models package.");
  }

  await rm(destination, { recursive: true, force: true });
  await rename(extracted, destination);
  await rm(staging, { recursive: true, force: true });
  await unlink(archivePath).catch(() => {});
  return true;
}

async function installFlashAttention(packDirectory, controller, report) {
  report({
    phase: "install",
    component: "dependencies",
    componentLabel: "Flash attention",
    componentProgress: 0.9,
  });
  const wheelPath = path.join(runtimeDirectory(packDirectory), FLASH_ATTENTION.fileName);
  try {
    await downloadToFile(FLASH_ATTENTION.url, wheelPath, {
      signal: controller.signal,
      expectedSha256: FLASH_ATTENTION.sha256,
      onBytes: (_chunk, total) =>
        report({
          phase: "download",
          component: "dependencies",
          componentLabel: "Flash attention",
          componentDownloaded: total,
          componentTotal: FLASH_ATTENTION.approximateSize,
        }),
    });
    await runPython(
      packDirectory,
      [
        "-m",
        "pip",
        "install",
        "--no-input",
        "--disable-pip-version-check",
        "--no-warn-script-location",
        "--no-deps",
        "--target",
        sitePackagesDirectory(packDirectory),
        "--upgrade",
        wheelPath,
      ],
      { signal: controller.signal }
    );
    await runPython(packDirectory, ["-c", "import flash_attn;print('FLUXEL_FLASH_OK', flash_attn.__version__)"], {
      signal: controller.signal,
    });
    logHiDream("flash-attn installed and importable");
    return true;
  } catch (error) {
    const build = await runPython(
      packDirectory,
      ["-c", "import torch;print('torch', torch.__version__, torch.version.cuda)"],
      { signal: controller.signal }
    ).catch(() => "torch build unknown");
    logHiDream(`flash-attn unavailable, falling back to masked attention (${build.trim()}): ${error?.message || error}`);
    return false;
  } finally {
    await unlink(wheelPath).catch(() => {});
  }
}

async function setFlashAttention(modelsRoot, enabled) {
  const modelsDirectory = path.join(modelsRoot, "models");
  let files = [];
  try {
    files = await readdir(modelsDirectory);
  } catch {
    return 0;
  }
  const replacement = enabled ? "True" : "False";
  let patched = 0;
  for (const name of files) {
    if (!name.endsWith(".py")) continue;
    const target = path.join(modelsDirectory, name);
    const original = await readFile(target, "utf8");
    const updated = original.replace(/(["']use_flash_attn["']\s*:\s*)(?:True|False)/g, `$1${replacement}`);
    if (updated !== original) {
      await writeFile(target, updated, "utf8");
      patched += 1;
      logHiDream(`set use_flash_attn=${replacement} in models/${name}`);
    }
  }
  return patched;
}

async function installPythonDependencies(packDirectory, controller, report) {
  const marker = dependencyMarker(packDirectory);
  const signature = requirementsSignature();
  logHiDream(`installing python dependencies · signature ${signature}`);
  if (await exists(marker)) {
    try {
      const recorded = JSON.parse(await readFile(marker, "utf8"));
      if (recorded.signature === signature) return;
    } catch {}
  }

  const site = sitePackagesDirectory(packDirectory);
  // pip --target leaves stale dlls behind, which breaks badly across cuda versions
  if (await exists(site)) {
    logHiDream("removing the previous Python environment before reinstalling");
    await rm(site, { recursive: true, force: true });
  }
  await mkdir(site, { recursive: true });

  report({
    phase: "install",
    component: "dependencies",
    componentLabel: "PyTorch (CUDA build)",
    componentProgress: 0,
  });

  await runPython(packDirectory, ["-m", "ensurepip", "--upgrade"], { signal: controller.signal }).catch(() => {});

  const pipProgress = (label, fraction) => {
    let lastReported = 0;
    return (text) => {
      const collecting = [...text.matchAll(/Collecting ([^\s]+)/g)].at(-1);
      const installing = /Installing collected packages/.test(text);
      const now = Date.now();
      if (now - lastReported < 250) return;
      lastReported = now;
      report({
        phase: "install",
        component: "dependencies",
        componentLabel: installing ? `Installing ${label}` : collecting ? `Downloading ${collecting[1]}` : label,
        componentProgress: fraction,
      });
    };
  };

  const pipBase = [
    "-m",
    "pip",
    "install",
    "--no-input",
    "--disable-pip-version-check",
    "--no-warn-script-location",
    "--only-binary=:all:",
    "--target",
    site,
    "--upgrade",
  ];

  // cuda index only. pypi ships a cpu-only torch under the same name, often at a
  // higher version, so anything that can see both indexes eventually picks it
  await runPython(
    packDirectory,
    [...pipBase, "--index-url", TORCH_REQUIREMENTS.indexUrl, ...TORCH_REQUIREMENTS.packages],
    { signal: controller.signal, onOutput: pipProgress("PyTorch (CUDA build)", 0.3) }
  );

  // transformers/diffusers/accelerate all want torch, so pin the exact local build
  const installedTorch = await installedTorchVersion(packDirectory, controller);
  const constraintsPath = path.join(runtimeDirectory(packDirectory), "constraints.txt");
  await writeFile(constraintsPath, `torch==${installedTorch}\n`, "utf8");

  const requirementsPath = path.join(runtimeDirectory(packDirectory), "requirements.txt");
  await writeFile(requirementsPath, `${PYTHON_REQUIREMENTS.join("\n")}\n`, "utf8");

  await runPython(
    packDirectory,
    [
      ...pipBase,
      "--index-url",
      "https://pypi.org/simple",
      "--extra-index-url",
      TORCH_REQUIREMENTS.indexUrl,
      "-c",
      constraintsPath,
      "-r",
      requirementsPath,
    ],
    { signal: controller.signal, onOutput: pipProgress("model libraries", 0.8) }
  );

  const flashInstalled = await installFlashAttention(packDirectory, controller, report);

  const build = await verifyTorchBuild(packDirectory, controller);
  await setFlashAttention(sourceDirectory(packDirectory), flashInstalled);

  await writeFile(
    marker,
    JSON.stringify(
      {
        signature,
        requirements: PYTHON_REQUIREMENTS,
        torch: build,
        flashAttention: flashInstalled,
        installedAt: new Date().toISOString(),
      },
      null,
      2
    ),
    "utf8"
  );
}

async function installedTorchVersion(packDirectory, controller) {
  const output = await runPython(packDirectory, ["-c", "import torch;print('FLUXEL_TORCH_VERSION='+torch.__version__)"], {
    signal: controller.signal,
  });
  const match = /FLUXEL_TORCH_VERSION=(\S+)/.exec(output);
  if (!match) throw new Error("PyTorch install failed.");
  return match[1];
}

async function verifyTorchBuild(packDirectory, controller) {
  const probe =
    "import json,torch;" +
    "print('FLUXEL_TORCH='+json.dumps({" +
    "'version':torch.__version__,'cuda':torch.version.cuda," +
    "'available':torch.cuda.is_available()," +
    "'device':(torch.cuda.get_device_name(0) if torch.cuda.is_available() else None)," +
    "'arch':list(getattr(torch.cuda,'get_arch_list',lambda:[])())}))";
  const output = await runPython(packDirectory, ["-c", probe], { signal: controller.signal });
  const match = /FLUXEL_TORCH=(\{.*\})/.exec(output);
  if (!match) throw new Error("Could not read the installed PyTorch build.");
  const build = JSON.parse(match[1]);

  // catch this here rather than after the user waits out a 10 GB checkpoint
  if (!build.cuda || /\+cpu$/.test(String(build.version))) {
    throw new Error(
      `A CPU-only build of PyTorch was installed (${build.version}). Fluxel needs the CUDA build. ` +
        "Remove this pack in AI Models and install it again; if it recurs, your network may be blocking " +
        "download.pytorch.org."
    );
  }
  if (!build.available) {
    throw new Error(
      `PyTorch ${build.version} (CUDA ${build.cuda}) is installed but cannot see a GPU. ` +
        "Update your NVIDIA driver and try again."
    );
  }
  return build;
}

async function fetchModelManifest(signal) {
  const url = `${HF_ENDPOINT}/api/models/${MODEL_REPO.id}?blobs=true&revision=${encodeURIComponent(MODEL_REPO.revision)}`;
  const response = await fetch(url, { redirect: "follow", signal });
  if (!response.ok) {
    throw new Error(
      `Could not read the model file list from Hugging Face (${response.status}). Check your internet connection and retry.`
    );
  }
  const payload = await response.json();
  const files = (payload?.siblings || [])
    .map((entry) => ({
      name: String(entry.rfilename || ""),
      size: Number(entry.size || 0),
      sha256: entry?.lfs?.oid && /^[a-f0-9]{64}$/i.test(entry.lfs.oid) ? String(entry.lfs.oid).toLowerCase() : null,
    }))
    .filter((entry) => entry.name && !entry.name.startsWith(".") && entry.name !== "README.md");
  if (!files.length) throw new Error("The model repository returned no files.");
  return files;
}

export function snapshotMarkerPath(packDirectory) {
  return path.join(modelDirectory(packDirectory), "snapshot.json");
}

async function installModelSnapshot(packDirectory, controller, report) {
  const destination = modelDirectory(packDirectory);
  await mkdir(destination, { recursive: true });
  await rm(snapshotMarkerPath(packDirectory), { force: true });
  const files = await fetchModelManifest(controller.signal);
  const totalBytes = files.reduce((sum, file) => sum + (file.size || 0), 0) || MODEL_REPO.approximateSize;
  let completedBytes = 0;

  for (const file of files) {
    const target = path.join(destination, file.name);
    if (await exists(target)) {
      report({
        phase: "verify",
        component: "model",
        componentLabel: `Verifying · ${file.name}`,
        componentDownloaded: completedBytes,
        componentTotal: totalBytes,
      });
      if (!file.sha256 || (await sha256File(target)) === file.sha256) {
        completedBytes += file.size || 0;
        report({
          phase: "verify",
          component: "model",
          componentLabel: `Verified · ${file.name}`,
          componentDownloaded: completedBytes,
          componentTotal: totalBytes,
        });
        continue;
      }
      logHiDream(`checksum mismatch, re-downloading ${file.name}`);
      await unlink(target).catch(() => {});
    }
    const url = `${HF_ENDPOINT}/${MODEL_REPO.id}/resolve/${MODEL_REPO.revision}/${file.name.split("/").map(encodeURIComponent).join("/")}`;
    const startedAt = completedBytes;
    await downloadToFile(url, target, {
      signal: controller.signal,
      expectedSha256: file.sha256,
      onBytes: (_chunk, fileDownloaded) => {
        completedBytes = startedAt + fileDownloaded;
        report({
          phase: "download",
          component: "model",
          componentLabel: `Checkpoint · ${file.name}`,
          componentDownloaded: completedBytes,
          componentTotal: totalBytes,
        });
      },
    });
    completedBytes = startedAt + (file.size || 0);
  }

  // written last so an interrupted download can never look complete
  await writeFile(
    snapshotMarkerPath(packDirectory),
    JSON.stringify(
      {
        repo: MODEL_REPO.id,
        revision: MODEL_REPO.revision,
        files: files.map((file) => ({ name: file.name, size: file.size, sha256: file.sha256 })),
        installedAt: new Date().toISOString(),
      },
      null,
      2
    ),
    "utf8"
  );
}

export async function hiDreamRuntimeOutdated(packDirectory) {
  if (!(await exists(path.join(sourceDirectory(packDirectory), "models", "pipeline.py")))) return true;
  const marker = dependencyMarker(packDirectory);
  if (!(await exists(marker))) return true;
  try {
    const recorded = JSON.parse(await readFile(marker, "utf8"));
    return recorded.signature !== requirementsSignature();
  } catch {
    return true;
  }
}

export async function ensureDependenciesCurrent(packDirectory, onProgress = () => {}) {
  const controllerForSource = new AbortController();
  const addedSource = await installModelSource(packDirectory, controllerForSource, (update) =>
    onProgress({ ...update, phase: "repair" })
  );
  if (addedSource) shutdownHiDreamWorker();

  const marker = dependencyMarker(packDirectory);
  if (await exists(marker)) {
    try {
      const recorded = JSON.parse(await readFile(marker, "utf8"));
      if (recorded.signature === requirementsSignature()) return addedSource;
    } catch {}
  }
  const controller = new AbortController();
  shutdownHiDreamWorker();
  await installPythonDependencies(packDirectory, controller, (update) =>
    onProgress({ ...update, phase: "repair" })
  );
  return true;
}

export async function installHiDreamPack(packDirectory, controller, onProgress) {
  await mkdir(packDirectory, { recursive: true });

  const weights = [
    { id: "python", weight: 0.02 },
    { id: "dependencies", weight: 0.28 },
    { id: "model", weight: 0.7 },
  ];
  let completed = 0;
  const report = (update) => {
    const current = weights.find((entry) => entry.id === update.component);
    const fraction =
      update.componentTotal && update.componentDownloaded
        ? Math.min(1, update.componentDownloaded / update.componentTotal)
        : Number(update.componentProgress || 0);
    const progress = Math.min(0.995, completed + (current?.weight || 0) * fraction);
    onProgress({ ...update, progress });
  };
  const finishStage = (id) => {
    completed += weights.find((entry) => entry.id === id)?.weight || 0;
  };

  await installPythonRuntime(packDirectory, controller, report);
  await installModelSource(packDirectory, controller, report);
  finishStage("python");
  await installPythonDependencies(packDirectory, controller, report);
  finishStage("dependencies");
  await installModelSnapshot(packDirectory, controller, report);
  finishStage("model");
  await refreshWorkerScript(packDirectory);

  onProgress({ phase: "ready", progress: 1, component: "model", componentProgress: 1 });
  return { installed: true, resumed: false };
}

let worker = null;

function killWorker() {
  if (!worker) return;
  const current = worker;
  worker = null;
  clearTimeout(current.idleTimer);
  try {
    current.child.stdin.write(`${JSON.stringify({ type: "shutdown" })}\n`);
  } catch {}
  current.child.kill();
  for (const job of current.jobs.values()) job.reject(new Error("The AI worker stopped."));
  current.jobs.clear();
}

export function shutdownHiDreamWorker() {
  killWorker();
}

function scheduleIdleShutdown() {
  if (!worker) return;
  clearTimeout(worker.idleTimer);
  worker.idleTimer = setTimeout(() => {
    if (worker && worker.jobs.size === 0) killWorker();
  }, WORKER_IDLE_TIMEOUT);
  worker.idleTimer.unref?.();
}

async function startWorker(packDirectory, hardware) {
  await refreshWorkerScript(packDirectory);
  const child = spawn(
    pythonExecutable(packDirectory),
    [
      workerScriptPath(packDirectory),
      modelDirectory(packDirectory),
      sourceDirectory(packDirectory),
      "--device",
      hardware === "cpu" ? "cpu" : "auto",
    ],
    {
      cwd: runtimeDirectory(packDirectory),
      windowsHide: true,
      stdio: ["pipe", "pipe", "pipe"],
      env: {
        ...process.env,
        PYTHONPATH: sitePackagesDirectory(packDirectory),
        PYTHONNOUSERSITE: "1",
        PYTHONUTF8: "1",
        PYTHONUNBUFFERED: "1",
      },
    }
  );

  const instance = {
    child,
    hardware,
    packDirectory,
    jobs: new Map(),
    idleTimer: null,
    diagnostics: "",
    info: null,
  };

  const ready = new Promise((resolve, reject) => {
    instance.resolveReady = resolve;
    instance.rejectReady = reject;
  });

  let buffer = "";
  child.stdout.on("data", (chunk) => {
    buffer += String(chunk);
    let newline = buffer.indexOf("\n");
    while (newline >= 0) {
      const line = buffer.slice(0, newline).trim();
      buffer = buffer.slice(newline + 1);
      newline = buffer.indexOf("\n");
      if (!line) continue;
      let event = null;
      try {
        event = JSON.parse(line);
      } catch {
        continue;
      }
      handleWorkerEvent(instance, event);
    }
  });
  child.stderr.on("data", (chunk) => {
    instance.diagnostics = `${instance.diagnostics}${chunk}`.slice(-32768);
    for (const line of String(chunk).split(/\r?\n/)) if (line.trim()) logHiDream(`worker: ${line.trim()}`);
  });
  child.on("error", (error) => {
    instance.rejectReady?.(error);
    killWorker();
  });
  child.on("close", (code) => {
    const message = instance.diagnostics.trim() || `The AI worker stopped unexpectedly (code ${code}).`;
    instance.rejectReady?.(new Error(message));
    for (const job of instance.jobs.values()) job.reject(new Error(message));
    instance.jobs.clear();
    if (worker === instance) worker = null;
  });

  worker = instance;
  try {
    await ready;
  } catch (error) {
    if (worker === instance) worker = null;
    try {
      child.kill();
    } catch {}
    throw error;
  }
  return instance;
}

function handleWorkerEvent(instance, event) {
  const type = String(event?.type || "");
  if (type === "loaded") {
    instance.info = event;
    instance.resolveReady?.(instance);
    instance.resolveReady = null;
    instance.rejectReady = null;
    return;
  }
  if (type === "fatal") {
    instance.rejectReady?.(new Error(String(event.message || "The AI worker could not load the model.")));
    instance.rejectReady = null;
    instance.resolveReady = null;
    return;
  }
  const job = instance.jobs.get(String(event?.id || ""));
  if (!job) return;
  if (type === "progress") {
    job.onProgress(Math.max(0.02, Math.min(0.99, Number(event.progress) || 0)), String(event.phase || "generate"));
    return;
  }
  if (type === "result") {
    job.resolve(String(event.outputPath || ""));
    return;
  }
  if (type === "cancelled") {
    job.reject(new Error("Generation was cancelled."));
    return;
  }
  if (type === "error") {
    job.reject(new Error(String(event.message || "Generation failed.")));
  }
}

async function ensureWorker(packDirectory, hardware) {
  if (worker && worker.packDirectory === packDirectory && worker.hardware === hardware && worker.child.exitCode === null) {
    clearTimeout(worker.idleTimer);
    return worker;
  }
  if (worker) killWorker();
  return startWorker(packDirectory, hardware);
}

const activeJobs = new Map();

export async function runHiDreamJob(packDirectory, request, onProgress) {
  const jobId = String(request.jobId);
  if (activeJobs.has(jobId)) throw new Error("This AI job is already running.");

  const workDirectory = await mkdtemp(path.join(app.getPath("temp"), "fluxel-hidream-"));
  const outputPath = path.join(workDirectory, "output.png");
  let referencePath = "";

  try {
    if (request.referenceBytes) {
      referencePath = path.join(workDirectory, "reference.png");
      await writeFile(referencePath, request.referenceBytes);
    }

    if (await hiDreamRuntimeOutdated(packDirectory)) {
      throw new Error(
        "The AI runtime needs updating for this version of Fluxel. Open AI Models and choose Update — " +
          "the model itself is kept, only the runtime is reinstalled."
      );
    }

    const warm = worker && worker.packDirectory === packDirectory && worker.child.exitCode === null;
    let loadTicks = 0;
    const loadTimer = warm
      ? null
      : setInterval(() => {
          loadTicks += 1;
          onProgress({
            jobId,
            progress: Math.min(0.03, 0.005 + loadTicks * 0.0004),
            phase: "loading",
            label: `Loading the model into VRAM · ${loadTicks * 2}s`,
          });
        }, 2000);
    loadTimer?.unref?.();
    onProgress({ jobId, progress: 0.005, phase: "loading", label: warm ? "Starting" : "Loading the model into VRAM" });

    let instance;
    try {
      instance = await ensureWorker(packDirectory, request.hardware);
    } finally {
      if (loadTimer) clearInterval(loadTimer);
    }
    logHiDream(`worker ready · ${JSON.stringify(instance.info || {})}`);

    const command = {
      type: referencePath ? "edit" : "generate",
      id: jobId,
      prompt: request.prompt,
      negativePrompt: request.negativePrompt || "",
      steps: request.steps,
      guidance: request.guidance,
      seed: request.seed,
      width: request.width,
      height: request.height,
      keepAspect: Boolean(request.keepAspect),
      referencePath,
      outputPath,
    };

    const resultPath = await new Promise((resolve, reject) => {
      const job = {
        resolve,
        reject,
        onProgress: (progress, phase) => onProgress({ jobId, progress, phase }),
      };
      instance.jobs.set(jobId, job);
      activeJobs.set(jobId, { instance, jobId });
      try {
        instance.child.stdin.write(`${JSON.stringify(command)}\n`);
      } catch (error) {
        reject(error);
      }
    }).finally(() => {
      instance.jobs.delete(jobId);
      activeJobs.delete(jobId);
      scheduleIdleShutdown();
    });

    const output = await readFile(resultPath);
    const image = nativeImage.createFromBuffer(output);
    if (!output.length || image.isEmpty()) throw new Error("The AI worker did not produce a readable image.");
    onProgress({ jobId, progress: 1, phase: "ready" });
    return {
      dataUrl: `data:image/png;base64,${output.toString("base64")}`,
      size: image.getSize(),
      engine: `HiDream-O1-Image · ${instance.info?.backend || "pytorch"} · ${instance.info?.device || "cuda"}`,
      model: "HiDream-O1-Image Dev",
      seed: request.seed,
    };
  } finally {
    activeJobs.delete(jobId);
    await rm(workDirectory, { recursive: true, force: true });
  }
}

export function cancelHiDreamJob(jobId) {
  const entry = activeJobs.get(String(jobId));
  if (!entry) return false;
  try {
    entry.instance.child.stdin.write(`${JSON.stringify({ type: "cancel", id: entry.jobId })}\n`);
  } catch {
    entry.instance.child.kill();
  }
  return true;
}

export function hiDreamJobsActive() {
  return activeJobs.size;
}
