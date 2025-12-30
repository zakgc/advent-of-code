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

let numberOfInvalidIDs = 0
rangesArr.forEach(rangeArr => {
    for (let index = rangeArr[0]; index <= rangeArr[1]; index++) {
        let indexString = index.toString()
        let halfPoint = Math.floor(indexString.length / 2)
        let firstHalf = indexString.slice(0, halfPoint)
        let secondHalf = indexString.slice(halfPoint)

        if (firstHalf === secondHalf){
            numberOfInvalidIDs += index
        }
    }
})

console.log(numberOfInvalidIDs);
