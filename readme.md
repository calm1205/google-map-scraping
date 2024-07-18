# web-scraping

google map のスクレイピング

フリーワードで検索した結果を tsv で出力

<br/><br/>

## local development

```bash
$ npm run build:mac # distファイルにbuild出力
$ npm run start # electronアプリ起動
```

<br/><br/>

## packaging

```bash
$ npm run build:mac
$ npm run package:mac
```

<br/><br/>

## 構成

### 主要ライブラリ

- electron
- puppeteer

<br/>

### ディレクトリ構成

- src
  - main
    - electronのメインプロセス
    - node.jsのライブラリ実行（puppeteerによるスクレイピング）
  - renderer
    - electronのレンダラプロセス
    - dom操作

<br/>

### 注意点

puppeteerは起動するためにlocalにchromeのバイナリをインストールする必要がある。
デフォルトではelectronのapp起動時にchromeが存在しない場合には自動でインストールされる。

ローカルで開発する際にはhttps://googlechromelabs.github.io/chrome-for-testing/ からchromeのバイナリをダウンロードして、chromeBinariesディレクトリに配置が必要

```bash
# macOSのgatekeeperすり抜け
xattr -c ~/Downloads/app-mac/web-scraping.app
```
