import { TsvObject } from "@/main/libs/exportTsv/type";
import { Page } from "puppeteer";

/**
 * 検索結果から必要な情報（会社名、電話番号、住所）を取得
 */
export const getTargetInfo = async (page: Page): Promise<TsvObject> => {
  const h1Dom = await page.$("h1.DUwDvf.lfPIob");
  const h1InnerText = await h1Dom?.getProperty("innerText");
  const name = (await h1InnerText?.jsonValue()) as string;

  const resultElements = await page.$$(".CsEnBe");

  let address = "";
  let phoneNumber = "";
  let webSite = "";
  for (const resultElement of resultElements) {
    const ariaLabelObj = await resultElement.getProperty("ariaLabel");
    const ariaLabel = (await ariaLabelObj?.jsonValue()) as string;

    const innerDom = await resultElement.$(".Io6YTe.fontBodyMedium.kR99db");
    const innerTextObj = await innerDom?.getProperty("innerText");
    const innerText = (await innerTextObj?.jsonValue()) as string;

    if (ariaLabel.includes("住所")) address = innerText;
    if (ariaLabel.includes("電話番号")) phoneNumber = innerText;
    if (ariaLabel.includes("ウェブサイト")) webSite = innerText;
  }

  console.log({ name, address, phoneNumber, webSite });

  return {
    name,
    address,
    phoneNumber,
    webSite,
  };
};
