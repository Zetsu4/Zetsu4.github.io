// Inventory
// Travis Ahern
// Oct. 26/18

let grid;
let mouseState = 0;
let xShift;
let yShift;
let rows = 10;
let cols = 10;
let cellSize;
let pics = {};
let picsArray = [];


function preload() {
  pics.circle = loadImage("assets/circle.png");
  pics.rectangle = loadImage("assets/rectangle.png");
  pics.square = loadImage("assets/square.png");
  pics.triangle = loadImage("assets/triangle.png");
  pics.otherThing = loadImage("assets/otherthing.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  xShift = width*0.03;
  yShift = height*0.03;
  cellSize = xShift + yShift;
  picsArray = [0, pics.circle, pics.rectangle, pics.square, pics.triangle, pics.otherThing];
  grid = make2DArray();
}

function draw() {
  translate(xShift, yShift);
  background(0);
  drawGrid();
  hoverOver();
  drawImages();
  holdingItem();
}

function holdingItem() {
  if (mouseState !== 0) {
    push();
    imageMode(CENTER);
    image(mouseState, mouseX - xShift, mouseY - yShift, cellSize, cellSize);
    pop();
  }
}

function mousePressed() {
  let x = floor((mouseX - xShift) / cellSize);
  let y = floor((mouseY - yShift) / cellSize);

  // interacting with grid
  if (x < cols && x >= 0 && y < rows && y >= 0) {
    let newMouse = grid[y][x];
    let gridSpot = mouseState;

    grid[y][x] = gridSpot;
    mouseState = newMouse;
  }
}

function drawGrid() {
  fill("purple");

  // displaying the grid
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function drawImages() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if(grid[y][x] !== 0) {
        image(grid[y][x], x*cellSize, y*cellSize, cellSize, cellSize);
      }
    }
  }
}

function hoverOver() {
  let x = floor((mouseX - xShift) / cellSize);
  let y = floor((mouseY - yShift) / cellSize);

  // highlighting mouse spot
  if (x < cols && x >= 0 && y < rows && y >= 0) {
    fill("hotpink");
    rect(x*cellSize, y*cellSize, cellSize, cellSize);
  }
}

function make2DArray() {
  let newArray = [];

  // making the grid
  for (let y = 0; y < rows; y++) {
    newArray.push([]);
    for (let x = 0; x < cols; x++) {
      newArray[y].push(random(picsArray));
    }
  }
  return newArray;
}
