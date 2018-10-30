// Project Title
// Your Name
// Date

let cols;
let rows;
let cellSize;
let grid = [];


function preload() {
  grid = loadStrings("assets/maze3.txt");
}

function setup() {
  createCanvas(600, 600);
  rows = grid[0].length;
  cols = rows;
  cellSize = width / cols - 1;
  cleanUpTheGrid();
}

function draw() {
  background(255);
  displayGrid();
}

function cleanUpTheGrid() {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split("");
  }
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "0") {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);

  if (grid[y][x] === "1") {
    grid[y][x] = "0";
  }
  else {
    grid[y][x] = "1";
  }
}
