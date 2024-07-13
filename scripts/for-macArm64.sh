# chromeのバイナリファイルをコピー
if [ ! -e dist/chrome-mac-arm64 ]; then
  cp -iRa chromeBinaries/chrome-mac-arm64 dist/chrome-mac-arm64
fi

# puppeteerの参照先のchromeのバイナリファイルをmacArm64用に変更する
sed -i "" "s/executablePath: .*$/executablePath: path.join\(getRootPath\(\), CHROME_PATH.macArm64\),/g" dist/main/sites/googleMap/index.js

echo "> Copied chrome-macArm64 to dist/ directory."