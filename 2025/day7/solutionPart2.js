var fs = require('fs');

let inputTxt = fs.readFileSync('./input.txt', 'utf-8').replaceAll('\r', '')
let inputLines = inputTxt.split('\n')
let inputMatrix = []
inputLines.forEach(inputLine => {
    inputMatrix.push(inputLine.split(''))
});
let possibilities = 0

let branches = new Array(inputMatrix[0].length).fill(0)

for (let y = 0; y < inputMatrix.length; y++) {
    for (let x = 0; x < inputMatrix[y].length; x++) {
        if (inputMatrix[y][x] === 'S') {
            branches[x] = branches[x] + 1
        }

        if (inputMatrix[y][x] === '^') {
            if (branches[x] !== 0) {
                let addVal = branches[x]
                branches[x] = 0
                branches[x-1] = branches[x-1] + addVal
                branches[x+1] = branches[x+1] + addVal
            } else {
                continue
            }
        }
        
    }
}

branches.forEach(num => {
    possibilities += num
})
console.log('possibilities', possibilities);
