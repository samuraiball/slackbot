const {RTMClient} = require('@slack/client');
const weatherChecker = require('./functions/weather-checker');
const facilitatorDecider = require('./functions/facilitator-decider');

// BotのAuthトークンを設定する
const token = process.env.SLACK_BOT_OAUTH_TOKEN;
const rtm = new RTMClient(token);

const slack = rtm.start();
console.log('start');

// front controller
rtm.on('message', (event) => {

    if (event.text !== undefined) {
        if (event.text.match(/(.*ふぁしり.*|.*しょき.*)/)) {
            facilitatorDecider(event);
        } else if (event.text.match(/.*てんき.*/)) {
            weatherChecker(event);
        }
    } else {
        console.error('Undefined object called');
    }
});

