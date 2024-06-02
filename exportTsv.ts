import fs from "node:fs";
import { dummyData } from "./dummyData";

export type CsvObject = {
  name: string;
  address: string;
  phoneNumber: string;
}[];

export const exportCsv = (input: CsvObject) => {
  const csvString = object2String(input);
  try {
    fs.writeFileSync("output.tsv", csvString);
  } catch (err) {
    console.error(err);
  }
};

const object2String = (input: CsvObject) =>
  input
    .map((object, index) => {
      const row = Object.values(object).join("\t");
      if (index === 0) {
        const header = Object.keys(object).join(",") + "\n";
        return header + row;
      }
      return row;
    })
    .join("\n");

exportCsv(dummyData);
