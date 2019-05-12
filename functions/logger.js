require('date-utils');

module.exports = class Logger {

    static infoWithPrefix(prefix, message) {
        console.info(dateCreator() + '[INFO] : ' + '\u001b[36m' + prefix + ": " + '\u001b[33m' + message + '\u001b[0m');
    };

    static info(message) {
        console.info(dateCreator() + '[INFO] : ' + '\u001b[36m' + message + '\u001b[0m');
    };


};

function dateCreator() {
    const df = new Date();
    return `[${df.toFormat('YYYY/MM/DD:HH:MI:SS')}] `
}


