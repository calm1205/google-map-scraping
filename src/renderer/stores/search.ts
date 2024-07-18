import { defineStore } from "pinia";

type Status = "beforeSearch" | "searching" | "searched";
export type CompanyInfo = {
  name: string;
  address: string;
  phoneNumber: string;
  webSite: string;
};

export const useSearchStore = defineStore("search", {
  state: () => ({
    status: "beforeSearch" as Status,
    results: [] as CompanyInfo[],
  }),
  getters: {
    getStatus: (state) => state.status,
    getResults: (state) => state.results,
  },
  actions: {
    /**
     * 企業の検索処理を開始
     */
    async search(keyword: string) {
      this.status = "searching";

      try {
        const companyInfo = await (window as any).electronAPI.scraping({
          keyword,
        });
        this.results = companyInfo;
      } catch (error) {
        console.error(error);
      } finally {
        this.status = "searched";
      }
    },

    /**
     * 検索の中断
     */
    async stopSearching() {
      try {
        await window.electronAPI.stopScraping();
      } catch (error) {
        console.error(error);
      }
    },

    /**
     * 検索結果をリセット
     */
    resetResults() {
      this.results = [];
    },

    /**
     * 検索結果に随時追加
     */
    appendResults(companyInfo: CompanyInfo) {
      this.results.push(companyInfo);
    },
  },
});
