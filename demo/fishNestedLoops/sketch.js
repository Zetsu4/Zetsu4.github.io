// Image Manipulation
// Travis Ahern
// Oct, 9/2018

let fish;
let grayFish;


function preload() {
  fish = loadImage("assets/fish.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(fish, 0, 0);
  grayFish = makeGrayscale(fish);
  image(grayFish, 0, 0);
}

function draw() {
}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();


  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let thisPixel = sourceImage.get(x, y);

      let r = red(thisPixel);
      let g = green(thisPixel);
      let b = blue(thisPixel);

      let average = (r + g + b)/3;

      let newPixel = color(average);

      img.set(x, y, newPixel);
    }
  }
  img.updatePixels();
  return img;
}
