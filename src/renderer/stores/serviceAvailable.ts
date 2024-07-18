import { defineStore } from "pinia";

export const useServiceAvailableStore = defineStore("serviceAvailable", {
  state: () => ({
    isAvailable: false,
  }),
  getters: {
    getIsAvailable: (state) => state.isAvailable,
  },
  actions: {
    /**
     * サービスの利用権限があるか確認
     * */
    async checkServiceAvailable() {
      const { isPermitted, macAddresses } =
        await window.electronAPI.isPermitted();

      if (isPermitted) {
        console.log(`許可されています: [${isPermitted}], ${macAddresses}`);
        this.isAvailable = true;
      } else {
        console.error(`許可されていません: ${macAddresses}`);
        this.isAvailable = false;
      }
    },
  },
});
