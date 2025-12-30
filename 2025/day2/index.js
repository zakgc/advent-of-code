var fs = require('fs');

let rangesTxt = fs.readFileSync('./ranges.txt', 'utf-8')
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

let numberOfInvalidIDs2 = 0
rangesArr.forEach(rangeArr => {
    for (let index = rangeArr[0]; index <= rangeArr[1]; index++) {
        let indexString = index.toString()
        
        for (let i = 1; i <= indexString.length; i++) {
            if (indexString.length % i !== 0) {
                continue
            }
            
            let size = indexString.length / i
            let result = []

            for (let x = 0; x < indexString.length; x += size) {
                result.push(indexString.slice(x, x + size))
            }

            if (result.length === 1) {
                continue
            }

            let matching = result.every((val, i, arr) => val === arr[0])

            if (matching) {
                numberOfInvalidIDs2 += index
                break
            }
            
        }
    }
})

console.log(numberOfInvalidIDs);
console.log(numberOfInvalidIDs2);
