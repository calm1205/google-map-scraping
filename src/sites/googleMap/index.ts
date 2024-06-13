import { WebDriver } from "selenium-webdriver";
import { sleep } from "@/src/libs";
import { search, getSearchResult } from "./libs";

const URL = "https://www.google.com/maps/";

export const googleMap = async (driver: WebDriver, word: string) => {
  if (!word) console.error("検索ワードが入力されていません");

  await driver.get(URL);
  console.log(`${URL}にアクセス`);
  await sleep(1000);

  await search(driver, word);
  await sleep(2000);
  const companyInfoArray = await getSearchResult(driver, word);

  console.log(`${URL}のスクレイピング完了`);
  return companyInfoArray;
};
