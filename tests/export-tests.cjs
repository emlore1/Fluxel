const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");

(async () => {
  const root = path.resolve(__dirname, "..");
  const directory = await fs.mkdtemp(path.join(root, "export-test-"));
  try {
    const { safeFileName, writeExportedImage } = await import("../electron/export-utils.js");
    const png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAF/gL+AvzZewAAAABJRU5ErkJggg==";
    const result = await writeExportedImage({ directory, fileName: "../batch:sample", format: "png", dataUrl: png });
    assert.equal(path.dirname(result.filePath), directory);
    assert.equal(path.basename(result.filePath), "..-batch-sample.png");
    assert.equal((await fs.readFile(result.filePath)).subarray(1, 4).toString(), "PNG");
    assert.equal(safeFileName("CON"), "_CON");
    const firstSafe = await writeExportedImage({ directory, fileName: "unique", format: "png", dataUrl: png, avoidOverwrite: true });
    const secondSafe = await writeExportedImage({ directory, fileName: "unique", format: "png", dataUrl: png, avoidOverwrite: true });
    assert.equal(path.basename(firstSafe.filePath), "unique.png");
    assert.equal(path.basename(secondSafe.filePath), "unique-2.png");
    await assert.rejects(writeExportedImage({ directory, fileName: "wrong", format: "jpeg", dataUrl: png }), /does not match/);
  } finally { await fs.rm(directory, { recursive: true, force: true }); }
  console.log("Desktop export tests passed: automatic writes, format validation, path confinement, and Windows-safe names.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
