/**
 * client側でファイルをダウンロードする
 */
export const fileDownload = (content: string, filename: string) => {
  // Blobオブジェクトを作成
  const blob = new Blob([content], { type: "text/plain" });

  // BlobオブジェクトからURLを作成
  const url = URL.createObjectURL(blob);

  // a要素を作成してクリックイベントを発火
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();

  // URLとa要素をクリーンアップ
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
