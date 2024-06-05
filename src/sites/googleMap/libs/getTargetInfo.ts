import { By, WebDriver } from "selenium-webdriver";

/**
 * 検索結果から必要な情報（会社名、電話番号、住所）を取得
 */
export const getTargetInfo = async (driver: WebDriver) => {
  const companyName = await driver
    .findElement(By.css("h1.DUwDvf.lfPIob"))
    .getText();

  return companyName;
};
