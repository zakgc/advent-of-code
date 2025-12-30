var fs = require('fs');

let inputTxt = fs.readFileSync('./input.txt', 'utf-8').replaceAll('\r', '')
let input = inputTxt.split('\n')
let ingredientsData = {
    ranges: [],
    ids: []
}

let rangesDone = false
input.forEach(i => {
    if (i.length === 0) {
        rangesDone = true
        return
    }

    if (rangesDone) {
        ingredientsData.ids.push(Number(i))
    } else {
        ingredientsData.ranges.push(i)
    }
})

let ranges = ingredientsData.ranges
function rangeDetails(range) {
    let ends = range.split('-')
    let lowEnd = Number(ends[0])
    let highEnd = Number(ends[1])
    let difference = (highEnd - lowEnd) + 1

    return {
        lowEnd,
        highEnd,
        difference
    }
}

let rangeDetailsArr = []
ranges.forEach(range => {
    rangeDetailsArr.push(rangeDetails(range))
})

function addFreshIds(rangeDetailsArr) {
    let sum = 0
    rangeDetailsArr.forEach(rangeDetails => {
        sum += rangeDetails.difference
    })
    console.log(sum);
}

rangeDetailsArr.sort((a,b) => a.lowEnd - b.lowEnd)

console.log(rangeDetailsArr.length);

let numberUpdated = 5
while (numberUpdated > 0) {
    numberUpdated = 0
    for (let i = 0; i < rangeDetailsArr.length - 1; i++) {
        let x = rangeDetailsArr[i]
        let y = rangeDetailsArr[i+1]

        if (x.lowEnd <= y.lowEnd && x.highEnd >= y.highEnd) {
            let newRangeDetails = {
                lowEnd: x.lowEnd,
                highEnd: x.highEnd,
                difference: ((x.highEnd - x.lowEnd) + 1)
            }
            rangeDetailsArr.splice(i,2,newRangeDetails)
            numberUpdated ++
            continue
        }

        if (x.lowEnd <= y.lowEnd && x.highEnd >= y.lowEnd) {
            let newRangeDetails = {
                lowEnd: x.lowEnd,
                highEnd: y.highEnd,
                difference: ((y.highEnd - x.lowEnd) + 1)
            }
            rangeDetailsArr.splice(i,2,newRangeDetails)
            numberUpdated ++
            continue
        }
    }
}

console.log(rangeDetailsArr);
console.log(rangeDetailsArr.length);

rangeDetailsArr.sort((a,b) => b.highEnd - a.lowEnd)


addFreshIds(rangeDetailsArr)
