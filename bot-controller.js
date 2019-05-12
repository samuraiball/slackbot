const weatherChecker = require('./functions/weather-checker');
const facilitatorDecider = require('./functions/facilitator-decider');
const Logger = require('./functions/logger');

function botController(rtm) {

    rtm.on('message', (event) => {
        Logger.info('event called');
        if (event.text !== undefined) {
            if (event.text.match(/(.*ふぁしり.*|.*しょき.*)/)) {
                facilitatorDecider(event);
            } else if (event.text.match(/.*てんき.*/)) {
                weatherChecker(event);
            }
        } else {
            Logger.info('Undefined object called');
        }
    });
}

module.exports = botController;