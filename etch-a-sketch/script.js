const MAIN_CONTAINER = 'container';
const CONTAINER_SIZE = 500;
const GRID_BORDER = 2;

// Initial grids
createGrid(16);

// New grids
const newGrids = document.querySelector('.new-grids');
newGrids.addEventListener('click', () => {
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.remove();
    })
    createGrid(+prompt("Please enter number of squares per side for the new grid."));
})

// RGB hover
const rgbButton = document.querySelector('.options > .rgb-effect');
rgbButton.addEventListener('click', () => {
    hoveredGridRGB();
})

function createGrid(gridTotal) {
    // Validate the parameter
    if (gridTotal > 100) {
        gridTotal = 100;
    }

    // Calculate the grid's size
    const gridSize = gridTotal * gridTotal;
    const gridContainer = document.getElementById(MAIN_CONTAINER);
    const widthAndHeight = `${CONTAINER_SIZE / gridTotal - GRID_BORDER}px`;

    // Append the grid elements to the container
    for (let child = 0; child < gridSize; child++) {
        const gridElement = document.createElement('div');

        gridElement.classList.add('grid');
        gridElement.style.width = widthAndHeight;
        gridElement.style.height = widthAndHeight;
        hoveredGrid(gridElement);

        gridContainer.appendChild(gridElement);
    }
}

function hoveredGrid(grid) {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'black';
    })
}

function hoveredGridRGB() {
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach((item) => {
        item.addEventListener('mouseover', () => {
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    })
}