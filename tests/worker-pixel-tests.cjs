const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

let response;
const workerScope = {
  postMessage(message) {
    response = message;
  },
};
const context = vm.createContext({ self: workerScope, Uint8ClampedArray, Float32Array, Object, Math, Number, String, Error });
vm.runInContext(fs.readFileSync(new URL("../image.worker.js", `file://${__filename}`), "utf8"), context);

function image(width, height, pixels) {
  const data = new Uint8ClampedArray(pixels);
  return { width, height, buffer: data.buffer };
}

function run(operation, inputs, params = {}) {
  response = undefined;
  workerScope.onmessage({ data: { id: operation, op: operation, inputs, params } });
  assert.equal(response.ok, true, response.error);
  return new Uint8ClampedArray(response.output.buffer);
}

assert.deepEqual(
  [...run("levels", { image: image(1, 1, [64, 128, 192, 255]) }, { blackPoint: 0, whitePoint: 255, gamma: 1, outputBlack: 0, outputWhite: 255 })],
  [64, 128, 192, 255],
);

assert.deepEqual(
  [...run("curves", { image: image(1, 1, [64, 128, 192, 255]) }, { channel: "rgb", curve: "0,0,128,255,255" })],
  [0, 128, 255, 255],
);

const exposed = run("colorGrade", { image: image(1, 1, [64, 64, 64, 255]) }, { exposure: 1, gamma: 1, temperature: 0, tint: 0 });
assert.ok(exposed[0] >= 127 && exposed[0] <= 129);

assert.deepEqual(
  [...run("blendImages", {
    base: image(1, 1, [200, 100, 50, 255]),
    blend: image(1, 1, [128, 255, 0, 255]),
  }, { mode: "multiply", opacity: 100 })],
  [100, 100, 0, 255],
);

assert.deepEqual(
  [...run("applyMask", {
    image: image(2, 1, [20, 40, 60, 255, 20, 40, 60, 255]),
    mask: image(2, 1, [255, 255, 255, 255, 0, 0, 0, 255]),
  }, { feather: 0, invert: false })],
  [20, 40, 60, 255, 20, 40, 60, 0],
);

const solid = run("solidColor", {}, { width: 2, height: 1, color: "#336699" });
assert.deepEqual([...solid], [51, 102, 153, 255, 51, 102, 153, 255]);
assert.deepEqual([...response.output.analysis.average], [51, 102, 153]);
assert.equal(response.output.analysis.red.length, 64);

const gradient = run("gradientImage", {}, { width: 4, height: 1, startColor: "#000000", endColor: "#ffffff", angle: 0 });
assert.equal(gradient[0], 0);
assert.ok(gradient[12] > gradient[8] && gradient[8] > gradient[4]);

const checker = run("patternImage", {}, { width: 4, height: 2, colorA: "#000000", colorB: "#ffffff", size: 2, pattern: "checker" });
assert.equal(checker[0], 0);
assert.equal(checker[8], 255);

const gaussian = run("gaussianBlur", { image: image(3, 1, [0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 255]) }, { radius: 1, sigma: 1 });
assert.ok(gaussian[0] > 0 && gaussian[4] < 255 && gaussian[4] > gaussian[0]);

const motion = run("motionBlur", { image: image(3, 1, [0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 255]) }, { distance: 3, angle: 0 });
assert.ok(motion[0] > 0 && motion[4] < 255);

const unsharp = run("unsharpMask", { image: image(3, 1, [40, 40, 40, 255, 120, 120, 120, 255, 40, 40, 40, 255]) }, { amount: 100, radius: 1, threshold: 0 });
assert.ok(unsharp[4] > 120);

run("resize", { image: image(4, 2, new Array(32).fill(255)) }, { mode: "percentage", percentage: 50, sampling: "nearest" });
assert.equal(response.output.width, 2);
assert.equal(response.output.height, 1);
run("resize", { image: image(4, 2, new Array(32).fill(255)) }, { mode: "pixels", pixelDimension: "width", width: 10, sampling: "nearest" });
assert.equal(response.output.width, 10);
assert.equal(response.output.height, 5);
run("resize", { image: image(4, 2, new Array(32).fill(255)) }, { mode: "pixels", pixelDimension: "height", height: 4, sampling: "nearest" });
assert.equal(response.output.width, 8);
assert.equal(response.output.height, 4);

console.log("Worker pixel tests passed: tonal tools, composites, masks, generators, aspect-locked resizing, analysis, and advanced blur/sharpen filters.");
