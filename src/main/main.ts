import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "node:path";
import { scraping, ScrapingArgs } from "./sites/googleMap/index.js";
import { getRootPath } from "./libs/getRootPath.js";

export let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
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
      await scraping({ keyword, maxCount }),
  );

  createWindow();
});

console.log("start electron!");
