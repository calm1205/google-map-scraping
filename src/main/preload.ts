// preloadはcommonjsで書く必要がある
const { contextBridge, ipcRenderer } = require("electron");

/**
 * window.electronAPIに関数を登録
 * e.g. window.electronAPI.scraping({ keyword: "keyword", maxCount: 10 });
 */
contextBridge.exposeInMainWorld("electronAPI", {
  /** 検索の開始 */
  scraping: ({ keyword, maxCount }: any) =>
    ipcRenderer.invoke("scraping-channel", { keyword, maxCount }),

  /** 検索の中断 */
  stopScraping: () => ipcRenderer.invoke("stopScraping-channel"),

  /** serviceを利用できるか判定 */
  isPermitted: () => ipcRenderer.invoke("isPermitted-channel"),

  /** 検索結果の同期 */
  sendResult: (callback: any) =>
    ipcRenderer.on("sendResult", (_event, value) => callback(value)),
});
