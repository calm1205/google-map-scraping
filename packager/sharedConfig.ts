import { Options } from "@electron/packager";

/**
 * electron/packagerの共通設定
 */
export const sharedConfig: Options = {
  dir: "./dist",
  out: "./packed",
  overwrite: true,
};
