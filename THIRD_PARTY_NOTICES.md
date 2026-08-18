# Third-party notices

## Bundled in the application

The following libraries are compiled directly into `main.js` and ship inside every Fluxel build.

### React

Copyright Meta Platforms, Inc. and affiliates.

Licensed under the MIT License. Source and license: https://github.com/facebook/react

### React Flow

Copyright webkid GmbH

Licensed under the MIT License. Source and license: https://github.com/xyflow/xyflow

### Zustand

Copyright Paul Henschel

Licensed under the MIT License. Source and license: https://github.com/pmndrs/zustand

### Framer Motion

Copyright Framer B.V.

Licensed under the MIT License. Source and license: https://github.com/motiondivision/motion

## Optional runtime downloads

Fluxel can optionally download and run the official portable Real-ESRGAN NCNN/Vulkan package. The package is not bundled into the Fluxel application archive.

## Real-ESRGAN

Copyright 2021 Xintao Wang

Licensed under the BSD 3-Clause License. Source and license: https://github.com/xinntao/Real-ESRGAN

## ncnn

Copyright 2017 Tencent

Licensed under the BSD 3-Clause License. Source and license: https://github.com/Tencent/ncnn

The optional runtime package also includes its own model parameter and weight files. Fluxel verifies the complete official archive against a pinned SHA-256 digest before installation.

## ONNX Runtime

Copyright Microsoft Corporation

Licensed under the MIT License. Source and license: https://github.com/microsoft/onnxruntime

The ONNX Runtime Node.js binding is included as the inference engine. The Depth Anything model itself is not bundled.

## Depth Anything V2 Small

Copyright 2024 Depth Anything V2 contributors

The Small model and source are licensed under the Apache License 2.0: https://github.com/DepthAnything/Depth-Anything-V2

Fluxel optionally downloads an ONNX export from https://github.com/fabio-sim/Depth-Anything-ONNX (Apache-2.0) and verifies the exact model file against a pinned SHA-256 digest before installation.

## HiDream-O1-Image

Copyright HiDream-ai

Model code licensed under the MIT License. Source and license: https://github.com/HiDream-ai/HiDream-O1-Image

Fluxel downloads the model code and an FP8 checkpoint on first use of AI Generate / AI Edit and verifies both against pinned SHA-256 digests. Neither is bundled with Fluxel.

## PyTorch

Copyright PyTorch Contributors

Licensed under the BSD 3-Clause License. Source and license: https://github.com/pytorch/pytorch

## python-build-standalone

Redistributes CPython under the Python Software Foundation License. Source and license: https://github.com/astral-sh/python-build-standalone

## transformers, diffusers, accelerate

Copyright The HuggingFace Team

Licensed under the Apache License 2.0. Source: https://github.com/huggingface/transformers, https://github.com/huggingface/diffusers, https://github.com/huggingface/accelerate

## FlashAttention

Copyright the Dao-AILab FlashAttention contributors

Licensed under the BSD 3-Clause License. Source and license: https://github.com/Dao-AILab/flash-attention

Fluxel downloads a prebuilt Windows wheel matched to the provisioned PyTorch/CUDA/Python build. If no matching wheel installs cleanly, AI Generate and AI Edit fall back to a built-in masked-attention path with no loss of functionality.
