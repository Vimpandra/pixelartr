// Drag and drop event disabler
const container = document.querySelector(`#container`);
container.addEventListener('dragstart', (e) => {
  e.preventDefault()
});
container.addEventListener('drop', (e) => {
  e.preventDefault()
});

// Canvas size selector
const sizePara = document.getElementById(`sizePara`);
const sizeSlider = document.getElementById(`sizeSlider`);

sizePara.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;

sizeSlider.addEventListener(`input`, () => {
    sizePara.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
    container.textContent = ``;
    createSquares(sizeSlider.value);
    writeSquares();
});

// Grid Toggle
const gridButton = document.getElementById(`gridToggle`);
gridButton.addEventListener(`click`, () => {
    let squares = document.querySelectorAll(`.square`);
    squares.forEach((square) => {
        square.classList.toggle(`grid`);
    })
});

// Color Picker
const colorPicker = document.getElementById(`colorPicker`);
let currentColor = colorPicker.value;

colorPicker.addEventListener(`input`, () => {
    currentColor = colorPicker.value;
});

// Eraser
const eraser = document.getElementById(`eraserButton`);
eraser.addEventListener(`click`, () => {
    currentColor = bgColor.value;
})

// Background color picker
const bgColor = document.getElementById(`bgColor`);
bgColor.addEventListener(`input`, () => {
    let squares = document.querySelectorAll(`.square`);
    squares.forEach((square) => {
        square.style.backgroundColor = bgColor.value;
    })
});

// Rainbow Mode
const rainbowButton = document.getElementById(`rainbowButton`);

let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;


//Default functions
createSquares(24);
writeSquares();

function createSquares(n) {
    for (let i = 1; i <= n * n; i++) {
        let squareSize = 500 / n
        let square = document.createElement(`div`);
        square.classList.add(`square`);
        square.classList.add(`grid`);
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
                square.style.backgroundColor = currentColor;
            } else return;
        })
        square.addEventListener(`mousedown`, () => {
            square.style.backgroundColor = currentColor;
        })
    })
};