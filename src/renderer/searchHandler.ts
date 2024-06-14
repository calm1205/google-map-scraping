import { SearchHandler } from "./searchHandler.type";
// import { scraping } from "../index";
// import { googleMap } from "../sites/puppeteer/googleMap";
import { ipcRenderer } from "electron";

/**
 * 検索時の処理
 */
export const searchHandler: SearchHandler = {
  inputWord: "",
  isSearching: false,
  isExportable: false,
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
    this.dom.searchButton?.addEventListener("click", () => {
      this.inputWord = this.dom.input?.value ?? "";
      this.isSearching = true;

      if (this.dom.searchButton) this.dom.searchButton.disabled = true;
      if (this.dom.loader) this.dom.loader.style.display = "flex";
      if (this.dom.stopButton) this.dom.stopButton.style.display = "flex";
      if (this.dom.exportButton) this.dom.exportButton.style.display = "none";
      this.isExportable = false;

      (window as any).versions.scraping();

      this.scraping(this.inputWord, this.isSearching);
    });
  },

  /**
   * 検索の中断
   */
  stopSearch() {
    this.dom.stopButton?.addEventListener("click", () => {
      this.isSearching = false;

      if (this.dom.searchButton) this.dom.searchButton.disabled = false;
      if (this.dom.loader) this.dom.loader.style.display = "none";
      if (this.dom.stopButton) this.dom.stopButton.style.display = "none";
      if (this.dom.exportButton) this.dom.exportButton.style.display = "block";
      this.isSearching = false;
      this.isExportable = true;
    });
  },

  /**
   * エクスポート
   */
  export() {
    this.dom.exportButton?.addEventListener("click", () => {
      console.log("export");
    });
  },

  /**
   * スクレイピング
   */
  async scraping(word, stop) {
    // await scraping(word, stop);
    // await googleMap();
  },
};
