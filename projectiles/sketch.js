// Projectiles
// Travis Ahern
// Oct. 29/18

let projectileList = [];
let targetsList = [];
let rotating;
let state = true;


class projectile {
  constructor(rotation) {
    this.x = 0;
    this.y = 0;
    this.r = 20;
    this.rotation = rotation;
  }

  checkPosition() {
    width/2;
    height/2;
    this.rotation;
    this.x;

  }

  moveing() {
    this.x += 3;
  }

  show() {
    push();
    rotate(this.rotation);
    ellipse(this.x, this.y, this.r);
    pop();
  }
}

class target {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    push();
    noStroke();
    fill("red");
    ellipse(this.x, this.y, this.r);
    pop();
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    targetsList.push(new target(random(50, width - 50), random(50, height - 50), 40));
  }
}

function draw() {
  rotating = atan2(mouseY - height/2, mouseX - width/2);
  if (state) {
    background(255);
    mousePointing();
    targets();
    moveProjectiles();
  }
}

function targets() {
  for (let i of targetsList) {
    i.show();
  }
}

function moveProjectiles() {
  push();
  translate(width/2, height/2);
  for (let i of projectileList) {
    i.moveing();
    i.show();
  }
  pop();
}

function mousePointing() {
  push();
  translate(width/2, height/2);
  rotate(rotating);
  rect(-30, -5, 60, 10);
  pop();
}

function mousePressed() {
  projectileList.push(new projectile(rotating));
}

function keyPressed() {
  if (keyIsDown(83)) {
    state = !state;
  }
}
