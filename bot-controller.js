const weatherChecker = require('./functions/weather-checker');
const facilitatorDecider = require('./functions/facilitator-decider');
const Logger = require('./functions/logger');

/**
 * フロントコントローラー
 * @author hirooka
 * @param rtm rmt
 */
function botController(rtm) {

    rtm.on('message', (event) => {
        Logger.info('message caught');
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