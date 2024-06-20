import { sleep } from "@/main/libs/index.js";
import puppeteer from "puppeteer";
import { startSearch } from "./startSearch.js";
import { getSearchResult } from "./getSearchResult.js";
import * as path from "node:path";
import { fileURLToPath } from "url";

const URL = "https://www.google.com/maps/";
export type ScrapingArgs = {
  keyword: string;
  maxCount?: number;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const scraping = async ({ keyword, maxCount = 10 }: ScrapingArgs) => {
  const browser = await puppeteer.launch({
    headless: true,
    dumpio: true,
    executablePath: path.join(__dirname, "../../../", "chromedriver"),
  });
  const page = await browser.newPage();

  await page.goto(URL);
  await page.setViewport({ width: 1280, height: 1024 });
  console.log("画面描画");

  await sleep(1000);

  await startSearch(page, keyword);
  console.log("検索中...");
  await sleep(2000);

  const companyInfoArray = await getSearchResult(page, keyword, maxCount);

  await browser.close();

  return companyInfoArray;
};
