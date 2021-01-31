const readline = require('readline');
const fs = require('fs');
//----- СИНХРОННАЯ функция с stackoverflow---файл переписываем в массив и сразу возвращаем рандомный элемент--------

function getRndFromFile(file){
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    return rndArrElem(lines);
}

//-----------случайный элемент массива------------------
function rndArrElem(array){

    let rndIndex = Math.round(Math.random() * array.length);
    if (rndIndex == array.length) {
        return array[rndIndex-1]
    }
    else return array[rndIndex];
}
//-------------случайный номер автомобиля---------------
function rndCarPlates(){
    let digits = [0,1,2,3,4,5,6,7,8,9]
    let first = rndArrElem(digits);
    let second = rndArrElem(digits);
    let third = rndArrElem(digits);
    if(first===0 && second ===0 && third===0){
        third = 3
    }
    return `${first} ${second} ${third}`
}

//-------------название улицы - добавляет слово улица либо оставляет так, если есть слово "переулок" или "проспект"
function streetName(string){
    if    (string.toLowerCase().indexOf("проспект") >= 0
        || string.toLowerCase().indexOf("переулок") >= 0) {
        return string
    }
    else return `улица ${string}`
}

//------------------экспорты-----------------------------------------
module.exports.street = streetName;
module.exports.nomera = rndCarPlates;
module.exports.rnd = rndArrElem;
module.exports.grf = getRndFromFile;

//-------АСИНХРОННАЯ--функция----------файл переписываем в массив!!--------------
/*
function fileToArray(Object_) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: fs.createReadStream(Object_.file),
            crlfDelay: Infinity
        });
        rl.on('line', line => Object_.array.push(line));
        rl.on('close', () => resolve(Object_.array));
        rl.on('error', err => reject(err))
    });
}

//fileToArray({file:"./maleNames.txt",array:[]}).then(lines => console.log(lines));
//fileToArray({file:"./maleNames.txt",array:[]}).then(lines => console.log(rndArrElem(lines)));
//^^ работают, выдают массив и случайное имя

 */


