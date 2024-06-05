import { By, WebDriver } from "selenium-webdriver";
import { sleep } from "@/src/libs";
import { focusNextResult, getTargetInfo, focusFirstResult } from ".";

export const getSearchResult = async (driver: WebDriver, word: string) => {
  const searchResultWrapper = await driver.findElement(
    By.css(`[aria-label='「${word}」の検索結果']`)
  );

  console.log("検索結果を取得中...");

  await focusFirstResult(
    await searchResultWrapper.findElements(By.css(".hfpxzc"))
  );

  const companyNames = [];

  while (true) {
    const companyName = await getTargetInfo(driver);
    console.log(companyName);
    companyNames.push(companyName);

    await sleep(1000);
    await focusNextResult(driver);
    await sleep(1000);

    const focusedDom = await driver.switchTo().activeElement();
    const className = await focusedDom.getAttribute("class");
    const isBottom = className === "D6NGZc";
    if (isBottom) break;
  }

  return companyNames;
};
