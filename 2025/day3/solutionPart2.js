var fs = require('fs');

let banksTxt = fs.readFileSync('./banks.txt', 'utf-8').replaceAll('\r', '')
let banks = banksTxt.split('\n')
let bankOutputs = []

banks.forEach(bank => {
    let batteries = bank.split('').map(Number)
    let numForOutput = 12
    let window = (batteries.length - numForOutput) + 1
    let ans = []

    let noUnusedBatteries = 0
    for (let i = 0; i < numForOutput; i++) {
        let scope = batteries.slice(0, 0 + (window - noUnusedBatteries))
        let scopeDesc = scope.toSorted().reverse()

        ans.push(scopeDesc[0])

        let removeIndex = batteries.indexOf(scopeDesc[0])
        
        for (let x = 0; x < (removeIndex + 1); x++) {
            batteries.shift()
        }
        noUnusedBatteries += removeIndex
    }
    let output = Number(ans.join(''))
    bankOutputs.push(output)
})

let totalOutput = 0
bankOutputs.map(output => {totalOutput += output})

console.log(totalOutput);
