# web-scraping

google map のスクレイピング

フリーワードで検索した結果を tsv で出力

<br/><br/>

## start

```bash
$ npm run start
```

実行前に`src`ディレクトリを`dist`に同期する（トランスパイル + 差分の即時反映）

<br/><br/>

## package

```bash
$ npm run package
```

<br/><br/>

## 構成

- src
  - main
    - electronのメインプロセス
    - node.jsのライブラリ実行（puppeteerによるスクレイピング）
  - renderer
    - electronのレンダラプロセス
    - dom操作

<br/><br/>

## 注意点

puppeteerは起動するためにlocalにchromeをインストールする必要がある。
electronのapp起動時にchromeが存在しない場合には自動でインストールされる。
そのためchrome自体はpackageに含めない。（`dist`内に`.cache`が存在してはならない）

https://github.com/puppeteer/puppeteer/blob/fdf40e90d5a9e21bef8c526cbaaee3b0e3425327/packages/browsers/test/src/chrome/chrome-data.spec.ts#L58

https://googlechromelabs.github.io/chrome-for-testing/
