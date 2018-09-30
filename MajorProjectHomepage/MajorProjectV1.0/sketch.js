// V1.0
// Travis Ahern
// Sept. 29/18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let homePage;
let allRaces;
let boxChoiceX, boxChoiceY;

function preload() {
  homePage = loadImage("assets/lovelyHomepage.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  allRaces = [5, 1, 5, 2, 6];

  boxChoiceX = width*0.06;
  boxChoiceY = height*0.10;
}

function raceGroup(x, y, w, h) {
  rect(x, y, w, h);
  for (let race = 0; race < allRaces.length; race++) {
    fill(0, 255, 0);
    rect(x + race*boxChoiceX, y + race*boxChoiceY, boxChoiceX, boxChoiceY);
  }
}

function classGroup(x, y, w, h) {
  rect(x, y, w, h);
}

function draw() {
  background(0);
  fill(255, 0, 0);
  raceGroup(width*0.05, height*0.05, width*0.30, height*0.90);
  classGroup(width*0.65, height*0.05, width*0.30, height*0.90);
}
