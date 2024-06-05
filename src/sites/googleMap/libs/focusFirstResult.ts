import { sleep } from "@/src/libs";
import { WebElement } from "selenium-webdriver";

/**
 * 複数の検索結果の中で最初のものをクリック（フォーカス）
 */
export const focusFirstResult = async (doms: WebElement[]) => {
  await doms[0].click();
  await sleep(1000);
  await doms[0].click();
};
