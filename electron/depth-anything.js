import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
let bundledORT;

export const DEPTH_INPUT_SIZE = 518;
export const DEPTH_QUALITY_SIZES = Object.freeze({ fast: 392, balanced: 518, fine: 686, ultra: 868 });
const IMAGENET_MEAN = [0.485, 0.456, 0.406];
const IMAGENET_STD = [0.229, 0.224, 0.225];
const sessions = new Map();

export function depthTensorFromBGRA(bitmap, width = DEPTH_INPUT_SIZE, height = DEPTH_INPUT_SIZE) {
  if (!Buffer.isBuffer(bitmap) || bitmap.length !== width * height * 4) {
    throw new Error("Depth Anything received an invalid image bitmap.");
  }
  const plane = width * height;
  const values = new Float32Array(plane * 3);
  for (let pixel = 0; pixel < plane; pixel += 1) {
    const offset = pixel * 4;
    values[pixel] = (bitmap[offset + 2] / 255 - IMAGENET_MEAN[0]) / IMAGENET_STD[0];
    values[plane + pixel] = (bitmap[offset + 1] / 255 - IMAGENET_MEAN[1]) / IMAGENET_STD[1];
    values[plane * 2 + pixel] = (bitmap[offset] / 255 - IMAGENET_MEAN[2]) / IMAGENET_STD[2];
  }
  return { data: values, dims: [1, 3, height, width] };
}

export function resolveDepthInputSize(inputSize, quality = "balanced") {
  const sourceWidth = Math.max(1, Number(inputSize?.width) || 1);
  const sourceHeight = Math.max(1, Number(inputSize?.height) || 1);
  const shortTarget = DEPTH_QUALITY_SIZES[quality] || DEPTH_QUALITY_SIZES.balanced;
  const scale = shortTarget / Math.min(sourceWidth, sourceHeight);
  let width = Math.max(14, Math.round((sourceWidth * scale) / 14) * 14);
  let height = Math.max(14, Math.round((sourceHeight * scale) / 14) * 14);
  const longest = Math.max(width, height);
  if (longest > 1960) {
    const capScale = 1960 / longest;
    width = Math.max(14, Math.round((width * capScale) / 14) * 14);
    height = Math.max(14, Math.round((height * capScale) / 14) * 14);
  }
  return { width, height, quality: DEPTH_QUALITY_SIZES[quality] ? quality : "balanced" };
}

function percentileBounds(values, lower = 0.01, upper = 0.99) {
  const finite = Array.from(values).filter(Number.isFinite).sort((a, b) => a - b);
  if (!finite.length) throw new Error("Depth Anything returned no usable depth values.");
  const low = finite[Math.floor((finite.length - 1) * lower)];
  const high = finite[Math.ceil((finite.length - 1) * upper)];
  return high > low ? [low, high] : [low, low + 1];
}

function boxBlur(values, width, height, radius) {
  if (radius <= 0) return values;
  const integralWidth = width + 1;
  const integral = new Float64Array(integralWidth * (height + 1));
  for (let y = 0; y < height; y += 1) {
    let row = 0;
    for (let x = 0; x < width; x += 1) {
      row += values[y * width + x];
      integral[(y + 1) * integralWidth + x + 1] = integral[y * integralWidth + x + 1] + row;
    }
  }
  const output = new Float32Array(values.length);
  for (let y = 0; y < height; y += 1) {
    const top = Math.max(0, y - radius), bottom = Math.min(height - 1, y + radius);
    for (let x = 0; x < width; x += 1) {
      const left = Math.max(0, x - radius), right = Math.min(width - 1, x + radius);
      const sum = integral[(bottom + 1) * integralWidth + right + 1]
        - integral[top * integralWidth + right + 1]
        - integral[(bottom + 1) * integralWidth + left]
        + integral[top * integralWidth + left];
      output[y * width + x] = sum / ((right - left + 1) * (bottom - top + 1));
    }
  }
  return output;
}

export function mapRelativeDepth(values, width, height, options = {}) {
  if (!values || values.length !== width * height) throw new Error("Depth Anything returned an unexpected tensor shape.");
  const [low, high] = percentileBounds(values);
  const range = high - low;
  const contrast = Math.max(0.25, Math.min(2.5, Number(options.contrast ?? 100) / 100));
  const gamma = Math.max(0.25, Math.min(4, Number(options.gamma ?? 1)));
  const invert = options.invert === true;
  let normalized = new Float32Array(values.length);
  for (let index = 0; index < values.length; index += 1) {
    let value = Math.max(0, Math.min(1, (values[index] - low) / range));
    value = Math.max(0, Math.min(1, (value - 0.5) * contrast + 0.5));
    value = Math.pow(value, gamma);
    normalized[index] = invert ? 1 - value : value;
  }
  normalized = boxBlur(normalized, width, height, Math.max(0, Math.min(12, Math.round(Number(options.smoothing ?? 0)))));
  const grayscale = new Uint8Array(normalized.length);
  for (let index = 0; index < grayscale.length; index += 1) grayscale[index] = Math.round(normalized[index] * 255);
  return grayscale;
}

function loadORT(modelPath) {
  if (bundledORT) return bundledORT;
  try { bundledORT = require("onnxruntime-node"); }
  catch {
    const portableModule = path.join(path.dirname(modelPath), "runtime", "node_modules", "onnxruntime-node");
    try { bundledORT = require(portableModule); }
    catch { throw new Error("The Depth Anything runtime is missing. Update or reinstall the AI Depth & Height Maps pack."); }
  }
  return bundledORT;
}

async function createSession(modelPath, hardware) {
  const key = `${modelPath}:${hardware}`;
  if (sessions.has(key)) return sessions.get(key);
  const ort = loadORT(modelPath);
  let session;
  let engine = "ONNX Runtime CPU";
  if (hardware !== "cpu" && process.platform === "win32") {
    try {
      session = await ort.InferenceSession.create(modelPath, { executionProviders: ["dml", "cpu"] });
      engine = "ONNX Runtime DirectML";
    } catch {
      session = null;
    }
  }
  if (!session) session = await ort.InferenceSession.create(modelPath, { executionProviders: ["cpu"] });
  const record = { session, engine, ort };
  sessions.set(key, record);
  return record;
}

export async function inferRelativeDepth(modelPath, tensor, hardware = "auto") {
  const { session, engine, ort } = await createSession(modelPath, hardware);
  const input = tensor instanceof ort.Tensor ? tensor : new ort.Tensor("float32", tensor.data, tensor.dims);
  const results = await session.run({ [session.inputNames[0]]: input });
  const output = results[session.outputNames[0]];
  if (!output?.data) throw new Error("Depth Anything returned no depth map.");
  const height = Number(output.dims?.at(-2));
  const width = Number(output.dims?.at(-1));
  if (!Number.isInteger(width) || !Number.isInteger(height)) throw new Error("Depth Anything returned an invalid output shape.");
  return { values: output.data, width, height, engine };
}

export async function clearDepthSessions() {
  await Promise.allSettled(Array.from(sessions.values(), ({ session }) => session.release?.()));
  sessions.clear();
}
