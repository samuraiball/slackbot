const {WebClient} = require('@slack/client');

const token = '';
const web = new WebClient(token);


function sendAMessage(whatToSay, event) {
    web.chat.postMessage({
        as_user: true,
        channel: event.channel,
        text: whatToSay
    });
}

module.exports = sendAMessage;
