# Fluxel

Fluxel is a desktop and browser-based visual image-processing studio. Build a typed node graph, run a real client-side image pipeline, compare before/after output, and export the result without a backend.

The v21 interface uses Fluxel's original Orbit desk visual system: detached rounded work surfaces, a neutral-black canvas, capsule navigation, vertically accented node tiles, a card-based inspector, and a floating output monitor. Its default accent is `#5e0094`.

**About this repo's source.** The Electron shell, the IPC layer, and the entire Python-based AI runtime (`electron/`, `python/`) are full, editable source and are what this project is actually about. The UI itself (`main.js`) ships as an already-built bundle rather than individual component files — there is no `src/` tree behind it in this repo, so it can be read and patched in place but not rebuilt from scratch here. It's compiled from React, React Flow, Zustand, and Framer Motion; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for attribution.

## Run locally

```bash
npm install
npm run dev
```

Create the static production build with `npm run build`. Run deterministic tests with `npm run test:worker` and `npm run test:workflow`.

## Desktop

Run `npm run desktop:dev` while developing, `npm test` for the complete test suite, or `npm run desktop:dist:win` to build the portable Windows `.exe`.

## Local AI

Open **AI Models** in the top toolbar to install optional, hash-verified feature packs. Fluxel stores models separately from the portable executable so application updates do not require downloading them again.

The first pack unlocks **Real-ESRGAN Upscale**, a genuine 2×–4× neural detail-restoration node powered by the official portable Real-ESRGAN NCNN/Vulkan runtime. It includes General Photo, Anime / Artwork, and fast anime models, selectable GPU-memory tiling, adjustable detail strength, transparency preservation, progress reporting, resumable downloads, and pipeline cancellation.

The pack is a 45.5 MB, SHA-256-verified optional download and currently runs on Windows with a Vulkan-capable Intel, AMD, or NVIDIA GPU. It needs no Python, PyTorch, CUDA, account, or internet connection after installation. Fluxel removes the previous demonstration ONNX model automatically and does not retain it as a fallback.

Version 1.6.0 adds **AI Depth / Height Map** using Depth Anything V2 Small. One local inference exposes separate Depth and Height outputs at the source image dimensions. Depth polarity, height direction, contrast, gamma, smoothing, and CPU-only processing are selectable in the node. Automatic processing tries DirectML GPU acceleration on Windows and safely falls back to CPU. The 94.8 MB model is downloaded, resumed, SHA-256 verified, and removed through AI Models; it is never bundled in source or portable builds.

Version 1.6.1 replaces the square 518×518 export with the dynamic Depth Anything V2 model. Fast, Balanced, Fine, and Ultra quality modes now preserve the source aspect ratio and infer at a 392–868 px short edge before returning the map at the original dimensions. Existing static-model installations appear as an update in AI Models. Node headers now keep every status/action icon on one row, and port labels sit outside the node instead of covering controls. In portable builds, the native ONNX dependency is installed and verified with the Depth pack instead of being embedded in the executable.

Version 1.8.0 adds **AI Generate** and **AI Edit**, both running HiDream-O1-Image locally on the GPU. AI Generate builds an image from a text prompt. AI Edit takes an image plus a plain-language instruction ("remove the car", "make it snow") and applies it to the whole frame, with no mask to paint. Paint Mask stays as a utility node; mask-scoped editing is planned for later.

Output size comes from a fixed table the model picks by aspect ratio, so the node lists those eleven sizes instead of a width and height it would discard. Steps, guidance and shift are pinned to the values the checkpoint was tuned for, and the pipeline takes no negative prompt.

This is a PyTorch model, not a single binary, so the pack provisions its own runtime on first install: standalone CPython, a CUDA build of PyTorch, a matching flash-attention wheel, the upstream `models` package and the checkpoint. No system Python, pip, CUDA toolkit, git or huggingface_hub required - just a current NVIDIA driver. Everything is checksum-verified and resumable, and nothing ships inside the installer.

Weights are FP8, which keeps VRAM near 10 GB. Since torch won't mix FP8 with BF16 activations, each linear layer dequantises as it runs. Generation happens in a warm worker that is reused between runs and released after ten idle minutes, so only the first image of a session waits on the model load. The worker runs fully offline and does not include the upstream prompt agent, which would send prompts to a hosted LLM.

**Requirements and limits.** NVIDIA CUDA GPU, ~10 GB VRAM, Windows only - unlike the Vulkan and DirectML packs. If no flash-attention wheel matches the installed torch, the pipeline falls back to masked attention automatically; images still generate but fine texture suffers. The distilled FP8 checkpoint also trades some fidelity for speed, most visible when editing photos.

Version 1.4.1 fixes Windows pack extraction by promoting a verified partial download to its real `.zip` filename before installation. Incomplete or broken downloads now expose a **Discard** action in AI Models; completed installations retain the **Remove** action.

Version 1.4.2 fixes corrupted tile placement at 2× and 3×. The General Photo and Anime / Artwork networks are native 4× models, so Fluxel now runs them at 4× and performs a high-quality final reduction when 2× or 3× is requested. Anime Fast uses its dedicated native x2, x3, and x4 weights directly.

Version 1.5.1 replaces the browser-style in-memory batch/ZIP flow with a streamed desktop workflow. Batch Input owns only the source folder; Save / Export Image owns the required batch destination and every output setting. Fluxel reads and processes one image at a time, immediately writes collision-safe results whenever execution reaches a Save node, releases the per-image working cache, and then advances to the next file.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for runtime and model licensing.

## Current editor behavior

- The pre-wired demo pipeline runs once when Fluxel opens.
- The output panel is shown whenever the active graph contains a Preview node, including a waiting state before output exists.
- **Auto run** is a separate global execution option in the top toolbar. It is disabled by default; manual **Run** always remains available.
- Theme, accent, reduced-motion, and auto-run changes are session-only until **Save Preferences** is pressed in Appearance.
- Graph edits are session-only. **Save Startup File** explicitly chooses the complete project that opens on future launches; **Clear Startup File** restores the built-in demo on the next launch.
- Saving a startup file requires confirmation. **Restore Factory Settings** also requires confirmation and resets saved preferences, the startup file, and the current session without deleting custom templates or downloaded JSON files.
- Every graph tab has a visible delete control. Graph deletion requires confirmation, and Fluxel always keeps at least one graph.
- The vertical canvas toolbar explicitly overrides React Flow's `.top.center` horizontal transform so it remains fully visible inside the rounded canvas.
- Download/load JSON remains the portable project save workflow and is independent from the browser-local startup file.
- Open the searchable, categorized node menu with the canvas **Add node** button or `Shift + A`.
- Connecting to an occupied input replaces its previous connection.
- Dropping a cable on empty canvas opens a type-compatible node menu. The selected node is inserted at the drop point and connected automatically.
- Disconnect a cable by selecting it and pressing `Delete`/`Backspace`, using the canvas **Disconnect** action, or double-clicking the cable.
- The before/after preview preserves the source aspect ratio and letterboxes images instead of cropping square or portrait output.
- The comparison uses two full-size layers with endpoint-safe clipping, so 0% shows only the processed image and 100% shows only the original.
- Before and after preserve their independent aspect ratios. The clipped Before layer carries an opaque matte, preventing the processed layer underneath from leaking through unused letterbox space.
- Bypass or re-enable a selected processing node without rewiring the graph.
- Pin any image-producing node to the preview, then zoom with the wheel or controls and pan with `Shift`-drag.
- Automatically arrange a graph by its DAG execution order from the canvas toolbar or command palette.
- Replace a selected node type from the inspector while retaining all compatible connections.
- Copy and paste connected selections across graphs or browser tabs.
- Drop a compatible library node directly onto a cable to insert it into the connection.
- Drop an already-existing, unconnected node onto the widened cable target to insert it. Fluxel smoothly shifts the downstream branch to a wider 400px spacing target while respecting reduced-motion preferences.
- Open the command palette with `Ctrl/Cmd + K` to search common editor actions.
- Node cards display their latest execution time after a successful run.
- **Levels** performs real input/output tonal remapping with gamma correction.
- **Curves** provides a draggable, keyboard-accessible five-point RGB/channel curve editor.
- **Color Grade** adjusts exposure, gamma, temperature, and tint in one worker-backed node.
- **Blend Images** combines two image inputs using Normal, Multiply, Screen, Overlay, or Difference modes.
- **Apply Mask** converts a second image's luminance into a resampled, invertible, feathered alpha mask.
- Group selected nodes into a real movable frame, collapse/expand it, or ungroup it without changing connections.
- Open the graph template gallery to load built-in workflows or save reusable custom templates locally.
- **Batch Input** selects only the source folder, then executes the complete DAG sequentially for every supported image it contains.
- Batch runs require an active **Save / Export Image** node with a selected export directory. All output naming, format, quality, and location settings live in that Save node, and multiple Save nodes can write separate branch outputs.
- Each batch result is saved immediately with collision-safe naming. The batch panel reports saved files and can open the Save node's folder; it no longer retains every encoded image or builds a client-side ZIP.
- Nodes with an empty required parameter or missing required connection receive a red outline and warning badge before Run.
- The built-in Batch Resizer template provides an immediately usable batch workflow.
- Generate images without a file using **Solid Color**, **Gradient**, **Pattern**, **Shape**, and **Text** source nodes.
- **Gaussian Blur**, **Motion Blur**, and **Unsharp Mask** provide worker-backed advanced filtering with real pixel kernels.
- Toggle an RGB/luminance histogram over processed output, inspect average channel values, and sample exact output pixels with the preview eyedropper.
- Collapse a selected single-input image chain into a reusable **Macro** node; its embedded graph executes and caches like a normal node and can be expanded back onto the canvas.
- Existing image nodes perform real processing in a Web Worker and remain fully chainable.
- **AI Depth / Height Map** runs Depth Anything V2 locally and exposes simultaneous, independently useful grayscale Depth and Height outputs. It participates in normal graphs, caching, cancellation, and folder batch processing.
- **Paint Mask** passes the connected image through while producing a reusable grayscale mask from a dedicated brush editor.
- **AI Generate** is a source node: it needs no input and emits a freshly generated image, so it can head a graph like Load Image does. Fixed seeds are reproducible and increment across folder-batch runs.
- **AI Edit** consumes an image and returns the whole frame with the described change applied. It participates in normal graphs, caching, cancellation, and folder batch processing.
- Drop one or more image files from the desktop directly onto the canvas to create positioned, preloaded **Load Image** nodes.
- In the desktop app, **Save / Export Image** can choose an export directory and automatically writes PNG, JPEG, or WebP output whenever execution reaches the node. Batch runs use the source name to avoid overwriting earlier files.
- **Resize** defaults to percentage scaling. Pixel mode accepts either a target width or target height and derives the other dimension from the source aspect ratio.

## Shortcuts

| Action | Shortcut |
| --- | --- |
| Run pipeline | `Ctrl/Cmd + Enter` |
| Open add-node menu | `Shift + A` |
| Undo | `Ctrl/Cmd + Z` |
| Redo | `Ctrl/Cmd + Shift + Z` or `Ctrl/Cmd + Y` |
| Duplicate selection | `Ctrl/Cmd + D` |
| Copy selection | `Ctrl/Cmd + C` |
| Paste selection | `Ctrl/Cmd + V` |
| Bypass selected node | `B` |
| Open command palette | `Ctrl/Cmd + K` |
| Delete selection | `Delete` or `Backspace` |

## Tech

React, TypeScript, Vite, React Flow, Zustand, Framer Motion, CSS variables, Canvas API, Web Workers, and Electron. The UI ships pre-built (see "About this repo's source" above); the Electron shell and the Python AI runtime are the buildable part of this repo.
