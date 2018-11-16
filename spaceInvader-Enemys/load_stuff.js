// Space Invaders
// Travis Ahern
// Cody Flynn
// Nov. 16, 2018

let img = {};
let sprite = {};
let enemyBoxs = [];

function preload() {
  img.commonSprite = loadImage("assets/Img/Commons.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sprite.width = 
  sprite.height =
}

function draw() {

}

function mousePressed() {
  let numOfEnemys = int(random(1, 3));
  enemyBoxs.push(new EnemyBox(numOfEnemys));
}
