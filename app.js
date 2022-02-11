document.addEventListener('DOMContentLoaded', ()=> {
    const grid= document.querySelector('.grid') 
    let square = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector("#start-button")
    const width = 10
    let nextRandom = 0

// the Tetrominoes
const lTetromino = [
    [1, 2, width+1, width*2+1],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [0, width, width+1, width+2]
]
const lBackTetromino = [
    [0, 1, width+1, width*2+1],
    [width, width+1, width+2, width*2],
    [1, width+1, width*2+1, width*2+2],
    [2, width, width+1, width+2]
]
const tTetromino = [
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1],
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1]
]
const oTetromino = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
]
const sTetromino = [
    [width+1, width+2, width*2,width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2,width*2+1],
    [0, width, width+1, width*2+1]
]
const sBackTetromino = [
    [width, width+1, width*2+1, width*2+2],
    [2, width+1, width+2, width*2+1],
    [width, width+1, width*2+1, width*2+2],
    [2, width+1, width+2, width*2+1]
]
const stickTetromino = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
]

const theTetrominos = [lTetromino, lBackTetromino, sTetromino, sBackTetromino, oTetromino, tTetromino, stickTetromino]
    
let currentPosition = 4
let currentRotation = 0

// randomly select a tetromino and its first rotation
let random = Math.floor(Math.random()*theTetrominos.length) 
let current = theTetrominos[random][0]

// draw the first rotation for the first tetromino
function draw() {
    current.forEach(index => {
        square[currentPosition + index].classList.add('tetromino')
    })
}

// undraw the tetromino
function undraw() {
    current.forEach(index => {
        square[currentPosition + index].classList.remove('tetromino')
    })
}

// make the tetromino move down every second
timerId = setInterval(moveDown, 1000)

// assign functions to keyCodes
function control(e) {
    if(e.keyCode === 37) {
        moveLeft()
    } else if (e.keyCode === 38) {
        rotate()
    } else if (e.keyCode === 39) {
        moveRight()
    } else if (e.keyCode === 40) {
        moveDown()
    }
}
document.addEventListener('keyup', control)

//move down function
function moveDown () {
    undraw()
    currentPosition += width
    draw()
    freeze()
}
// write a freeze function
function freeze() {
    if  (current.some(index => square[currentPosition + index + width].classList.contains("taken"))) {
        current.forEach(index => square[currentPosition + index].classList.add("taken"))
        // Start a new tetromino falling
        random = nextRandom
        nextRandom = Math.floor(Math.random() * theTetrominos.length)
        current = theTetrominos[random][currentRotation]
        currentPosition = 4
        draw()
        displayShape()
    }
}
// move the tetromino left, unless it is at teh edge or there is a blockage
function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

    if (!isAtLeftEdge) currentPosition -=1

    if (current.some(index => square[currentPosition + index].classList.contains('taken'))) {
        currentPosition +=1
    }
    draw()
}

// move the tetromino right, unless it is at the edge or there is a blockage
function moveRight() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)

    if (!isAtRightEdge) currentPosition +=1

    if (current.some(index => square[currentPosition + index].classList.contains('taken'))) {
        currentPosition -=1
    }
    draw()
}

// rotate the tetromino
function rotate() {
    undraw()
    currentRotation ++
    // if the current rotation gets to 4, make it go back to zero
    if(currentRotation === current.length) { 
        currentRotation = 0
    }
    current = theTetrominos[random][currentRotation]
    draw()
}

// show up -next tetromino in mini-grid display
const displaySquares = document.querySelectorAll('.mini-grid div')
const displayWidth = 4
let displayIndex = 0

// the tetromino without rotation
const upNextTetrominos = [
    [1, 2, displayWidth+1, displayWidth*2+1],// lTetromino
    [0, 1, displayWidth+1, displayWidth*2+1],// LBackTetromino
    [0, 1, displayWidth, displayWidth+1],// oTetromino
    [displayWidth+1, displayWidth+2, displayWidth*2, displayWidth*2+1],// sTetromino
    [displayWidth, displayWidth+1, displayWidth+2, displayWidth*2+1],// tTetromino
    [displayWidth, displayWidth+1, displayWidth*2+1, displayWidth*2+2],//  sBackTetromino[]
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] // stitkTetromino
]

// display the shape in the mini-grid display
function displayShape() {
    // remove any trace of a tetromino from the entire grid
    displaySquares.forEach(square => {
        square.classList.remove('tetromino')
    })
    upNextTetrominos[nextRandom].forEach( index => {
        displaySquares[displayIndex + index].classList.add('tetromino')
    })
}
 
})