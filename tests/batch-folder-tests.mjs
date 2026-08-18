import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { prepareBatchInput, readBatchImage } from "../electron/batch-files.js";

const root = await fs.mkdtemp(path.join(process.cwd(), "batch-folder-test-"));
const input = path.join(root, "input");
const outside = path.join(root, "outside.png");
await fs.mkdir(input);
await fs.writeFile(path.join(input, "image10.jpg"), Buffer.from([1, 2, 3]));
await fs.writeFile(path.join(input, "image2.png"), Buffer.from([4, 5, 6]));
await fs.writeFile(path.join(input, "ignore.txt"), "not an image");
await fs.writeFile(outside, Buffer.from([7, 8, 9]));

try {
  const prepared = await prepareBatchInput(input);
  assert.deepEqual(prepared.files.map((file) => file.name), ["image2.png", "image10.jpg"]);
  assert.equal(prepared.inputDirectory, await fs.realpath(input));
  assert.equal("outputDirectory" in prepared, false);

  const image = await readBatchImage({ inputDirectory: input, filePath: prepared.files[0].filePath });
  assert.equal(image.name, "image2.png");
  assert.match(image.dataUrl, /^data:image\/png;base64,/);
  await assert.rejects(readBatchImage({ inputDirectory: input, filePath: outside }), /outside the selected input folder/);

  const renderer = await fs.readFile(new URL("../main.js", import.meta.url), "utf8");
  assert.match(renderer, /prepareBatchInput/);
  assert.match(renderer, /readBatchImage/);
  assert.match(renderer, /avoidOverwrite: !0/);
  assert.match(renderer, /Open save folder/);
  assert.match(renderer, /Save directory required/);
  assert.match(renderer, /requiredForBatch: !0/);
  assert.match(renderer, /has-missing-required/);
  const batchDefinition = renderer.slice(renderer.indexOf('type: "batchInput"'), renderer.indexOf('type: "batchInput"') + 900);
  assert.doesNotMatch(batchDefinition, /outputDirectory|naming|Output format|Output quality/);
  assert.match(renderer, /Py\.clear\(\)/);
  assert.doesNotMatch(renderer, /function vD\(|Download ZIP|control: "batchFile"/);
  console.log("Folder batch tests passed: input-only Batch node, Save-node-owned output settings, required-field warnings, confined reads, immediate collision-safe saves, and no ZIP workflow.");
} finally {
  await fs.rm(root, { recursive: true, force: true });
}
