import { Builder, Browser } from "selenium-webdriver";
import { kamei } from "./sites/kamei.js";

(async () => {
  const driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await kamei(driver);
  } finally {
    await driver.quit();
  }
})();
