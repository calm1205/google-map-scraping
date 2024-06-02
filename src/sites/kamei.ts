import { By, WebDriver } from "selenium-webdriver";
import { TsvObject } from "../libs/exportTsv/type";

const PAGE_COUNT = 2;

export const kamei = async (driver: WebDriver) => {
  let output: TsvObject[] = [];

  for (let i = 1; i <= PAGE_COUNT; i++) {
    const siteUrl = getSiteUrl(i);
    console.log(`${siteUrl}をスクレイピング中...`);

    await driver.get(siteUrl);

    try {
      const pageOutput = await kameiScrape(driver);
      console.log(`${siteUrl}のスクレイピング完了\n`);
      output.push(...pageOutput);
    } catch (error) {
      console.error(`${siteUrl}のスクレイピングに失敗しました`, {
        cause: error,
      });
    }
  }

  return output;
};

const getSiteUrl = (page: number) => `https://fc-kamei.net/BG1?page=${page}`;

const kameiScrape = async (driver: WebDriver) => {
  const companies = await driver.findElements(By.css(".brand_data_list"));

  const companyInfo: TsvObject[] = await Promise.all(
    companies.map(async (company) => {
      const content = await company.findElements(By.css("dd"));
      const companyName = await content[0].getText();
      const address = await content[3].getText();
      const phoneNumber = "";
      return { name: companyName, address, phoneNumber };
    })
  );

  return companyInfo;
};
