import assert from "node:assert/strict";
import { resolveRealESRGANNativeScale, scaledDimensions } from "../electron/realesrgan-scale.js";

for (const model of ["general", "anime"]) {
  assert.equal(resolveRealESRGANNativeScale(model, 2), 4);
  assert.equal(resolveRealESRGANNativeScale(model, 3), 4);
  assert.equal(resolveRealESRGANNativeScale(model, 4), 4);
}

assert.equal(resolveRealESRGANNativeScale("animeFast", 2), 2);
assert.equal(resolveRealESRGANNativeScale("animeFast", 3), 3);
assert.equal(resolveRealESRGANNativeScale("animeFast", 4), 4);
assert.deepEqual(scaledDimensions({ width: 1920, height: 1080 }, 3), { width: 5760, height: 3240 });

console.log("Real-ESRGAN scale tests passed: x4-only models stay native 4× and compact models use dedicated requested-scale weights.");
