const assert = require("node:assert/strict");
const fs = require("node:fs");

const source = fs.readFileSync(new URL("../main.js", `file://${__filename}`), "utf8");
const styles = fs.readFileSync(new URL("../styles.css", `file://${__filename}`), "utf8");

assert.ok(source.includes('clipPath: `inset(0 ${100 - o}% 0 0)`'), "before layer must use endpoint-safe clipping");
assert.ok(source.includes('width: "100%"'), "before layer must span the complete preview stage");
assert.match(styles, /\.compare-stage \.before-layer img\s*\{[^}]*width:\s*100%/s);
assert.match(styles, /\.compare-stage \.before-layer\s*\{[^}]*border-right:\s*0/s);
assert.match(styles, /\.compare-stage \.before-layer\s*\{[^}]*background:\s*#06090c/s, "before layer must carry an opaque matte that masks the processed layer");
assert.match(styles, /\.compare-stage > img,[\s\S]*?\.before-layer img\s*\{[^}]*object-fit:\s*contain/s, "both images must preserve their own aspect ratios");
assert.ok(!source.includes("previewMediaStyle"), "preview must not stretch both images into shared dimensions");

console.log("Preview comparison tests passed: independent aspect ratios, opaque clipping matte, and exclusive endpoints.");
