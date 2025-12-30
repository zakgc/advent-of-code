var fs = require('fs');

let banksTxt = fs.readFileSync('./testbanks.txt', 'utf-8').replaceAll('\r', '')
let banks = banksTxt.split('\n')

console.log(banks);
