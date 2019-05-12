const {WebClient} = require('@slack/client');

const token = process.env.SLACK_BOT_OAUTH_TOKEN;
const web = new WebClient(token);
const Logger = require('./logger');


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

    Logger.info('\n\nsent massage:\n' + whatToSay + '\n');
}

module.exports = sendAMessage;
