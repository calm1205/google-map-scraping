// preloadはcommonjsで書く必要がある
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  scraping: (args: any) => ipcRenderer.invoke("scraping", args),
});
