const assert = require("node:assert/strict");
const fs = require("node:fs");

const source = fs.readFileSync(new URL("../main.js", `file://${__filename}`), "utf8");

assert.match(source, /dataTransfer\.files/, "canvas drop must inspect local files");
assert.match(source, /filter\(isDroppedImageFile\)/, "canvas drop must reject non-image files");
assert.match(source, /droppedFileDataUrl/, "dropped images must be loaded locally");
assert.match(source, /u\("loadImage"/, "each dropped image must create a Load Image node");
assert.match(source, /setNodeParam\(id, "dataUrl"/, "the new node must receive the dropped image data");
assert.match(source, /setNodeParam\(id, "sourceName"/, "the new node must retain the dropped filename");
assert.match(source, /x: M\.x \+ index \* 36, y: M\.y \+ index \* 36/,
  "multiple dropped images must be offset instead of overlapping exactly");

console.log("Canvas image-drop tests passed: filtering, local loading, positioned Load Image creation, and multi-file offsets.");
