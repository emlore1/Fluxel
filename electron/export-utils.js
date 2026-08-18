import fs from "node:fs/promises";
import path from "node:path";

const exportFormats = new Map([
  ["png", { extension: "png", mime: "image/png" }],
  ["jpeg", { extension: "jpg", mime: "image/jpeg" }],
  ["webp", { extension: "webp", mime: "image/webp" }],
]);

export function safeFileName(value) {
  const cleaned = String(value || "fluxel-output")
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "-")
    .replace(/[. ]+$/g, "")
    .slice(0, 180);
  const usable = cleaned || "fluxel-output";
  return /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(usable) ? `_${usable}` : usable;
}

export async function writeExportedImage(request) {
  const directory = String(request?.directory || "");
  const format = exportFormats.get(String(request?.format));
  const dataUrl = String(request?.dataUrl || "");
  if (!path.isAbsolute(directory)) throw new Error("Choose an export directory first.");
  if (!format) throw new Error("Unsupported export format.");
  const directoryInfo = await fs.stat(directory);
  if (!directoryInfo.isDirectory()) throw new Error("The selected export path is not a directory.");
  const match = dataUrl.match(/^data:(image\/(?:png|jpeg|webp));base64,([A-Za-z0-9+/=]+)$/);
  if (!match || match[1] !== format.mime) throw new Error("The encoded image does not match the selected format.");
  const bytes = Buffer.from(match[2], "base64");
  if (!bytes.length || bytes.length > 512 * 1024 * 1024) throw new Error("The exported image has an invalid size.");
  const baseName = safeFileName(request?.fileName);
  if (request?.avoidOverwrite) {
    for (let copy = 1; copy <= 10000; copy += 1) {
      const suffix = copy === 1 ? "" : `-${copy}`;
      const candidate = path.join(directory, `${baseName}${suffix}.${format.extension}`);
      try {
        await fs.writeFile(candidate, bytes, { flag: "wx" });
        return { filePath: candidate };
      } catch (error) {
        if (error?.code !== "EEXIST") throw error;
      }
    }
    throw new Error("Could not create a unique output filename.");
  }
  const filePath = path.join(directory, `${baseName}.${format.extension}`);
  await fs.writeFile(filePath, bytes);
  return { filePath };
}
