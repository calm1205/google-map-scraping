import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "node:path";
import { scraping, ScrapingArgs } from "./sites/googleMap/index.js";
import { getRootPath } from "./libs/getRootPath.js";
import { isPermitted } from "./authorization/isPermitted.js";

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
  ipcMain.handle(
    "scraping-channel",
    async (_event, { keyword, maxCount }: ScrapingArgs) =>
      await scraping({ keyword, maxCount })
  );
  ipcMain.handle("isPermitted-channel", (_event) => isPermitted());

  createWindow();
});

console.log("start electron!");
