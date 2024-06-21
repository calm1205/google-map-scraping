// preloadはcommonjsで書く必要がある
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // レンダラー -> メインプロセス
  scraping: (args: any) => ipcRenderer.invoke("scraping-channel", args),

  // メインプロセス -> レンダラー
  sendResult: (callback: any) =>
    ipcRenderer.on("sendResult", (_event, value) => callback(value)),
});
