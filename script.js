// Drag and drop event disabler
const container = document.querySelector(`#container`);
container.addEventListener('dragstart', (e) => {
  e.preventDefault()
});
container.addEventListener('drop', (e) => {
  e.preventDefault()
});
//------------------------------------------


const sizePara = document.getElementById(`sizePara`);
const sizeSlider = document.getElementById(`sizeSlider`);

sizePara.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;

sizeSlider.addEventListener(`input`, () => {
    sizePara.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
    container.textContent = ``;
    createSquares(sizeSlider.value);
    writeSquares();
});

createSquares(24);
writeSquares();

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

function writeSquares() {
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
};
    