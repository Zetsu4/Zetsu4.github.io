// sword swings
class sword {
  constructor(x, swiftness, image, playerSpeed) {
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
    this.playerSpeed = playerSpeed;

    // sprite
    this.image = image;
    this.direction = atan2(mouseY - height/2, mouseX - width/2);
  }

  disapear(spriteW) {
    // end of life
    return this.x >= spriteW*1.50;
  }

  moveForward() {
    this.x += this.speed;
    this.realX = width/2 + this.changeX + cos(this.direction)*this.x;
    this.realY = height/2 + this.changeY + sin(this.direction)*this.x;
  }

  moveWithPlayerX(keyLeft, keyRight) {
    // x-axis move with player
    if (keyIsDown(keyLeft)) { // LEFT
      this.changeX += this.playerSpeed;
    }

    if (keyIsDown(keyRight)) { // RIGHT
      this.changeX -= this.playerSpeed;
    }
  }

  moveWithPlayerY(keyUp, keyDown) {
    // y-axis move with player
    if (keyIsDown(keyUp)) { // UP
      this.changeY += this.playerSpeed;
    }

    if (keyIsDown(keyDown)) { // DOWN
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
