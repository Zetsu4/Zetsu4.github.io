// Bouncing Balls
// Travis Ahern
// Oct. 22, 2018

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.dx = random(-10, 10)/2;
    this.dy = random(-10, 10)/2;
    this.color = color(random(255), random(255), random(255), 200);
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

  collision(r1, dx1, dy1) {
    let vect = atan(this.dy / this.dx);
    let vel1 = sqrt(sq(this.dx) + sq(this.dy));
    let vel2 = sqrt(sq(dx1) + sq(dy1));
    let Vf = (((this.r - r1) / (this.r + r1)) * vel1) + (((2 * r1) / (this.r + r1)) * vel2);

    // quad 2 and 3
    if (this.dx < 0) {
      this.dx = cos(vect) * Vf;
      this.dy = sin(vect) * Vf;
    }

    // quad 1 and 4
    else {
      this.dx = -cos(vect) * Vf;
      this.dy = -sin(vect) * Vf;
    }
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
  // if (mouseIsPressed) {
  //   balls.push(new Ball(mouseX, mouseY));
  // }
}

function updateBall() {
  for (let i = balls.length-1; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      if (collisionCheck(i, j)) {
        let dx1 = balls[i].dx;
        let dy1 = balls[i].dy;
        balls[i].collision(balls[j].r, balls[j].dx, balls[j].dy);
        balls[j].collision(balls[i].r, dx1, dy1);
      }
    }
    balls[i].movement();
    balls[i].display();
  }
}

function collisionCheck(ball1, ball2) {
  return (dist(balls[ball1].x, balls[ball1].y, balls[ball2].x, balls[ball2].y) <= balls[ball1].r + balls[ball2].r);
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}
