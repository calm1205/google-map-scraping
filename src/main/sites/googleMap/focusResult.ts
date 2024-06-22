import { keyDown, sleep } from "@/main/libs/index.js";
import { ElementHandle, Page } from "puppeteer";

export const focusResult = async ({
  page,
  nextResult,
}: {
  page: Page;
  nextResult: ElementHandle<Element>;
}) => {
  if (!nextResult) return console.log("> focusすべき検索結果がありません");
  await keyDown(page, "ArrowDown");
  await keyDown(page, "ArrowDown");
  await keyDown(page, "ArrowDown");
  await nextResult.click();
  await sleep(2000);
  await nextResult.click();
};
