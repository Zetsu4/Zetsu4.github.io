// Bouncing Balls
// Travis Ahern
// Oct. 22, 2018

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
    this.color = color(random(255), random(255), random(255), 120);
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  movement() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x > width - this.r || this.x < this.r) {
      this.dx *= -1;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.dy *= -1;
    }
  }

  bounce() {
  }
}


let balls;
let numOfBallSpawn;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  balls = [];
  numOfBallSpawn = 50;
  for (let i = 0; i < numOfBallSpawn; i++) {
    balls.push(new Ball(random(25, width-25), random(25, height-25)));
  }
}

function draw() {
  background(0);
  updateBall();
  if (mouseIsPressed) {
    balls.push(new Ball(mouseX, mouseY));
  }
}

function updateBall() {
  for (let i = balls.length-1; i > 0; i--) {
    balls[i].bounce();
    balls[i].movement();
    balls[i].display();
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}
