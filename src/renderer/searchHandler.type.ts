import { ScrapingArgs } from "@/main/sites/googleMap";

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
  _toSearchingStatus: () => void;
  _toSearchedStatus: () => void;
  _activateStart: () => void;
  _activateStop: () => void;
  _activateLoading: () => void;
  _activateExport: () => void;
  _disableSearch: () => void;
  _disableStop: () => void;
  _disableLoading: () => void;
  _disableExport: () => void;
  export: () => void;
  scraping: (args: ScrapingArgs) => any;
};
