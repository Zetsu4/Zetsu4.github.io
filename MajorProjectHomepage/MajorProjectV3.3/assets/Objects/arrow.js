// arrows
class arrow {
  constructor(x, swiftness, image, playerSpeed, itemX = 0, itemY = 0) {
    // positon
    this.x = x;

    // position in the enviorment
    this.realX = 0;
    this.realY = 0;

    // position that translates
    this.changeX = itemX;
    this.changeY = itemY;

    // movement speed
    this.speed = swiftness*0.20;
    this.playerSpeed = playerSpeed;

    // sprite
    this.image = image;
    this.direction = atan2(mouseY - height/2, mouseX - width/2);
  }

  pickUp(spriteW, spriteH) {
    return this.changeX + width/2 >= width/2 - spriteW/2 && this.changeX + width/2 <= width/2 + spriteW/2
        && this.changeY + height/2 >= height/2 - spriteH/2 && this.changeY + height/2 <= height/2 + spriteH/2;
  }

  disapear() {
    // end of life
    return this.x >= width/2;
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
    image(this.image, this.x, 0, spriteW, spriteH*0.25);
    pop();
  }

  itemShow(spriteW, spriteH) {
    image(this.image, this.changeX + width/2, this.changeY + height/2, spriteW, spriteH*0.25);
  }
}
