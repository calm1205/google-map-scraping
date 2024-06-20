import packager from "@electron/packager";
import { sharedConfig } from "./sharedConfig";

try {
  const appPath = await packager({
    ...sharedConfig,
    platform: "win32",
    arch: "x64",
  });
  console.log("exported: ", appPath);
} catch (error) {
  console.error(error);
}
