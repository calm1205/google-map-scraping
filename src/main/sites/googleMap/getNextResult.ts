import { Page, ElementHandle } from "puppeteer";

/**
 * 次の検索結果を取得
 */
export const getNextResult = async ({
  page,
  target,
}: {
  page: Page;
  target: ElementHandle<Element> | null | undefined;
}): Promise<ElementHandle<Element> | null> => {
  if (!target) return null;

  const searchResultParent = await page.evaluateHandle(
    async (element) => element?.parentElement,
    target
  );

  const searchResultParentNext = (await page.evaluateHandle(
    async (element) => element?.nextElementSibling?.nextElementSibling,
    searchResultParent
  )) as ElementHandle<Element>;

  const nextResult = await searchResultParentNext?.$(".Nv2PK");

  if (!nextResult) console.log("> 次の検索結果が見つかりません");

  return nextResult as ElementHandle<Element>;
};
