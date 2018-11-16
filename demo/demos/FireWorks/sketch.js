// Fireworks
// Travis Ahern
// Nov. 14, 2018

class Firework {
  constructor(x, y, img) {
    this.img = img;

    // position
    this.x = x;
    this.y = y;

    // speed
    this.dx = random(-1, 1);
    this.dy = -random(2, 7);

    // tracking change of height
    this.changeY = 0;
    this.height = random(height*0.30, height*0.80);

    // tracking when to spawn bits
    this.state = 1;
    this.timer = 250;
    this.previousTimer = millis();
  }

  display() {
    image(this.img, this.x, this.y, width*0.05, height*0.05);
  }

  update() {
    // movement
    this.x += this.dx;
    this.y += this.dy;
    this.changeY += -this.dy;
  }

  makeSmokeBits() {
    // tracking bit spawn
    if (this.state === 1) {
      this.state = 0;
      return true;
    }

    else {
      let elapsedTime = millis() - this.previousTimer;
      if (elapsedTime > this.timer) {
        this.state = 1;
        this.previousTimer = millis();
      }
    }

    return false;
  }

  destroy() {
    // when firework explodes
    return this.changeY >= this.height;
  }
}

class Partical {
  constructor(x, y, shorter) {
    this.x = x;
    this.y = y;
    this.size;
    this.dx;
    this.dy;

    if (shorter) {
      // smoke
      this.size = (width*0.005 + height*0.005)/2;
      this.dx = random(-0.5, 0.5);
      this.dy = random(-0.5, 0.5);
    }

    else {
      // explosion
      this.size = (width*0.01 + height*0.01)/2;
      this.dx = random(-5, 5);
      this.dy = random(-5, 5);
    }

    this.transparency = 255;
    this.color = color(random(255), random(255), random(255), this.transparency);
  }

  update() {
    // move and fade
    this.x += this.dx;
    this.y += this.dy;
    this.transparency -= 2;
    this.color.setAlpha(this.transparency);
    if (this.transparency <= 0) {
      return true;
    }
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}


let fireworkImg;
let fireworks = [];
let fireworkBits = [];
let numOfBits;
let paused = false;


function preload() {
  fireworkImg = loadImage("assets/firework.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noStroke();
  numOfBits = 10;
}

function draw() {
  if (!paused) {
    background(0);
    dealWithBits();
    moveFireworks();
  }
}

function moveFireworks() {
  for (let i = fireworks.length-1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].display();

    if (fireworks[i].makeSmokeBits()) {
      for (let j = 0; j < numOfBits; j++) {
        fireworkBits.push(new Partical(fireworks[i].x, fireworks[i].y, true));
      }
    }

    if (fireworks[i].destroy()){
      for (let j = 0; j < numOfBits*5; j++) {
        fireworkBits.push(new Partical(fireworks[i].x, fireworks[i].y, false));
      }
      fireworks.splice(i, 1);
    }
  }
}

function dealWithBits() {
  for (let i = fireworkBits.length-1; i > 0; i--) {
    fireworkBits[i].display();
    if (fireworkBits[i].update()) {
      fireworkBits.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    paused = !paused;
  }
}

function mousePressed() {
  fireworks.push(new Firework(mouseX, mouseY, fireworkImg));
  fireworks[fireworks.length-1].display();
}
