// Space Invaders
//
// DIRECTED BY:
// Cody Flynn
// Travis Ahern
//
// PRODUCED BY:
// Travis Ahern
// Cody Flynn
//
// SCRIPTED BY:
// Cody Flynn
// Travis Ahern
//
// ART BY:
// Travis Ahern
// Cody Flynn
//
// MADE ON:
// November 16,
// of the year 2018
//
// THINGS THAT DON'T WORK:
// - Cody Flynn

let img = {};
let spriteSize = {};
let enemyBoxs = [];
let numOfEnemys;

let bullets = [];

function preload() {
  img.commonSprite = loadImage("assets/Img/Commons.png");
  img.bullet = loadImage("assets/Img/Bullets.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  spriteSize.width = width*0.025;
  spriteSize.height = height*0.025;
  numOfEnemys = 15;

  stroke("white");
  noFill();
}

function draw() {
  background(0);
  enemyFoos();

  for (let i = bullets.length-1; i >= 0; i--) {
    bullets[i].hitEdge() ? bullets.splice(i,1) : bullets[i].move();
  }
}

function enemyFoos() {
  for (let i = enemyBoxs.length-1; i >= 0; i--) {
    let y = enemyBoxs[i].y + enemyBoxs[i].enysAcrsY/2*enemyBoxs[i].sprtH;
    y >= height ? enemyBoxs.splice(i,1) : enemyBoxs[i].checkTurn();
  }
}

function mousePressed() {
  if (keyIsDown(16)) {
    bullets.push(new Bullet(mouseX, mouseY, spriteSize.width, spriteSize.height, "good"));
  }
  else {
    enemyBoxs.push(new EnemyBox(mouseX, mouseY, CommonEnemy, numOfEnemys, spriteSize.width, spriteSize.height, 1));
  }
  enemyBoxs[enemyBoxs.length-1].spawnEnemys();
}
