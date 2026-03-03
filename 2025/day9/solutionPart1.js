var fs = require('fs');

let inputTxt = fs.readFileSync('./input.txt', 'utf-8').replaceAll('\r', '')
let inputLines = inputTxt.split('\n')

let redTiles = []
inputLines.forEach(inputLine => {
    let coords = inputLine.split(',')
    coords = coords.flatMap(coords => Number(coords))
    redTiles.push(coords)
})

const convertToObject = (coord) => {
    return {
        x: coord[0],
        y: coord[1]
    }
}

const getArea = (corner1, corner2) => {
    let corner1Object = convertToObject(corner1)
    let corner2Object = convertToObject(corner2)

    let differnceX = Math.abs(corner1Object.x - corner2Object.x) + 1
    let differnceY = Math.abs(corner1Object.y - corner2Object.y) + 1

    let area = differnceX * differnceY

    return area
}

let areas = []

for (let i = 0; i < redTiles.length; i++) {
    for (let j = 0; j < redTiles.length; j++) {
        areas.push(getArea(redTiles[i], redTiles[j]))
    }
}

areas.sort((a, b) => b - a)

console.log(areas[0]);
