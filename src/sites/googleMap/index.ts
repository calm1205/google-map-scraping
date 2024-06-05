import { WebDriver } from "selenium-webdriver";
import { sleep } from "@/src/libs";
import { searchWord } from "./libs/searchWord";
import { getSearchResult } from "./libs/getSearchResult";

const URL = "https://www.google.com/maps/";
const SEARCH_WORD = "企業";

export const googleMap = async (driver: WebDriver) => {
  await driver.get(URL);
  console.log(`${URL}にアクセス`);
  await sleep(1000);

  await searchWord(driver, SEARCH_WORD);
  await sleep(2000);
  const companyNames = await getSearchResult(driver, SEARCH_WORD);

  console.log(companyNames);
  console.log(`${URL}のスクレイピング完了`);
};
