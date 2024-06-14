import { sleep } from "../../../libs/index.js";
import { ElementHandle, Page } from "puppeteer";

/**
 * 複数の検索結果の中で最初のものをクリック（フォーカス）
 */
export const focusFirstResult = async (
  dom: ElementHandle<Element> | null | undefined,
) => {
  if (!dom) return;

  await dom.click();
  await sleep(1000);
  await dom.click();
};
