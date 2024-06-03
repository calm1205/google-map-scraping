import { By, Key, WebDriver } from "selenium-webdriver";
import { sleep } from "../../libs/sleep/sleep";

export const getSearchResult = async (driver: WebDriver, word: string) => {
  const searchResult = await driver.findElement(
    By.css(`[aria-label='「${word}」の検索結果']`)
  );

  const searchResults = await searchResult.findElements(By.css(".hfpxzc"));

  const companyNames = [];

  let index = 0;
  for (const searchResult of searchResults) {
    if (index === 0) {
      await searchResult.click();
      await sleep(1000);
      await searchResult.click();
    } else {
      await focusNext(driver);
    }

    await sleep(1000);

    const companyName = await driver
      .findElement(By.css("h1.DUwDvf.lfPIob"))
      .getText();
    companyNames.push(companyName);
    index++;
  }

  return companyNames;
};

const focusNext = async (driver: WebDriver) => {
  await driver
    .actions({ async: true, bridge: undefined })
    .keyDown(Key.TAB)
    .perform();
  await driver
    .actions({ async: true, bridge: undefined })
    .keyDown(Key.TAB)
    .perform();
  await driver
    .actions({ async: true, bridge: undefined })
    .keyDown(Key.TAB)
    .perform();

  await driver
    .actions({ async: true, bridge: undefined })
    .keyDown(Key.ENTER)
    .perform();
};
