createGrid();

const squares = document.querySelectorAll("div.grid-container > div");
squares.forEach(square => square.addEventListener("mouseover", colorSquare));

function colorSquare(e) {
    this.style.backgroundColor = "black";
}

function createGrid() {
    const container = document.querySelector("div.grid-container");
    for (let i = 0; i < (16 * 16); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}