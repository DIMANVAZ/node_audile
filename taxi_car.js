const readline = require('readline');
const fs = require('fs');

const myLib = require('./myLib');

const colors = "./txt_files/colors.txt";
const carBrands = "./txt_files/carBrands.txt";
const carBrandPlusModel = "./txt_files/carBrandPlusModel.txt";

let finalCar = `${myLib.grf(colors)} ${myLib.grf(carBrands)} ${myLib.nomera()}`;
let finalCarHard = `${myLib.grf(colors)} ${myLib.grf(carBrandPlusModel)} ${myLib.nomera()}`;

console.log(finalCar);