type Args = {
  content: string;
  filename: string;
};

/**
 * client側でファイルをダウンロードする
 */
export const fileDownload = ({ content, filename }: Args) => {
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
