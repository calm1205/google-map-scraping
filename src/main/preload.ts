import { ScrapingArgs } from "../main/sites/googleMap/index";
const { contextBridge, ipcRenderer } = require("electron");

export const apis = {
  scraping: "scraping",
};

contextBridge.exposeInMainWorld("electronAPI", {
  scraping: (args: ScrapingArgs) => ipcRenderer.invoke(apis.scraping, args),
});
