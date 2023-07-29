let color = "black";
const container = document.querySelector("div.grid-container");

createGrid(16);

const gridSizeButton = document.querySelector("div.buttons > button.size-button");
console.log(gridSizeButton)
gridSizeButton.addEventListener("click", changeGridSize)

const blackColorButton = document.querySelector("div.buttons > button.black-color");
blackColorButton.addEventListener("click", () => color = "black");

const randomColorButton = document.querySelector("div.buttons > button.random-color");
randomColorButton.addEventListener("click", () => color = "random");

function changeGridSize(e) {

    let size = prompt("Insert the size of the grid (e.g 32 = 32x32");
    if (size > 100) {
        alert("Value cannot be higher than 100");
        return;
    }

    container.textContent = "";
    createGrid(size);
}

function randomizeRGB() {
    const max = 255;
    const min = 0;

    let red = Math.floor(Math.random() * (max - min) + min);
    let green = Math.floor(Math.random() * (max - min) + min);
    let blue = Math.floor(Math.random() * (max - min) + min);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

function colorSquare(e) {
    let squareColor = "";
    if (color === "black") squareColor = color;
    if (color === "random") squareColor = randomizeRGB();
    this.style.backgroundColor = squareColor; 
}

function createGrid(size) {

    let percentage = (1 / size * 100) + "%";
    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = percentage;
        square.addEventListener("mouseover", colorSquare);
        container.appendChild(square);
    }

}