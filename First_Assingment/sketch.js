// First_Assignment (Pong with friends)
// Travis Ahern
// Sept. 13, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//creating global variables
let ballX;
let ballY;
let ballSize = 25;
let ballX_Speed;
let ballY_Speed;
let ballX_Direction;
let ballY_Direction;
let paddleWidth;
let paddleHeight;
let playerYPos_1;
let playerYPos_2;
let paddleSpeed_player = 5;
let paddleSpeed_comp = 0;
let compYPos_1;
let compYPos_2;
let paddleLeftPosition;
let paddleRightPosition;
let scoreLeft = 5;
let scoreRight = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //paddle sizes
  paddleWidth = windowWidth/100;
  paddleHeight = windowHeight/20;

  //ball starting corrdinates
  ballX = windowWidth/2;
  ballY = windowHeight/2;

  //putting paddles half way down the screen
  playerYPos_1 = windowHeight/4;
  playerYPos_2 = playerYPos_1*3;
  compYPos_1 = playerYPos_1;
  compYPos_2 = playerYPos_1*3;

  //putting paddles on respective sides
  paddleLeftPosition = 50;
  paddleRightPosition = windowWidth - 50;

  //setting ball speed
  ballX_Speed = random(3, 15);
  ballY_Speed = random(2, 6);

  //setting ball direction
  ballX_Direction = random(0, 3);
  ballY_Direction = random(0, 3);
  if (ballX_Direction <= 1){
    ballX_Speed = (-ballX_Speed);
  }
  if (ballY_Direction <= 1) {
    ballY_Speed = (-ballY_Speed);
  }
}

function draw() {
  background(0);

  //the ball
  fill(255, 255, 255);
  ellipse(ballX, ballY, ballSize);

  //player's paddle
    //player 1
  fill(255, 0, 0);
  rect(paddleLeftPosition, playerYPos_1, paddleWidth, paddleHeight);
    //player 2
  rect(paddleLeftPosition, playerYPos_2, paddleWidth, paddleHeight);

  //computer paddle
    //computer 1
  fill(0, 0, 255);
  rect(paddleRightPosition, compYPos_1, paddleWidth, paddleHeight);
    //computer 2
  rect(paddleRightPosition, compYPos_2, paddleWidth, paddleHeight);


  //the balls movement
    //hitting paddles on the left (players)
  if (ballX <= (paddleLeftPosition + paddleWidth) && ballX >= paddleLeftPosition) {
      //player 1
    if (ballY >= playerYPos_1 && ballY <= (playerYPos_1 + paddleHeight) ) {
      ballX_Speed = (-ballX_Speed);
    }
      //player 2
    else if (ballY >= playerYPos_2 && ballY <= (playerYPos_2 + paddleHeight) ) {
      ballX_Speed = (-ballX_Speed);
    }
  }

    //hitting paddles on the right (computers)
  if (ballX <= (paddleRightPosition + paddleWidth) && ballX >= paddleRightPosition) {
      //computer 1
    if (ballY >= compYPos_1 && ballY <= (compYPos_1 + paddleHeight) ) {
      ballX_Speed = (-ballX_Speed);
    }
      //computer 2
    else if (ballY >= compYPos_2 && ballY <= (compYPos_2 + paddleHeight) ) {
      ballX_Speed = (-ballX_Speed);
    }
  }

    //hitting the top/bottom screen
  if (ballY <= 0 || ballY >= windowHeight) {
    ballY_Speed = (-ballY_Speed);
  }

    //hitting the left/right screen (scoring)
  if (ballX <= 0 || ballX >= windowWidth) {
      //scoring
    if (ballX <= 0) {
      scoreRight++;
    }
    else {
      scoreLeft++;
    }
      //resetting ball
    ballX = (windowWidth/2);
    ballY = (windowHeight/2);
    ballX_Speed = random(3, 9);
    ballY_Speed = random(1, 3);
    if (ballX_Direction === 0){
      ballX_Speed = (-ballX_Speed);
    }
    if (ballY_Direction === 0) {
      ballY_Speed = (-ballY_Speed);
    }
  }

  ballX += ballX_Speed;
  ballY += ballY_Speed;

  //player's movement
  if (keyIsPressed) {
    //player 1's movement ('w' and 's')
    if (keyIsDown(87) && playerYPos_1 > 0) {
      playerYPos_1 -= paddleSpeed_player;
    }
  	if (keyIsDown(83) && (playerYPos_1 + paddleHeight) < windowHeight/2) {
      playerYPos_1 += paddleSpeed_player;
    }

    //player 2's movement ('up_arrow' and 'down_arrows')
    if (keyIsDown(38) && playerYPos_2 > windowHeight/2) {
      playerYPos_2 -= paddleSpeed_player;
    }
  	if (keyIsDown(40) && (playerYPos_2 + paddleHeight) < windowHeight) {
      playerYPos_2 += paddleSpeed_player;
    }
  }

  //computer's movement
    //computer 1
  if ( (compYPos_1 + paddleHeight/2) > ballY) {
    compYPos_1 -= paddleSpeed_comp;
  }
  if ( (compYPos_1 + paddleHeight/2) < ballY && (compYPos_1 + paddleHeight) < windowHeight/2) {
    compYPos_1 += paddleSpeed_comp;
  }

    //computer 2
  if ( (compYPos_2 + paddleHeight/2) > ballY && (compYPos_2 + paddleHeight) > windowHeight/2) {
    compYPos_2 -= paddleSpeed_comp;
  }
  if ( (compYPos_2 + paddleHeight/2) < ballY) {
    compYPos_2 += paddleSpeed_comp;
  }

  //mouse actions
  if (mouseIsPressed) {
    //reset score
    if (mouseButton === CENTER) {
      scoreLeft = 0;
      scoreRight = 0;
    }
    //moving the ball
    else {
      ballX = pmouseX;
      ballY = pmouseY;
    }
  }
}

function mouseReleased() {
  //resume ball movement
  ballX_Speed = (mouseX - pmouseX);
  ballY_Speed = (mouseY - pmouseY);
  if (ballX_Speed === 0) {
    ballX_Speed += 3;
  }
  if (ballY_Speed === 0) {
    ballY_Speed += 3;
  }

}
