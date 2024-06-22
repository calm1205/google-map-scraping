# chromeのバイナリファイルをコピー
cp -r chrome-win64 dist/chrome-win64

# puppeteerの参照先のchromeのバイナリファイルをwin64用に変更する
sed -i "" "s/executablePath: .*$/executablePath: path.join\(getRootPath\(\), CHROME_PATH.win64\),/g" dist/main/sites/googleMap/index.js

echo "> Copied chrome-win64 to dist/ directory."