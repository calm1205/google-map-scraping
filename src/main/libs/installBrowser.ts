import * as path from "node:path";
import { fileURLToPath } from "url";
import * as fs from "node:fs";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const puppeteerBrowserPath = path.join(__dirname, "/dist/.cache/puppeteer");

/**
 * puppeteer browserがインストールされていない場合、インストールする
 */
export const installBrowser = () => {
  fs.access(puppeteerBrowserPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("puppeteer browser not found. install puppeteer browser.");
      execSync(`npm run get:chrome`);
    } else {
      console.log("puppeteer browser already installed.");
      return;
    }
  });
};
