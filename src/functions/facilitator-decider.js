const fs = require('fs');
const readline = require("readline");
const names = [];
const NAME_LIST_PATH = './resource/names.txt';

const stream = fs.createReadStream(NAME_LIST_PATH, "utf8");
const reader = readline.createInterface({input: stream});

reader.on("line", (data) => {
    names.push(data)
});


function facilitatorDecider() {

    const n = Math.floor(Math.random() * names.length);
    const chosenPerson = names[n];

    names.splice(n, 1);
    if (names.length == 0) {
        const stream = fs.createReadStream(NAME_LIST_PATH, "utf8");
        const reader = readline.createInterface({input: stream});
        reader.on("line", (data) => {
            names.push(data)
        });
    }
    // リストの残りのメンバーを表示
    console.log(names);
    return chosenPerson + 'さん。\nお願いします。';
}

module.exports = facilitatorDecider;
