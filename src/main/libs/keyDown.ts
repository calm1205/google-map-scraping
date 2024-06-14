import { KeyInput, Page } from "puppeteer";

/**
 * キーを押下
 */
export const keyDown = async (page: Page, key: KeyInput) => {
  await page.keyboard.down(key);
};
