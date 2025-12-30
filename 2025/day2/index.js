var fs = require('fs');

let rangesTxt = fs.readFileSync('./testranges.txt', 'utf-8')

console.log(rangesTxt);
