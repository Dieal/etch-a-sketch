const container = document.querySelector("div.grid-container");

createGrid(16);

const button = document.querySelector("button.size-button");
button.addEventListener("click", changeGridSize)

function changeGridSize(e) {

    let size = prompt("Insert the size of the grid (e.g 32 = 32x32");
    if (size > 100) {
        alert("Value cannot be higher than 100");
        return;
    }

    container.textContent = "";
    createGrid(size);
}

function colorSquare(e) {
    this.style.backgroundColor = "black";
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