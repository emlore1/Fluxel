# Changelog

All notable changes to Fluxel, newest first.

## 1.8.0

Adds **AI Generate** and **AI Edit**, both running HiDream-O1-Image locally on the GPU.

- **AI Generate** builds an image from a text prompt. It is a source node — no input required — so it can head a graph like Load Image. Fixed seeds are reproducible and increment across folder-batch runs.
- **AI Edit** takes an image plus a plain-language instruction (*"remove the car"*, *"make it snow"*) and applies it to the whole frame, with no mask to paint. Paint Mask remains a utility node; mask-scoped editing is planned for later.
- Output size comes from a fixed table the model picks by aspect ratio, so the node lists those eleven sizes rather than a width and height it would discard. Steps, guidance, and shift are pinned to the values the checkpoint was tuned for, and the pipeline takes no negative prompt.
- The pack provisions its own runtime on first install: standalone CPython, a CUDA build of PyTorch, a matching flash-attention wheel, the upstream `models` package, and the checkpoint. No system Python, pip, CUDA toolkit, git, or `huggingface_hub` required — just a current NVIDIA driver. Everything is checksum-verified and resumable, and nothing ships inside the installer.
- Weights are FP8, keeping VRAM near 10 GB. Since torch won't mix FP8 with BF16 activations, each linear layer dequantises as it runs. Generation happens in a warm worker reused between runs and released after ten idle minutes, so only the first image of a session waits on the model load. The worker runs fully offline and excludes the upstream prompt agent, which would send prompts to a hosted LLM.

**Requirements and limits.** NVIDIA CUDA GPU, ~10 GB VRAM, Windows only — unlike the Vulkan and DirectML packs. If no flash-attention wheel matches the installed torch, the pipeline falls back to masked attention automatically; images still generate but fine texture suffers. The distilled FP8 checkpoint also trades some fidelity for speed, most visible when editing photos.

## 1.6.1

- Replaces the square 518×518 export with the dynamic Depth Anything V2 model. **Fast**, **Balanced**, **Fine**, and **Ultra** quality modes now preserve the source aspect ratio and infer at a 392–868 px short edge before returning the map at the original dimensions.
- Existing static-model installations appear as an update in AI Models.
- Node headers now keep every status/action icon on one row, and port labels sit outside the node instead of covering controls.
- In portable builds, the native ONNX dependency is installed and verified with the Depth pack instead of being embedded in the executable.

## 1.6.0

- Adds **AI Depth / Height Map** using Depth Anything V2 Small. One local inference exposes separate Depth and Height outputs at the source image dimensions.
- Depth polarity, height direction, contrast, gamma, smoothing, and CPU-only processing are selectable in the node.
- Automatic processing tries DirectML GPU acceleration on Windows and falls back to CPU safely.
- The 94.8 MB model is downloaded, resumed, SHA-256 verified, and removed through AI Models; it is never bundled in source or portable builds.

## 1.5.1

- Replaces the browser-style in-memory batch/ZIP flow with a streamed desktop workflow.
- **Batch Input** owns only the source folder; **Save / Export Image** owns the required batch destination and every output setting.
- Fluxel reads and processes one image at a time, immediately writes collision-safe results whenever execution reaches a Save node, releases the per-image working cache, then advances to the next file.

## 1.4.2

- Fixes corrupted tile placement at 2× and 3×. The General Photo and Anime / Artwork networks are native 4× models, so Fluxel now runs them at 4× and performs a high-quality final reduction when 2× or 3× is requested.
- Anime Fast uses its dedicated native x2, x3, and x4 weights directly.

## 1.4.1

- Fixes Windows pack extraction by promoting a verified partial download to its real `.zip` filename before installation.
- Incomplete or broken downloads now expose a **Discard** action in AI Models; completed installations retain the **Remove** action.
