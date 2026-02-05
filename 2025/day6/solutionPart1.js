var fs = require('fs');

let worksheetTxt = fs.readFileSync('./input.txt', 'utf-8').replaceAll('\r', '')
let worksheetLines = worksheetTxt.split('\n')
let worksheetMatrix = []
worksheetLines.forEach(worksheetLine => {
    worksheetMatrix.push(worksheetLine.split(/\s+/).filter(n => n))
});

let equations = []

for (let x = 0; x < worksheetMatrix[0].length; x++) {
    let equation = []
    for (let y = 0; y < worksheetMatrix.length; y++) {
        equation.push(worksheetMatrix[y][x])
    }
    equations.push(equation)
}

let equationResults= []
equations.forEach(equation => {
    let operation = equation.pop()
    let maths = equation.join(operation)
    let answer = eval(maths)

    equationResults.push(answer)
})

let grandTotal = 0
equationResults.forEach(result => {
    grandTotal += result
})

console.log(grandTotal);
