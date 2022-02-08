document.addEventListener('DOMContentLoaded', ()=> {
    const grid= document.querySelector('.grid') 
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector("#start-button")
    const width =10

// the Tetrominoes
const lTetromino = [
    [1, width+1, width+2, 2],
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
let current = theTetrominos[0][0]


console.log(theTetrominos);

})