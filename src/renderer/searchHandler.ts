import { exportCsv } from "./libs/exportCsv.js";
import { SearchHandler } from "./searchHandler.type";

/**
 * 検索時の処理
 */
export const searchHandler: SearchHandler = {
  inputWord: "",
  isSearching: false,
  isExportable: false,
  results: [],
  dom: {
    input: null,
    searchButton: null,
    stopButton: null,
    loader: null,
    exportButton: null,
  },

  /**
   * 初期化
   */
  init() {
    this.dom.input = document.querySelector("#search-input");
    this.dom.searchButton = document.querySelector("#search-button");
    this.dom.stopButton = document.querySelector("#stop-button");
    this.dom.loader = document.querySelector("#loader");
    this.dom.exportButton = document.querySelector("#export-button");

    this.startSearch();
    this.stopSearch();
    this.export();
  },

  /**
   * 検索時の処理
   */
  startSearch() {
    this.dom.searchButton?.addEventListener("click", async () => {
      this.inputWord = this.dom.input?.value ?? "";

      this._toSearchingStatus();

      try {
        this.results = await this.scraping({
          keyword: this.inputWord,
          maxCount: 3,
        });
      } catch (error) {
        console.error(error);
      }

      this._toSearchedStatus();

      console.log(this.results);
    });
  },

  /**
   * ローディング中のステータスに変更
   */
  _activateLoading() {
    if (this.dom.loader) this.dom.loader.style.display = "flex";
  },
  /**
   * ローディング中のステータスを解除
   */
  _disableLoading() {
    if (this.dom.loader) this.dom.loader.style.display = "none";
  },
  /**
   * 検索中のステータスに変更
   */
  _toSearchingStatus() {
    this.isSearching = true;
    this._activateLoading();
    this._disableSearch();
    this._disableExport();
    this._activateStop();
  },
  /**
   * 検索後のステータスに変更
   */
  _toSearchedStatus() {
    this.isSearching = false;
    this._activateExport();
    this._activateStart();
    this._disableLoading();
    this._disableStop();
  },
  /**
   * 検索ボタンの無効化
   */
  _disableSearch() {
    if (this.dom.searchButton) this.dom.searchButton.disabled = true;
  },
  /**
   * スタートボタンの活性化
   */
  _activateStart() {
    if (this.dom.searchButton) this.dom.searchButton.disabled = false;
  },
  /**
   * ストップボタンの活性化
   */
  _activateStop() {
    if (this.isSearching) return;
    if (this.dom.stopButton) this.dom.stopButton.style.display = "block";
  },
  /**
   * エクスポートボタンの活性化
   */
  _activateExport() {
    this.isExportable = true;
    if (this.dom.exportButton) this.dom.exportButton.style.display = "block";
  },
  /**
   * ストップボタンの無効化
   */
  _disableStop() {
    if (this.dom.stopButton) this.dom.stopButton.style.display = "none";
  },
  /**
   * エクスポートボタンの無効化
   */
  _disableExport() {
    this.isExportable = false;
    if (this.dom.exportButton) this.dom.exportButton.style.display = "none";
  },

  /**
   * 検索の中断
   */
  stopSearch() {
    this.dom.stopButton?.addEventListener("click", () => {
      this._toSearchedStatus();
    });
  },

  /**
   * エクスポート
   */
  export() {
    this.dom.exportButton?.addEventListener("click", () => {
      exportCsv(this.results);
    });
  },

  /**
   * スクレイピング
   */
  async scraping({ keyword, maxCount }) {
    const companyInfo = await (window as any).electronAPI.scraping({
      keyword,
      maxCount,
    });
    return companyInfo;
  },
};
