const zip = require("electron-installer-zip");

zip(
  {
    dir: "./packed/web-scraping-darwin-arm64/web-scraping.app",
    out: "./app", // output ./app.zip
  },
  (err, res) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("zip complete!");
  }
);
