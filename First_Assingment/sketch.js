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
let paddleWidth;
let paddleHeight;
let playerYPos_1;
let playerYPos_2;
let paddleSpeed_player = 5;
let paddleSpeed_comp = 3.5;
let compYPos_1;
let compYPos_2;
let paddleLeftPosition;
let paddleRightPosition;
let scoreLeft = 0;
let scoreRight = 0;
let playerMovesBallX;
let playerMovesBallY;
let posOrNeg = ["-", "+"];

function setup() {
  createCanvas(windowWidth, windowHeight);

  //paddle sizes
  paddleWidth = width/100;
  paddleHeight = height/15;

  //ball starting corrdinates
  ballX = width/2;
  ballY = height/2;

  //putting paddles half way down the screen
  playerYPos_1 = height/4;
  playerYPos_2 = playerYPos_1*3;
  compYPos_1 = height/8;
  compYPos_2 = compYPos_1*7;

  //putting paddles on respective sides
  paddleLeftPosition = 50;
  paddleRightPosition = width - 50;

  //setting ball speed to the right
  ballX_Speed = random(6, 19);
  ballY_Speed = random(posOrNeg);
  if (ballY_Speed === "-") {
    ballY_Speed = random(-6, -2);
  }
  else {
    ballY_Speed = random(2, 6);
  }
}

function draw() {
  background(0);

  //displaying scores
  textFont('Font Style Bold', 50);
    //left sides score
  fill(255, 0, 0);
  text(scoreLeft, width/4, 50);
    //right sides score
  fill(0, 0, 255);
  text(scoreRight, width/4 + width/2, 50);

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
  if ( (ballX - ballSize/2) <= (paddleLeftPosition + paddleWidth) && (ballX - ballSize/2) >= paddleLeftPosition) {
    if ( (ballY - ballSize/2) <= (playerYPos_1 + paddleHeight) && (ballY + ballSize/2) >= playerYPos_1) {
      ballX_Speed = random(6, 19);
    }
    else if ( (ballY - ballSize/2) <= (playerYPos_2 + paddleHeight) && (ballY + ballSize/2) >= playerYPos_2) {
      ballX_Speed = random(6, 19);
    }
  }

    //hitting paddles on the right (computers)
  if ( (ballX + ballSize/2) <= (paddleRightPosition + paddleWidth) && (ballX + ballSize/2) >= paddleRightPosition) {
    if ( (ballY - ballSize/2) <= (compYPos_1 + paddleHeight) && (ballY + ballSize/2) >= compYPos_1) {
      ballX_Speed = random(6, 19);
      ballX_Speed = (-ballX_Speed);
    }
    else if ( (ballY - ballSize/2) <= (compYPos_2 + paddleHeight) && (ballY + ballSize/2) >= compYPos_2) {
      ballX_Speed = random(6, 19);
      ballX_Speed = (-ballX_Speed);
    }
  }

    //hitting the top/bottom screen
  if ( (ballY - ballSize/2) <= 0 || (ballY + ballSize/2) >= height) {
    ballY_Speed = (-(ballY_Speed + random(-2, 2) ) );
  }

    //hitting the left/right screen (scoring)
  if ( (ballX - ballSize/2) <= 0 || (ballX + ballSize/2) >= width) {
      //scoring
    if ( (ballX - ballSize/2) <= 0) {
      scoreRight++;
    }
    else {
      scoreLeft++;
    }
      //resetting ball
    ballX = (width/2);
    ballY = (height/2);
    ballX_Speed = random(6, 19);
    ballY_Speed = random(posOrNeg);
    if (ballY_Speed === "-") {
      ballY_Speed = random(-6, -2);
    }
    else {
      ballY_Speed = random(2, 6);
    }
      //ressetting computer paddles
    compYPos_1 = height/8;
    compYPos_2 = compYPos_1*7;
  }

  ballX += ballX_Speed;
  ballY += ballY_Speed;

  //player's movement
  if (keyIsPressed) {
    //player 1's movement ('w' and 's')
    if (keyIsDown(87) && playerYPos_1 > 0) {
      playerYPos_1 -= paddleSpeed_player;
    }
  	if (keyIsDown(83) && (playerYPos_1 + paddleHeight) < playerYPos_2) {
      playerYPos_1 += paddleSpeed_player;
    }

    //player 2's movement ('up_arrow' and 'down_arrows')
    if (keyIsDown(38) && playerYPos_2 > (playerYPos_1 + paddleHeight) ) {
      playerYPos_2 -= paddleSpeed_player;
    }
  	if (keyIsDown(40) && (playerYPos_2 + paddleHeight) < height) {
      playerYPos_2 += paddleSpeed_player;
    }
  }

  //computer's movement
    //computer 1
  if ( (compYPos_1 + paddleHeight/2) > ballY) {
    compYPos_1 -= paddleSpeed_comp;
  }
  if ( (compYPos_1 + paddleHeight/2) < ballY && (compYPos_1 + paddleHeight) < compYPos_2) {
    compYPos_1 += paddleSpeed_comp;
  }

    //computer 2
  if ( (compYPos_2 + paddleHeight/2) > ballY && compYPos_2 > (compYPos_1 + paddleHeight) ) {
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
  playerMovesBallX = (mouseX - pmouseX);
  playerMovesBallY = (mouseY - pmouseY);

    //x axis
  if (playerMovesBallX < 0 && ballX_Speed > 0) {
    ballX_Speed = (-ballX_Speed);
  }
  else if (playerMovesBallX > 0 && ballX_Speed < 0) {
    ballX_Speed = (-ballX_Speed);
  }
    //y axis
  if (playerMovesBallY < 0 && ballY_Speed > 0) {
    ballY_Speed = (-ballY_Speed);
  }
  else if (playerMovesBallY > 0 && ballY_Speed < 0) {
    ballY_Speed = (-ballY_Speed);
  }
}
