import { Page } from "puppeteer";
import { focusFirstResult } from "./focusFirstResult.js";
import { sleep } from "@/main/libs/index.js";
import { getTargetInfo } from "./getTargetInfo.js";
import { focusNextResult } from "./focusNextResult.js";

/**
 * keywordで検索した結果を取得
 */
export const getSearchResult = async (
  page: Page,
  keyword: string,
  maxCount: number,
) => {
  const searchResultWrapper = await page.$(
    `[aria-label='「${keyword}」の検索結果']`,
  );

  const firstResult = await searchResultWrapper?.$(".hfpxzc");
  await focusFirstResult(firstResult);

  const companyInfoArray = [];
  console.log("検索結果を取得中...");

  let count = 0;
  while (count < maxCount) {
    const companyInfo = await getTargetInfo(page);
    companyInfoArray.push(companyInfo);

    await sleep(1000);
    await focusNextResult(page);
    await sleep(1000);

    count++;
    const focusedDom = await page.evaluateHandle(() => document.activeElement);
    const className = (await focusedDom.getProperty("class")).toString();
    const isBottom = className === "D6NGZc";
    if (isBottom) break;
  }

  return companyInfoArray;
};
