// Major Project (progressive V1.0)
// Travis Ahern
// Sept. 26/2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let homeScreen;
let numOfBoxes;
let boxesX, boxesY;


function preload() {
  homeScreen = loadImage("assets/lovelyHomepage.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  numOfBoxes = 1;
  boxesX = [(0 )];
  boxesY = [];
}

//RPG similar to LOTRO and Tale of Toast
//choose class and race
//race starts you at different regions
//designing characters (poorly)
//minimap function

function createBox() {
  fill(50, 0, 255);
  stroke(0, 50, 255);
  strokeWeight(width*0.05);
  for (let i = 0; i < numOfBoxes; i++) {
    rect(0 + width*(i/100), 0, width*0.10, height*0.10);
    append(boxesX, 0 + width*(i/100));
  }
}

function mouseOnBoxes() {
  //if ()
}

function draw() {
  image(homeScreen, 0, 0, width, height);
  createBox();
  mouseOnBoxes();
}
