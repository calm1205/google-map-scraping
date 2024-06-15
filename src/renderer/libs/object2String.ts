import { CsvObject } from "./exportCsv";

const headerObject: CsvObject = {
  name: "",
  address: "",
  phoneNumber: "",
  webSite: "",
};

const SPLITTER = ",";
const headerString = Object.keys(headerObject).join(SPLITTER) + "\n";

/**
 * オブジェクトの配列をカンマ区切り文字列に変換する
 */
export const object2String = (input: CsvObject[]) =>
  input
    .map((object, index) => {
      const row = Object.values(object).join(SPLITTER);

      if (index === 0) return headerString + row;

      return row;
    })
    .join("\n");
