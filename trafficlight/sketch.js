// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state = 1;
let redDuration = 5000;
let yellowDuration = 5000;
let greenDuration = 5000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  changeLight();
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

function changeLight() {
  if (state === 1 && millis() <= redDuration) {
    fill(255, 0, 0);
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
  else if (state = 2 && millis() <= yellowDuration) {
    fill(255, 255, 0);
    ellipse(width/2, height/2, 50, 50); //middle
  }
}
