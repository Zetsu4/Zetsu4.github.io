// player
class player {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show(tempArray, arraySpot) {
    image(tempArray[arraySpot], width*0.50, height*0.50, width*0.05, height*0.10);
  }

  movement(speed, xMin, yMin, xMax, yMax) {
    // x-axis
    if (this.x <= xMin) {
      this.x += speed;
    }
    else if (this.x >= xMax) {
      this.x -= speed;
    }
    else {
      if (keyIsDown(65)) { // "a"
        this.x -= speed;
      }
      if (keyIsDown(68)) { // "d"
        this.x += speed;
      }
    }

    // y-axis
    if (this.y <= yMin) {
      this.y += speed;
    }
    else if (this.y >= yMax) {
      this.y -= speed;
    }
    else {
      if (keyIsDown(87)) { // "w"
        this.y -= speed;
      }
      if (keyIsDown(83)) { // "s"
        this.y += speed;
      }
    }
  }

  mapping(playerDot,
    xMin, yMin, xMax, yMax,
    mapXMin, mapYMin, mapXMax, mapYMax) {

    let mapX = map(this.x, xMin, xMax, mapXMin + playerDot/2, mapXMax + width*0.01 - playerDot/2);
    let mapY = map(this.y, yMin, yMax, mapYMin + playerDot/2, mapYMax + height*0.01 - playerDot/2);
    let rectW = map(width, xMin, xMax, mapXMin, mapXMax);
    let rectH = map(height, yMin, yMax, mapYMin, mapYMax);

    // player of position
    fill("blue");
    noStroke();
    ellipse(mapX, mapY, playerDot);

    // rectangle of vision
    noFill();
    stroke(255);
    strokeWeight(2);
    rectMode(CENTER);
    rect(mapX, mapY, rectW, rectH);

    // fixing the brakeables
    rectMode(CORNER);
    stroke(0);
    strokeWeight(1);
  }
}
