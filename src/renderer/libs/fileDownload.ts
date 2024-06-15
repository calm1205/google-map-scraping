/**
 * client側でファイルをダウンロードする
 */
export const fileDownload = (content: string, filename: string) => {
  console.log("content", content);

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
