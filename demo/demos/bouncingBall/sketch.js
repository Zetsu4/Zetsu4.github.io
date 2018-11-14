// Bouncing Balls
// Travis Ahern
// Oct. 22, 2018

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(5, 20);
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.color = color(random(255), random(255), random(255));
  }

  movement() {
    this.x += this.dx;
    this.y += this.dy;
  }

  bounce() {
    if (this.x > width - this.r || this.x < this.r) {
      this.dx = -this.dx;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.dy = -this.dy;
    }
  }

  show() {
    fill(this.color);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}


let balls;
let numOfBallSpawn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  balls = [];
  numOfBallSpawn = 35;
  for (let i = 0; i < numOfBallSpawn; i++) {
    balls.push(new Ball(random(10, width-10), random(10, height-10)));
  }
}

function draw() {
  background(255);
  // display ball
  if (mouseIsPressed) {
    balls.push(new Ball(mouseX, mouseY));
  }

  for (let i of balls) {
    i.bounce();
    i.movement();
    i.show();
  }
}
