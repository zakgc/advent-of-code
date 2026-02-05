var fs = require('fs');

let worksheetTxt = fs.readFileSync('./input.txt', 'utf-8').replaceAll('\r', '')
let worksheetLines = worksheetTxt.split('\n')

let operations = worksheetLines[worksheetLines.length - 1].split(/\s+/).filter(n => n)

let worksheetMatrix = []
for (let i = 0; i < worksheetLines.length - 1; i++) {
    worksheetMatrix.push(worksheetLines[i].split(''))
}

const isWhitespace = (string) => {
    return !/\S/.test(string)
}

let columns = []

for (let x = 0; x < worksheetMatrix[0].length; x++) {
    let column = []
    for (let y = 0; y < worksheetMatrix.length; y++) {
        column.push(worksheetMatrix[y][x])
    }
    columns.push(column.join(''))
}

columns = columns.map((arr) => {
    if(isWhitespace(arr)){
        return ':'
    }else {
        return arr.replaceAll(' ','')
    }
})

let equations = columns.join(' ').split(':')

let grandTotal = 0
operations.forEach((operation, index) => {
    let math = equations[index].trim().split(' ').join(operation)
    let answer = eval(math)
    grandTotal += answer
})

console.log(grandTotal);