// bad guys
class baddies {
  constructor(badguyRace, badguySkill, x, y, playerSpeed) {
    // race and skill
    this.race = badguyRace;
    this.skill = badguySkill;

    // position in world
    this.otherX = x;
    this.otherY = y;

    // postion on map
    this.x = x;
    this.y = y;

    // movement vars
    this.playerSpeed = playerSpeed;
    this.speed = playerSpeed*2; // temp
    this.state = 0;
    this.dir = 0;

    this.UP = 0;
    this.RIGHT = 1;
    this.DOWN = 2;
    this.LEFT = 3;

    this.TIME_TO_STEP = 300;
    this.lastTime = 0;
  }

  // AI
  movement(worldW, worldH, spriteW, spriteH, playerX, playerY) {
    // move forword
    if (this.state === 0 || this.state === 1) {
      if (this.dir === this.UP && this.y > -worldH/2) {
        this.y -= this.speed;
        this.otherY -= this.speed;
      }

      else if (this.dir === this.RIGHT && this.x < worldW/2) {
        this.x += this.speed;
        this.otherX += this.speed;
      }

      else if (this.dir === this.DOWN && this.y < worldH/2) {
        this.y += this.speed;
        this.otherY += this.speed;
      }

      else if (this.dir === this.LEFT && this.x > -worldW/2) {
        this.x -= this.speed;
        this.otherX -= this.speed;
      }
    }

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

  attackPlayer(playerX, playerY, worldW, worldH) {
    // pursue player
    if (this.state !== 2) {
      // x-axis
      if (this.x >= playerX - worldW/2) {
        this.x -= this.speed*2;
        this.otherX -= this.speed*2;
      }

      else if (this.x <= playerX - worldW/2) {
        this.x += this.speed*2;
        this.otherX += this.speed*2;
      }

      // y-axis
      if (this.y >= playerY - worldH/2) {
        this.y -= this.speed*2;
        this.otherY -= this.speed*2;
      }

      else if (this.y <= playerY - worldH/2) {
        this.y += this.speed*2;
        this.otherY += this.speed*2;
      }
      this.state = 2;
    }

    // waiting
    else {
      let elapsedTime = millis() - this.TIME_TO_STEP/2;
      if (elapsedTime >= this.lastTime) {
        this.state = random([0, 1]);
        this.lastTime = millis();
      }
    }
  }

  baddieOnScreen(playerX, playerY, worldW, worldH) {
    // baddie on screen?
    return this.x >= playerX - worldW/2 - width/2 && this.x <= playerX - worldW/2 + width/2 &&
           this.y >= playerY - worldH/2 - height/2 && this.y <= playerY - worldH/2 + height/2;
  }

  collision(spriteW, spriteH) {
    // hitting player?
    return this.otherX + width/2 > width/2 - spriteW/2 && this.otherX + width/2 < width/2 + spriteW/2
      && this.otherY + height/2 > height/2 - spriteH/2 && this.otherY + height/2 < height/2 + spriteH/2;
  }

  moveWithPlayerX(keyLeft, keyRight) {
    // x-axis move with player
    if (keyIsDown(keyLeft)) { // LEFT
      this.otherX += this.playerSpeed;
    }

    if (keyIsDown(keyRight)) { // RIGHT
      this.otherX -= this.playerSpeed;
    }
  }

  moveWithPlayerY(keyUp, keyDown) {
    // y-axis move with player
    if (keyIsDown(keyUp)) { // UP
      this.otherY += this.playerSpeed;
    }

    if (keyIsDown(keyDown)) { // DOWN
      this.otherY -= this.playerSpeed;
    }
  }

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

    // dot
    let mapX = map(this.x, -worldW/2, worldW/2, minimapXMin, minimapXMax);
    let mapY = map(this.y, -worldH/2, worldH/2, minimapYMin, minimapYMax);

    // baddie dot
    fill("red");
    ellipse(mapX, mapY, dotSize);
  }

  show(sizeX, sizeY) {
    image(this.race[1], this.otherX + width/2, this.otherY + height/2, sizeX, sizeY);
    image(this.skill[1], this.otherX + width/2, this.otherY + height/2 - sizeY, sizeX, sizeY);
  }
}
