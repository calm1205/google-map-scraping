import { Builder, Browser } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import { exportTsv } from "@/src/libs/exportTsv/exportTsv.js";
import { googleMap } from "./sites/googleMap/index";

const options = new chrome.Options();
options.addArguments("--headless=new");

export const scraping = async (word: string) => {
  const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  try {
    const googleMapInfo = await googleMap(driver, word);

    exportTsv(googleMapInfo);
  } catch (error) {
    console.error(error);
  } finally {
    await driver.quit();
  }
};
