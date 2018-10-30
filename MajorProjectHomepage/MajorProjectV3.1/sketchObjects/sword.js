// sword swings
class sword {
  constructor(x, swiftness, image, goodOrBad, playerSpeed) {
    this.x = x;
    this.realX = 0;
    this.realY = 0;
    this.changeX = 0;
    this.changeY = 0;
    this.speed = swiftness*0.05;
    this.playerSpeed = playerSpeed;
    this.image = image;
    this.alingment = goodOrBad;
    this.direction = atan2(mouseY - height/2, mouseX - width/2);
  }

  disapear(spriteW) {
    return this.x >= spriteW*2;
  }

  moveForward() {
    this.x += this.speed;
    this.realX = width/2 + cos(this.direction)*this.x;
    this.realY = height/2 + cos(this.direction)*this.x;
  }

  // move with player X
  moveWithPlayerX(keyA, keyD) {
    // x-axis
    if (keyIsDown(keyA)) { // a
      this.changeX += this.playerSpeed;
    }

    if (keyIsDown(keyD)) { // d
      this.changeX -= this.playerSpeed;
    }
  }

  // move with player Y
  moveWithPlayerY(keyW, keyS) {
    // y-axis
    if (keyIsDown(keyW)) { // w
      this.changeY += this.playerSpeed;
    }

    if (keyIsDown(keyS)) { // s
      this.changeY -= this.playerSpeed;
    }
  }

  show(spriteW, spriteH) {
    push();
    translate(width/2 + this.changeX, height/2 + this.changeY);
    rotate(this.direction);
    image(this.image, this.x, 0, spriteW, spriteH);
    pop();
  }
}
