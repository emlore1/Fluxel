const assert = require("node:assert/strict");
const fs = require("node:fs");

const source = fs.readFileSync(new URL("../main.js", `file://${__filename}`), "utf8");

assert.equal(source.includes('setItem("fluxel.project.v1"'), false, "project autosave must stay disabled");
assert.equal(source.includes('getItem("fluxel.project.v1"'), false, "legacy autosaves must not load at startup");
assert.ok(source.includes('getItem("fluxel.preferences.v1")'), "saved preferences should load explicitly");
assert.ok(source.includes('setItem(\n        "fluxel.preferences.v1"'), "Save Preferences should persist settings");
assert.ok(source.includes('getItem("fluxel.startup.v1")'), "the startup file should load explicitly");
assert.ok(source.includes('setItem("fluxel.startup.v1"'), "Save Startup File should persist the project");
assert.ok(source.includes('removeItem("fluxel.startup.v1")'), "the startup file should be clearable");
assert.match(source, /setTheme: \(r\) => e\(\{ theme: r \}\)/);
assert.match(source, /setAccent: \(r\) => e\(\{ accent: r \}\)/);
assert.match(source, /setAutoRun: \(r\) => e\(\{ autoRun: r \}\)/);

console.log("Persistence tests passed: session-only edits, explicit preferences, and explicit startup files.");
