interface Window {
  /**
   * electron
   * preload.tsで定義している
   */
  electronAPI: {
    sendResult: (companyInfo: CompanyInfo) => Promise<void>;
    stopScraping: () => Promise<void>;
    isPermitted: () => Promise<{ isPermitted: boolean; macAddresses: string }>;
  };
}
