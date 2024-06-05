import { TsvObject } from "@/src/libs/exportTsv/type";
import { By, WebDriver } from "selenium-webdriver";

/**
 * 検索結果から必要な情報（会社名、電話番号、住所）を取得
 */
export const getTargetInfo = async (driver: WebDriver): Promise<TsvObject> => {
  const name = await driver.findElement(By.css("h1.DUwDvf.lfPIob")).getText();

  const resultElements = await driver.findElements(By.css(".CsEnBe"));

  let address = "";
  let phoneNumber = "";
  for (const resultElement of resultElements) {
    const ariaLabel = await resultElement.getAttribute("aria-label");
    const innerText = (await resultElement.getText())
      .replaceAll("", "")
      .replaceAll("", "")
      .trim();

    if (ariaLabel.includes("住所")) address = innerText;
    if (ariaLabel.includes("電話番号")) phoneNumber = innerText;
  }

  return {
    name,
    address,
    phoneNumber,
  };
};
