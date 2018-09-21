// First_Assignment (Pong with friends)
// Travis Ahern
// Sept. 13, 2018
//
// Extra for Experts:
//

//creating global variables
  //sound var
let backgroundMusic, pongSound;
  //ball var
let ballX, ballY, ballSize;
let ballX_Speed, ballY_Speed;
let XrandomMin, XrandomMax, YrandomMin, YrandomMax;
let posOrNeg = ["-", "+"];
  //paddle var
let paddleWidth, paddleHeight;
let playerYPos_1, playerYPos_2;
let compYPos_1, compYPos_2;
let paddleSpeed_player, paddleSpeed_comp;
let paddleLeftPosition, paddleRightPosition;
  //score var
let scoreLeft = 0;
let scoreRight = 0;
  //ball manipulation var
let playerMovesBallX, playerMovesBallY;

function preload() {
  //backgroundMusic = loadSound();
  pongSound = loadSound("assets/ping_pong_hit.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //setting score font
  textFont("Font Style Bold", height*0.05);

  //ball starting corrdinates and size
  ballX = width*0.5;
  ballY = height*0.5;
  ballSize = width*0.015;
    //setting balls max and min speeds
  XrandomMin = width*0.002;
  XrandomMax = width*0.007;
  YrandomMin = height*0.002;
  YrandomMax = height*0.007;
    //setting ball speed to the right
  ballX_Speed = random(XrandomMin, XrandomMax);
  ballY_Speed = random(posOrNeg);
  if (ballY_Speed === "-") {
    ballY_Speed = -random(YrandomMin, YrandomMax)  ;
  }
  else {
    ballY_Speed = random(YrandomMin, YrandomMax);
  }

  //paddle sizes
  paddleWidth = width*0.01;
  paddleHeight = height*0.065;

  //paddle speed
  paddleSpeed_player = height*0.005;
  paddleSpeed_comp = height*0.004;

  //putting paddles on the screen
  playerYPos_1 = height*0.25;
  playerYPos_2 = height*0.75;
  compYPos_1 = height*0.125;
  compYPos_2 = height*0.875;

  //putting paddles on respective sides
  paddleLeftPosition = width*0.03;
  paddleRightPosition = width - paddleLeftPosition;
}

function draw() {
  background(0);

  //the ball
  fill(255);
  ellipse(ballX, ballY, ballSize);

  //player's paddle and displaying scores
  fill(255, 0, 0);
  text(scoreLeft, width*0.25, height*0.05);
    //player 1
  rect(paddleLeftPosition, playerYPos_1, paddleWidth, paddleHeight);
    //player 2
  rect(paddleLeftPosition, playerYPos_2, paddleWidth, paddleHeight);

  //computer paddle
  fill(0, 0, 255);
  text(scoreRight, width*0.75, height*0.05);
    //computer 1
  rect(paddleRightPosition, compYPos_1, paddleWidth, paddleHeight);
    //computer 2
  rect(paddleRightPosition, compYPos_2, paddleWidth, paddleHeight);


  //the balls movement
    //hitting the top/bottom screen
  if (ballY - ballSize*0.5 <= 0) {
    ballY_Speed = -(ballY_Speed - random(YrandomMin) ) ;
  }
  if (ballY + ballSize*0.5 >= height) {
    ballY_Speed = -(ballY_Speed + random(YrandomMin) ) ;
  }
    //hitting the left/right screen (scoring)
  if (ballX - ballSize*0.5 <= 0 || ballX + ballSize*0.5 >= width) {
      //scoring
    if ( ballX - ballSize*0.5 <= 0) {
      scoreRight++;
    }
    else {
      scoreLeft++;
    }
      //resetting ball
    ballX = width*0.5;
    ballY = height*0.5;
    ballX_Speed = random(XrandomMin, XrandomMax);
    ballY_Speed = random(posOrNeg);
    if (ballY_Speed === "-") {
      ballY_Speed = -random(YrandomMin, YrandomMax) ;
    }
    else {
      ballY_Speed = random(YrandomMin, YrandomMax);
    }
      //ressetting computer paddles
    compYPos_1 = height*0.125;
    compYPos_2 = height*0.875;
  }

    //hitting paddles on the left (players)
  if (ballX - ballSize*0.5 <= paddleLeftPosition + paddleWidth && ballX - ballSize*0.5 >= paddleLeftPosition) {
    if (ballY - ballSize*0.5 <= playerYPos_1 + paddleHeight && ballY + ballSize*0.5 >= playerYPos_1) {
      ballX_Speed = random(XrandomMin, XrandomMax);
    }
    else if (ballY - ballSize*0.5 <= playerYPos_2 + paddleHeight && ballY + ballSize*0.5 >= playerYPos_2) {
      ballX_Speed = random(XrandomMin, XrandomMax);
    }
    pongSound.play();
  }

    //hitting paddles on the right (computers)
  if (ballX + ballSize*0.5 <= paddleRightPosition + paddleWidth && ballX + ballSize*0.5 >= paddleRightPosition) {
    if (ballY - ballSize*0.5 <= compYPos_1 + paddleHeight && ballY + ballSize*0.5 >= compYPos_1) {
      ballX_Speed = random(XrandomMin, XrandomMax);
      ballX_Speed = -ballX_Speed;
    }
    else if (ballY - ballSize*0.5 <= compYPos_2 + paddleHeight && ballY + ballSize*0.5 >= compYPos_2) {
      ballX_Speed = random(XrandomMin, XrandomMax);
      ballX_Speed = -ballX_Speed;
    }
    pongSound.play();
  }
  ballX += ballX_Speed;
  ballY += ballY_Speed;


  //player's movement
  if (keyIsPressed) {
    //player 1's movement ('w' and 's')
    if (keyIsDown(87) && playerYPos_1 > 0) {
      playerYPos_1 -= paddleSpeed_player;
    }
    if (keyIsDown(83) && playerYPos_1 + paddleHeight < playerYPos_2) {
      playerYPos_1 += paddleSpeed_player;
    }

    //player 2's movement ('up_arrow' and 'down_arrows')
    if (keyIsDown(38) && playerYPos_2 > playerYPos_1 + paddleHeight) {
      playerYPos_2 -= paddleSpeed_player;
    }
    if (keyIsDown(40) && playerYPos_2 + paddleHeight < height) {
      playerYPos_2 += paddleSpeed_player;
    }
  }


  //computer's movement
    //computer 1
  if (compYPos_1 + paddleHeight*0.5 > ballY) {
    compYPos_1 -= paddleSpeed_comp;
  }
  if (compYPos_1 + paddleHeight*0.5 < ballY && compYPos_1 + paddleHeight < compYPos_2) {
    compYPos_1 += paddleSpeed_comp;
  }

    //computer 2
  if (compYPos_2 + paddleHeight*0.5 > ballY && compYPos_2 > compYPos_1 + paddleHeight) {
    compYPos_2 -= paddleSpeed_comp;
  }
  if (compYPos_2 + paddleHeight*0.5 < ballY) {
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
  playerMovesBallX = mouseX - pmouseX;
  playerMovesBallY = mouseY - pmouseY;

    //x axis
  if (playerMovesBallX < 0 && ballX_Speed > 0) {
    ballX_Speed = -ballX_Speed;
  }
  else if (playerMovesBallX > 0 && ballX_Speed < 0) {
    ballX_Speed = -ballX_Speed;
  }
    //y axis
  if (playerMovesBallY < 0 && ballY_Speed > 0) {
    ballY_Speed = -ballY_Speed;
  }
  else if (playerMovesBallY > 0 && ballY_Speed < 0) {
    ballY_Speed = -ballY_Speed;
  }
}
