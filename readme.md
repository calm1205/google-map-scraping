# web-scraping

google map のスクレイピング

フリーワードで検索した結果を tsv で出力

<br/><br/>

## local development

```bash
$ npm run build # distファイルにbuild出力
$ cp chrome-mac-arm64 dist/ # chromeのバイナリをdistに複製
$ npm run start # electronアプリ起動
```

<br/><br/>

## packaging

```bash
$ npm run package
# or
$ npm run package:win
```

distディレクトリ内にchromeのバイナリは入れないこと。
chromeのバイナリは400MB以上あるため、パッケージング時には除外する。

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
デフォルトではelectronのapp起動時にchromeが存在しない場合には自動でインストールされる。（が.puppeteer.rcで自動インストールをOFFにしている）
（手動インストールの場合は`npx puppeteer browsers install chrome`）

なのでローカルで開発する際にはhttps://googlechromelabs.github.io/chrome-for-testing/ からchromeのバイナリをダウンロードして、distディレクトリに配置する必要がある。
