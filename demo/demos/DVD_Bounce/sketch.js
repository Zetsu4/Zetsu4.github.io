// DvD Bounce
// Travis Ahern
// Sept. 18, 2018
//

let dvd;
let x, y;
let dx, dy;


function preload() {
  dvd = loadImage("assets/dvd logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2 - dvd.width/2;
  y = height/2 - dvd.height/2;
  dx = random(3, 6);
  dy = random(3, 6);
}

function draw() {
  moveDVD();
  displayDVD();
}

function moveDVD() {
  if (y + dvd.height >= windowHeight || y <= 0) {
    dy = (-dy);
  }
  if (x + dvd.width >= windowWidth || x <= 0) {
    dx = (-dx);
  }

  x += dx;
  y += dy;
}

function displayDVD() {
  background(80);
  image(dvd, x, y);
}
