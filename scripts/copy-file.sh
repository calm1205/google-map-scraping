cp index.html dist/index.html
cp -r node_modules dist/node_modules
cp package.json dist/package.json

# package.jsonのpathを修正
sed -i "" "s/dist\/main\/main.js/main\/main.js/g" dist/package.json

echo "> Copied index.html, node_modules, and package.json to dist/ directory."