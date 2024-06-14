const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  scraping: () => ipcRenderer.invoke("scraping"),
});
