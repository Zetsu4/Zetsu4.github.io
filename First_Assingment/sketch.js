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
let ballX_SpeedList = [-14, -13, -12, -11, -10, -9, -8, -7, -6, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let ballY_SpeedList = [-6, -5, -4, -3, -2, 2, 3, 4, 5, 6];
let ballX_Speed;
let ballY_Speed;
let paddleWidth;
let paddleHeight;
let playerYPos_1;
let playerYPos_2;
let paddleSpeed_player = 5;
<<<<<<< HEAD
let paddleSpeed_comp = 3.5;
=======
let paddleSpeed_comp = 3;
let compYPos_1;
>>>>>>> 8c61c75ac3a59dbc64fa66a2932a437223d38461
let compYPos_2;
let paddleLeftPosition;
let paddleRightPosition;
let scoreLeft = 0;
let scoreRight = 0;
let playerMovesBallX;
let playerMovesBallY;

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

  //setting ball speed to the right
  ballX_Speed = random(6, 15);
  ballY_Speed = random(2, 7);
}

function draw() {
  background(0);

  //displaying scores
  //i dont know how to do that                                                  LOOK HERE!!!
  text();

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
    if (ballY <= (playerYPos_1 + paddleHeight) && ballY >= playerYPos_1) {
      ballX_Speed = Math.abs(random(ballX_SpeedList));
    }
    else if (ballY <= (playerYPos_2 + paddleHeight) && ballY >= playerYPos_2) {
      ballX_Speed = Math.abs(random(ballX_SpeedList));
    }
  }

    //hitting paddles on the right (computers)
  if (ballX <= (paddleRightPosition + paddleWidth) && ballX >= paddleRightPosition) {
    if (ballY <= (compYPos_1 + paddleHeight) && ballY >= compYPos_1) {
      ballX_Speed = Math.abs(random(ballX_SpeedList));
      ballX_Speed = (-ballX_Speed);
    }
    else if (ballY <= (compYPos_2 + paddleHeight) && ballY >= compYPos_2) {
      ballX_Speed = Math.abs(random(ballX_SpeedList));
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
    ballX_Speed = random(ballX_SpeedList);
    ballY_Speed = random(ballY_SpeedList);
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
