const grid = document.querySelector(".grid");
let gridSize = prompt("How many squares per side? (Maximum: 100)");

createGrid(gridSize);

function createSquare(size) {
    const div = document.createElement("div");

    div.classList.add("box");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}

function createGrid(gridSize) {
    gridSize = gridSize || 16;

    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
            grid.appendChild(createSquare(grid.clientWidth / gridSize));
    }
}

grid.addEventListener("mouseover", function (e) {
    if (e.target.matches(".box")) {
        e.target.classList.add("active");
    }
});