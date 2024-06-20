import * as path from "node:path";
import { fileURLToPath } from "url";

/**
 * アプリのルートパスを取得する
 * build前は src/
 * build後は dist/
 */
export const getRootPath = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const rootPath = path.join(__dirname, "../../");

  return rootPath;
};
