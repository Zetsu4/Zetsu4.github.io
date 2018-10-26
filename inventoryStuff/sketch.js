// Inventory
// Travis Ahern
// Oct. 26/18

let grid;
let rows = 10;
let cols = 10;
let cellSize;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width*0.03 + height*0.03;
  grid = make2DArray();
}

function draw() {
  background(0);
  drawGrid();
  hoverOver();
}

function drawGrid() {
  fill("purple");
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function hoverOver() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);

  if (x < 10 && y < 10) {
    fill("hotpink");
    rect(x*cellSize, y*cellSize, cellSize, cellSize);
  }
}

function make2DArray() {
  let newArray = [];
  for (let y = 0; y < rows; y++) {
    newArray.push([]);
    for (let x = 0; x < cols; x++) {
      newArray[y].push([0]);
    }
  }
  return newArray;
}
