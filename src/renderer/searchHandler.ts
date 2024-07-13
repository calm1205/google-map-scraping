import { CsvObject, exportCsv } from "./libs/exportCsv/exportCsv.js";
import { SearchHandler } from "./searchHandler.type";
import { isServiceAvailable } from "./libs/isServiceAvailable.js";

/**
 * 検索時の処理
 */
export const searchHandler: SearchHandler = {
  inputWord: "",
  isSearching: false,
  isExportable: false,
  results: [],
  resultCount: 0,
  dom: {
    input: null,
    searchButton: null,
    stopButton: null,
    loader: null,
    exportButton: null,
    maxCount: null,
    resultCount: null,
    searchResults: null,
  },

  /**
   * 初期化
   */
  async init() {
    const mainDom = document.querySelector("#main");
    const isAvailableDom = document.querySelector("#isAvailable");
    await isServiceAvailable({ mainDom, isAvailableDom });

    this.dom.input = document.querySelector("#search-input");
    this.dom.searchButton = document.querySelector("#search-button");
    this.dom.stopButton = document.querySelector("#stop-button");
    this.dom.loader = document.querySelector("#loader");
    this.dom.exportButton = document.querySelector("#export-button");
    this.dom.maxCount = document.querySelector("#max-count");
    this.dom.resultCount = document.querySelector("#result-count");
    this.dom.searchResults = document.querySelector("#search-results");

    (window as any).electronAPI.sendResult((companyInfo: CsvObject) => {
      this.incrementResultCount();
      this.updateResults(companyInfo);
    });

    this.setStartSearch();
    this.setStopSearch();
    this.export();
  },

  /**
   * 検索時の処理
   */
  setStartSearch() {
    this.dom.searchButton?.addEventListener("click", async () => {
      this.inputWord = this.dom.input?.value ?? "";

      this._resetResults();
      this._toSearchingStatus();

      const maxCount = Number(this.dom.maxCount?.value);

      try {
        const companyInfo = await (window as any).electronAPI.scraping({
          keyword: this.inputWord,
          maxCount,
        });
        this.results = companyInfo;
      } catch (error) {
        console.error(error);
      }

      this._toSearchedStatus();

      console.log(this.results);
    });
  },

  _resetResults() {
    this.results = [];
    this.resultCount = 0;
  },
  _activateLoading() {
    if (this.dom.loader) this.dom.loader.style.display = "flex";
  },
  _disableLoading() {
    if (this.dom.loader) this.dom.loader.style.display = "none";
  },
  _toSearchingStatus() {
    this.isSearching = true;
    this._activateLoading();
    this._disableSearch();
    this._disableExport();
    this._activateStop();
  },
  _toSearchedStatus() {
    this.isSearching = false;
    this._activateExport();
    this._activateStart();
    this._disableLoading();
    this._disableStop();
  },
  _disableSearch() {
    if (this.dom.searchButton) this.dom.searchButton.disabled = true;
  },
  _activateStart() {
    if (this.dom.searchButton) this.dom.searchButton.disabled = false;
  },
  _activateStop() {
    if (this.isSearching) return;
    if (this.dom.stopButton) this.dom.stopButton.style.display = "block";
  },
  _activateExport() {
    this.isExportable = true;
    if (this.dom.exportButton) this.dom.exportButton.style.display = "block";
  },
  _disableStop() {
    if (this.dom.stopButton) this.dom.stopButton.style.display = "none";
  },
  _disableExport() {
    this.isExportable = false;
    if (this.dom.exportButton) this.dom.exportButton.style.display = "none";
  },

  setStopSearch() {
    this.dom.stopButton?.addEventListener("click", () => {
      this._toSearchedStatus();
    });
  },

  export() {
    this.dom.exportButton?.addEventListener("click", () => {
      exportCsv(this.results);
    });
  },

  incrementResultCount() {
    if (this.dom.resultCount) {
      const count = Number(this.dom.resultCount.textContent);
      this.dom.resultCount.textContent = (count + 1).toString();
      this.resultCount = count + 1;
    }
  },

  updateResults(companyInfo: CsvObject) {
    if (this.dom.searchResults === null) return;

    console.log("updateResults", companyInfo);
    const htmlText = `
            <p class="w-8">${this.resultCount}.</p>
            <div>
              <p class="font-bold">${companyInfo.name}</p>
              <p class="text-gray-400 text-sm">${companyInfo.address}</p>
              <p class="text-gray-400 text-sm">${companyInfo.phoneNumber}</p>
              <p class="text-gray-400 text-sm">${companyInfo.webSite}</p>
            </div>
          `;

    const newElement = document.createElement("li");
    newElement.className = "flex";
    newElement.innerHTML = htmlText;

    this.dom.searchResults?.appendChild(newElement);
  },
};
