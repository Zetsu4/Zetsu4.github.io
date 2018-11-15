// sword swings
class Sword {
  constructor(x, swiftness, image, alingment = "good") {
    // positon
    this.x = x;

    // position in the enviorment
    this.realX = 0;
    this.realY = 0;

    // position that translates
    this.changeX = 0;
    this.changeY = 0;

    // movement speed
    this.speed = swiftness*0.15;

    // sprite
    this.image = image;
    this.alingment = alingment;
    this.direction;
    if (this.alingment === "good") {
      this.direction = atan2(mouseY - height/2, mouseX - width/2);
    }
    else {
      this.direction = atan2(badGuyY - height/2, badGuyX - width/2);
    }
  }

  playerHit() {

  }

  disapear(spriteW) {
    // end of life
    return this.x >= spriteW*2;
  }

  moveForward() {
    this.x += this.speed;
    this.realX = width/2 + this.changeX + cos(this.direction)*this.x;
    this.realY = height/2 + this.changeY + sin(this.direction)*this.x;
  }

  moveWithPlayerX(keyLeft, keyRight, playerSpeed) {
    // x-axis move with player
    if (keyIsDown(keyLeft)) { // LEFT
      this.changeX += playerSpeed;
    }

    if (keyIsDown(keyRight)) { // RIGHT
      this.changeX -= playerSpeed;
    }
  }

  moveWithPlayerY(keyUp, keyDown, playerSpeed) {
    // y-axis move with player
    if (keyIsDown(keyUp)) { // UP
      this.changeY += playerSpeed;
    }

    if (keyIsDown(keyDown)) { // DOWN
      this.changeY -= playerSpeed;
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
