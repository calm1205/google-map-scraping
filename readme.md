# web-scraping

## start

```bash
$ npm run start
```

`electron-forge start`の実行前に`src`ディレクトリを`dist`に同期する（トランスパイル + 差分の即時反映）

終了時は `Ctrl + C` で終了（electron のブラウザを閉じても同期が続く）

<br/><br/>

## build

```bash
$ npm run make
```

`electron-forge make`で`out/make`ディレクトリにアプリケーションをビルドして出力する
