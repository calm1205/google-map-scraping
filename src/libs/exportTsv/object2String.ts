import { TsvObject } from "./type";

const headerObject: TsvObject[number] = {
  name: "",
  address: "",
  phoneNumber: "",
};
const headerString = Object.keys(headerObject).join("\t") + "\n";

/**
 * オブジェクトの配列をタブ区切り文字列に変換する
 */
export const object2String = (input: TsvObject) =>
  input
    .map((object, index) => {
      const row = Object.values(object).join("\t");

      if (index === 0) return headerString + row;

      return row;
    })
    .join("\n");
