/**
 * サービスの利用権限があるか確認
 * */
export const isServiceAvailable = async ({
  mainDom,
  isAvailableDom,
}: {
  mainDom: Element | null;
  isAvailableDom: Element | null;
}) => {
  const { isPermitted, macAddresses } = await (
    window as any
  ).electronAPI.isPermitted();
  if (isPermitted) {
    console.log(`許可されています: [${isPermitted}], ${macAddresses}`);
    mainDom?.classList.remove("hidden");
    mainDom?.classList.add("flex");
    isAvailableDom?.classList.add("hidden");
  } else {
    console.error(`許可されていません: ${macAddresses}`);
    return;
  }
};
