import { Builder, Browser, By } from "selenium-webdriver";

(async () => {
  const driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get("https://fc-kamei.net/BG1");

    const title = await driver.findElement(
      By.css("#list_header .brand_search_headline")
    );

    console.log(title);
  } finally {
    await driver.quit();
  }
})();
