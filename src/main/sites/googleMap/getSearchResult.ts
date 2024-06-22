import { ElementHandle, Page } from "puppeteer";
import { focusResult } from "./focusResult.js";
import { sleep } from "@/main/libs/index.js";
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
  const searchResult = await searchResultWrapper?.$(".Nv2PK");

  let count = 0;
  let nextResult: ElementHandle<Element> | null =
    searchResult as ElementHandle<Element>;
  const companyInfoArray = [];
  console.log("> 検索結果を取得中...");

  while (count < maxCount) {
    await focusResult({ page, nextResult });
    const companyInfo = await getTargetInfo(page);

    // レンダラー側へ結果を送信
    mainWindow?.webContents.send("sendResult", companyInfo);
    companyInfoArray.push(companyInfo);

    await sleep(1000);
    nextResult = await getNextResult({ page, target: nextResult });

    // 次の検索結果がない場合は終了
    if (!nextResult) break;

    count++;
  }

  return companyInfoArray;
};
