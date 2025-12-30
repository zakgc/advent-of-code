var fs = require('fs');

let rangesTxt = fs.readFileSync('./testranges.txt', 'utf-8')
let rangesArr = rangesTxt.split(',')
rangesArr.forEach((range, index) => {
    let stringArr = range.split('-')
    let numberArr = []

    stringArr.forEach(string => {
        numberArr.push(parseInt(string))
    })
    rangesArr[index] = numberArr
})

console.log(rangesArr);
