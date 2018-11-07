// arrows
class arrow {
  constructor(x, swiftness, image, itemXchange = 0, itemYchange = 0, otherX = 0, otherY = 0) {
    // positon
    this.x = x;

    // position in the enviorment
    this.realX = 0;
    this.realY = 0;

    // position that translates
    this.changeX = 0;
    this.changeY = 0;

    // item positions on map
    this.itemX = otherX;
    this.itemY = otherY;

    // item changing positions
    this.itemXchange = itemXchange;
    this.itemYchange = itemYchange;

    // movement speed
    this.speed = swiftness*0.20;

    // sprite
    this.image = image;
    this.direction = atan2(mouseY - height/2, mouseX - width/2);
  }

  pickUp(spriteW, spriteH) {
    return this.itemXchange + width/2 >= width/2 - spriteW/2 && this.itemXchange + width/2 <= width/2 + spriteW/2
        && this.itemYchange + height/2 >= height/2 - spriteH/2 && this.itemYchange + height/2 <= height/2 + spriteH/2;
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

  moveWithPlayerX(keyLeft, keyRight, playerSpeed) {
    // x-axis move with player
    if (keyIsDown(keyLeft)) { // LEFT
      this.changeX += playerSpeed;
      this.itemXchange += playerSpeed;
    }

    if (keyIsDown(keyRight)) { // RIGHT
      this.changeX -= playerSpeed;
      this.itemXchange -= playerSpeed;
    }
  }

  moveWithPlayerY(keyUp, keyDown, playerSpeed) {
    // y-axis move with player
    if (keyIsDown(keyUp)) { // UP
      this.changeY += playerSpeed;
      this.itemYchange += playerSpeed;
    }

    if (keyIsDown(keyDown)) { // DOWN
      this.changeY -= playerSpeed;
      this.itemYchange -= playerSpeed;
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
    image(this.image, this.itemXchange + width/2, this.itemYchange + height/2, spriteW, spriteH*0.25);
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
    let mapX = map(this.itemX, -worldW/2, worldW/2, minimapXMin, minimapXMax);
    let mapY = map(this.itemY, -worldH/2, worldH/2, minimapYMin, minimapYMax);

    // items dot
    fill(colors);
    ellipse(mapX, mapY, dotSize);
  }

  inInventory(invenY, invenX, cellSize, offSet, onMouse) {
    // item in inventory
    let xPos = invenX*cellSize + offSet;
    let yPos = invenY*cellSize + offSet;

    if (onMouse) {
      xPos = invenX;
      yPos = invenY;
    }

    image(this.image, xPos, yPos, cellSize, cellSize);
  }
}
