// Travis Ahern
// Nov. 16, 2018

class EnemyBox {
  constructor(enemyType, sprtSize, shot, shotImg, numOfEnemys, hardMode, boss) {
    // enemys
    let min = numOfEnemys - 3;
    let max = numOfEnemys + 3;
    this.enemyType = enemyType;
    this.enemysAcrsX = boss ? 1 : int(random(min, max));
    this.enemysAcrsX = constrain(this.enemysAcrsX, this.enemyType.min, this.enemyType.max);
    this.enemysAcrsY = boss ? 1 : int(this.enemysAcrsX*0.50);
    this.sprtSize = enemyType.size;
    this.enemys = [];
    this.enemyShots = [];

    // bullets
    this.shotType = shot;
    this.shotImg = shotImg;
    this.hardMode = hardMode;
    this.numOfShots = 0;
    this.attackSound = allSounds.enemyLaser;

    // position
    let xMin = this.sprtSize*this.enemysAcrsX/2-this.sprtSize;
    let xMax = this.sprtSize*this.enemysAcrsX/2+this.sprtSize;

    let yTop = this.sprtSize*this.enemysAcrsY/2+this.sprtSize;
    this.x = random(xMin, width - xMax);
    this.y = yTop;
    this.dir = random(["right", "left"]);
    this.movement = this.sprtSize;

    // time between actions
    this.timeDelay = hardMode ? this.enemyType.timer*0.75 : this.enemyType.timer;
    this.timer = millis();
  }

  spawnEnemys() {
    this.enemys = [];
    for (let i = -this.enemysAcrsX/2; i < this.enemysAcrsX/2; i++) {
      for (let j = -this.enemysAcrsY/2; j < this.enemysAcrsY/2; j++) {

        // fill this box with enemy units
        let x = this.x + this.sprtSize*i + this.sprtSize/2;
        let y = this.y + this.sprtSize*j + this.sprtSize/2;
        this.enemys.push(new Enemy(x, y, this.enemyType));
      }
    }
    this.movement = this.enemys[0].movement;
  }

  moveAllShots() {
    for (let i = this.enemyShots.length-1; i >= 0; i--) {
      this.enemyShots[i].move();
    }
  }

  collisionShots(playerX, playerY) {
    for (let i = this.enemyShots.length-1; i >= 0; i--) {
      if (this.enemyShots[i].hitPlayer(playerX, playerY)) {
        this.enemyShots.splice(i, 1);
        return true;
      }

      else if (this.enemyShots[i].hitEdge()) {
        this.enemyShots.splice(i,1);
      }
    }

    return false;
  }

  checkTurn() {
    // take turn
    let elapsedTime = millis() - this.timer;
    elapsedTime > this.timeDelay ? this.move() : this.enemys.map(enemys => enemys.display());
  }

  move() {
    // take turn
    this.timer = millis();

    // change directions?
    let changedDir = this.dir;
    this.dir = (this.dir === "right" ?
      (this.rightEdge() < width ? "right" : "left"):
      (this.leftEdge() < 0 ? "right" : "left"));
    changedDir = (changedDir !== this.dir);

    // enemy movement
    let amountMoved = 0;
    for (let i = 0; i < this.enemys.length; i++) {
      // enemy shots
      amountMoved = this.enemys[i].takeTurn(this.dir, changedDir);

      if (this.numOfShots < 5) {
        if (this.enemys[i].shoot(this.enemys.length)) {
          this.enemyShots.push(new this.shotType(this.enemys[i].x, this.enemys[i].y, this.enemyType.bulletSize, this.shotImg, "bad"));
          this.numOfShots++;
        }
      }
    }

    if (this.numOfShots > 0) {
      this.attackSound.play();
    }
    this.numOfShots = 0;

    // move
    changedDir ? (this.y += amountMoved) : (this.x += (this.dir === "right" ? amountMoved : -amountMoved));
  }

  deleteBullets() {
    this.enemyShots = [];
  }

  deleteEnemys() {
    this.enemys = [];
  }

  hitByBullet(enemyPos, bulletX, bulletY) {
    return dist(bulletX, bulletY, this.enemys[enemyPos].x, this.enemys[enemyPos].y) < this.sprtSize/2;
  }

  empty() {
    // empty box
    return this.enemys.length <= 0;
  }

  enemyHitBottom() {
    for (let i = 0; i < this.enemys.length; i++) {
      if (this.enemys[i].hitBottom()) {
        // enemy hits the bottom of the screen
        return true;
      }
    }
    return false;
  }

  rightEdge() {
    return this.x + this.sprtSize*this.enemysAcrsX/2 + this.sprtSize + this.sprtSize*this.enemyType.dxMultiplier;
  }

  leftEdge() {
    return this.x - this.sprtSize*this.enemysAcrsX/2 - this.sprtSize - this.sprtSize*this.enemyType.dxMultiplier;
  }

  bottomEdge() {
    return this.y + this.sprtSize*this.enemysAcrsY/2 + this.sprtSize;
  }

  topEdge() {
    return this.y - this.sprtSize*this.enemysAcrsY/2 - this.sprtSize;
  }
}
