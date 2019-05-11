const req = require('request');
const sendAMessage = require('./message-sender');


//東京都の天気
const tokyo = '130010';
const weatherOpt = {
    url: 'http://weather.livedoor.com/forecast/webservice/json/v1?city=' + tokyo,
    method: 'GET',
    json: true
};

function weatherChecker(event) {
     req(weatherOpt, (err, res, weather) => {
        if (event.text.match(/.*あした.*/)) {
            sendAMessage(`明日の${weather.location.prefecture}の天気は${weather.forecasts[1].telop}です!`, event);
        } else {
            sendAMessage(`今日の${weather.location.prefecture}の天気は${weather.forecasts[0].telop}です!`, event);
        }
    });
}

module.exports = weatherChecker;
