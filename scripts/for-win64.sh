# puppeteerの参照先のchromeのバイナリファイルをwin64用に変更する
sed -i "" "s/executablePath: .*$/executablePath: path.join\(getRootPath\(\), CHROME_PATH.win64\),/g" dist/main/sites/googleMap/index.js