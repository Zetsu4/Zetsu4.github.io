// First_Assignment (Pong with friends)
// Travis Ahern
// Sept. 13, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//creating global variables
let playerYPos_1 = 400;
let playerYPos_2 = 400;
let paddleSpeed_player = 5;
let paddleSpeed_comp = 1;
let compYPos_1 = 400;
let compYPos_2 = 400;
let paddleLeftPosition = 50;
let paddleRightPosition = 1500;
let paddleWidth = 20;
let paddleHeight = 50;
let ballX = 775;
let ballY = 370;
let ballSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  //the ball
  ellipse(ballX, ballY, ballSize);

  //player 1's paddle
  rect(paddleLeftPosition, playerYPos_1, paddleWidth, paddleHeight);

  //computer paddle
  rect(paddleRightPosition, compYPos_1, paddleWidth, paddleHeight);

  //computer's movement
  if ( (compYPos_1 + paddleHeight/2) > ballY) {
    compYPos_1 -= paddleSpeed_comp;
  }
  if ( (compYPos_1 + paddleHeight/2) < ballY) {
    compYPos_1 += paddleSpeed_comp;
  }

  //player's movement
  if (keyIsPressed) {
    //player 1's movement
    if (keyIsDown(87) && playerYPos_1 > 0) {
      playerYPos_1 -= paddleSpeed_player;
    }
  	if (keyIsDown(83) && playerYPos_1 < 1000) {
      playerYPos_1 += paddleSpeed_player;
    }
  }
}
