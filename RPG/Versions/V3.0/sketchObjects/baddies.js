// bad guys
class baddies {
  // the meaning of life as a baddie
  constructor(badguyRace, badguySkill, x, y, playerSpeed) {
    // race and skill
    this.race = badguyRace;
    this.skill = badguySkill;

    // position to player
    this.otherX = x;
    this.otherY = y;

    // postion on map
    this.x = x;
    this.y = y;

    // movement vars
    this.playerSpeed = playerSpeed;
    this.speed = 20; // temp
    this.state = 0;
    this.dir = 0;

    this.UP = 0;
    this.RIGHT = 1;
    this.DOWN = 2;
    this.LEFT = 3;

    this.TIME_TO_STEP = 50; // temp
    this.lastTime = 0;
  }

  // AI
  movement(worldW, worldH, spriteW, spriteH, playerX, playerY) {
    // move forword
    if (this.state === 0 || this.state === 1) {
      if (this.dir === this.UP) {
        // this.y -= this.speed;
        this.otherY -= this.speed;
      }

      else if (this.dir === this.RIGHT) {
        // this.x += this.speed;
        this.otherX += this.speed;
      }

      else if (this.dir === this.DOWN) {
        // this.y += this.speed;
        this.otherY += this.speed;
      }

      else if (this.dir === this.LEFT) {
        // this.x -= this.speed;
        this.otherX -= this.speed;
      }
    }

    // boundries
    let boundMinX = -playerX;
    let boundMaxX = worldW - spriteW/2 - boundMinX;
    let boundMinY = -playerY;
    let boundMaxY = worldH - spriteH/2 - boundMinY;

    // this.x = constrain(// this.x, -boundMaxX/2, boundMaxX/2);
    this.otherX = constrain(this.otherX, -boundMaxX + width/2, boundMaxX - width/2);
    // this.y = constrain(// this.y, -boundMaxY/2, boundMaxY/2);
    this.otherY = constrain(this.otherY, -boundMaxY + height/2, boundMaxY - height/2);


    // turn right
    if (this.state === 0) {
      this.dir++;
      if (this.dir > this.LEFT) {
        this.dir = this.UP;
      }
      this.state = 2;
    }

    // turn left
    else if (this.state === 1) {
      this.dir--;
      if (this.dir < this.UP) {
        this.dir = this.LEFT;
      }
      this.state = 2;
    }

    // waiting
    else if (this.state === 2) {
      let elapsedTime = millis() - this.TIME_TO_STEP;
      if (elapsedTime >= this.lastTime) {
        this.state = random([0, 1]);
        this.lastTime = millis();
      }
    }
  }

  // AI pursue player
  attackPlayer(playerX, playerY, worldW, worldH) {
    // move toward player
    if (this.state === 0 || this.state === 1) {
      // x-axis
      if (this.otherX >= playerX - worldW/2) {
        // this.x -= this.speed*2;
        this.otherX -= this.speed*2;
      }

      else if (this.otherX <= playerX - worldW/2) {
        // this.x += this.speed*2;
        this.otherX += this.speed*2;
      }

      // y-axis
      if (this.otherY >= playerY - worldH/2) {
        // this.y -= this.speed*2;
        this.otherY -= this.speed*2;
      }

      else if (this.otherY <= playerY - worldH/2) {
        // this.y += this.speed*2;
        this.otherY += this.speed*2;
      }
      this.state = 2;
    }

    // waiting
    else if (this.state === 2) {
      let elapsedTime = millis() - this.TIME_TO_STEP/2;
      if (elapsedTime >= this.lastTime) {
        this.state = random([0, 1]);
        this.lastTime = millis();
      }
    }
  }

  // baddie on screen?
  baddieOnScreen(playerX, playerY, worldW, worldH) {
    return this.otherX >= playerX - worldW/2 - width/2 && this.otherX <= playerX - worldW/2 + width/2 &&
           this.otherY >= playerY - worldH/2 - height/2 && this.otherY <= playerY - worldH/2 + height/2;
  }

  // hitting player
  collision(spriteW, spriteH) {
    return this.otherX + width/2 > width/2 - spriteW/2 && this.otherX + width/2 < width/2 + spriteW/2
      && this.otherY + height/2 > height/2 - spriteH/2 && this.otherY + height/2 < height/2 + spriteH/2;
  }

  // move with player X
  moveWithPlayerX(worldW, keyA, keyD) {
    // x-axis
    if (keyIsDown(keyA)) { // a
      this.otherX += this.playerSpeed;
    }

    if (keyIsDown(keyD)) { // d
      this.otherX -= this.playerSpeed;
    }
  }

  // move with player Y
  moveWithPlayerY(worldH, keyW, keyS) {
    // y-axis
    if (keyIsDown(keyW)) { // w
      this.otherY += this.playerSpeed;
    }

    if (keyIsDown(keyS)) { // s
      this.otherY -= this.playerSpeed;
    }
  }

  // mapping baddies
  mapping(
    worldW, worldH,
    minimapX, minimapY,
    minimapW, minimapH,
    dotSize) {
    // minimap boundries
    let minimapXMin = minimapX - minimapW/2 + dotSize/2;
    let minimapXMax = minimapX + minimapW/2 - dotSize/2;

    let minimapYMin = minimapY - minimapH/2 + dotSize/2;
    let minimapYMax = minimapY + minimapH/2 - dotSize/2;

    // mapping dot
    let mapX = map(this.x, -worldW/2, worldW/2, minimapXMin, minimapXMax);
    let mapY = map(this.y, -worldH/2, worldH/2, minimapYMin, minimapYMax);

    // baddie dot
    fill("red");
    ellipse(mapX, mapY, dotSize);
  }

  // showing race and class
  show(sizeX, sizeY) {
    image(this.race[1], this.otherX + width/2, this.otherY + height/2, sizeX, sizeY);
    image(this.skill[1], this.otherX + width/2, this.otherY + height/2 - sizeY, sizeX, sizeY);
  }
}
