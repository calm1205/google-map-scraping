import { searchHandler } from "./searchHandler";

document.addEventListener("DOMContentLoaded", () => {
  console.log("start renderer!");
  searchHandler.init();
});
