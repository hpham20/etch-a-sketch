const grid = document.querySelector(".grid");
let gridSize = 16;
let colorMode = 1

createGrid(gridSize);

function createSquare(size) {
    const square = document.createElement("div");

    square.classList.add("box");
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;

    return square;
}

function createGrid(gridSize) {
    gridSize = gridSize || 16;

    const columnWidth = `${100 / gridSize}%`

    grid.style.gridTemplateColumns = `repeat(${gridSize}, ${columnWidth})`
    grid.style.gridTemplateRows = `repeat(${gridSize}, ${columnWidth})`
    
    grid.innerHTML = ""

    for (let i = 0; i < gridSize * gridSize; i++) {
        grid.appendChild(createSquare(grid.clientWidth / gridSize));
    }
}

grid.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
        if (colorMode == 1) {
            e.target.style.backgroundColor = "black"
        } else {
            let letters = '0123456789ABCDEF';
            let randomColor = '#';
            for (let i = 0; i < 6; i++) {
                randomColor += letters[Math.floor(Math.random() * 16)];
            }
            e.target.style.backgroundColor = randomColor;
        }
    }
});

function clearCanvas() {
    let squares = document.getElementsByClassName("box")
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "transparent"
    }
}

function setDefaultColor() {
    colorMode = 1

    let defaultColorButton = document.getElementById("default-button")
    defaultColorButton.classList.add("active")

    let randomColorButton = document.getElementById("random-button")
    randomColorButton.classList.remove("active")
    
}

function setRandomColor() {
    colorMode = 2

    let defaultColorButton = document.getElementById("default-button")
    defaultColorButton.classList.remove("active")

    let randomColorButton = document.getElementById("random-button")
    randomColorButton.classList.add("active")
}

let canvasSizeInput = document.querySelector("#input_slider")
let canvasSize_Width = document.querySelector("#canvas_size_width")
let canvasSize_Height = document.querySelector("#canvas_size_height")

canvasSize_Width.textContent = canvasSizeInput.value
canvasSize_Height.textContent = canvasSizeInput.value

canvasSizeInput.addEventListener("change", (event) => {
    createGrid(event.target.value);
})
canvasSizeInput.addEventListener("input", (event) => {
    canvasSize_Width.textContent = event.target.value
    canvasSize_Height.textContent = event.target.value
})
/*
TODO:
- Slider to adjust canvas size
- Hover effects for buttons
*/