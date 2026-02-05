var fs = require('fs');

let inputTxt = fs.readFileSync('./input.txt', 'utf-8').replaceAll('\r', '')
let inputLines = inputTxt.split('\n')
let inputMatrix = []
inputLines.forEach(inputLine => {
    inputMatrix.push(inputLine.split(''))
});
let timesSplit = 0

const findXinRow = (target, y) => {
    let results = []
    for (let x = 0; x < inputMatrix[y].length; x++) {
        if (inputMatrix[y][x] === target) {
            results.push({y,x})
        }
    }

    return results
}

const splitBeam = (splitter) => {
    if (inputMatrix[splitter.y - 1][splitter.x] === '|') {
        inputMatrix[splitter.y][splitter.x - 1] = '|'
        inputMatrix[splitter.y][splitter.x + 1] = '|'

        timesSplit++
    }
}

let currentBeams = null
for (let y = 0; y < inputMatrix.length; y++) {
    if (currentBeams === null) {
        let startingBeam = findXinRow('S', y)
        currentBeams = startingBeam
    } else {
        currentBeams.forEach(currentBeam => {
            if (inputMatrix[currentBeam.y + 1][currentBeam.x] !== '^') {
                inputMatrix[currentBeam.y + 1][currentBeam.x] = '|'
            }
        })

        let splitters = findXinRow('^', y)
        if (splitters.length !== 0) {
            splitters.forEach(splitter => {
                splitBeam(splitter)
            })
        }

        let newBeams = findXinRow('|', y)
        currentBeams = currentBeams.concat(newBeams)
    }
}

console.log(timesSplit);

let content = inputMatrix.join('\n').replaceAll(',','')
fs.writeFileSync('./output.txt', content)
