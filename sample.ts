import { exec } from "node:child_process";
import * as os from "node:os";

const getMacStdout = `
Physical Address    Transport Name
=================== ==========================================================
00-0D-3A-52-99-1D   \Device\Tcpip_{2BF548BA-63FA-43F1-A106-EF34A0BCD7DC}
`;

const getMacAddressOnWindows = () => {
  const macAddress = getMacStdout.match(
    /(?:[0-9a-fA-F]{2}[:-]){5}(?:[0-9a-fA-F]{2})/
  );
  console.log(`MAC address on windows: ${macAddress}`);
};
console.log(getMacAddressOnWindows());

const MAC_ADDRESS_REGEX = /(?:[0-9a-fA-F]{2}[:-]){5}(?:[0-9a-fA-F]{2})/;

/** osに依存するnetwork情報を出力するコマンドを取得 */
const getCommandByPlatform = (platform: NodeJS.Platform) => {
  let command = "";
  switch (platform) {
    case "darwin":
    case "linux":
      command = "ifconfig";
      break;
    case "win32":
      command = "getmac";
      break;
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
  return command;
};

const getMacAddress = () => {
  const platform = os.platform();
  const command = getCommandByPlatform(platform);

  exec(command, (error, stdout, _stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    const macAddress = stdout.match(MAC_ADDRESS_REGEX);
    console.log(`MAC address: ${macAddress}`);
  });
};

console.log("Getting MAC address...");
