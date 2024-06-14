import { searchHandler } from "./searchHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("start renderer!");
  searchHandler.init();
});
