import { app, BrowserWindow, dialog, ipcMain, Menu, shell } from "electron";
import path from "node:path";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { writeExportedImage } from "./export-utils.js";
import { prepareBatchInput, readBatchImage } from "./batch-files.js";
import {
  cancelAIPackInstall,
  installAIPack,
  listAIPacks,
  openAIModelFolder,
  runAIUpscale,
  cancelAIUpscale,
  runAIDepth,
  cancelAIDepth,
  runAIGenerate,
  runAIEdit,
  cancelAIGeneration,
  removeAIPack,
} from "./ai-packs.js";
import { shutdownHiDreamWorker } from "./hidream.js";

const startupLog = typeof globalThis.fluxelStartupLog === "function" ? globalThis.fluxelStartupLog : () => {};
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const developmentUrl = process.env.VITE_DEV_SERVER_URL;
startupLog("Main process module loaded.");

ipcMain.handle("fluxel:select-export-directory", async (_event, currentDirectoryPath) => {
  const result = await dialog.showOpenDialog({
    title: "Choose export directory",
    defaultPath: typeof currentDirectoryPath === "string" && path.isAbsolute(currentDirectoryPath) ? currentDirectoryPath : undefined,
    properties: ["openDirectory", "createDirectory"],
  });
  return result.canceled ? null : result.filePaths[0] ?? null;
});
ipcMain.handle("fluxel:select-batch-input-directory", async (_event, currentDirectoryPath) => {
  const result = await dialog.showOpenDialog({
    title: "Choose batch input folder",
    defaultPath: typeof currentDirectoryPath === "string" && path.isAbsolute(currentDirectoryPath) ? currentDirectoryPath : undefined,
    properties: ["openDirectory"],
  });
  return result.canceled ? null : result.filePaths[0] ?? null;
});
ipcMain.handle("fluxel:prepare-batch-input", (_event, request) => prepareBatchInput(request?.inputDirectory));
ipcMain.handle("fluxel:read-batch-image", (_event, request) => readBatchImage(request));
ipcMain.handle("fluxel:open-directory", async (_event, directory) => {
  if (typeof directory !== "string" || !path.isAbsolute(directory)) throw new Error("Invalid folder path.");
  if (!(await stat(directory)).isDirectory()) throw new Error("The selected path is not a folder.");
  return shell.openPath(directory);
});
ipcMain.handle("fluxel:save-image", (_event, request) => writeExportedImage(request));
ipcMain.handle("fluxel:ai-list-packs", () => listAIPacks());
ipcMain.handle("fluxel:ai-install-pack", (event, packId) =>
  installAIPack(packId, (progress) => {
    if (!event.sender.isDestroyed()) event.sender.send("fluxel:ai-download-progress", progress);
  })
);
ipcMain.handle("fluxel:ai-cancel-install", (_event, packId) => cancelAIPackInstall(packId));
ipcMain.handle("fluxel:ai-remove-pack", (_event, packId) => removeAIPack(packId));
ipcMain.handle("fluxel:ai-open-model-folder", () => openAIModelFolder());
ipcMain.handle("fluxel:ai-upscale", (event, request) =>
  runAIUpscale(request, (progress) => {
    if (!event.sender.isDestroyed()) event.sender.send("fluxel:ai-upscale-progress", progress);
  })
);
ipcMain.handle("fluxel:ai-cancel-upscale", (_event, jobId) => cancelAIUpscale(jobId));
ipcMain.handle("fluxel:ai-depth", (event, request) =>
  runAIDepth(request, (progress) => {
    if (!event.sender.isDestroyed()) event.sender.send("fluxel:ai-depth-progress", progress);
  })
);
ipcMain.handle("fluxel:ai-cancel-depth", (_event, jobId) => cancelAIDepth(jobId));
ipcMain.handle("fluxel:ai-generate", (event, request) =>
  runAIGenerate(request, (progress) => {
    if (!event.sender.isDestroyed()) event.sender.send("fluxel:ai-generation-progress", progress);
  })
);
ipcMain.handle("fluxel:ai-edit", (event, request) =>
  runAIEdit(request, (progress) => {
    if (!event.sender.isDestroyed()) event.sender.send("fluxel:ai-generation-progress", progress);
  })
);
ipcMain.handle("fluxel:ai-cancel-generation", (_event, jobId) => cancelAIGeneration(jobId));

function isTrustedExternalUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    return url.protocol === "https:" || url.protocol === "mailto:";
  } catch { return false; }
}

function createWindow() {
  const window = new BrowserWindow({
    title: "Fluxel", width: 1440, height: 920, minWidth: 1040, minHeight: 700,
    show: false, backgroundColor: "#101114", icon: path.join(currentDirectory, "..", "build", "icon.png"),
    webPreferences: {
      preload: path.join(currentDirectory, "preload.cjs"),
      contextIsolation: true, nodeIntegration: false, sandbox: true,
    },
  });
  window.once("ready-to-show", () => {
    startupLog("Main window ready to show.");
    window.show();
  });
  window.webContents.on("did-fail-load", (_event, code, description, url) => {
    startupLog(`Renderer failed to load (${code}) ${description} · ${url}`);
  });
  window.webContents.on("render-process-gone", (_event, details) => {
    startupLog(`Renderer process exited · ${details.reason} · code ${details.exitCode}`);
  });
  window.webContents.setWindowOpenHandler(({ url }) => {
    if (isTrustedExternalUrl(url)) void shell.openExternal(url);
    return { action: "deny" };
  });
  window.webContents.on("will-navigate", (event, url) => {
    if (url !== window.webContents.getURL()) event.preventDefault();
  });
  if (developmentUrl) {
    void window.loadURL(developmentUrl);
    window.webContents.openDevTools({ mode: "detach" });
  } else void window.loadFile(path.join(currentDirectory, "..", "dist", "index.html"));
  return window;
}

app.whenReady().then(() => {
  startupLog("Electron app ready.");
  Menu.setApplicationMenu(null);
  createWindow();
  app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
// The warm Python worker holds several GB of VRAM; never leave it orphaned.
app.on("before-quit", () => shutdownHiDreamWorker());
app.on("window-all-closed", () => {
  shutdownHiDreamWorker();
  if (process.platform !== "darwin") app.quit();
});
