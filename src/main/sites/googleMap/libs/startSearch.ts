import { Page } from "puppeteer";

export const startSearch = async (page: Page, keyword: string) => {
  await page.type("#searchbox input", keyword);
  await page.click("#searchbox-searchbutton");
};
