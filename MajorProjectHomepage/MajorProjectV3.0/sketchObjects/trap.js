// traps
class trap {
  constructor(x, y, image, playerSpeed, goodOrBad) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.playerSpeed = playerSpeed;
    this.alingment = goodOrBad;
  }

  collision() {
    
  }

  // move with player X
  moveWithPlayerX(worldW) {
    // x-axis
    if (keyIsDown(65)) { // a
      this.x += this.playerSpeed;
    }

    if (keyIsDown(68)) { // d
      this.x -= this.playerSpeed;
    }
  }

  // move with player Y
  moveWithPlayerY(worldH) {
    // y-axis
    if (keyIsDown(87)) { // w
      this.y += this.playerSpeed;
    }

    if (keyIsDown(83)) { // s
      this.y -= this.playerSpeed;
    }
  }

  show(spriteW, spriteH) {
    image(this.image, this.x, this.y, spriteW, spriteH);
  }
}
