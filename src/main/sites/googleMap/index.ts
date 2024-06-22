import { sleep } from "@/main/libs/index.js";
import puppeteer from "puppeteer";
import { startSearch } from "./startSearch.js";
import { getSearchResult } from "./getSearchResult.js";
import * as path from "node:path";
import { getRootPath } from "@/main/libs/getRootPath.js";

const URL = "https://www.google.com/maps/";

/** chromeのバイナリファイルのパス */
const CHROME_PATH = {
  macArm64: `chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`,
  win64: `chrome-win64/chrome.exe`,
};

export type ScrapingArgs = {
  keyword: string;
  maxCount?: number;
};

/**
 * google mapのスクレイピング
 * @param keyword 検索キーワード
 * @param maxCount 取得する最大件数
 * */
export const scraping = async ({ keyword, maxCount = 3 }: ScrapingArgs) => {
  const browser = await puppeteer.launch({
    headless: false,
    dumpio: true,
    executablePath: path.join(getRootPath(), CHROME_PATH.macArm64),
    args: ["--window-size=1980,1080"],
  });

  const page = await browser.newPage();
  await page.goto(URL);

  await page.setViewport({ width: 1280, height: 1024 });
  console.log("> 画面描画");
  await sleep(2000);

  await startSearch(page, keyword);
  console.log("> 検索中...");
  await sleep(3000);
  const companyInfoArray = await getSearchResult(page, keyword, maxCount);
  await browser.close();
  return companyInfoArray;
};
