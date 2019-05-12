require('date-utils');

module.exports = class Logger {

    static info(text) {
        console.info( dateCreator() + '\u001b[36m' + text + '\u001b[0m');
    };
};

function dateCreator() {
    const df = new Date();
    return `[${df.toFormat('YYYY/MM/DD:HH:MI:SS')}] [INFO] : `
}


