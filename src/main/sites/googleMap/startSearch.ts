import { sleep } from "../../libs/index.js";
import { Page } from "puppeteer";

export const startSearch = async (page: Page, input: string) => {
  const keywords = input.split(" ");

  let mergedKeyword = "";
  for (let i = 0; i < keywords.length; i++) {
    mergedKeyword += keywords[i];
    await page.evaluate(
      () =>
        ((
          document.querySelector("#searchbox input") as HTMLInputElement
        ).value = "")
    );
    await page.type("#searchbox input", mergedKeyword);
    await page.click("#searchbox-searchbutton");
    await sleep(3000);
    mergedKeyword += " ";
  }
};
