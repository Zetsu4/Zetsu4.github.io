class NonPlayableCharacters {
  constructor(x, y, img, says, shoppable = false, textFont = fonts.default, textSize = fontSize.playersDisplay, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;

    this.mapX = this.x;
    this.mapY = this.y;

    // sprite
    this.img = img;
    this.width = wid;
    this.height = hei;

    // interaction
    this.says = says;
    this.textSize = textSize;
    this.textFont = textFont;
    this.shoppable = shoppable;
    this.interacting = false;
    this.interactTimer = 3*1000;

    if (!this.shoppable) {
      // movement
      this.headToX = this.x;
      this.headToY = this.y;
      this.speed = (this.width+this.height)/int(random(50, 100));
      this.timer = 1000 - int(random(100, 3000));
      this.headingTo = random(true, false);
      this.findingPoint = true;
      this.resting = millis();
    }
  }

  display(zone, playerX, playerY) {
    // show if on screen
    if (this.x > -width*0.60 && this.x < width*0.60
     && this.y > -height*0.60 && this.y < height*0.60) {
      image(this.img, this.x, this.y, this.width, this.height);

      // move around town
      if (!this.shoppable && !this.interacting)
        this.move(zone, playerX, playerY);
    }
    this.interacting = !timerFoo(this.resting, this.interactTimer);
  }


  interact(interactKey) {
    if (keyCode === interactKey) {
      this.resting = millis();
      push();
      rectMode(CORNER);
      textAlign(LEFT, TOP);
      textFont(this.textFont, this.textSize);

      // textbox
      stroke("cyan");
      fill("white");
      rect(this.x, this.y, this.width*2, this.height/2);

      // text
      noStroke();
      fill("black");
      text(this.says, this.x, this.y);

      pop();
      // shop
      return this.shoppable;
    }

    return false;
  }

  move(zone, playerX, playerY) {
    // monkeying about - RvB refrence
    if (this.headingTo) {
      // find point to go to
      if (this.findingPoint)
        this.findPoint(zone, playerX, playerY);

      // move to point
      else {
        let moved = this.goToPoint();
        // if didn't moved then rest
        if (!moved) {
          this.findingPoint = true;
          this.headingTo = false;
          this.resting = millis();
        }
      }
    }

    // resting
    else
      this.restingFoo();
  }

  findPoint(zone, playerX, playerY) {
    let xMin = -zone.x-zone.wid/2;
    let xMax = zone.x+zone.wid/2;
    let yMin = -zone.y-zone.hei/2;
    let yMax = zone.y+zone.hei/2;

    // find point
    this.headToX = this.x + random(xMin, xMax);
    this.headToY = this.y + random(yMin, yMax);

    // constrain point to town
    this.headToX = constrain(this.headToX, xMin-playerX+this.width/2, xMax-playerX-this.width/2);
    this.headToY = constrain(this.headToY, yMin-playerY+this.height/2, yMax-playerY-this.height/2);
    this.findingPoint = false;
  }

  goToPoint() {
    let moved = false;
    let pointXMin = this.headToX - this.speed*1.5;
    let pointXMax = this.headToX + this.speed*1.5;
    let pointYMin = this.headToY - this.speed*1.5;
    let pointYMax = this.headToY + this.speed*1.5;

    if (this.x > pointXMax) { // left
      moved = true;
      this.x -= this.speed;
      this.mapX -= this.speed;
    }

    else if (this.x < pointXMin) { // right
      moved = true;
      this.x += this.speed;
      this.mapX += this.speed;
    }

    if (this.y > pointYMax) { // up
      moved = true;
      this.y -= this.speed;
      this.mapY -= this.speed;
    }

    else if (this.y < pointYMin) { // down
      moved = true;
      this.y += this.speed;
      this.mapY += this.speed;
    }

    return moved;
  }

  restingFoo() {
    this.headingTo = timerFoo(this.resting, this.timer);
  }

  mapping(worldW = world.width, worldH = world.height,
    mapX = minimap.x, mapY = minimap.y,
    mapW = minimap.imgWidth, mapH = minimap.imgHeight,
    dotSize = player.dotSize*0.50
  ) {
    // map position
    let mapMinX = mapX - mapW/2 + dotSize;
    let mapMaxX = mapX + mapW/2 - dotSize;
    let mapMinY = mapY - mapH/2 + dotSize;
    let mapMaxY = mapY + mapH/2 - dotSize;

    // dot
    let shopX = map(this.mapX, -worldW/2, worldW/2, mapMinX, mapMaxX, true);
    let shopY = map(this.mapY, -worldH/2, worldH/2, mapMinY, mapMaxY, true);
    fill("lightBlue");
    ellipse(shopX, shopY, dotSize);
  }

  // move with player
  moveNPCX(moveSpeed, dir) {
    moveSpeed *= dir;

    this.x += moveSpeed;
    this.headToX += moveSpeed;
  }

  moveNPCY(moveSpeed, dir) {
    moveSpeed *= dir;

    this.y += moveSpeed;
    this.headToY += moveSpeed;
  }
}
