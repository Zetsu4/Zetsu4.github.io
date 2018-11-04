// Gravitational forces
// Travis Ahern
// Nov. 3/18

let mass;
let exponent;
let radius;
let fixedPos = false;
let bodiesOfMass = [];
let paused = false;
let controls = true;
let status = true;
let exponentOn = false;
let radiusOn = false;
let textTop;


function setup() {
  createCanvas(windowWidth, windowHeight);

  // text
  textTop = (width*0.015 + height*0.015)/2;
  textFont("BOLD", textTop);
  textAlign(LEFT, TOP);

  strokeWeight(5);
  stroke("white");
  fill("black");
  noFill();

  // data
  mass = 5.97;
  exponent = 24;
  radius = 50;
}

function draw() {
  background(0);
  showBodiesOfMass();
  if (!paused) {
    moveBodiesOfMass();
  }
  writeText();
}

function moveBodiesOfMass() {
  for (let i = 0; i < bodiesOfMass.length; i++) {
    let totalForce = 0;
    let acceleration = 0;
    for (let j = 0; j < bodiesOfMass.length; j++) {
      if (i !== j) {
        let distance = dist(bodiesOfMass[i].x, bodiesOfMass[i].y, bodiesOfMass[j].x, bodiesOfMass[j].y);
        let force = 6.67e-11 * bodiesOfMass[i].mass * bodiesOfMass[j].mass/(distance*distance);
        totalForce += force;
      }
    }
    acceleration = totalForce/bodiesOfMass[i].mass;
    bodiesOfMass[i].move(acceleration);
  }
}

function showBodiesOfMass() {
  for (let object of bodiesOfMass) {
    object.show();
  }
}

function writeText() {
  push();
  noStroke();
  fill(0,255,0);

  // controls
  if (controls) {
    text("CONTROLS:\n\
Z - toggle controls\n\
X - toggle status\n\
P - pause simulation\n\
F - toggle fixed\n\
C - clear\n\
D - delete\n\
E - toggle exponent\n\
R - toggle radius\n\
'Shift' - change 1st decimal\n\
'Ctrl' - change 2nd decimal\n\
'UP' - increse number\n\
'DOWN' - decrease number\n\
", width*0.005, height*0.005);
  }

  // status
  if (status) {
    textAlign(RIGHT);

    text("STATUS:\n\
Paused - " + paused + "\n\
Fixed - " + fixedPos + "\n\
Mass - " + mass.toFixed(2) + "e" + exponent + "Kg " + exponentOn + "\n\
Radius - " + round(radius) + "m " + radiusOn,
    width - width*0.005, height*0.005);
  }
  pop();
}

function changingNumbers() {
  // changing numbers
  if (exponentOn) {
    if (keyCode === 38) { // UP
      exponent++;
    }
    if (keyCode === 40) { // DOWN
      exponent--;
    }
  }

  else if (radiusOn) {
    if (keyIsDown(16)) { // SHIFT
      if (keyCode === 38) { // UP
        radius += 10;
      }
      if (keyCode === 40) { // DOWN
        radius -= 10;
      }
    }

    else {
      if (keyCode === 38) { // UP
        radius++;
      }
      if (keyCode === 40) { // DOWN
        radius--;
      }
    }
  }

  else {
    if (keyIsDown(17)) { // CTRL
      if (keyCode === 38) { // UP
        mass += 0.01;
      }
      if (keyCode === 40) { // DOWN
        mass -= 0.01;
      }
    }

    else if (keyIsDown(16)) { // SHIFT
      if (keyCode === 38) { // UP
        mass += 0.1;
      }
      if (keyCode === 40) { // DOWN
        mass -= 0.1;
      }
    }

    else {
      if (keyCode === 38) { // UP
        mass++;
      }
      if (keyCode === 40) { // DOWN
        mass--;
      }
    }
  }

  // constraint
  mass = constrain(mass, 1, 10);
  radius = constrain(radius, 0, Infinity);
}

function keyPressed() {
  changingNumbers();

  // toggle exponent
  if (keyCode === 69) { // E
    exponentOn = !exponentOn;
    radiusOn = false;
  }

  // toggle radius
  if (keyCode === 82) { // R
    radiusOn = !radiusOn;
    exponentOn = false;
  }

  // toggle controls/status display
  if (keyCode === 90) { // Z
    controls = !controls;
  }
  if (keyCode === 88) { // X
    status = !status;
  }

  // toggle fixed
  if (keyCode === 70) { // F
    fixedPos = !fixedPos;
  }

  // pause game
  if (keyCode === 80) { // P
    paused = !paused;
  }

  // clear
  if (keyCode === 67) { // C
    bodiesOfMass = [];
  }
}

function mousePressed() {
  if (keyIsDown(68)) { // D
    // delete
    for (let i = 0; i < bodiesOfMass.length; i++) {
      if (bodiesOfMass[i].mouseOver()) {
        bodiesOfMass.splice(i, 1);
      }
    }
  }

  else {
    let randomCol = color(random(10, 255), random(10, 255), random(10, 255));
    let firstMass = mass;
    let calculatedMass = 1;
    // implementing exponent
    for (let i = 0; i < exponent; i++) {
      calculatedMass = calculatedMass*firstMass;
    }
    bodiesOfMass.push(new bodyOfMass(mouseX, mouseY, calculatedMass, radius, fixedPos, randomCol));
  }
}
