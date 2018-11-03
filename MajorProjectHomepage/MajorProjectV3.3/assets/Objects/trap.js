// traps
class trap {
  constructor(x, y, image, playerSpeed, itemX = 0, itemY = 0) {
    // position
    this.x = x;
    this.y = y;

    // item position
    this.itemX = itemX;
    this.itemY = itemY;

    // movement speed
    this.playerSpeed = playerSpeed;

    // sprite
    this.image = image;
  }

  pickUp(spriteW, spriteH) {
    return this.itemX + width/2 >= width/2 - spriteW/2 && this.itemX + width/2 <= width/2 + spriteW/2
        && this.itemY + height/2 >= height/2 - spriteH/2 && this.itemY + height/2 <= height/2 + spriteH/2;
  }

  moveWithPlayerX(keyLeft, keyRight) {
    // x-axis move with player
    if (keyIsDown(keyLeft)) { // LEFT
      this.x += this.playerSpeed;
      this.itemX += this.playerSpeed;
    }

    if (keyIsDown(keyRight)) { // RIGHT
      this.x -= this.playerSpeed;
      this.itemX -= this.playerSpeed;
    }
  }

  moveWithPlayerY(keyUp, keyDown) {
    // y-axis move with player
    if (keyIsDown(keyUp)) { // UP
      this.y += this.playerSpeed;
      this.itemY += this.playerSpeed;
    }

    if (keyIsDown(keyDown)) { // DOWN
      this.y -= this.playerSpeed;
      this.itemY -= this.playerSpeed;
    }
  }

  show(spriteW, spriteH, interact) {
    image(this.image, this.x, this.y, spriteW, spriteH);
    
    if (this.x >= width/2 - spriteW && this.x <= width/2 + spriteW
     && this.y >= height/2 - spriteH && this.y <= height/2 + spriteH) {
      push();
      fill("purple");
      textSize((width*0.03 + height*0.03)/4);
      text("Pick up '" + String.fromCharCode(interact) + "'", this.x, this.y + spriteH*0.60);
      pop();
      return keyCode === interact;
    }
  }

  itemShow(spriteW, spriteH) {
    image(this.image, this.itemX + width/2, this.itemY + height/2, spriteW, spriteH);
  }
}
