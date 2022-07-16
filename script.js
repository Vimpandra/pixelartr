const container = document.querySelector(`.container`);

function createSquares(n) {
    for (let i = 1; i <= n; i++) {
        let square = document.createElement(`div`);
        square.classList.add(`square`);
        container.appendChild(square);        
    };
}

createSquares(16);