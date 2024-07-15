# chromeのバイナリファイルをコピー
cp -iRa chromeBinaries/chrome-mac-arm64 dist/chrome-binary

chrome_path="chrome-binary/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"

# puppeteerの参照先のchromeのバイナリファイルをmacArm64用に変更する
sed -i "" "s|CHROME_PATH|$chrome_path|g" dist/main/sites/googleMap/index.js

echo "> Copied chrome-binary to dist/ directory."