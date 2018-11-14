// Fireworks Demo
// Travis Ahern
// Nov. 14, 2018

class Partical {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 5;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.transparency = 255;
    this.color = color(random(255), random(255), random(255), this.transparency);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.transparency -= 2;
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
  addedParticals = 100;
}

function draw() {
  background(255);
  moveParticals();
  pressedMouse();
}

function moveParticals() {
  for (let i = 0; i < fireworks.length; i++) {
    fireworks[i].display();
    if (fireworks[i].update()) {
      fireworks.splice(i, 1);
    }
  }
}

function pressedMouse() {
  if (mouseIsPressed) {
    for (let i = 0; i < addedParticals; i++) {
      fireworks.push(new Partical(mouseX, mouseY));
    }
  }
}
function mousePressed() {
  for (let i = 0; i < addedParticals; i++) {
    fireworks.push(new Partical(mouseX, mouseY));
  }
}
