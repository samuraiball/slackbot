const {RTMClient} = require('@slack/client');
const botController = require('./bot-controller');
const logger = require('./functions/logger');

// BotのAuthトークンを設定する
const token = process.env.SLACK_BOT_OAUTH_TOKEN;
const rtm = new RTMClient(token);

const slack = rtm.start();

slack.then(() => {
    logger.info('start');
    botController(rtm)
});

