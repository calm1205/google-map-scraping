import { Page, ElementHandle } from "puppeteer";

/**
 * 次の検索結果を取得
 */
export const getNextResult = async (
  page: Page,
  target: ElementHandle<Element> | null | undefined
) => {
  if (!target) return;

  const searchResultParent = await page.evaluateHandle(
    async (element) => element?.parentElement,
    target
  );
  console.log("searchResultParent: ", searchResultParent);
  const searchResultParentNext = await page.evaluateHandle(
    async (element) => element?.nextElementSibling?.nextElementSibling,
    searchResultParent
  );

  return searchResultParentNext;
};
