import { By } from "selenium-webdriver";

const SITE_URL = "https://fc-kamei.net/BG1";

export const kamei = async (driver) => {
  await driver.get(SITE_URL);

  const companies = await driver.findElement(By.css(".brand_data_list"));
  const companyInfo = companies.map((company) => {
    const content = company.findElement(By.css("dd"));
    const companyName = content[0].getText();
    const companyAddress = content[3].getText();
    return { companyName, companyAddress };
  });

  console.log(companyInfo);
};
