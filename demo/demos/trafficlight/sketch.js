// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state;
let lastTimeSwitchedColor;

const REDLIGHTDURATION = 3000;
const GREENLIGHTDURATION = 4000;
const YELLOWLIGHTDURATION = 1000;

function setup() {
  createCanvas(600, 600);
  state = 1;
  lastTimeSwitchedColor = 0;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkForStatesChange();
  displayCrrectLight();
}

function checkForStatesChange() {
  let elapsedTime = millis() - lastTimeSwitchedColor;
  if (state === 1 && elapsedTime >= REDLIGHTDURATION) {
    state = 2;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 2 && elapsedTime >= YELLOWLIGHTDURATION) {
    state = 3;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 3 && elapsedTime >= GREENLIGHTDURATION) {
    state = 1;
    lastTimeSwitchedColor = millis();
  }
}

function displayCrrectLight() {
  if (state === 1) {
    displayRedLight();
  }
  else if (state === 2) {
    displayYellowLight();
  }
  else if (state === 3) {
    displayGreenLight();
  }
}

function displayRedLight() {
  fill(255, 0, 0);
  ellipse(width/2, height/2 - 65, 50, 50); //top
}

function displayYellowLight() {
  fill(255, 255, 0);
  ellipse(width/2, height/2, 50, 50); //middle
}

function displayGreenLight() {
  fill(0, 255, 0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
