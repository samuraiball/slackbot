const fs = require('fs');
const readline = require("readline");
const sendAMessage = require('./message-sender');
const Logger = require('./logger');

// メンバーリストの初期作成
// todo:NAME_LIST_PATHは設定ファイルから読み込むようにする。
const NAME_LIST_PATH = './resources/names.txt';
const names = [];
const stream = fs.createReadStream(NAME_LIST_PATH, "utf8");
const reader = readline.createInterface({input: stream});
reader.on("line", (data) => {
    names.push(data);
});

/**
 * リストのメンバーを1名選びSlackにメッセージを送る。
 * @author hirooka
 */
function facilitatorDecider(event) {

    Logger.info('facilitator-decider is called');
    // メンバーの選定
    const n = Math.floor(Math.random() * names.length);
    const chosenPerson = names[n];

    // 選ばれたメンバーをリストから取り除く、
    // リストがEmptyになった場合は場合はnames.txtから再度読み込む
    names.splice(n, 1);
    if (names.length === 0) {
        const stream = fs.createReadStream(NAME_LIST_PATH, "utf8");
        const reader = readline.createInterface({input: stream});
        reader.on("line", (data) => {
            names.push(data);
        });
    }

    // リストの残りのメンバーをログに出力
    Logger.info('rest of list of members: ' + '\u001b[33m' + names + '\u001b[0m');

    sendAMessage(chosenPerson + 'さん。\nお願いします。', event);
}

module.exports = facilitatorDecider;
