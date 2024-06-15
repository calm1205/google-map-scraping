import { keyDown } from "../../../libs/index.js";
import { Page } from "puppeteer";

export const focusNextResult = async (page: Page) => {
  // ウェブサイトがある場合はTABを１回スキップ
  const focusedDom = await page.evaluateHandle(() => document.activeElement);
  const parentDom = await focusedDom.getProperty("parentNode");

  try {
    await parentDom.asElement()?.$(".lcr4fd.S9kvJb");
    await keyDown(page, "Tab");
  } catch (error) {
    console.info("ウェブサイトのボタンがありません");
  }

  await keyDown(page, "Tab"); // ルートにフォーカス
  await keyDown(page, "Tab"); // 次の検索結果にフォーカス
  await keyDown(page, "ArrowDown");
  await keyDown(page, "ArrowDown");
  await keyDown(page, "ArrowDown");
  await keyDown(page, "Enter");
};
