import { Options } from "@electron/packager";

/**
 * electron/packagerの共通設定
 */
export const sharedConfig: Options = {
  dir: ".",
  out: "./packed",
  overwrite: true,
  ignore: [
    ".git",
    "src",
    "tailwind.config.js",
    ".prettierrc.json",
    "tsconfig.json",
    "packed",
  ],
};
