import { ElementHandle, Page } from "puppeteer";
import { focusFirstResult } from "./focusFirstResult.js";
import { keyDown, sleep } from "@/main/libs/index.js";
import { getTargetInfo } from "./getTargetInfo.js";
import { mainWindow } from "@/main/main.js";
import { getNextResult } from "./getNextResult.js";

/**
 * keywordで検索した結果を取得
 */
export const getSearchResult = async (
  page: Page,
  keyword: string,
  maxCount: number
) => {
  const searchResultWrapper = await page.$(
    `[aria-label='「${keyword}」の検索結果']`
  );

  const searchResultSelector = ".Nv2PK.THOPZb.CpccDe";
  const searchResult = await searchResultWrapper?.$(searchResultSelector);

  await focusFirstResult(searchResult);

  const companyInfoArray = [];
  console.log("> 検索結果を取得中...");

  let count = 0;
  while (count < maxCount) {
    const companyInfo = await getTargetInfo(page);
    companyInfoArray.push(companyInfo);

    // レンダラー側へ結果を送信
    mainWindow?.webContents.send("sendResult", companyInfo);

    await sleep(1000);
    const nextResult = await getNextResult(page, searchResult);
    await keyDown(page, "ArrowDown");
    await keyDown(page, "ArrowDown");
    await keyDown(page, "ArrowDown");
    await (nextResult as ElementHandle<Element>).click();
    await (nextResult as ElementHandle<Element>).click();
    await sleep(1000);

    count++;
    const endOfList = await page.$(".HlvSq");
    if (endOfList) break;
  }

  return companyInfoArray;
};
