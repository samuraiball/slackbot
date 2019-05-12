require('date-utils');

module.exports = class Logger {

    static info(text) {
        const df = new Date();
        console.info(`[${df.toFormat('YYYY年MM月DD日 HH24時MI分SS秒')}] [INFO] : ` + '\u001b[36m' + text + '\u001b[0m');
    };
};


