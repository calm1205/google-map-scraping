const { contextBridge, ipcRenderer } = require("electron");

export const apis = {
  scraping: "scraping",
};

contextBridge.exposeInMainWorld("electronAPI", {
  scraping: (args: any) => ipcRenderer.invoke(apis.scraping, args),
});
