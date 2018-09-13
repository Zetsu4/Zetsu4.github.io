// First_Assignment (Pong with friends)
// Travis Ahern
// Sept. 13/2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let playerY_1 = false;
let playerY_2 = false;
let speed = 20;
let compY_1 = false;
let compY_2 = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
}

function mousePressed() {
  if (keyIsPressed) {
    if (key === "r") {
      rect(mouseX, mouseY, 10, 10);
    }
  	if (key === "e") {
      ellipse(mouseX, mouseY, 10, 10);
    }
  }
}

function keyTyped() {
  if (key === "w") {
    background(255);
  }
  else if (key === "b") {
    background(0);
  }
}
