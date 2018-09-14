// First_Assignment (Pong with friends)
// Travis Ahern
// Sept. 13, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//creating global variables
let playerYPos_1 = widowHeight/2;
let playerYPos_2 = widowHeight/2;
let paddleSpeed = windowHeight/20;
let compYPos_1 = widowHeight/2;
let compYPos_2 = widowHeight/2;
let paddleLeftPosition = 50;
let paddleRightPosition = windowWidth - 50;
let paddleWidth = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  //player 1's paddle
  rect(mouseX, mouseY, paddleWidth, 20);
}

function keyIsPressed() {
  //player 1's movement
  if (key === "w" && playerYPos_1 < 0) {
    playerYPos_1 += paddleSpeed;
  }
	if (key === "s" && (playerYPos_1 + height/10) > height) {
    playerYPos_1 -= paddleSpeed;
  }
}
