# npx electron でのローカル起動用に index.html のパスを修正するスクリプト
sed -i "" "s/index.html/dist\/index.html/g" dist/main/main.js