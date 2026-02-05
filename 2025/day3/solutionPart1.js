var fs = require('fs');

let banksTxt = fs.readFileSync('./testbanks.txt', 'utf-8').replaceAll('\r', '')
let banks = banksTxt.split('\n')

let totalOutput = 0

banks.forEach(bank => {
    let bankInfo = []
    let batteries = bank.split('').map(Number)
    batteries.forEach((battery, index) => {
        bankInfo.push({
            battery,
            index
        })
    })

    let pairCombos = []
    for (let x = 0; x < bankInfo.length; x++) {
        for (let y = 0; y < bankInfo.length; y++) {
            if (x !== y) {
                let combo = Number(`${bankInfo[x].battery}${bankInfo[y].battery}`)
                pairCombos.push({
                    combo,
                    indexes: [
                        bankInfo[x].index,
                        bankInfo[y].index
                    ]
                })
            }
        }
    }

    let pairCombosDesc = pairCombos.toSorted((a,b) => a.combo - b.combo).reverse()

    let found = false
    pairCombosDesc.forEach(combo => {
        let indexes = combo.indexes
        if(indexes[0] > indexes[1]) {
            return
        }
        if (found === false) {
            totalOutput += combo.combo
        }
        found = true
        return
    })
})

console.log(totalOutput);
