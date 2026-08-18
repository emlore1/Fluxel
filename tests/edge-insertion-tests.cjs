const fs = require("node:fs");
const assert = require("node:assert/strict");

const source = fs.readFileSync("main.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

assert.match(source, /insertExistingNodeOnEdge:/, "existing-node insertion action is missing");
assert.match(source, /Only an unconnected node can be dropped into a connection/, "connected-node guard is missing");
assert.match(source, /function closestInsertableEdge/, "canvas cable proximity detection is missing");
assert.match(source, /onNodeDragStop:[\s\S]{0,300}insertExistingNode/, "drag-stop insertion is not wired up");
assert.match(source, /strokeWidth: 80/, "widened cable drop target is missing");
assert.match(source, /function downstreamNodeIds/, "downstream spacing traversal is missing");
assert.match(source, /function animateDownstreamSpacing/, "smooth downstream spacing animation is missing");
assert.match(source, /\+ 400 -/, "expanded downstream spacing is missing");
assert.match(source, /prefers-reduced-motion: reduce/, "spacing animation does not respect reduced motion");
assert.match(source, /downstream branch was moved aside for readability/, "spacing feedback is missing");
assert.match(css, /node-library-dragging \.edge-drop-zone/, "library drag hit area activation is missing");

console.log("edge insertion checks passed");
