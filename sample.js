const fs = require('fs');
const readline = require('readline');
//=====пример по ссылке https://ru.stackoverflow.com/questions/1140258/javascript-%d0%b7%d0%b0%d0%bf%d0%b8%d1%81%d0%b0%d1%82%d1%8c-%d1%84%d0%b0%d0%b9%d0%bb-%d0%b2-%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2-%d0%bf%d0%be%d1%81%d1%82%d1%80%d0%be%d1%87%d0%bd%d0%be/1140266#1140266
function getFileLines(fn) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: fs.createReadStream(fn),
            crlfDelay: Infinity
        });

        const lines = [];

        rl.on('line', line => lines.push(line));
        rl.on('close', () => resolve(lines));
        rl.on('error', err => reject(err))
    });
}

getFileLines('1.txt').then(lines => console.log(lines));