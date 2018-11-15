// Fireworks Demo
// Travis Ahern
// Nov. 14, 2018

class Firework {
  constructor(x, y, numOfBits) {
    this.x = x;
    this.y = y;
    this.height = random(width*0.10, width*0.20);
    this.dx = random(-5, 5);
    this.dy = random(2, 7);
    this.bits = numOfBits;
    this.arrayOfBits = [];
    this.state = 1;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

  smokeBits() {
    if (this.y >= this.height) {
      for (let i = 0; i < this.bits; i++) {
        this.arrayOfBits.push(new Partical(this.x, this.y, false));
      }
    }
    else {
      for (let i = 0; i < this.bits; i++) {
        this.arrayOfBits.push(new Partical(this.x, this.y, true));
      }
    }
  }
}

class Partical {
  constructor(x, y, shorter) {
    this.x = x;
    this.y = y;

    if (shorter) {
      this.size = 2;
      this.dx = random(-0.5, 0.5);
      this.dy = random(-0.5, 0.5);
    }

    else {
      this.size = 5;
      this.dx = random(-5, 5);
      this.dy = random(-5, 5);
    }

    this.transparency = 255;
    this.color = color(random(255), random(255), random(255), this.transparency);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.transparency -= 3;
    this.color.setAlpha(this.transparency);
    if (this.transparency < 0) {
      return true;
    }
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}


let fireworks = [];
let addedParticals;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  addedParticals = 50;
}

function draw() {
  background(0);
  moveParticals();
  // pressedMouse();
}

function moveParticals() {
  for (let i = fireworks.length-1; i > 0; i--) {
    if (fireworks[i].arrayOfBits.length > 0) {
      for (let j = fireworks[i].arrayOfBits.length; j > 0; j--) {
        fireworks[i].arrayOfBits[j].display();
        for (let i = 0; i < this.bits; i++) {
          this.arrayOfBits.push(new Partical(this.x, this.y, false));
        }
      }
    }
    fireworks[i].smokeBits();
    if (fireworks[i].update()) {
      fireworks.splice(i, 1);
    }
  }
}

function pressedMouse() {
  if (mouseIsPressed) {
    for (let i = 0; i < addedParticals; i++) {
      fireworks.push(new Firework(mouseX, mouseY));
    }
  }
}

function mousePressed() {
  for (let i = 0; i < addedParticals; i++) {
    fireworks.push(new Firework(mouseX, mouseY, true));
  }
}
