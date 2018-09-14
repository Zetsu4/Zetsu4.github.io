// First_Assignment (Pong with friends)
// Travis Ahern
// Sept. 13, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//creating global variables
let playerYPos_1 = 400;
let playerYPos_2 = 400;
let paddleSpeed = 20;
let compYPos_1 = 400;
let compYPos_2 = 400;
let paddleLeftPosition = 50;
let paddleRightPosition = 500;
let paddleWidth = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  //player 1's paddle
  rect(paddleLeftPosition, playerYPos_1, paddleWidth, 100);
}

function keyIsPressed() {
  //player 1's movement
  if (keyIsDown(87) && playerYPos_1 > 0) {
    playerYPos_1 -= paddleSpeed;
  }
	if (keyIsDown(83) && playerYPos_1 < 1000) {
    playerYPos_1 += paddleSpeed;
  }
}
