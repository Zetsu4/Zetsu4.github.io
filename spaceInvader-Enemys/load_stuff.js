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
let sprite = {};
let enemyBoxs = [];
let numOfEnemys;

function preload() {
  img.commonSprite = loadImage("assets/Img/Commons.png");
  img.bullet = loadImage("assets/Img/Bullets.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  sprite.width = width*0.05;
  sprite.height = height*0.05;
  numOfEnemys = 10;

  stroke("white");
  noFill();
}

function draw() {
  background(0);
  enemyFoos();
}

function enemyFoos() {
  for (let i = enemyBoxs.length-1; i >= 0; i--) {
    enemyBoxs[i].checkTurn();
  }
}

function mousePressed() {
  enemyBoxs.push(new EnemyBox(mouseX, mouseY, CommonEnemy, numOfEnemys, sprite.width, sprite.height, 1));
  enemyBoxs[enemyBoxs.length-1].spawnEnemys();
}
