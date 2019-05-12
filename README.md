## todo
* 環境変数から`Bot User OAuth Access Token`を読み出せるように変える。
* READMEを書き直す。

# 開発チームサポートBot
## 動作環境環境
* Node.js

## 実行方法
1. Slack botのアカウントを作成する。
2. 作成時に払い出されるbotの`Bot User OAuth Access Token`を設定しbotを起動する。
```
node main.js
```
3. botを動かしたいチャンネルに招待する。

# 機能
## facilitator-decider
### 概要
ファシリテータや初期をランダムで選んで決めてくれる機能

## 実行方法
names.txtに名前リストを書く
Slackで`ふぁしり`,もしくは`しょき`という文字列が含まれた文章をつぶやく

## weather-checker
### 概要
本日と明日の天気を教えてくれる機能

## 実行方法
Slackで`てんき`という文字列が含まれた文章をつぶやく
