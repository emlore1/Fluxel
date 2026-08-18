
"""Offline worker for the AI Generate / AI Edit nodes.

Reads newline-delimited JSON commands on stdin (generate, edit, cancel, ping,
shutdown) and writes events back on stdout: hello, loaded, progress, result,
cancelled, error. Diagnostics go to stderr so stdout stays a clean event stream.
"""

from __future__ import annotations

import json
import os
import sys
import threading
import traceback

PROTOCOL_VERSION = 1

os.environ.setdefault("HF_HUB_OFFLINE", "1")
os.environ.setdefault("TRANSFORMERS_OFFLINE", "1")
os.environ.setdefault("HF_HUB_DISABLE_TELEMETRY", "1")
os.environ.setdefault("DIFFUSERS_NO_ADVISORY_WARNINGS", "1")

_state_lock = threading.Lock()
_cancelled_jobs: set[str] = set()


class JobCancelled(Exception):
    pass


def emit(payload: dict) -> None:
    sys.stdout.write(json.dumps(payload, ensure_ascii=False) + "\n")
    sys.stdout.flush()


def log(message: str) -> None:
    sys.stderr.write(f"[fluxel-hidream] {message}\n")
    sys.stderr.flush()


def is_cancelled(job_id: str) -> bool:
    with _state_lock:
        return job_id in _cancelled_jobs


def clear_cancelled(job_id: str) -> None:
    with _state_lock:
        _cancelled_jobs.discard(job_id)


class Runner:

    def __init__(self, model_path: str, source_path: str, device_preference: str = "auto") -> None:
        self.model_path = model_path
        self.source_path = source_path
        self.device_preference = device_preference
        self.model = None
        self.processor = None
        self.generate_image = None
        self.default_timesteps = None
        self.backend = "hidream"
        self.flash_attention = False
        self.fp8_layers = 0
        self.device = "cpu"
        self.dtype_label = "unknown"

    def resolve_device(self):
        import torch

        if self.device_preference == "cpu":
            return "cpu", torch.float32
        if torch.cuda.is_available():
            return "cuda", torch.bfloat16
        build = getattr(torch, "__version__", "unknown")
        cuda_build = getattr(getattr(torch, "version", None), "cuda", None)
        if not cuda_build or str(build).endswith("+cpu"):
            raise RuntimeError(
                f"A CPU-only build of PyTorch is installed ({build}), so no GPU can be used. "
                "Remove and reinstall the AI Image Generation & Editing pack in AI Models."
            )
        raise RuntimeError(
            f"PyTorch {build} (CUDA {cuda_build}) is installed but no CUDA device was detected. "
            "Update your NVIDIA driver, or pick a different AI feature."
        )

    def load(self) -> dict:
        import torch

        device, dtype = self.resolve_device()
        self.device = device
        self.dtype_label = str(dtype).replace("torch.", "")

        if not os.path.isdir(self.source_path):
            raise RuntimeError(
                "The HiDream model code is missing from this installation. "
                "Reinstall the AI Image Generation & Editing pack in AI Models."
            )
        if self.source_path not in sys.path:
            sys.path.insert(0, self.source_path)

        from transformers import AutoProcessor
        from models.qwen3_vl_transformers import Qwen3VLForConditionalGeneration
        from models.pipeline import generate_image

        try:
            from models.pipeline import DEFAULT_TIMESTEPS
        except ImportError:
            DEFAULT_TIMESTEPS = None
        self.default_timesteps = DEFAULT_TIMESTEPS

        log(f"loading checkpoint from {self.model_path} onto {device}")
        self.processor = AutoProcessor.from_pretrained(self.model_path)
        self.model = Qwen3VLForConditionalGeneration.from_pretrained(
            self.model_path,
            torch_dtype=dtype,
            device_map=device,
        ).eval()
        try:
            import flash_attn

            self.flash_attention = True
        except Exception:
            self.flash_attention = False
        log(f"flash attention available: {self.flash_attention}")

        self.generate_image = generate_image
        self.fp8_layers = self._enable_fp8_compute(self.model, dtype)
        return self.describe()

    def _enable_fp8_compute(self, model, compute_dtype) -> int:
        # torch won't promote fp8 against bf16 activations, so dequantise per
        # layer instead of upcasting the whole model and doubling vram
        import torch
        import torch.nn.functional as F

        fp8_dtypes = {
            getattr(torch, name)
            for name in ("float8_e4m3fn", "float8_e5m2", "float8_e4m3fnuz", "float8_e5m2fnuz")
            if hasattr(torch, name)
        }
        if not fp8_dtypes:
            return 0

        def linear_forward(module):
            def forward(inputs):
                weight = module.weight.to(inputs.dtype)
                bias = module.bias.to(inputs.dtype) if module.bias is not None else None
                return F.linear(inputs, weight, bias)

            return forward

        patched = 0
        for module in model.modules():
            weight = getattr(module, "weight", None)
            if weight is None or weight.dtype not in fp8_dtypes:
                continue
            if isinstance(module, torch.nn.Linear):
                module.forward = linear_forward(module)
                patched += 1
            else:
                with torch.no_grad():
                    module.weight.data = module.weight.data.to(compute_dtype)

        if patched:
            log(f"FP8 checkpoint detected: {patched} linear layers will dequantise on the fly")
        return patched

    def describe(self) -> dict:
        return {
            "backend": self.backend,
            "device": self.device,
            "dtype": self.dtype_label,
            "fp8Layers": self.fp8_layers,
            "flashAttention": self.flash_attention,
        }

    def run(self, request: dict) -> str:
        job_id = str(request.get("id") or "")
        prompt = str(request.get("prompt") or "").strip()
        if not prompt:
            raise ValueError("A prompt is required.")

        guidance = float(request.get("guidance", 0.0) or 0.0)
        shift = float(request.get("shift") or 1.0)
        steps = max(1, int(request.get("steps") or 28))
        seed = int(request.get("seed", -1))
        width = int(request.get("width") or 1024)
        height = int(request.get("height") or 1024)
        output_path = str(request.get("outputPath") or "")
        reference_path = str(request.get("referencePath") or "")
        if not output_path:
            raise ValueError("No output path was supplied.")

        # -1 means "random" in the node, but upstream always wants a real seed
        if seed < 0:
            seed = int.from_bytes(os.urandom(4), "big") & 0x7FFFFFFF

        total_steps = {"value": len(self.default_timesteps) if self.default_timesteps else steps}
        seen_steps = {"count": 0}

        # upstream's callback signature isn't stable, so accept anything
        def callback(*args, **kwargs):
            if is_cancelled(job_id):
                raise JobCancelled()
            index = None
            for value in list(args) + list(kwargs.values()):
                if isinstance(value, int):
                    index = value
                    break
            seen_steps["count"] += 1
            position = (index + 1) if isinstance(index, int) else seen_steps["count"]
            emit(
                {
                    "type": "progress",
                    "id": job_id,
                    "progress": min(0.98, 0.05 + 0.93 * (position / max(1, total_steps["value"]))),
                    "phase": "sampling",
                }
            )

        emit({"type": "progress", "id": job_id, "progress": 0.04, "phase": "prepare"})

        scheduler_name = "flow_match" if reference_path else "flash"

        call_kwargs = dict(
            ref_image_paths=[reference_path] if reference_path else None,
            height=height,
            width=width,
            num_inference_steps=steps,
            guidance_scale=guidance,
            shift=shift,
            scheduler_name=scheduler_name,
            seed=seed,
            keep_original_aspect=bool(reference_path),
            callback=callback,
        )

        if self.default_timesteps:
            call_kwargs["timesteps_list"] = self.default_timesteps
            call_kwargs["num_inference_steps"] = len(self.default_timesteps)

        log(
            f"generate: {width}x{height} steps={call_kwargs['num_inference_steps']} "
            f"cfg={guidance} shift={shift} scheduler={scheduler_name} seed={seed}"
        )
        image = self.generate_image(self.model, self.processor, prompt, **call_kwargs)
        if is_cancelled(job_id):
            raise JobCancelled()

        image.save(output_path, format="PNG")
        emit({"type": "progress", "id": job_id, "progress": 0.99, "phase": "encode"})
        return output_path


def handle_command(runner: Runner, command: dict) -> None:
    kind = str(command.get("type") or "")
    job_id = str(command.get("id") or "")

    if kind in ("generate", "edit"):
        clear_cancelled(job_id)
        try:
            output_path = runner.run(command)
            emit({"type": "result", "id": job_id, "outputPath": output_path})
        except JobCancelled:
            emit({"type": "cancelled", "id": job_id})
        except Exception as error:
            log(traceback.format_exc())
            emit({"type": "error", "id": job_id, "message": str(error)})
        finally:
            clear_cancelled(job_id)
        return

    if kind == "ping":
        emit({"type": "pong", "id": job_id})
        return

    emit({"type": "error", "id": job_id, "message": f"Unknown command: {kind}"})


def main() -> int:
    if len(sys.argv) < 3:
        log("usage: fluxel_hidream.py <model-path> <source-path> [--device cpu|auto]")
        return 2

    model_path = sys.argv[1]
    source_path = sys.argv[2]
    device_preference = "auto"
    if "--device" in sys.argv:
        index = sys.argv.index("--device")
        if index + 1 < len(sys.argv):
            device_preference = sys.argv[index + 1]

    emit({"type": "hello", "protocol": PROTOCOL_VERSION})

    runner = Runner(model_path, source_path, device_preference)
    try:
        info = runner.load()
    except Exception as error:
        log(traceback.format_exc())
        emit({"type": "fatal", "message": str(error)})
        return 1
    emit(dict(info, type="loaded"))

    pending: list[dict] = []
    pending_signal = threading.Condition()
    stop = threading.Event()

    def reader() -> None:
        for line in sys.stdin:
            line = line.strip()
            if not line:
                continue
            try:
                command = json.loads(line)
            except json.JSONDecodeError:
                log(f"ignoring malformed command: {line[:200]}")
                continue
            kind = str(command.get("type") or "")
            if kind == "shutdown":
                stop.set()
                with pending_signal:
                    pending_signal.notify_all()
                return
            if kind == "cancel":
                with _state_lock:
                    _cancelled_jobs.add(str(command.get("id") or ""))
                continue
            with pending_signal:
                pending.append(command)
                pending_signal.notify_all()
        stop.set()
        with pending_signal:
            pending_signal.notify_all()

    threading.Thread(target=reader, name="fluxel-stdin", daemon=True).start()

    while not stop.is_set():
        with pending_signal:
            while not pending and not stop.is_set():
                pending_signal.wait(0.25)
            command = pending.pop(0) if pending else None
        if command is not None:
            handle_command(runner, command)

    return 0

if __name__ == "__main__":
    sys.exit(main())
