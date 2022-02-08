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

console.log(theTetrominos);

})