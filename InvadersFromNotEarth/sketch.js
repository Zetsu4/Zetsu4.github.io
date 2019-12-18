// Two person game assignment. space invaders
// Cody Flynn
// 2018 11/16
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Creating the player and some of its propertys

let playerOne;
let platerImg = {};
let state = 0;
let startButton1;

function preload () {
  img.playerOneSprite = loadImage("assets/Img/PlayerBig.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  playerOne = new Player(img.playerOneSprite);
}

function draw() {
  background(0);
  if (state === 0){
    startScreen();
  }
  else{
    playerOne.display();
    playerOne.movement();
  }
}

function startScreen() {
  startButton1 = new Button();
  startButton1.drawButton();
  state = startButton1.checkClick();
}
