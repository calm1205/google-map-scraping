import * as os from "node:os";
import { permittedMacAddresses } from "./permittedMacAddresses.js";

/**
 * 利用できるかどうかをMacAddressで判定
 */
export const isPermitted = () => {
  const networkInterfaces = os.networkInterfaces();

  const macAddresses = Object.entries(networkInterfaces)
    .flatMap(([, value]) =>
      value?.map((interfaceCard) => interfaceCard?.mac).filter(Boolean)
    )
    .filter(Boolean) as string[];

  const isPermitted = macAddresses.find((macAddress) =>
    permittedMacAddresses.includes(macAddress)
  );

  return { isPermitted, macAddresses };
};
