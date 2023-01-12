const grid = document.querySelector(".grid");
let gridSize = 16;

createGrid(gridSize);

function createSquare(size) {
    const div = document.createElement("div");

    div.classList.add("box");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createSquare(grid.clientWidth / gridSize));
        }
    }
}