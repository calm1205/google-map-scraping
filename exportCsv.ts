import fs from "node:fs";

export const exportCsv = (input: string) => {
  try {
    fs.writeFileSync("test.csv", input);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
};

exportCsv("Hello, World!");
