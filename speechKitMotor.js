const fetch = require('node-fetch');
const api_key = 'AQVN2Lc0Dc_Ujs9scAhJVVZOs2xjnbvevqj6OFFm';
const { URLSearchParams } = require('url');
const fs = require('fs');
const params = new URLSearchParams();
const names_surnames = require('./names_surnames')
const text = names_surnames.trioMale
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
let D = new Date();
let dayTime = `${D.getDate()}_${months[D.getMonth()]} ${D.getHours()}_${D.getMinutes()}_${D.getSeconds()}`

params.append('text', text);
params.append('voice', 'oksana');
params.append('emotion', 'good');
params.append('lang', 'ru-RU');
params.append('speed', '1.0');
params.append('format', 'oggopus');
//params.append('format', 'lpcm');

fetch('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize', {
        method: 'post',        
        body: params,
        headers: { 
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Api-Key ' + api_key,
        },
    })
    .then(res => {
        console.log(res);
        // return res.json();
        const dest = fs.createWriteStream(`./${dayTime}.ogg`);
        res.body.pipe(dest);
    })
    .catch(err => console.error(err));

