import fs from "node:fs";

export const exportCsv = (input: {}) => {
  try {
    fs.writeFileSync("test.csv", input);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
};
