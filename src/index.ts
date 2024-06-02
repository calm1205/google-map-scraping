import { Builder, Browser } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import { kamei } from "./sites/kamei.js";
import { exportTsv } from "./libs/exportTsv/exportTsv.js";
import { googleMap } from "./sites/googleMap/index";

const options = new chrome.Options();
// options.addArguments("--headless=new");

(async () => {
  const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  try {
    // const kameiObject = await kamei(driver);
    await googleMap(driver);

    // exportTsv(kameiObject);
  } catch (error) {
    console.error(error);
  } finally {
    await driver.quit();
  }
})();
