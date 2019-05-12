const {WebClient} = require('@slack/client');

const token = '';
const web = new WebClient(token);

/**
 * 引数`whatToSay`のテキストをイベントを検知したチャンネルへ送信する。
 *
 * @author hirooka
 * @param whatToSay Slackに投稿するメッセージ
 * @param event slackのevent情報
 */
function sendAMessage(whatToSay, event) {
    web.chat.postMessage({
        as_user: true,
        channel: event.channel,
        text: whatToSay
    });
}

module.exports = sendAMessage;
