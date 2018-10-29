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
  moveWithPlayerX(worldW, keyA, keyD) {
    // x-axis
    if (keyIsDown(keyA)) { // a
      this.x += this.playerSpeed;
    }

    if (keyIsDown(keyD)) { // d
      this.x -= this.playerSpeed;
    }
  }

  // move with player Y
  moveWithPlayerY(worldH, keyW, keyS) {
    // y-axis
    if (keyIsDown(keyW)) { // w
      this.y += this.playerSpeed;
    }

    if (keyIsDown(keyS)) { // s
      this.y -= this.playerSpeed;
    }
  }

  show(spriteW, spriteH) {
    image(this.image, this.x, this.y, spriteW, spriteH);
  }
}
