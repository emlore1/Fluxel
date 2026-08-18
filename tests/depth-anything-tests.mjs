import assert from "node:assert/strict";
import { DEPTH_INPUT_SIZE, depthTensorFromBGRA, mapRelativeDepth, resolveDepthInputSize } from "../electron/depth-anything.js";

const bitmap = Buffer.from([
  0, 0, 255, 255,
  0, 255, 0, 255,
]);
const tensor = depthTensorFromBGRA(bitmap, 2, 1);
assert.deepEqual(tensor.dims, [1, 3, 1, 2]);
assert.ok(tensor.data[0] > tensor.data[1], "BGRA red must populate the normalized RGB red plane");
assert.ok(tensor.data[2] < tensor.data[3], "BGRA green must populate the normalized RGB green plane");

const values = Float32Array.from({ length: 100 }, (_, index) => index);
const nearWhite = mapRelativeDepth(values, 10, 10);
const farWhite = mapRelativeDepth(values, 10, 10, { invert: true });
assert.ok(nearWhite[90] > nearWhite[10]);
assert.ok(farWhite[90] < farWhite[10]);
assert.ok(Math.abs(nearWhite[50] + farWhite[50] - 255) <= 1);

const impulse = new Float32Array(25); impulse[12] = 10;
const sharp = mapRelativeDepth(impulse, 5, 5);
const smooth = mapRelativeDepth(impulse, 5, 5, { smoothing: 1 });
assert.ok(smooth[12] < sharp[12]);
assert.ok(smooth[11] > sharp[11]);
assert.equal(DEPTH_INPUT_SIZE, 518);
assert.deepEqual(resolveDepthInputSize({ width: 1920, height: 1080 }, "balanced"), { width: 924, height: 518, quality: "balanced" });
assert.deepEqual(resolveDepthInputSize({ width: 1920, height: 1080 }, "ultra"), { width: 1540, height: 868, quality: "ultra" });
const panoramic = resolveDepthInputSize({ width: 8000, height: 1000 }, "ultra");
assert.ok(Math.max(panoramic.width, panoramic.height) <= 1960);
assert.equal(panoramic.width % 14, 0);
assert.equal(panoramic.height % 14, 0);

console.log("Depth Anything tests passed: BGRA preprocessing, tensor layout, percentile mapping, polarity, and height smoothing are deterministic.");
