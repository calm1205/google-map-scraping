# tailwindcssのビルド
npm run tailwind

# renderer(client side)のビルド
npm run build

# main(app)のビルド
npm run transpile
# main(app)のビルドにrendererも含まれるため、dist/rendererを削除
rm -rf dist/renderer
echo "> Removed dist/renderer directory."

# puppeteerのみを定義したpackage.jsonをdist/にコピー
cp ./scripts/package.org.json dist/package.json
echo "> Copied package.org.json to dist/ directory."

cd dist
npm install