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
