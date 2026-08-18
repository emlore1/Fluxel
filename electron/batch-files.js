import fs from "node:fs/promises";
import path from "node:path";

const batchImageTypes = new Map([
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".gif", "image/gif"],
  [".bmp", "image/bmp"],
]);

async function realDirectory(directory, label) {
  if (!path.isAbsolute(directory)) throw new Error(`Choose a ${label} folder first.`);
  const resolved = await fs.realpath(directory);
  const info = await fs.stat(resolved);
  if (!info.isDirectory()) throw new Error(`The selected ${label} path is not a folder.`);
  return resolved;
}

export async function prepareBatchInput(inputDirectory) {
  const input = await realDirectory(String(inputDirectory || ""), "batch input");
  const entries = await fs.readdir(input, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && batchImageTypes.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => ({ name: entry.name, filePath: path.join(input, entry.name) }))
    .sort((left, right) => left.name.localeCompare(right.name, undefined, { numeric: true, sensitivity: "base" }));
  return { inputDirectory: input, files };
}

export async function readBatchImage(request) {
  const input = await realDirectory(String(request?.inputDirectory || ""), "batch input");
  const candidate = await fs.realpath(String(request?.filePath || ""));
  const relative = path.relative(input, candidate);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative))
    throw new Error("The requested batch image is outside the selected input folder.");
  const mime = batchImageTypes.get(path.extname(candidate).toLowerCase());
  if (!mime) throw new Error("Unsupported batch image format.");
  const info = await fs.stat(candidate);
  if (!info.isFile() || info.size <= 0 || info.size > 512 * 1024 * 1024)
    throw new Error("The batch image has an invalid size.");
  const bytes = await fs.readFile(candidate);
  return { name: path.basename(candidate), dataUrl: `data:${mime};base64,${bytes.toString("base64")}` };
}
