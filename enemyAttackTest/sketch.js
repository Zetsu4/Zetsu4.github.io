// Enemy Attacks
// Travis Ahern
// Nov. 13, 1018

let circleSize = 30;
let numOfThings = 5;
let things = [];

class sword {
  constructor(x, y, size, rotation) {
    this.x = x;
    this.y = y;

    this.size = size;
    this.rotate = rotation;
  }

  move() {
    // this.x++;
  }

  show() {
    push();
    translate(this.x, this.y);
    // rotate(this.rotate);
    rect(0, 0, this.size/2, this.size*2);
    pop();
  }
}

class badGuy {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;

    this.size = size;
    this.aSword = [];
  }

  move() {

  }

  attack() {
    let rotation = atan2(this.y - height/2, this.x - width/2);
    this.aSword.push(new sword(this.x, this.y, this.size, rotation));
  }

  show() {
    rect(this.x, this.y, this.size, this.size);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  createBadThings();
}

function createBadThings() {
  for (let i = 0; i < numOfThings; i++) {
    let x = random(width);
    let y = random(height);
    things.push(new badGuy(x, y, circleSize));
  }
}

function draw() {
  centerScreen();
  badGuyMovement();
}

function badGuyMovement() {
  for (let i = 0; i < things.length; i++) {
    things[i].move();
    things[i].attack();
    things[i].show();
    for (let j = 0; j < things[i].aSword.length; i++) {
      
    }
  }
}

function centerScreen() {
  ellipse(width/2, height/2, circleSize);
}
