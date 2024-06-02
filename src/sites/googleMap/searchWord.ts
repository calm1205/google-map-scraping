import { By, WebDriver } from "selenium-webdriver";
import { sleep } from "../../libs/sleep/sleep";

export const searchWord = async (driver: WebDriver, word: string) => {
  const searchBox = await driver
    .findElement(By.id("searchbox"))
    .findElement(By.css("input"));

  await searchBox.sendKeys(word);
  await sleep(1000);

  const searchButton = await driver.findElement(
    By.id("searchbox-searchbutton")
  );
  await searchButton.click();
};
