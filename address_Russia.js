const readline = require('readline');
const fs = require('fs');

const myLib = require('./myLib');

const citiesRussia = "./txt_files/citiesRussia.txt";
const streetsRussia = "./txt_files/streetsRussia.txt";

let anyStreet = myLib.street(myLib.grf(streetsRussia));
let anyCity = myLib.grf(citiesRussia);


const address = `город ${anyCity}, ${anyStreet}, дом ${Math.round(Math.random() * 99) + 1}`
console.log(address)