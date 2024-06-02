## setup

### scraping 対象

- https://jgoodtech.smrj.go.jp/
  - 中小企業基盤整備機構が運営するサイトで、企業情報を無料で検索・閲覧可能。
- Places API of Google Maps Platform

### install chrome driver

不要な可能性あり

[chrome driver list](https://googlechromelabs.github.io/chrome-for-testing/#stable)から zip をダウンロード

```bash
unzip ~/Downloads/chromedriver_mac-arm64.zip
cp ./chromedriver_mac-arm64/chromedriver /usr/local/bin/
chromedriver --version
```
