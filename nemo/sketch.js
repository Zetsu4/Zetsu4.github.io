// Messing with images
// Travis Ahern
// Sept. 19, 2018

let fish;
let scaler;


function preload() {
  fish = loadImage("assets/nemo_clownfish_1.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scaler = 1.0;
}

function draw() {
  background(255);
  image(fish, mouseX, mouseY, fish.width * scaler, fish.height * scaler);
}

function mouseWheel(event) {
  if (event.delta > 0 && scaler < 2.5) {
    scaler *= 0.9;
  }
  else if (event.delta < 0 && scaler > 2.0) {
    scaler *= 1.1;
  }
}
