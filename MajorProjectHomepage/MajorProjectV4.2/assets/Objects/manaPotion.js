class MpPotion {
  constructor(itemInWorldX, itemInWorldY, itemMapX, itemMapY) {
    // sprite
    this.img = objectImg.mpPotion;

    // item changing positions
    this.itemX = itemInWorldX;
    this.itemY = itemInWorldY;

    // item positions on map
    this.mapX = itemMapX;
    this.mapY = itemMapY;
  }

  pickUp(spriteW, spriteH) {
    return this.itemX + width/2 >= width/2 - spriteW/2 && this.itemX + width/2 <= width/2 + spriteW/2
        && this.itemY + height/2 >= height/2 - spriteH/2 && this.itemY + height/2 <= height/2 + spriteH/2;
  }

  moveWithPlayerX(keyLeft, keyRight, playerSpeed) {
    // x-axis move with player
    if (keyIsDown(keyLeft)) { // LEFT
      this.itemX += playerSpeed;
    }

    if (keyIsDown(keyRight)) { // RIGHT
      this.itemX -= playerSpeed;
    }
  }

  moveWithPlayerY(keyUp, keyDown, playerSpeed) {
    // y-axis move with player
    if (keyIsDown(keyUp)) { // UP
      this.itemY += playerSpeed;
    }

    if (keyIsDown(keyDown)) { // DOWN
      this.itemY -= playerSpeed;
    }
  }

  itemShow(spriteW, spriteH) {
    image(this.img, this.itemX + width/2, this.itemY + height/2, spriteW, spriteH);
  }

  mapping(
    worldW, worldH,
    minimapX, minimapY,
    minimapW, minimapH,
    dotSize, colors) {
    // minimap boundries
    let minimapXMin = minimapX - minimapW/2 + dotSize/2;
    let minimapXMax = minimapX + minimapW/2 - dotSize/2;

    let minimapYMin = minimapY - minimapH/2 + dotSize/2;
    let minimapYMax = minimapY + minimapH/2 - dotSize/2;

    // dot
    let mapX = map(this.mapX, -worldW/2, worldW/2, minimapXMin, minimapXMax);
    let mapY = map(this.mapY, -worldH/2, worldH/2, minimapYMin, minimapYMax);

    // items dot
    fill(colors);
    ellipse(mapX, mapY, dotSize);
  }
}
