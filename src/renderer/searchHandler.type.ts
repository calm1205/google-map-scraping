export type SearchHandler = {
  inputWord: string;
  isSearching: boolean;
  isExportable: boolean;
  dom: {
    input: HTMLInputElement | null;
    searchButton: HTMLButtonElement | null;
    stopButton: HTMLButtonElement | null;
    exportButton: HTMLButtonElement | null;
    loader: HTMLDivElement | null;
  };
  init: () => void;
  startSearch: () => void;
  stopSearch: () => void;
  export: () => void;
  scraping: (word: string, stop: boolean) => void;
};
