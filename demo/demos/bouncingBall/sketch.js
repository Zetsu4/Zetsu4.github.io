// ouncing Balls
// Travis Ahern
// Oct. 22/18

let balls;

class ball {
  constructor(x, y, r, dx, dy, R, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.R = R;
    this.g = g;
    this.b = b;
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
    fill(this.R, this.g, this.b);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  balls = [];
  for (let i = 0; i < 100; i++) {
    balls.push(new ball(random(10, width-10), random(10, height-10), random(5, 10), random(-5, 5), random(-5, 5), random(255), random(255), random(255)));
    for (let j = 0; j < 100; j++) {
      if (dist() < balls[i].r) {
        
      }
    }
  }
}

function draw() {
  background(255);
  // display ball
  if (mouseIsPressed) {
    balls.push(new ball(mouseX, mouseY, random(2, 5), random(-5, 5), random(-5, 5), random(255), random(255), random(255)));
  }

  for (let i of balls) {
    i.bounce();
    i.movement();
    i.show();
  }
}
