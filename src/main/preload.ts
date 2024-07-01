// preloadはcommonjsで書く必要がある
const { contextBridge, ipcRenderer } = require("electron");

/**
 * window.electronAPIに関数を登録
 * e.g. window.electronAPI.scraping({ keyword: "keyword", maxCount: 10 });
 */
contextBridge.exposeInMainWorld("electronAPI", {
  scraping: ({ keyword, maxCount }: any) =>
    ipcRenderer.invoke("scraping-channel", { keyword, maxCount }),

  isPermitted: () => ipcRenderer.invoke("isPermitted-channel"),

  sendResult: (callback: any) =>
    ipcRenderer.on("sendResult", (_event, value) => callback(value)),
});
