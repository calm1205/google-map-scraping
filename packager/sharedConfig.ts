import { Options } from "@electron/packager";

/**
 * electron/packagerの共通設定
 */
export const sharedConfig: Options = {
  dir: "./dist",
  out: "./packed",
  overwrite: true,
  // ignore: [
  //   ".git",
  //   "src",
  //   "scripts",
  //   "tailwind.config.js",
  //   ".prettierrc.json",
  //   "tsconfig.json",
  //   "packed",
  //   "packager",
  // ],
};
