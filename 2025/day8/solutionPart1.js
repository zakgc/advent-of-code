var fs = require('fs');

let inputTxt = fs.readFileSync('./testinput.txt', 'utf-8').replaceAll('\r', '')
let inputLines = inputTxt.split('\n')

let boxPositions = []

inputLines.forEach(line => {
    let coods = line.split(',')

    boxPositions.push({
        x: coods[0],
        y: coods[1],
        z: coods[2],
    })
})

const findDistance = (pointA, pointB) => {
    let x = pointB.x - pointA.x
    let y = pointB.y - pointA.y
    let z = pointB.z - pointA.z

    let stepOne = Math.sqrt((x ** 2) + (y ** 2))
    let stepTwo = Math.sqrt((stepOne ** 2) + (z ** 2))

    return stepTwo
}

const findShortest = (startingPoint) => {
    let results = []
    boxPositions.forEach(boxPosition => {
        if (boxPosition === startingPoint) {
            return
        }

        let distance = findDistance(startingPoint, boxPosition)
        results.push({
            distance,
            boxPosition
        })
    })

    results.sort((a,b) => a.distance - b.distance)
    return results[0]
}

const indexOfTargetInCircuits = (target) => {
    let targetIndex
    circuits.forEach((circuit, index) => {
        if (circuit.includes(target)) {
            targetIndex = index
        }
    })

    return targetIndex
}

const moveClosest = (indexA, indexB) => {
    circuits[indexA] = circuits[indexA].concat(circuits[indexB])

    circuits.splice(indexB, 1)
}

let circuits = boxPositions.map(boxPosition => [boxPosition])

for (let i = 0; i < boxPositions.length; i++) {
    let closestBox = findShortest(boxPositions[i]).boxPosition

    let indexOfBox = indexOfTargetInCircuits(boxPositions[i])
    let indexOfClosest = indexOfTargetInCircuits(closestBox)

    if (indexOfBox === indexOfClosest) continue
    moveClosest(indexOfBox, indexOfClosest)
}


// const includesBoth = (array, targets) => {
//     for (let i = 0; i < array.length; i++) {
//         let result = array[i].every(ele => targets.includes(ele))

//         if (result) return true
//     }

//     return false
// }

// const includesOne = (array, target) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].includes(target)) return true
//     }

//     return false
// }

// let circuits = []
// let removedBoxes = []

// boxPositions.forEach(boxPosition => {
//     let closestBox = findShortest(boxPosition).boxPosition
//     if (includesBoth(circuits, [boxPosition, closestBox])) return
//     if (includesOne(circuits, closestBox)) {
//         circuits.forEach((circuit) => {
//             if (circuit.includes(closestBox)) {
//                 circuit.push(boxPosition)

//                 return
//             }
//         })
//     }

//     circuits.push([
//         boxPosition, closestBox
//     ])
//     removedBoxes.push(closestBox)
// })


const calculateResult = (circuits) => {
    let lengthOfCircuits = circuits.map(circuit => circuit.length)
    let sorted = lengthOfCircuits.sort((a, b) => b - a)
    
    return {
        all: sorted,
        top: sorted.slice(0, 3),
        answer: sorted[0] * sorted[1] * sorted[2]
    }
}

console.log(circuits);
console.log(circuits.length);
console.log(calculateResult(circuits));
