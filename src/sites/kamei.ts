import { By, WebDriver } from "selenium-webdriver";

const SITE_URL = "https://fc-kamei.net/BG1";

export const kamei = async (driver: WebDriver) => {
  await driver.get(SITE_URL);

  const companies = await driver.findElements(By.css(".brand_data_list"));

  const companyInfo = await Promise.all(
    companies.map(async (company) => {
      const content = await company.findElements(By.css("dd"));
      const companyName = await content[0].getText();
      const companyAddress = await content[3].getText();
      return { companyName, companyAddress };
    })
  );

  console.log(companyInfo);
};
