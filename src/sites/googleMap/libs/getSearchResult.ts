import { By, WebDriver } from "selenium-webdriver";
import { sleep } from "@/libs";
import { focusNextResult, getTargetInfo, focusFirstResult } from ".";

const MAX_RESULT = 3;

/**
 * wordで検索した結果を取得
 */
export const getSearchResult = async (
  driver: WebDriver,
  word: string,
  stop: boolean,
) => {
  const searchResultWrapper = await driver.findElement(
    By.css(`[aria-label='「${word}」の検索結果']`),
  );

  console.log("検索結果を取得中...");

  await focusFirstResult(
    await searchResultWrapper.findElements(By.css(".hfpxzc")),
  );

  const companyInfoArray = [];

  let count = 0;
  while (count < MAX_RESULT && !stop) {
    const companyInfo = await getTargetInfo(driver);
    console.log(companyInfo.name);
    companyInfoArray.push(companyInfo);

    await sleep(1000);
    await focusNextResult(driver);
    await sleep(1000);

    count++;
    const focusedDom = await driver.switchTo().activeElement();
    const className = await focusedDom.getAttribute("class");
    const isBottom = className === "D6NGZc";
    if (isBottom) break;
  }

  return companyInfoArray;
};
