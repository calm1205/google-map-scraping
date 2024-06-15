// import * as electron from "electron";
const { contextBridge, ipcRenderer } = require("electron");

// electron?.contextBridge?.exposeInMainWorld("electronAPI", {
// scraping: (args: any) => electron.ipcRenderer.invoke(apis.scraping, args),
// });
contextBridge.exposeInMainWorld("electronAPI", {
  scraping: (args: any) => ipcRenderer.invoke("scraping", args),
});
