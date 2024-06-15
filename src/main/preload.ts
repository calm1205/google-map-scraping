import * as electron from "electron";

export const apis = {
  scraping: "scraping",
};

electron?.contextBridge?.exposeInMainWorld("electronAPI", {
  scraping: (args: any) => electron.ipcRenderer.invoke(apis.scraping, args),
});
