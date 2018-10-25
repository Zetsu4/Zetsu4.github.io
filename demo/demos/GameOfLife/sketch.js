// Project Title
// Your Name
// Date

let cols = 100;
let rows = 100;
let resolution;
let grid = [];

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  resolution = width/cols - 1;
  stroke(0);
  grid = make2DArray();
}

function draw() {
  background(255);
  displayGrid();
  // update();
  if (keyIsDown(27)) {
    update();
  }
}

function keyTyped() {
  if (key === "r") {
    grid = make2DArray();
  }
  if (key === " ") {
    update();
  }
  if (key === "c") {
    clear();
  }
}

function update() {
  // need second 2D array
  let nextTurn = [];
  for (let i = 0; i < rows; i++) {
    nextTurn[i] = [];
  }

  // loop through grid
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let neighbors = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows) {
            neighbors += grid[y + j][x + i];
          }
        }
      }
      neighbors -= grid[y][x];

      // appling the rules of the game
      if (grid[y][x]) { // alive
        if (neighbors === 2 || neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
      if (!grid[y][x]) {
        if (neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }

  grid = nextTurn;
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x]) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*resolution, y*resolution, resolution, resolution);
    }
  }
}

function mousePressed() {
  let x = floor(mouseX / resolution);
  let y = floor(mouseY / resolution);

  if (grid[y][x]) {
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 1;
  }
}

function make2DArray() {
  let newArray = [];
  for (let y = 0; y < rows; y++) {
    newArray.push([]);
    for (let x = 0; x < cols; x++) {
      newArray[y].push(int(random(2)));
    }
  }
  return newArray;
}

function nextArray() {
  let nextGrid = [];
}
