import { sleep } from "../../libs/index.js";
import puppeteer from "puppeteer";

const URL = "https://www.google.com/maps/";

export const googleMap = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(URL);

  // Set screen size.
  await page.setViewport({ width: 1080, height: 1024 });

  // Type into search box.
  await page.type("#searchbox input", "企業");
  await page.click("#searchbox-searchbutton");
  await sleep(1000);

  await browser.close();
};
