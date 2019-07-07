// Moving Background Images
// Travis Ahern
// Oct. 10/18

let grass;
let x;
let y;
let movementSpeed = 10;

function preload() {
  grass = loadImage("assets/grass.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  x = width/2;
  y = height/2;
}

function draw() {
  moveBackground();
  image(grass, x, y, width*10, height*10);
  ellipse(width/2, height/2, 20);
}

function moveBackground() {
  if (keyIsDown(65)) { // "a"
    x += movementSpeed;
  }
  if (keyIsDown(68)) { // "d"
    x -= movementSpeed;
  }
  if (keyIsDown(87)) { // "w"
    y += movementSpeed;
  }
  if (keyIsDown(83)) { // "s"
    y -= movementSpeed;
  }
}
