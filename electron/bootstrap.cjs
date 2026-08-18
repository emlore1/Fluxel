const { app, dialog } = require("electron");
const fs = require("node:fs");
const path = require("node:path");

function startupLogPath() {
  const localAppData = process.env.LOCALAPPDATA;
  return localAppData
    ? path.join(localAppData, "Fluxel", "logs", "startup.log")
    : path.join(app.getPath("userData"), "logs", "startup.log");
}

function errorDetails(error) {
  if (error instanceof Error) return error.stack || error.message;
  return String(error);
}

function writeStartupLog(message, error) {
  const logPath = startupLogPath();
  try {
    fs.mkdirSync(path.dirname(logPath), { recursive: true });
    const details = error === undefined ? "" : `\n${errorDetails(error)}`;
    fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${message}${details}\n`, "utf8");
  } catch {
    // Startup diagnostics must never become another startup failure.
  }
  return logPath;
}

let fatalShown = false;
function showFatalStartupError(error) {
  if (fatalShown) return;
  fatalShown = true;
  const logPath = writeStartupLog("Fatal startup error", error);
  const message = `${errorDetails(error)}\n\nStartup log:\n${logPath}`;
  app.whenReady()
    .then(() => {
      dialog.showErrorBox("Fluxel could not start", message);
      app.exit(1);
    })
    .catch(() => app.exit(1));
}

globalThis.fluxelStartupLog = (message, error) => writeStartupLog(message, error);
process.on("uncaughtException", showFatalStartupError);
process.on("unhandledRejection", showFatalStartupError);

writeStartupLog(`Bootstrap started · Electron ${process.versions.electron || "unknown"} · ${process.platform} ${process.arch}`);
import("./main.js").catch(showFatalStartupError);
