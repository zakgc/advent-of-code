var fs = require('fs');

let inputTxt = fs.readFileSync('./testinput.txt', 'utf-8').replaceAll('\r', '')
let inputLines = inputTxt.split('\n')

const convertToObject = (coord) => {
    return {
        x: coord[0],
        y: coord[1]
    }
}

let redTiles = []
inputLines.forEach(inputLine => {
    let coords = inputLine.split(',')
    coords = coords.flatMap(coords => Number(coords))
    redTiles.push(convertToObject(coords))
})

redTiles.sort((a, b) => b.x - a.x)
let highestX = redTiles[0]

redTiles.sort((a, b) => b.y - a.y)
let highestY = redTiles[0]

let rows = highestY.y + 1;
let cols = highestX.x + 1;

let grid = Array(rows).fill().map(() => Array(cols).fill('.'));

const getArea = (corner1, corner2) => {
    let corner1Object = convertToObject(corner1)
    let corner2Object = convertToObject(corner2)

    let differnceX = Math.abs(corner1Object.x - corner2Object.x) + 1
    let differnceY = Math.abs(corner1Object.y - corner2Object.y) + 1

    let area = differnceX * differnceY

    return area
}

const fillRow = (row) => {
    let redTileIndexes = [], i

    for (let i = 0; i < row.length; i++) {
        if (row[i] === '#')
            redTileIndexes.push(i);
    }

    console.log(redTileIndexes);

    for (let i = redTileIndexes[0]+1; i < redTileIndexes[redTileIndexes.length-1]; i++) {
        row[i] = 'X'
    }

    return row
}

let areas = []

for (let i = 0; i < redTiles.length; i++) {
    grid[redTiles[i].y][redTiles[i].x] = '#'
}

for (let i = 0; i < grid.length; i++) {
    let newRow = fillRow(grid[i])

    console.log(newRow);
    
}

areas.sort((a, b) => b - a)

// console.log(areas[0]);

// console.log(grid);

