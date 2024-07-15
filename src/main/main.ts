import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "node:path";
import { scraping, ScrapingArgs } from "./sites/googleMap/index.js";
import { getRootPath } from "./libs/getRootPath.js";
import { isPermitted } from "./authorization/isPermitted.js";
import { searchStatus } from "./sites/googleMap/searchStatus.js";

export let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(getRootPath(), "main", "preload.js"),
    },
  });

  // トランスパイル後のpathを指定
  mainWindow.loadFile("index.html");
};

app.on("ready", () => {
  /** 検索の開始 */
  ipcMain.handle(
    "scraping-channel",
    async (_event, { keyword, maxCount }: ScrapingArgs) =>
      await scraping({ keyword, maxCount })
  );

  /** 検索を中断 */
  ipcMain.handle("stopScraping-channel", (_event) =>
    searchStatus.stopSearching()
  );

  /** serviceを利用できるか判定 */
  ipcMain.handle("isPermitted-channel", (_event) => isPermitted());

  createWindow();
});

console.log("start electron!");
