npm run tailwind
npm run build
npm run transpile
rm -rf dist/renderer
echo "> Removed dist/renderer directory."

cp package.json dist/package.json
echo "> Copied package.json to dist/ directory."