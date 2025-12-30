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

let noFresh = 0
for (const id of ingredientsData.ids) {
    for (const range of ingredientsData.ranges) {
        let ends = range.split('-')
        let lowEnd = Number(ends[0])
        let highEnd = Number(ends[1])
        
        if (lowEnd < id && id < highEnd) {
            noFresh ++
        }
    }
}

console.log(noFresh);
