import { By, WebDriver } from "selenium-webdriver";
import { sleep } from "../../libs/sleep/sleep";

export const getSearchResult = async (driver: WebDriver, word: string) => {
  const searchResult = await driver.findElement(
    By.css(`[aria-label='「${word}」の検索結果']`)
  );

  const searchResults = await searchResult.findElements(By.css(".hfpxzc"));

  const companyNames = [];

  for (const searchResult of searchResults) {
    await searchResult.click();

    await sleep(1000);

    const company = await driver.findElement(By.css("div[role='main'"));
    const companyName = await company.findElement(By.css("h1")).getText();
    companyNames.push(companyName);
  }

  return companyNames;
};
