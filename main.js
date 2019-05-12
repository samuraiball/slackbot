const {RTMClient} = require('@slack/client');
const weatherChecker = require('./functions/weather-checker');
const facilitatorDecider = require('./functions/facilitator-decider');

// BotのAuthトークンを設定する
//todo: 環境変数からの読み込みへ変更する
const token = '';
const rtm = new RTMClient(token);

const slack = rtm.start({});
console.log('start');

// front controller
rtm.on('message', (event) => {

    console.log('event called');

    if (event.text !== undefined) {
        if (event.text.match(/(.*ふぁしり.*|.*しょき.*)/)) {
            facilitatorDecider(event);
        } else if (event.text.match(/.*てんき.*/)) {
            weatherChecker(event);
        }
    } else {
        console.log('Undefined object called');
    }
});

