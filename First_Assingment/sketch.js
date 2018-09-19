// First_Assignment (Pong with friends)
// Travis Ahern
// Sept. 13, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//creating global variables
let ballX, ballY, ballSize;
let ballX_Speed, ballY_Speed;
let XrandomMin, XrandomMax, YrandomMin, YrandomMax;
let posOrNeg = ["-", "+"];
let paddleWidth, paddleHeight;
let playerYPos_1, playerYPos_2;
let compYPos_1, compYPos_2;
let paddleSpeed_player, paddleSpeed_comp;
let paddleLeftPosition, paddleRightPosition;
let scoreLeft = 0;
let scoreRight = 0;
let playerMovesBallX, playerMovesBallY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //setting score font
  textFont('Font Style Bold', height/20);

  //ball starting corrdinates and size
  ballX = width/2;
  ballY = height/2;
  ballSize = width/77;
    //setting balls max and min speeds
  XrandomMin = width/320;
  XrandomMax = width/107;
  YrandomMin = height/487;
  YrandomMax =height/195;
    //setting ball speed to the right
  ballX_Speed = random(XrandomMin, (XrandomMax + 1));
  ballY_Speed = random(posOrNeg);
  if (ballY_Speed === "-") {
    ballY_Speed = (-(random(YrandomMin, YrandomMax - 1) ) );
  }
  else {
    ballY_Speed = random(YrandomMin, (YrandomMax - 1));
  }

  //paddle sizes
  paddleWidth = width/100;
  paddleHeight = height/15;

  //paddle speed
  paddleSpeed_player = height/195;
  paddleSpeed_comp = height/280;

  //putting paddles on the screen
  playerYPos_1 = height/4;
  playerYPos_2 = playerYPos_1*3;
  compYPos_1 = height/8;
  compYPos_2 = compYPos_1*7;

  //putting paddles on respective sides
  paddleLeftPosition = width/32;
  paddleRightPosition = width - paddleLeftPosition;
}

function draw() {
  background(0);

  //the ball
  fill(255);
  ellipse(ballX, ballY, ballSize);

  //player's paddle and displaying scores
  fill(255, 0, 0);
  text(scoreLeft, width/4, height/20);
    //player 1
  rect(paddleLeftPosition, playerYPos_1, paddleWidth, paddleHeight);
    //player 2
  rect(paddleLeftPosition, playerYPos_2, paddleWidth, paddleHeight);

  //computer paddle
  fill(0, 0, 255);
  text(scoreRight, width/4 + width/2, height/20);
    //computer 1
  rect(paddleRightPosition, compYPos_1, paddleWidth, paddleHeight);
    //computer 2
  rect(paddleRightPosition, compYPos_2, paddleWidth, paddleHeight);


  //the balls movement
    //hitting paddles on the left (players)
  if ( (ballX - ballSize/2) <= (paddleLeftPosition + paddleWidth) && (ballX - ballSize/2) >= paddleLeftPosition) {
    if ( (ballY - ballSize/2) <= (playerYPos_1 + paddleHeight) && (ballY + ballSize/2) >= playerYPos_1) {
      ballX_Speed = random(XrandomMin, (XrandomMax + 1));
    }
    else if ( (ballY - ballSize/2) <= (playerYPos_2 + paddleHeight) && (ballY + ballSize/2) >= playerYPos_2) {
      ballX_Speed = random(XrandomMin, (XrandomMax + 1));
    }
  }

    //hitting paddles on the right (computers)
  if ( (ballX + ballSize/2) <= (paddleRightPosition + paddleWidth) && (ballX + ballSize/2) >= paddleRightPosition) {
    if ( (ballY - ballSize/2) <= (compYPos_1 + paddleHeight) && (ballY + ballSize/2) >= compYPos_1) {
      ballX_Speed = random(XrandomMin, (XrandomMax + 1));
      ballX_Speed = (-ballX_Speed);
    }
    else if ( (ballY - ballSize/2) <= (compYPos_2 + paddleHeight) && (ballY + ballSize/2) >= compYPos_2) {
      ballX_Speed = random(XrandomMin, (XrandomMax + 1));
      ballX_Speed = (-ballX_Speed);
    }
  }

    //hitting the top/bottom screen
  if ( (ballY - ballSize/2) <= 0 || (ballY + ballSize/2) >= height) {
    ballY_Speed = (-(ballY_Speed + random(-YrandomMax, YrandomMax) ) );
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
    ballX_Speed = random(XrandomMin, (XrandomMax + 1));
    ballY_Speed = random(posOrNeg);
    if (ballY_Speed === "-") {
      ballY_Speed = (-random(YrandomMin, (YrandomMax - 1) ) );
    }
    else {
      ballY_Speed = random(YrandomMin, YrandomMax);
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
