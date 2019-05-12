# 開発チームサポートBot
## 動作環境環境
* Node.js

## 実行方法
1. Slack botのアカウントを作成する。
2. 作成時に払い出されるbotの`Bot User OAuth Access Token`を設定しbotを起動する。
```
export(or setx) SLACK_BOT_OAUTH_TOKEN=[Bot User OAuth Access Token]
node main.js
```
3. botを動かしたいチャンネルに招待する。  

# 機能
## facilitator-decider
### 概要
ファシリテータや初期をランダムで選んで決めてくれる機能  

## 実行方法
前提:アプリ起動時にnames.txtにメンバーの名前が改行込みで書かれている。  
`names.txt`
``` 
name1
name2
name3
name4
```
Slackで`ふぁしり`,もしくは`しょき`という文字列が含まれた文章をつぶやく

## weather-checker
### 概要
本日と明日の天気を教えてくれる機能  

## 実行方法
Slackで`てんき`という文字列が含まれた文章をつぶやく  