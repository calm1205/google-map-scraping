import { By, WebDriver } from "selenium-webdriver";
import { CsvObject } from "../libs/exportTsv/type";

const SITE_URL = "https://fc-kamei.net/BG1";

export const kamei = async (driver: WebDriver) => {
  await driver.get(SITE_URL);

  const companies = await driver.findElements(By.css(".brand_data_list"));

  const companyInfo: CsvObject = await Promise.all(
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
