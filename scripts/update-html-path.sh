# npx electron でのローカル起動用に index.html のパスを修正するスクリプト
sed -i "" "s/loadFile(\"index.html\")/loadFile(\"dist\/index.html\")/g" dist/main/main.js