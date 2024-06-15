import { sleep } from "@/main/libs/index.js";
import puppeteer from "puppeteer";
import { startSearch } from "./startSearch.js";
import { getSearchResult } from "./getSearchResult.js";

const URL = "https://www.google.com/maps/";
export type ScrapingArgs = {
  keyword: string;
  maxCount?: number;
};

export const scraping = async ({ keyword, maxCount = 10 }: ScrapingArgs) => {
  const browser = await puppeteer.launch({ headless: true, dumpio: true });
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
