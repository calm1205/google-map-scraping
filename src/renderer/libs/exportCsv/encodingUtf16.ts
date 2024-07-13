/**
 * 文字列をUTF-16エンコードする
 */
export const encodingUtf16 = (str: string) => {
  const prefix = "\uFEFF";
  const content = prefix + str;
  const array = new Uint16Array(content.length);
  for (let i = 0; i < content.length; i++) {
    array[i] = content.charCodeAt(i);
  }
  return new Blob([array], { type: "text/plain;charset=UTF-16" });
};
