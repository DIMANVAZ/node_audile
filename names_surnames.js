const readline = require('readline');
const fs = require('fs');

const myLib = require('./myLib');

const maleNames = "./txt_files/maleNames.txt";
const maleSurnames = "./txt_files/maleSurnames.txt";
const maleMidNames = "./txt_files/maleMidNames.txt";

const FIOmale = `${myLib.grf(maleSurnames)} ${myLib.grf(maleNames)} ${myLib.grf(maleMidNames)}`
const IOFmale = `${myLib.grf(maleNames)} ${myLib.grf(maleMidNames)} ${myLib.grf(maleSurnames)}`

const trioMale = `${myLib.grf(maleSurnames)}, ${myLib.grf(maleSurnames)} и ${myLib.grf(maleSurnames)}`
const fiveMale = `${trioMale}, а также ${myLib.grf(maleSurnames)} и ${myLib.grf(maleSurnames)}`

console.log(trioMale);
console.log(fiveMale);

module.exports.FIOmale = FIOmale
module.exports.IOFmale = IOFmale


/*-------старый пример, когда пытался в Объекты
const maleNames = {
    file:"./maleNames.txt",
    array:[]
};
 */








