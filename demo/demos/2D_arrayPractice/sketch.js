// Project Title
// Your Name
// Date

let cols = 100;
let rows = 50;
let resolution;
let grid = [];

function setup() {
  createCanvas(1200, 1200);
  resolution = width/cols - 1;
  stroke(0);
  grid = make2DArray();
}

function draw() {
  background(255);
  displayGrid();
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
