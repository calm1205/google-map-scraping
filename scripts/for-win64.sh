# chromeのバイナリファイルをコピー
cp -iRa chromeBinaries/chrome-win64 dist/chrome-binary

chrome_path="chrome-binary/chrome.exe"

# puppeteerの参照先のchromeのバイナリファイルをwin64用に変更する
sed -i "" "s/CHROME_PATH/$chrome_path/g" dist/main/sites/googleMap/index.js

echo "> Copied chrome-win64 to dist/ directory."