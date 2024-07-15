npm run tailwind
npm run build:vite
npm run transpile
rm -rf dist/renderer
cp package.json dist/package.json

if [ ! -e dist/chrome-mac-arm64 ]; then
  cp -iRa chromeBinaries/chrome-mac-arm64 dist/chrome-mac-arm64
fi