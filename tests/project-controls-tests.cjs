const assert = require("node:assert/strict");
const fs = require("node:fs");

const source = fs.readFileSync(new URL("../main.js", `file://${__filename}`), "utf8");

assert.match(source, /id: "pixelDimension"[\s\S]*?inline: !0/,
  "pixel dimension selector must be editable directly on the Resize node");
assert.match(source, /id: "width"[\s\S]*?pixelDimension", equals: "width"[\s\S]*?inline: !0/,
  "pixel width must be editable directly on the Resize node");
assert.match(source, /id: "height"[\s\S]*?pixelDimension", equals: "height"[\s\S]*?inline: !0/,
  "pixel height must be editable directly on the Resize node");
assert.match(source, /t\.nodeType === "resize" && t\.params\.mode === "pixels" \? 3 : 2/,
  "pixel Resize mode must show mode, dimension, and value controls");
const styles = fs.readFileSync(new URL("../styles.css", `file://${__filename}`), "utf8");

assert.ok(source.includes("deleteGraph: (r) =>"), "graph deletion must be implemented");
assert.ok(source.includes('title: `Delete “${b.name}”?`'), "graph tabs need an obvious delete confirmation");
assert.ok(source.includes('className: "graph-tab-delete"'), "every deletable graph tab needs a visible control");
assert.ok(source.includes('title: "Save current project as startup file?"'), "startup saves must be confirmed");
assert.ok(source.includes('title: "Restore factory settings?"'), "factory resets must be confirmed");
assert.ok(source.includes("restoreFactorySettings: () =>"), "factory reset must be implemented");
assert.ok(source.includes('"fluxel.preferences.v1"'), "factory reset must cover saved preferences");
assert.ok(source.includes('"fluxel.startup.v1"'), "factory reset must cover the startup file");
assert.ok(source.includes('className: "confirmation-cancel",\n                  autoFocus: !0'), "safe dialogs should focus Cancel");
assert.match(styles, /\.react-flow__panel\.top\.center\.alignment-toolbar\s*\{[^}]*transform:\s*translateY\(-50%\)\s*!important/s, "the vertical toolbar must override React Flow's actual .top.center horizontal transform");
assert.equal(styles.includes(".react-flow__panel.top-center.alignment-toolbar"), false, "do not target React Flow with a nonexistent combined position class");

console.log("Project control tests passed: confirmations, factory reset, and visible graph deletion.");
