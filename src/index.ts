import { Builder, Browser } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import { exportTsv } from "@/libs/exportTsv/exportTsv";
import { googleMap } from "./sites/googleMap/index";

const options = new chrome.Options();
options.addArguments("--headless=new");

export const scraping = async (word: string, stop: boolean) => {
  const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  try {
    const googleMapInfo = await googleMap(driver, word, stop);
    console.log(googleMapInfo);
    // exportTsv(googleMapInfo);
  } catch (error) {
    console.error(error);
  } finally {
    await driver.quit();
  }
};
