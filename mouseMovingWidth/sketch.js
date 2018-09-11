// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    createCanvas(400, 400);
}

function keyTyped() {
  background(255, 255, 255);
}

function draw() {
    //background(255);
  	let theWeight = abs(mouseX - pmouseX)
  	fill(0);
  	strokeWeight(theWeight);
  	line(pmouseX, pmouseY, mouseX, mouseY);
}
