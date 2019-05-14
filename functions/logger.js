require('date-utils');

/**
 * ロガークラス
 * @author hirooka
 */
module.exports = class Logger {

    /**
     * INFOのロガー
     * @author hirooka
     * @param message ログメッセージ
     */
    static info(message) {
        console.info(dateCreator() + '[INFO] : ' + '\u001b[36m' + message + '\u001b[0m');
    };

    /**
     * INFOのロガー
     * Prefixの設定を行う際のAPI
     * @author hirooka
     * @param prefix ログのプリフィクス
     * @param message ログメッセージ
     */
    static infoWithPrefix(prefix, message) {
        console.info(dateCreator() + '[INFO] : ' + '\u001b[36m' + prefix + ": " + '\u001b[33m' + message + '\u001b[0m');
    };
};

function dateCreator() {
    const df = new Date();
    return `[${df.toFormat('YYYY/MM/DD:HH:MI:SS')}] `
}


