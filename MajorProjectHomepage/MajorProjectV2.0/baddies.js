// bad guys
class baddies {

  constructor(enemyType, x, y) {
    this.enemyType = enemyType;
    this.x = x;
    this.y = y;
  }

  show(xMin, yMin, xMax, yMax,
    xMinBack, xMaxBack, yMinBack, yMaxBack) {

    let realPosX = map(this.x, xMin, xMax, xMinBack, xMinBack);
    let realPosY = map(this.y, yMin, yMax, yMinBack, yMaxBack);

    image(this.enemyType, realPosX, realPosY, width*0.05, height*0.10);
  }

  movement(speed, playerSpeed, xMin, yMin, xMax, yMax) {
    // x-axis
    if (this.x <= xMin) {
      this.x += speed;
    }
    else if (this.x >= xMax) {
      this.x -= speed;
    }
    else {
      if (keyIsDown(65)) { // "a"
        this.x += playerSpeed/2;
      }
      if (keyIsDown(68)) { // "d"
        this.x -= playerSpeed/2;
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
        this.y += playerSpeed/2;
      }
      if (keyIsDown(83)) { // "s"
        this.y -= playerSpeed/2;
      }
    }

    // following the player
    // if (this.x >= this.onScreenXMin && this.x <= this.onScreenXMax) {
    //   if(this.y >= this.onScreenYMin && this.y <= this.onScreenYMax) {
    //     // go to middle
    //     if (this.x < this.playerX) {
    //       this.x += speed;
    //     }
    //     else if (this.x > this.playerX) {
    //       this.x -= speed;
    //     }
    //
    //     if (this.y < this.playerY) {
    //       this.y += speed;
    //     }
    //     if (this.y > this.playerY) {
    //       this.y -= speed;
    //     }
    //   }
    // }
  }

  mapping(baddieDot,
    xMin, yMin, xMax, yMax,
    mapXMin, mapYMin, mapXMax, mapYMax) {
    let mapX = map(this.x, xMin, xMax, mapXMin + baddieDot/2, mapXMax + width*0.01 - baddieDot/2);
    let mapY = map(this.y, yMin, yMax, mapYMin + baddieDot/2, mapYMax + height*0.01 - baddieDot/2);

    fill("red");
    noStroke();
    ellipse(mapX, mapY, baddieDot);
    stroke(0);
  }
}
