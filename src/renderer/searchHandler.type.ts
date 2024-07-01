import { CsvObject } from "@/renderer/libs/exportCsv";
import { ScrapingArgs } from "@/main/sites/googleMap";

export type SearchHandler = {
  inputWord: string;
  isSearching: boolean;
  isExportable: boolean;
  results: CsvObject[];
  resultCount: number;
  dom: {
    main: HTMLElement | null;
    isAvailable: HTMLElement | null;
    input: HTMLInputElement | null;
    searchButton: HTMLButtonElement | null;
    stopButton: HTMLButtonElement | null;
    exportButton: HTMLButtonElement | null;
    loader: HTMLDivElement | null;
    maxCount: HTMLInputElement | null;
    resultCount: HTMLSpanElement | null;
    searchResults: HTMLUListElement | null;
  };
  init: () => void;
  isAvailable: () => void;
  setStartSearch: () => void;
  setStopSearch: () => void;
  _toSearchingStatus: () => void;
  _toSearchedStatus: () => void;
  _resetResults: () => void;
  _activateStart: () => void;
  _activateStop: () => void;
  _activateLoading: () => void;
  _activateExport: () => void;
  _disableSearch: () => void;
  _disableStop: () => void;
  _disableLoading: () => void;
  _disableExport: () => void;
  export: () => void;
  updateResults: (companyInfo: CsvObject) => void;
  incrementResultCount: () => void;
};
