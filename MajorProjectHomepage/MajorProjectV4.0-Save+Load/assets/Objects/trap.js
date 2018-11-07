// traps
class trap {
  constructor(x, y, image, playerX, playerY, item, itemXchange = 0, itemYchange = 0, otherX = 0, otherY = 0) {
    // position
    this.x = x;
    this.y = y;

    // position on map
    this.otherX = playerX;
    this.otherY = playerY;

    // item positions on map
    this.itemX = otherX;
    this.itemY = otherY;

    // item changing positions
    this.itemXchange = itemXchange;
    this.itemYchange = itemYchange;
    this.item = item;

    // sprite
    this.image = image;
  }

  pickUp(spriteW, spriteH) {
    return this.itemXchange + width/2 >= width/2 - spriteW/2 && this.itemXchange + width/2 <= width/2 + spriteW/2
        && this.itemYchange + height/2 >= height/2 - spriteH/2 && this.itemYchange + height/2 <= height/2 + spriteH/2;
  }

  moveWithPlayerX(keyLeft, keyRight, playerSpeed) {
    // x-axis move with player
    if (keyIsDown(keyLeft)) { // LEFT
      this.x += playerSpeed;
      this.itemXchange += playerSpeed;
    }

    if (keyIsDown(keyRight)) { // RIGHT
      this.x -= playerSpeed;
      this.itemXchange -= playerSpeed;
    }
  }

  moveWithPlayerY(keyUp, keyDown, playerSpeed) {
    // y-axis move with player
    if (keyIsDown(keyUp)) { // UP
      this.y += playerSpeed;
      this.itemYchange += playerSpeed;
    }

    if (keyIsDown(keyDown)) { // DOWN
      this.y -= playerSpeed;
      this.itemYchange -= playerSpeed;
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
    image(this.image, this.itemXchange + width/2, this.itemYchange + height/2, spriteW, spriteH);
  }

  mapping(
    worldW, worldH,
    minimapX, minimapY,
    minimapW, minimapH,
    playerX, playerY,
    dotSize, colors = "white") {
    // minimap boundries
    let minimapXMin = minimapX - minimapW/2 + dotSize/2;
    let minimapXMax = minimapX + minimapW/2 - dotSize/2;

    let minimapYMin = minimapY - minimapH/2 + dotSize/2;
    let minimapYMax = minimapY + minimapH/2 - dotSize/2;

    let mapX = map(this.otherX, 0, worldW, minimapXMin, minimapXMax);
    let mapY = map(this.otherY, 0, worldH, minimapYMin, minimapYMax);

    // dot
    if (this.item) {
      mapX = map(this.otherX, 0, worldW, minimapXMin, minimapXMax);
      mapY = map(this.otherY, 0, worldH, minimapYMin, minimapYMax);
    }

    // items dot
    fill(colors);
    ellipse(mapX, mapY, dotSize);
  }
}
