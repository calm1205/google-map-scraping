import { keyDown } from "@/libs";
import { By, Key, WebDriver } from "selenium-webdriver";

export const focusNextResult = async (driver: WebDriver) => {
  // ウェブサイトがある場合はTABを１回スキップ
  const focusedDom = await driver.switchTo().activeElement();
  const parentDom = await focusedDom.findElement(By.xpath(".."));

  try {
    await parentDom.findElement(By.css(".lcr4fd.S9kvJb"));
    await keyDown(driver, Key.TAB);
  } catch (error) {
    console.info("ウェブサイトのボタンがありません");
  }

  await keyDown(driver, Key.TAB); // ルートにフォーカス
  await keyDown(driver, Key.TAB); // 次の検索結果にフォーカス
  await keyDown(driver, Key.DOWN);
  await keyDown(driver, Key.DOWN);
  await keyDown(driver, Key.DOWN);
  await keyDown(driver, Key.ENTER);
};
