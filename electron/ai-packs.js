import { app, nativeImage, shell } from "electron";
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import { access, copyFile, mkdir, mkdtemp, readFile, rename, rm, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { resolveRealESRGANNativeScale, scaledDimensions } from "./realesrgan-scale.js";
import {
  clearDepthSessions,
  depthTensorFromBGRA,
  inferRelativeDepth,
  mapRelativeDepth,
  resolveDepthInputSize,
} from "./depth-anything.js";
import {
  cancelHiDreamJob,
  hiDreamJobsActive,
  hiDreamRuntimeOutdated,
  installHiDreamPack,
  runHiDreamJob,
  shutdownHiDreamWorker,
} from "./hidream.js";

const LEGACY_PACK_ID = "super-resolution-x3";
const REAL_ESRGAN_MODELS = Object.freeze({
  general: "realesrgan-x4plus",
  anime: "realesrgan-x4plus-anime",
  animeFast: "realesr-animevideov3",
});

const PACKS = Object.freeze([
  Object.freeze({
    id: "realesrgan-ncnn-vulkan",
    name: "Real-ESRGAN Upscaling",
    version: "0.2.5.0",
    description: "Real-ESRGAN detail restoration for photos and artwork, accelerated locally with Vulkan.",
    model: "Real-ESRGAN · NCNN/Vulkan",
    scale: 4,
    scaleLabel: "2–4×",
    sizeLabel: "45.5 MB download · ~50 MB installed",
    archiveName: "realesrgan-ncnn-vulkan-20220424-windows.zip",
    downloadUrl: "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-windows.zip",
    sha256: "abc02804e17982a3be33675e4d471e91ea374e65b70167abc09e31acb412802d",
    license: "BSD-3-Clause",
    licenseUrl: "https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE",
    platforms: ["win32"],
    nodes: ["aiUpscale"],
    requiredFiles: [
      "realesrgan-ncnn-vulkan.exe", "vcomp140.dll",
      "models/realesrgan-x4plus.bin", "models/realesrgan-x4plus.param",
      "models/realesrgan-x4plus-anime.bin", "models/realesrgan-x4plus-anime.param",
      "models/realesr-animevideov3-x2.bin", "models/realesr-animevideov3-x2.param",
      "models/realesr-animevideov3-x3.bin", "models/realesr-animevideov3-x3.param",
      "models/realesr-animevideov3-x4.bin", "models/realesr-animevideov3-x4.param",
    ],
  }),
  Object.freeze({
    id: "depth-anything-v2-small",
    name: "AI Depth & Height Maps",
    version: "2.2.0",
    description: "Depth Anything V2 scene understanding for detailed relative depth and artist-ready height maps.",
    model: "Depth Anything V2 Small · ONNX",
    scaleLabel: "392–868 px AI",
    sizeLabel: "~175 MB download · ~350 MB installed",
    license: "Apache-2.0",
    licenseUrl: "https://github.com/DepthAnything/Depth-Anything-V2/blob/main/LICENSE",
    platforms: ["win32", "darwin", "linux"],
    compatibilityLabel: "DirectML GPU · CPU fallback",
    nodes: ["aiDepthMap"],
    composite: true,
    requiredFiles: [
      "depth_anything_v2_vits_dynamic.onnx",
      "runtime/node_modules/onnxruntime-node/package.json",
      "runtime/node_modules/onnxruntime-common/package.json",
    ],
    replacesVersions: ["2.0.0", "2.1.0"],
    components: [
      Object.freeze({
        id: "model",
        archiveName: "depth_anything_v2_vits_dynamic.onnx",
        downloadUrl: "https://github.com/fabio-sim/Depth-Anything-ONNX/releases/download/v2.0.0/depth_anything_v2_vits_dynamic.onnx",
        sha256: "46c4e8eeda3a27f34701831b6a2ec7753d7b38779b215acb5633424703deed8f",
        size: 94500000,
        installType: "file",
        destination: "depth_anything_v2_vits_dynamic.onnx",
      }),
      Object.freeze({
        id: "onnxruntime-node",
        archiveName: "onnxruntime-node-1.22.0.tgz",
        downloadUrl: "https://registry.npmjs.org/onnxruntime-node/-/onnxruntime-node-1.22.0.tgz",
        sha512: "QaAqr7PFekrmEsmu1rpw7OxJYyG+iACjNHoNtQIVt9Oh7st8WDPIIUe6KhF9l35HVJTJd9CV1rePoPmKhSV26g==",
        size: 80000000,
        installType: "tgz",
        destination: "runtime/node_modules/onnxruntime-node",
      }),
      Object.freeze({
        id: "onnxruntime-common",
        archiveName: "onnxruntime-common-1.22.0.tgz",
        downloadUrl: "https://registry.npmjs.org/onnxruntime-common/-/onnxruntime-common-1.22.0.tgz",
        sha512: "vcuaNWgtF2dGQu/EP5P8UI5rEPEYqXG2sPPe5j9lg2TY/biJF8eWklTMwlDO08iuXq48xJo0awqIpK5mPG+IxA==",
        size: 50000,
        installType: "tgz",
        destination: "runtime/node_modules/onnxruntime-common",
      }),
    ],
  }),
  Object.freeze({
    id: "hidream-o1-image",
    name: "AI Image Generation & Editing",
    version: "1.0.0",
    description:
      "HiDream-O1-Image runs locally for both prompt-to-image generation and instruction-driven editing — describe the change in plain language, no mask required.",
    model: "HiDream-O1-Image Dev · FP8",
    scaleLabel: "512–2048 px local generation",
    sizeLabel: "~13 GB download · ~15 GB installed",
    license: "MIT",
    licenseUrl: "https://github.com/HiDream-ai/HiDream-O1-Image/blob/main/LICENSE",
    platforms: ["win32"],
    // The upstream project requires CUDA; there is no Vulkan/DirectML path for
    // this architecture today, unlike the Real-ESRGAN and Depth Anything packs.
    compatibilityLabel: "NVIDIA CUDA GPU · 10 GB VRAM",
    requiresNvidia: true,
    nodes: ["aiGenerate", "aiEdit"],
    installer: "hidream",
    requiredFiles: [
      "runtime/python/python.exe",
      "runtime/deps.json",
      "runtime/worker.py",
      "models/snapshot.json",
    ],
  }),
]);

const activeDownloads = new Map();
const activeUpscales = new Map();
const activeDepthJobs = new Map();

function modelRoot() {
  const local = process.env.LOCALAPPDATA;
  return local ? path.join(local, "Fluxel", "AI") : path.join(app.getPath("userData"), "AI");
}
function packDefinition(packId) {
  const pack = PACKS.find((candidate) => candidate.id === packId);
  if (!pack) throw new Error("Unknown AI feature pack.");
  return pack;
}
function packRoot(pack) { return path.join(modelRoot(), pack.id); }
function packDirectory(pack) { return path.join(packRoot(pack), pack.version); }
function partialArchive(pack) { return path.join(packRoot(pack), `${pack.archiveName}.partial`); }
function completeArchive(pack) { return path.join(packRoot(pack), pack.archiveName); }
function componentPartial(pack, component) { return path.join(packRoot(pack), `${component.archiveName}.partial`); }
function componentComplete(pack, component) { return path.join(packRoot(pack), component.archiveName); }
async function exists(filePath) {
  try { await access(filePath); return true; } catch { return false; }
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
async function sha512FileBase64(filePath) {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha512"), stream = createReadStream(filePath);
    stream.on("data", (chunk) => hash.update(chunk)); stream.on("error", reject);
    stream.on("end", () => resolve(hash.digest("base64")));
  });
}
async function componentVerified(filePath, component) {
  return component.sha512 ? await sha512FileBase64(filePath) === component.sha512 : await sha256File(filePath) === component.sha256;
}
async function packInstalled(pack) {
  const directory = packDirectory(pack);
  const checks = await Promise.all(pack.requiredFiles.map((file) => exists(path.join(directory, file))));
  return checks.every(Boolean);
}
/**
 * A pack whose files are all present but whose runtime was built for an older
 * Fluxel release. Reported as an update so the work happens in AI Models with
 * the user's consent, never as a surprise mid-generation.
 */
async function packRuntimeOutdated(pack) {
  if (pack.installer !== "hidream") return false;
  return hiDreamRuntimeOutdated(packDirectory(pack));
}
async function removeLegacyPack() {
  await rm(path.join(modelRoot(), LEGACY_PACK_ID), { recursive: true, force: true });
}
function quotePowerShell(value) { return `'${String(value).replaceAll("'", "''")}'`; }
async function extractWindowsArchive(archivePath, destination) {
  if (process.platform !== "win32") throw new Error("This AI runtime archive currently supports Windows only.");
  const command = `Expand-Archive -LiteralPath ${quotePowerShell(archivePath)} -DestinationPath ${quotePowerShell(destination)} -Force`;
  await new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoLogo", "-NoProfile", "-NonInteractive", "-Command", command], {
      windowsHide: true, stdio: ["ignore", "ignore", "pipe"],
    });
    let errorText = "";
    child.stderr.on("data", (chunk) => { errorText = `${errorText}${chunk}`.slice(-8192); });
    child.on("error", reject);
    child.on("close", (code) => code === 0 ? resolve() : reject(new Error(errorText.trim() || "Could not unpack the AI runtime.")));
  });
}
async function extractTarPackage(archivePath, destination) {
  const extraction = `${destination}.extracting`;
  await rm(extraction, { recursive: true, force: true });
  await mkdir(extraction, { recursive: true });
  await new Promise((resolve, reject) => {
    const child = spawn(process.platform === "win32" ? "tar.exe" : "tar", ["-xf", archivePath, "-C", extraction], {
      windowsHide: true, stdio: ["ignore", "ignore", "pipe"],
    });
    let errorText = "";
    child.stderr.on("data", (chunk) => { errorText = `${errorText}${chunk}`.slice(-8192); });
    child.on("error", reject);
    child.on("close", (code) => code === 0 ? resolve() : reject(new Error(errorText.trim() || "Could not unpack the native AI dependency.")));
  });
  const packageDirectory = path.join(extraction, "package");
  if (!(await exists(path.join(packageDirectory, "package.json")))) throw new Error("The native AI dependency package is incomplete.");
  await mkdir(path.dirname(destination), { recursive: true });
  await rm(destination, { recursive: true, force: true });
  await rename(packageDirectory, destination);
  await rm(extraction, { recursive: true, force: true });
}
async function finalizePackInstall(pack, archivePath) {
  const destination = packDirectory(pack);
  const staging = `${destination}.installing`;
  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  try {
    if (pack.installType === "file") await copyFile(archivePath, path.join(staging, pack.requiredFiles[0]));
    else await extractWindowsArchive(archivePath, staging);
    const valid = await Promise.all(pack.requiredFiles.map((file) => exists(path.join(staging, file))));
    if (!valid.every(Boolean)) throw new Error(`The ${pack.name} package is incomplete.`);
    if (pack.installType !== "file") {
      await Promise.all([
        rm(path.join(staging, "input.jpg"), { force: true }),
        rm(path.join(staging, "input2.jpg"), { force: true }),
        rm(path.join(staging, "onepiece_demo.mp4"), { force: true }),
        rm(path.join(staging, "vcomp140d.dll"), { force: true }),
      ]);
    }
    await rm(destination, { recursive: true, force: true });
    await rename(staging, destination);
    await Promise.all((pack.replacesVersions || []).map((version) => rm(path.join(packRoot(pack), version), { recursive: true, force: true })));
  } catch (error) {
    await rm(staging, { recursive: true, force: true });
    throw error;
  }
}

async function downloadPackComponent(pack, component, controller, onProgress, completedBytes, totalBytes) {
  const partialPath = componentPartial(pack, component), archivePath = componentComplete(pack, component);
  if (await exists(archivePath)) {
    if (await componentVerified(archivePath, component)) return archivePath;
    await unlink(archivePath).catch(() => {});
  }
  let downloaded = 0;
  try { downloaded = (await stat(partialPath)).size; } catch { downloaded = 0; }
  if (downloaded > 0 && await componentVerified(partialPath, component)) {
    await rename(partialPath, archivePath);
    return archivePath;
  }
  const headers = downloaded > 0 ? { Range: `bytes=${downloaded}-` } : {};
  const response = await fetch(component.downloadUrl, { headers, redirect: "follow", signal: controller.signal });
  if (!response.ok || !response.body) throw new Error(`${component.label || component.id} download failed (${response.status}).`);
  const resumed = downloaded > 0 && response.status === 206;
  if (!resumed && downloaded > 0) { await unlink(partialPath).catch(() => {}); downloaded = 0; }
  const remainingBytes = Number(response.headers.get("content-length") || 0);
  const componentTotal = remainingBytes > 0 ? downloaded + remainingBytes : component.size;
  const report = () => onProgress({
    packId: pack.id,
    downloaded: completedBytes + downloaded,
    total: totalBytes,
    progress: totalBytes ? Math.min(0.995, (completedBytes + downloaded) / totalBytes) : 0,
    phase: "download",
    component: component.id,
    componentLabel: component.label || component.id,
    componentDownloaded: downloaded,
    componentTotal,
    componentProgress: componentTotal ? Math.min(1, downloaded / componentTotal) : 0,
  });
  report();
  await new Promise((resolve, reject) => {
    const output = createWriteStream(partialPath, { flags: resumed ? "a" : "w" });
    const input = Readable.fromWeb(response.body);
    input.on("data", (chunk) => { downloaded += chunk.length; report(); });
    input.on("error", reject); output.on("error", reject); output.on("finish", resolve); input.pipe(output);
  });
  if (!(await componentVerified(partialPath, component))) {
    const actualHash = component.sha512 ? await sha512FileBase64(partialPath) : await sha256File(partialPath);
    await unlink(partialPath).catch(() => {});
    throw new Error(`The downloaded ${component.label || component.id} failed its security check (expected ${String(component.sha512 || component.sha256).slice(0, 12)}…, received ${actualHash.slice(0, 12)}…). The invalid file was removed; retry the install.`);
  }
  await rename(partialPath, archivePath);
  return archivePath;
}

async function installCompositePack(pack, controller, onProgress) {
  const destination = packDirectory(pack), staging = `${destination}.installing`;
  const totalBytes = pack.components.reduce((sum, component) => sum + component.size, 0);
  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  let completedBytes = 0;
  try {
    for (const component of pack.components) {
      const archivePath = await downloadPackComponent(pack, component, controller, onProgress, completedBytes, totalBytes);
      onProgress({
        packId: pack.id,
        downloaded: completedBytes + component.size,
        total: totalBytes,
        progress: (completedBytes + component.size) / totalBytes,
        phase: "install",
        component: component.id,
        componentLabel: component.label || component.id,
        componentProgress: 1,
      });
      if (component.installType === "file") {
        const target = path.join(staging, component.destination);
        await mkdir(path.dirname(target), { recursive: true });
        await copyFile(archivePath, target);
      } else if (component.installType === "tgz") {
        await extractTarPackage(archivePath, path.join(staging, component.destination));
      } else {
        const target = path.join(staging, component.destination);
        await mkdir(target, { recursive: true });
        await extractWindowsArchive(archivePath, target);
      }
      completedBytes += component.size;
    }
    const valid = await Promise.all(pack.requiredFiles.map((file) => exists(path.join(staging, file))));
    if (!valid.every(Boolean)) throw new Error(`The ${pack.name} package is incomplete.`);
    await rm(destination, { recursive: true, force: true });
    await rename(staging, destination);
    await Promise.all(pack.components.map((component) => unlink(componentComplete(pack, component)).catch(() => {})));
    onProgress({ packId: pack.id, downloaded: totalBytes, total: totalBytes, progress: 1, phase: "ready" });
    return { installed: true, resumed: false };
  } catch (error) {
    await rm(staging, { recursive: true, force: true });
    throw error;
  }
}

export async function listAIPacks() {
  await removeLegacyPack();
  return Promise.all(PACKS.map(async (pack) => {
    const installed = await packInstalled(pack);
    const compatible = pack.platforms.includes(process.platform);
    const runtimeOutdated = installed && (await packRuntimeOutdated(pack));
    const outdated =
      runtimeOutdated ||
      (!installed &&
        (await Promise.all((pack.replacesVersions || []).map((version) => exists(path.join(packRoot(pack), version))))).some(
          Boolean
        ));
    const downloadFiles = pack.installer
      ? []
      : pack.composite
        ? pack.components.flatMap((component) => [componentPartial(pack, component), componentComplete(pack, component)])
        : [partialArchive(pack), completeArchive(pack)];
    const partial = !installed && (await Promise.all([...downloadFiles.map((file) => exists(file)), exists(packDirectory(pack))])).some(Boolean);
    const hasPackData = installed || outdated || partial;
    return {
      id: pack.id, name: pack.name, version: pack.version, description: pack.description,
      model: pack.model, scale: pack.scale, scaleLabel: pack.scaleLabel, sizeLabel: pack.sizeLabel,
      license: pack.license, licenseUrl: pack.licenseUrl, nodes: [...pack.nodes], installed, compatible,
      requiresNvidia: pack.requiresNvidia === true,
      compatibilityLabel: compatible ? (pack.compatibilityLabel || "Vulkan GPU") : "Unavailable on this platform",
      partial, outdated,
      removable: installed || hasPackData,
      downloading: activeDownloads.has(pack.id),
    };
  }));
}

export async function installAIPack(packId, onProgress = () => {}) {
  const pack = packDefinition(packId);
  if (!pack.platforms.includes(process.platform)) throw new Error(`${pack.name} is not available on this platform.`);
  await removeLegacyPack();
  if ((await packInstalled(pack)) && !(await packRuntimeOutdated(pack))) return { installed: true, resumed: false };
  if (activeDownloads.has(pack.id)) throw new Error("This pack is already downloading.");
  const controller = new AbortController();
  activeDownloads.set(pack.id, controller);
  await mkdir(packRoot(pack), { recursive: true });
  try {
    if (pack.installer === "hidream") {
      return await installHiDreamPack(packDirectory(pack), controller, (update) =>
        onProgress({ packId: pack.id, ...update })
      );
    }
    if (pack.composite) return await installCompositePack(pack, controller, onProgress);
    const partialPath = partialArchive(pack);
    const archivePath = completeArchive(pack);
    if (await exists(archivePath)) {
      if (await sha256File(archivePath) === pack.sha256) {
        const archiveSize = (await stat(archivePath)).size;
        onProgress({ packId: pack.id, downloaded: archiveSize, total: archiveSize, progress: 1, phase: "install" });
        await finalizePackInstall(pack, archivePath);
        await unlink(archivePath).catch(() => {});
        onProgress({ packId: pack.id, downloaded: archiveSize, total: archiveSize, progress: 1, phase: "ready" });
        return { installed: true, resumed: true };
      }
      await unlink(archivePath).catch(() => {});
    }
    let downloaded = 0;
    try { downloaded = (await stat(partialPath)).size; } catch { downloaded = 0; }
    if (downloaded > 0 && await sha256File(partialPath) === pack.sha256) {
      await rename(partialPath, archivePath);
      onProgress({ packId: pack.id, downloaded, total: downloaded, progress: 1, phase: "install" });
      await finalizePackInstall(pack, archivePath);
      await unlink(archivePath).catch(() => {});
      onProgress({ packId: pack.id, downloaded, total: downloaded, progress: 1, phase: "ready" });
      return { installed: true, resumed: true };
    }
    const headers = downloaded > 0 ? { Range: `bytes=${downloaded}-` } : {};
    const response = await fetch(pack.downloadUrl, { headers, redirect: "follow", signal: controller.signal });
    if (!response.ok || !response.body) throw new Error(`Runtime download failed (${response.status}).`);
    const resumed = downloaded > 0 && response.status === 206;
    if (!resumed && downloaded > 0) { await unlink(partialPath).catch(() => {}); downloaded = 0; }
    const remaining = Number(response.headers.get("content-length") || 0);
    const total = resumed ? downloaded + remaining : remaining;
    onProgress({ packId: pack.id, downloaded, total, progress: total ? downloaded / total : 0, phase: "download" });
    await new Promise((resolve, reject) => {
      const output = createWriteStream(partialPath, { flags: resumed ? "a" : "w" });
      const input = Readable.fromWeb(response.body);
      input.on("data", (chunk) => {
        downloaded += chunk.length;
        onProgress({ packId: pack.id, downloaded, total, progress: total ? downloaded / total : 0, phase: "download" });
      });
      input.on("error", reject); output.on("error", reject); output.on("finish", resolve); input.pipe(output);
    });
    if (await sha256File(partialPath) !== pack.sha256) {
      await unlink(partialPath).catch(() => {});
      throw new Error(`The downloaded ${pack.name} package failed its security check.`);
    }
    await rename(partialPath, archivePath);
    onProgress({ packId: pack.id, downloaded, total: downloaded, progress: 1, phase: "install" });
    await finalizePackInstall(pack, archivePath);
    await unlink(archivePath).catch(() => {});
    onProgress({ packId: pack.id, downloaded, total: downloaded, progress: 1, phase: "ready" });
    return { installed: true, resumed };
  } catch (error) {
    if (error?.name === "AbortError") throw new Error("Download paused. You can resume it later.");
    throw error;
  } finally { activeDownloads.delete(pack.id); }
}

export function cancelAIPackInstall(packId) {
  const controller = activeDownloads.get(packId);
  if (!controller) return false;
  controller.abort(); return true;
}
export async function removeAIPack(packId) {
  const pack = packDefinition(packId);
  if (pack.id === "depth-anything-v2-small" && activeDepthJobs.size) {
    throw new Error("Wait for the current depth job to finish before removing this model.");
  }
  if (pack.id === HIDREAM_PACK_ID && hiDreamJobsActive()) {
    throw new Error("Wait for the current AI generation to finish before removing this model.");
  }
  cancelAIPackInstall(pack.id);
  if (pack.id === "depth-anything-v2-small") await clearDepthSessions();
  // The warm Python worker keeps the checkpoint mapped; it must exit before
  // Windows will let us delete the files underneath it.
  if (pack.id === HIDREAM_PACK_ID) {
    shutdownHiDreamWorker();
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
  await rm(packRoot(pack), { recursive: true, force: true });
  return { removed: true };
}

function validateDepthRequest(request) {
  const jobId = String(request?.jobId || "");
  if (!/^[a-zA-Z0-9-]{8,80}$/.test(jobId)) throw new Error("Invalid AI job identifier.");
  const match = /^data:image\/png;base64,([A-Za-z0-9+/=]+)$/.exec(String(request?.dataUrl || ""));
  if (!match) throw new Error("Depth Anything requires a PNG image.");
  const input = Buffer.from(match[1], "base64");
  if (!input.length || input.length > 100 * 1024 * 1024) throw new Error("The AI input is empty or too large.");
  const inputImage = nativeImage.createFromBuffer(input);
  if (inputImage.isEmpty()) throw new Error("Depth Anything could not decode the input image.");
  const inputSize = inputImage.getSize();
  if (inputSize.width * inputSize.height > 50_000_000) throw new Error("Depth generation is limited to 50 megapixels. Resize the input smaller first.");
  return { jobId, inputImage, inputSize };
}

function grayscalePNG(grayscale, width, height, outputSize) {
  const bitmap = Buffer.alloc(grayscale.length * 4);
  for (let index = 0; index < grayscale.length; index += 1) {
    const offset = index * 4, value = grayscale[index];
    bitmap[offset] = value; bitmap[offset + 1] = value; bitmap[offset + 2] = value; bitmap[offset + 3] = 255;
  }
  const image = nativeImage.createFromBitmap(bitmap, { width, height, scaleFactor: 1 });
  if (image.isEmpty()) throw new Error("Could not render the generated depth map.");
  return image.resize({ width: outputSize.width, height: outputSize.height, quality: "best" }).toPNG();
}

export async function runAIDepth(request, onProgress = () => {}) {
  const pack = packDefinition("depth-anything-v2-small");
  if (!(await packInstalled(pack))) throw new Error("Install the AI Depth & Height Maps pack first.");
  const { jobId, inputImage, inputSize } = validateDepthRequest(request);
  if (activeDepthJobs.has(jobId)) throw new Error("This AI job is already running.");
  const job = { cancelled: false };
  activeDepthJobs.set(jobId, job);
  try {
    onProgress({ jobId, progress: 0.05, phase: "prepare" });
    const inputShape = resolveDepthInputSize(inputSize, String(request?.quality || "balanced"));
    const resized = inputImage.resize({ width: inputShape.width, height: inputShape.height, quality: "best" });
    const tensor = depthTensorFromBGRA(resized.toBitmap(), inputShape.width, inputShape.height);
    if (job.cancelled) throw new Error("Depth generation was cancelled.");
    onProgress({ jobId, progress: 0.2, phase: "inference" });
    const modelPath = path.join(packDirectory(pack), pack.requiredFiles[0]);
    const inference = await inferRelativeDepth(modelPath, tensor, request?.hardware === "cpu" ? "cpu" : "auto");
    if (job.cancelled) throw new Error("Depth generation was cancelled.");
    onProgress({ jobId, progress: 0.84, phase: "mapping" });
    const depth = mapRelativeDepth(inference.values, inference.width, inference.height, {
      invert: request?.depthPolarity === "farWhite",
    });
    const height = mapRelativeDepth(inference.values, inference.width, inference.height, {
      invert: request?.heightPolarity === "farHigh",
      contrast: request?.heightContrast,
      gamma: request?.heightGamma,
      smoothing: request?.heightSmoothing,
    });
    const depthPNG = grayscalePNG(depth, inference.width, inference.height, inputSize);
    const heightPNG = grayscalePNG(height, inference.width, inference.height, inputSize);
    onProgress({ jobId, progress: 1, phase: "ready" });
    return {
      depthDataUrl: `data:image/png;base64,${depthPNG.toString("base64")}`,
      heightDataUrl: `data:image/png;base64,${heightPNG.toString("base64")}`,
      engine: inference.engine,
      model: "Depth Anything V2 Small",
      inferenceSize: inputShape,
    };
  } finally {
    activeDepthJobs.delete(jobId);
  }
}

export function cancelAIDepth(jobId) {
  const job = activeDepthJobs.get(String(jobId));
  if (!job) return false;
  job.cancelled = true;
  return true;
}

function validateUpscaleRequest(request) {
  const jobId = String(request?.jobId || "");
  const scale = Number(request?.scale);
  const tileSize = Number(request?.tileSize ?? 0);
  const modelKey = String(request?.model || "");
  const model = REAL_ESRGAN_MODELS[modelKey];
  if (!/^[a-zA-Z0-9-]{8,80}$/.test(jobId)) throw new Error("Invalid AI job identifier.");
  if (![2, 3, 4].includes(scale)) throw new Error("Real-ESRGAN supports 2×, 3×, or 4× output.");
  if (![0, 64, 128, 256, 512].includes(tileSize)) throw new Error("Invalid Real-ESRGAN tile size.");
  if (!model) throw new Error("Unknown Real-ESRGAN model.");
  const match = /^data:image\/png;base64,([A-Za-z0-9+/=]+)$/.exec(String(request?.dataUrl || ""));
  if (!match) throw new Error("Real-ESRGAN requires a PNG image.");
  const input = Buffer.from(match[1], "base64");
  if (!input.length || input.length > 100 * 1024 * 1024) throw new Error("The AI input is empty or too large.");
  const inputImage = nativeImage.createFromBuffer(input);
  if (inputImage.isEmpty()) throw new Error("Real-ESRGAN could not decode the input image.");
  const inputSize = inputImage.getSize();
  return { jobId, scale, tileSize, modelKey, model, input, inputSize };
}

export async function runAIUpscale(request, onProgress = () => {}) {
  if (process.platform !== "win32") throw new Error("Real-ESRGAN GPU processing is currently available on Windows only.");
  const pack = packDefinition("realesrgan-ncnn-vulkan");
  if (!(await packInstalled(pack))) throw new Error("Install the Real-ESRGAN Upscaling pack first.");
  const { jobId, scale, tileSize, modelKey, model, input, inputSize } = validateUpscaleRequest(request);
  // x4plus and x4plus-anime are native 4x networks. Passing -s 2 or -s 3 to
  // those models corrupts NCNN's tile placement. The compact anime model has
  // separate x2/x3/x4 weights and can safely run at the requested scale.
  const nativeScale = resolveRealESRGANNativeScale(modelKey, scale);
  if (activeUpscales.has(jobId)) throw new Error("This AI job is already running.");
  const workDirectory = await mkdtemp(path.join(app.getPath("temp"), "fluxel-realesrgan-"));
  const inputPath = path.join(workDirectory, "input.png");
  const outputPath = path.join(workDirectory, "output.png");
  const directory = packDirectory(pack);
  const executable = path.join(directory, "realesrgan-ncnn-vulkan.exe");
  await writeFile(inputPath, input);
  onProgress({ jobId, progress: 0.02, phase: "starting" });
  try {
    await new Promise((resolve, reject) => {
      const args = ["-i", inputPath, "-o", outputPath, "-n", model, "-s", String(nativeScale), "-t", String(tileSize), "-f", "png"];
      const child = spawn(executable, args, { cwd: directory, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
      const job = { child, cancelled: false };
      activeUpscales.set(jobId, job);
      let diagnostics = "";
      const consume = (chunk) => {
        const text = String(chunk);
        diagnostics = `${diagnostics}${text}`.slice(-16384);
        const matches = [...text.matchAll(/(\d+(?:\.\d+)?)%/g)];
        const value = Number(matches.at(-1)?.[1]);
        if (Number.isFinite(value)) onProgress({ jobId, progress: Math.max(0.03, Math.min(0.98, value / 100)), phase: "upscale" });
      };
      child.stdout.on("data", consume); child.stderr.on("data", consume); child.on("error", reject);
      child.on("close", (code) => {
        activeUpscales.delete(jobId);
        if (job.cancelled) reject(new Error("Real-ESRGAN processing was cancelled."));
        else if (code === 0) resolve();
        else reject(new Error(diagnostics.trim() || `Real-ESRGAN stopped with code ${code}. Check that the graphics driver supports Vulkan.`));
      });
    });
    let output = await readFile(outputPath);
    if (!output.length) throw new Error("Real-ESRGAN did not produce an output image.");
    if (nativeScale !== scale) {
      onProgress({ jobId, progress: 0.99, phase: "resize" });
      const nativeOutput = nativeImage.createFromBuffer(output);
      if (nativeOutput.isEmpty()) throw new Error("Real-ESRGAN produced an unreadable output image.");
      const target = scaledDimensions(inputSize, scale);
      output = nativeOutput.resize({
        width: target.width,
        height: target.height,
        quality: "best",
      }).toPNG();
    }
    onProgress({ jobId, progress: 1, phase: "ready" });
    return { dataUrl: `data:image/png;base64,${output.toString("base64")}`, engine: "Real-ESRGAN NCNN/Vulkan", model, scale, nativeScale };
  } finally {
    activeUpscales.delete(jobId);
    await rm(workDirectory, { recursive: true, force: true });
  }
}

export function cancelAIUpscale(jobId) {
  const job = activeUpscales.get(String(jobId));
  if (!job) return false;
  job.cancelled = true; job.child.kill(); return true;
}

function validatedPNGDataUrl(value, label) {
  const match = /^data:image\/png;base64,([A-Za-z0-9+/=]+)$/.exec(String(value || ""));
  if (!match) throw new Error(`${label} must be a PNG image.`);
  const bytes = Buffer.from(match[1], "base64");
  if (!bytes.length || bytes.length > 100 * 1024 * 1024) throw new Error(`${label} is empty or too large.`);
  const image = nativeImage.createFromBuffer(bytes);
  if (image.isEmpty()) throw new Error(`${label} could not be decoded.`);
  return { bytes, size: image.getSize() };
}

const HIDREAM_PACK_ID = "hidream-o1-image";
// The model renders from a fixed ~1.3-3.1 MP resolution table; these bounds
// only guard against nonsense reaching the pipeline.
/**
 * The text backbone is Qwen3-VL with a 262,144-token context, and a 2048px
 * image only consumes a few thousand of those, so prompt length is effectively
 * unconstrained by the model. This guard exists solely to reject pathological
 * input (a pasted file, a runaway loop) before it reaches the worker - it is
 * not a capability limit. The previous 2,000-character cap was inherited from
 * the Stable Diffusion 1.5 node, where CLIP truncated at 77 tokens.
 */
const MAX_PROMPT_CHARACTERS = 50_000;

const GENERATION_LIMITS = Object.freeze({ min: 512, max: 3104, multiple: 32 });

function normalizedDimension(value, fallback) {
  const raw = Math.round(Number(value) || fallback);
  const snapped = Math.round(raw / GENERATION_LIMITS.multiple) * GENERATION_LIMITS.multiple;
  return Math.max(GENERATION_LIMITS.min, Math.min(GENERATION_LIMITS.max, snapped));
}

function sharedGenerationRequest(request, label) {
  const jobId = String(request?.jobId || "");
  const prompt = String(request?.prompt || "").trim();
  if (!/^[a-zA-Z0-9-]{8,80}$/.test(jobId)) throw new Error("Invalid AI job identifier.");
  if (!prompt) throw new Error(`${label} requires a prompt.`);
  if (prompt.length > MAX_PROMPT_CHARACTERS) {
    throw new Error(
      `The prompt is longer than ${MAX_PROMPT_CHARACTERS.toLocaleString()} characters. Shorten it and try again.`
    );
  }
  return {
    jobId,
    prompt,
    negativePrompt: String(request?.negativePrompt || ""),
    steps: Math.max(8, Math.min(60, Math.round(Number(request?.steps) || 28))),
    shift: Math.max(0.1, Math.min(6, Number(request?.shift) || 1)),
    // 0 is meaningful here: the distilled checkpoint runs with CFG off.
    guidance: Math.max(0, Math.min(15, Number(request?.guidance ?? 0))),
    seed: Number.isInteger(Number(request?.seed)) ? Number(request.seed) : -1,
    hardware: request?.hardware === "cpu" ? "cpu" : "auto",
  };
}

async function readyHiDreamPack(label) {
  if (process.platform !== "win32") throw new Error(`${label} is currently available on Windows only.`);
  const pack = packDefinition(HIDREAM_PACK_ID);
  if (!(await packInstalled(pack))) throw new Error(`Install the ${pack.name} pack first.`);
  return packDirectory(pack);
}

export async function runAIGenerate(request, onProgress = () => {}) {
  const directory = await readyHiDreamPack("AI Generate");
  const base = sharedGenerationRequest(request, "AI Generate");
  return runHiDreamJob(
    directory,
    {
      ...base,
      width: normalizedDimension(request?.width, 1024),
      height: normalizedDimension(request?.height, 1024),
    },
    onProgress
  );
}

export async function runAIEdit(request, onProgress = () => {}) {
  const directory = await readyHiDreamPack("AI Edit");
  const base = sharedGenerationRequest(request, "AI Edit");
  const input = validatedPNGDataUrl(request?.dataUrl, "AI Edit input");
  if (input.size.width * input.size.height > 16_000_000) {
    throw new Error("AI Edit is limited to 16 megapixels. Resize the input smaller first.");
  }
  return runHiDreamJob(
    directory,
    {
      ...base,
      referenceBytes: input.bytes,
      keepAspect: true,
      width: normalizedDimension(input.size.width, 1024),
      height: normalizedDimension(input.size.height, 1024),
    },
    onProgress
  );
}

export function cancelAIGeneration(jobId) {
  return cancelHiDreamJob(jobId);
}
export async function openAIModelFolder() {
  await mkdir(modelRoot(), { recursive: true });
  return shell.openPath(modelRoot());
}
