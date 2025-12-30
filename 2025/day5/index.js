var fs = require('fs');

let inputTxt = fs.readFileSync('./testinput.txt', 'utf-8').replaceAll('\r', '')
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
        ingredientsData.ids.push(i)
    } else {
        ingredientsData.ranges.push(i)
    }
})

console.log(ingredientsData);
