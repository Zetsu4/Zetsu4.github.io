// Gravitational forces
// Travis Ahern
// Nov. 3/18

let mass;
let radius;
let fixedPos = false;
let bodiesOfMass = [];
let paused = false;
let controls = true;
let status = true;
let decimals = false;
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
  mass = 50;
  radius = mass/2;
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
    for (let j = 0; j < bodiesOfMass.length; j++) {
      if (i !== j) {
        let distance = dist(bodiesOfMass[i].x, bodiesOfMass[i].y, bodiesOfMass[j].x, bodiesOfMass[j].y);
        let force = 6.67e-11 * bodiesOfMass[i].mass * bodiesOfMass[j].mass/(distance*distance);
        totalForce += force;
      }
    }
    bodiesOfMass[i].move();
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
R - toggle radius\n\
A - toggle decimals\n\
'Shift' - change number by factor of 10\n\
'Ctrl' - change number by factor of 100\n\
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
Decimals - " + decimals + "\n\
Radius - " + radiusOn + "\n\
Mass - " + mass.toFixed(3) + "Kg\n\
Radius - " + radius.toFixed(3) +
"m", width - width*0.005, height*0.005);
  }
  pop();
}

function changingNumbers(num) {
  // decimals
  if (decimals) {
    if (keyIsDown(17)) { // CTRL
      if (keyIsDown(38)) { // UP
        num += 1e-3;
      }
      if (keyIsDown(40)) { // DOWN
        num -= 1e-3;
      }
    }

    else if (keyIsDown(16)) { // SHIFT
      if (keyIsDown(38)) { // UP
        num += 1e-2;
      }
      if (keyIsDown(40)) { // DOWN
        num -= 1e-2;
      }
    }
    else {
      if (keyIsDown(38)) { // UP
        num += 1e-1;
      }
      if (keyIsDown(40)) { // DOWN
        num -= 1e-1;
      }
    }
  }

  // integers
  else {
    if (keyIsDown(17)) { // CTRL
      if (keyIsDown(38)) { // UP
        num += 1e2;
      }
      if (keyIsDown(40)) { // DOWN
        num -= 1e2;
      }
    }

    else if (keyIsDown(16)) { // SHIFT
      if (keyIsDown(38)) { // UP
        num += 1e1;
      }
      if (keyIsDown(40)) { // DOWN
        num -= 1e1;
      }
    }

    else {
      if (keyIsDown(38)) { // UP
        num += 1e0;
      }
      if (keyIsDown(40)) { // DOWN
        num -= 1e0;
      }
    }
  }
  num = constrain(num, 0, Infinity);
  return num;
}

function keyPressed() {
  if (radiusOn) {
    radius = changingNumbers(radius);
  }
  else {
    mass = changingNumbers(mass);
  }

  // toggle decimals
  if (keyIsDown(65)) { // A
    decimals = !decimals;
  }

  // toggle radius
  if (keyCode === 82) { // R
    radiusOn = !radiusOn;
  }

  // toggle controls/status
  if (keyCode === 90) { // Z
    controls = !controls;
  }
  if (keyCode === 88) { // X
    status = !status;
  }

  // toggle fixed bodies
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
    for (let i = 0; i < bodiesOfMass.length; i++) {
      if (bodiesOfMass[i].mouseOver()) {
        bodiesOfMass.splice(i, 1);
      }
    }
  }

  else {
    let randomCol = color(random(255), random(255), random(255));
    bodiesOfMass.push(new bodyOfMass(mouseX, mouseY, radius, fixedPos, randomCol));
  }
}
