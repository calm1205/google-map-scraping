import { WebDriver } from "selenium-webdriver";

/**
 * キーを押下
 */
export const keyDown = async (driver: WebDriver, key: string) => {
  await driver
    .actions({ async: true, bridge: undefined })
    .keyDown(key)
    .perform();
};
