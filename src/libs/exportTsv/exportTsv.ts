import fs from "node:fs";
import { CsvObject } from "./type";
import { object2String } from "./object2String";

const OUTPUT_FILE_NAME = "output.tsv";

export const exportCsv = (input: CsvObject) => {
  const csvString = object2String(input);

  try {
    fs.writeFileSync(OUTPUT_FILE_NAME, csvString);
  } catch (err) {
    console.error(err);
  }
};
