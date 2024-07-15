import packager from "@electron/packager";
import { sharedConfig } from "./sharedConfig";

try {
  const appPath = await packager({
    ...sharedConfig,
    platform: "darwin",
    arch: "arm64",
  });
  console.log("exported: ", appPath);
} catch (error) {
  console.error(error);
}
