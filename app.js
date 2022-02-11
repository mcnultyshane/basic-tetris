document.addEventListener('DOMContentLoaded', ()=> {
    const grid= document.querySelector('.grid') 
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector("#start-button")
    const width =10

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
    [1, width, width+1, width*2+2],
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+2]
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

// randomly select a tetromino and its first rotation
let random = Math.floor(Math.random()*theTetrominos.length) 
let current = theTetrominos[random][0]

// draw the first rotation for the first tetromino
function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
    })
}

// undraw the tetromino
function undraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetromino')
    })
}

// make the tetromino move down every second
timerId = setInterval(moveDown, 1000)

// assign functions to keyCodes
function control(e) {
    if(e.keyCode === 37) {
        moveLeft()
    } else if (e.keyCode === 38) {
        // rotate
    } else if (e.keyCode === 39) {
        // moveRight()
    } else if (e.keyCode === 40) {
        // moveDown()
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
    if  (current.some(index => squares[currentPosition + index + width].classList.contains("taken"))) {
        current.forEach(index => squares[currentPosition + index].classList.add("taken"))
        // Start a new tetromino falling
        random = Math.floor(Math.random() * theTetrominos.length)
        current = theTetrominos[random][0]
        currentPosition = 4
        draw()
    }
}
// move the tetromino left, unless it is at teh edge or there is a blockage
function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

    if (!isAtLeftEdge) currentPosition -=1

    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
        currentPosition +=1
    }

    draw()
}




})