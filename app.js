const grid = document.querySelector(".grid");
let gridSize = prompt("How many squares per side? (Maximum: 100)");
let color = "black"

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

    const columnWidth = `${100 / gridSize}%`

    grid.style.gridTemplateColumns = `repeat(${gridSize}, ${columnWidth})`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, ${columnWidth})`;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
            grid.appendChild(createSquare(grid.clientWidth / gridSize));
    }
}

grid.addEventListener("mouseover", function (e) {
    if (e.target.matches(".box")) {
        e.target.classList.add("active");
    }
});

function clearCanvas() {
    let squares = document.getElementsByClassName("box")
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("active")
    }
}

/*
TODO:
- Slider to adjust canvas size
- Buttons to change color mode
*/