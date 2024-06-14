import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("versions", {
  scraping: () => ipcRenderer.invoke("scraping"),
});
