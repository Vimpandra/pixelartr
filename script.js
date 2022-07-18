// Drag and drop event disabler
const div = document.querySelector('div')
div.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

div.addEventListener('drop', (e) => {
  e.preventDefault()
})
//------------------------------------------

const container = document.querySelector(`.container`);

function createSquares(n) {
    for (let i = 1; i <= n * n; i++) {
        let squareSize = 500 / n
        let square = document.createElement(`div`);
        square.classList.add(`square`);
        container.appendChild(square);
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    }
};

createSquares(24)

let squares = document.querySelectorAll (`.square`);
squares.forEach((square) => {
    square.addEventListener(`mouseover`, (e) => {
        if (e.buttons === 1) {    
            square.classList.add(`written`);
        } else return;
    })
    square.addEventListener(`mousedown`, () => {
        square.classList.add(`written`);
    })
})