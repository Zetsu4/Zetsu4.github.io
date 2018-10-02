// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let color = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  for (let i = 0; i < 400; i += 50) {
    for (let j = 0; j < 400; j += 50) {
      if (color === true) {
        fill("white");
      }
      else {
        fill("black");
      }
      color = !color;
      rect(i, j, 50, 50);
    }
    color = !color;
  }
}
