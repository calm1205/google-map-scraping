import { defineStore } from "pinia";

type Status = "beforeSearch" | "searching" | "searched";
type CompanyInfo = {
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
    async search(keyword: string) {
      this.status = "searching";

      try {
        const companyInfo = await (window as any).electronAPI.scraping({
          keyword,
          maxCount: 10,
        });
        this.results = companyInfo;
      } catch (error) {
        console.error(error);
      }
    },
    resetResults() {
      this.results = [];
    },
  },
});
