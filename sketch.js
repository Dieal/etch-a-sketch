let color = "black";
let gridSize = 0;
let toggleDraw = false;

const container = document.querySelector("div.grid-container");

const blackColorButton = document.querySelector("div.buttons > button.black-color");
blackColorButton.addEventListener("click", () => color = "black");

const randomColorButton = document.querySelector("div.buttons > button.random-color");
randomColorButton.addEventListener("click", () => color = "random");

const slider = document.querySelector("input.slider");
gridSize = slider.value;
slider.addEventListener("change", () => {
    gridSize = slider.value
    changeGridSize(gridSize);    
});

createGrid(gridSize);


function changeGridSize(gridSize) {
    container.textContent = "";
    createGrid(gridSize);
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
    if (!toggleDraw) return;
    if (color === "black") squareColor = color;
    if (color === "random") squareColor = randomizeRGB();
    e.target.style.backgroundColor = squareColor; 
}

function createGrid(size) {

    let percentage = (1 / size * 100) + "%";
    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = percentage;
        square.addEventListener("mousedown", (e) => {
            toggleDraw = true; 
            colorSquare(e);
        });
        square.addEventListener("mouseup", () => toggleDraw = false);
        square.addEventListener("mouseover", colorSquare);
        container.appendChild(square);
    }

}