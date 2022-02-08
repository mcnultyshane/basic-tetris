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

const oTetrimino= [
    [0, 1, width, width+1]
]

const sTetrimino= [

]

const tTetrimino= [

]

const stickTetrimino= [
    
]
    console.log(squares);
})