/**
 * 検索ステータス
 */
export const searchStatus = {
  isSearching: false,
  startSearching: () => {
    searchStatus.isSearching = true;
  },
  stopSearching: () => {
    searchStatus.isSearching = false;
  },
};
