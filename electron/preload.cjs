const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("fluxelDesktop", {
  platform: process.platform,
  versions: Object.freeze({ electron: process.versions.electron, chrome: process.versions.chrome }),
  selectExportDirectory: (currentDirectory) => ipcRenderer.invoke("fluxel:select-export-directory", currentDirectory),
  selectBatchInputDirectory: (currentDirectory) => ipcRenderer.invoke("fluxel:select-batch-input-directory", currentDirectory),
  prepareBatchInput: (request) => ipcRenderer.invoke("fluxel:prepare-batch-input", request),
  readBatchImage: (request) => ipcRenderer.invoke("fluxel:read-batch-image", request),
  openDirectory: (directory) => ipcRenderer.invoke("fluxel:open-directory", directory),
  saveImage: (request) => ipcRenderer.invoke("fluxel:save-image", request),
  listAIPacks: () => ipcRenderer.invoke("fluxel:ai-list-packs"),
  installAIPack: (packId) => ipcRenderer.invoke("fluxel:ai-install-pack", packId),
  cancelAIPackInstall: (packId) => ipcRenderer.invoke("fluxel:ai-cancel-install", packId),
  removeAIPack: (packId) => ipcRenderer.invoke("fluxel:ai-remove-pack", packId),
  runAIUpscale: (request) => ipcRenderer.invoke("fluxel:ai-upscale", request),
  cancelAIUpscale: (jobId) => ipcRenderer.invoke("fluxel:ai-cancel-upscale", jobId),
  runAIDepth: (request) => ipcRenderer.invoke("fluxel:ai-depth", request),
  cancelAIDepth: (jobId) => ipcRenderer.invoke("fluxel:ai-cancel-depth", jobId),
  runAIGenerate: (request) => ipcRenderer.invoke("fluxel:ai-generate", request),
  runAIEdit: (request) => ipcRenderer.invoke("fluxel:ai-edit", request),
  cancelAIGeneration: (jobId) => ipcRenderer.invoke("fluxel:ai-cancel-generation", jobId),
  openAIModelFolder: () => ipcRenderer.invoke("fluxel:ai-open-model-folder"),
  onAIDownloadProgress: (listener) => {
    const wrapped = (_event, progress) => listener(progress);
    ipcRenderer.on("fluxel:ai-download-progress", wrapped);
    return () => ipcRenderer.removeListener("fluxel:ai-download-progress", wrapped);
  },
  onAIUpscaleProgress: (listener) => {
    const wrapped = (_event, progress) => listener(progress);
    ipcRenderer.on("fluxel:ai-upscale-progress", wrapped);
    return () => ipcRenderer.removeListener("fluxel:ai-upscale-progress", wrapped);
  },
  onAIDepthProgress: (listener) => {
    const wrapped = (_event, progress) => listener(progress);
    ipcRenderer.on("fluxel:ai-depth-progress", wrapped);
    return () => ipcRenderer.removeListener("fluxel:ai-depth-progress", wrapped);
  },
  onAIGenerationProgress: (listener) => {
    const wrapped = (_event, progress) => listener(progress);
    ipcRenderer.on("fluxel:ai-generation-progress", wrapped);
    return () => ipcRenderer.removeListener("fluxel:ai-generation-progress", wrapped);
  },
});
