import { TsvObject } from "./type";

/**
 * オブジェクトの配列をタブ区切り文字列に変換する
 */
export const object2String = (input: TsvObject) =>
  input
    .map((object, index) => {
      const row = Object.values(object).join("\t");

      if (index === 0) {
        const header = Object.keys(object).join("\t") + "\n";
        return header + row;
      }

      return row;
    })
    .join("\n");
