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
