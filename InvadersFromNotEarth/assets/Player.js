// Cody Flynn
// Nov. 24, 2018

// Creating the player and some of its propertys
class Player {
  constructor(x, image, oneTwo, size, maxHealth, lives) {
    // position
    this.x = x;
    this.y = height*0.93 - (oneTwo-1)*10;

    // horizontal speed
    this.dx = width*0.006;

    // sprite
    this.img = image;
    this.size = size;
    this.playerNum = oneTwo;

    // health
    this.lives = lives;
    this.maxHealth = maxHealth;
    this.health = this.maxHealth;
    this.deathSound = allSounds.playerDeath;

    // attack
    this.attacking = false;
    this.projectiles = [];
    this.attackSound = allSounds.playerLaser;

    // item
    this.item = -1;
    this.useItemSound = allSounds.useItemPulse;

    // attack delay
    this.timeDelay = 1000;
    this.timer = millis();
  }

  display(y) {
    let livesPos = height*0.075*(y+1);
    image(this.img, this.x, this.y, this.size, this.size);

    // displaying lives
    fill("white");
    text("Lives", width*0.97, livesPos - this.size*0.25);

    for (let i = 0; i < this.lives-1; i++) {
      let x = this.size*0.25*i;
      image(this.img, width*0.99 - x, livesPos, this.size*0.25, this.size*0.25);
    }

    for (let i = this.projectiles.length-1; i >= 0; i--) {
      this.projectiles[i].move();
      if (this.projectiles[i].hitEdge()) {
        this.projectiles.splice(i, 1);
      }
    }
  }

  // moving
  movement() {
    if (this.playerNum === 1) {
      if (keyIsDown(65)) { // A
        this.x -= this.dx;
      }

      if (keyIsDown(68)) { // D
        this.x += this.dx;
      }
    }

    else if (this.playerNum === 2) {
      if (keyIsDown(37)) { // LEFT_ARROW
        this.x -= this.dx;
      }

      if (keyIsDown(39)) { // RIGHT_ARROW
        this.x += this.dx;
      }
    }

    this.x = constrain(this.x, 0 + this.size/2, width - this.size/2);
  }

  attack() {
    if (this.attacking) {
      if (keyIsDown(87) && this.playerNum === 1) { // W
        this.attackSound.play();
        this.projectiles.push(new Bullet(this.x - spriteSize.player*0.35, this.y, spriteSize.player/2, img.playerBullet, "good"));
        this.projectiles.push(new Bullet(this.x + spriteSize.player*0.35, this.y, spriteSize.player/2, img.playerBullet, "good"));
        this.timer = millis();
        this.attacking = false;
      }

      else if (keyIsDown(38) && this.playerNum === 2) { // UP_ARROW
        this.attackSound.play();
        this.projectiles.push(new Bullet(this.x - spriteSize.player*0.35, this.y, spriteSize.player/2, img.playerBullet, "good"));
        this.projectiles.push(new Bullet(this.x + spriteSize.player*0.35, this.y, spriteSize.player/2, img.playerBullet, "good"));
        this.timer = millis();
        this.attacking = false;
      }
    }

    else {
      let elapsedTime = millis() - this.timer;
      if (elapsedTime > this.timeDelay) {
        this.timer = millis();
        this.attacking = true;
      }
    }
  }

  useItem(enemyArr) {
    if (this.item != -1) {
      image(this.item.img, this.x - this.size/2, this.y - this.size/2, this.size/2, this.size/2);

      if (keyIsDown(83) && this.playerNum === 1) { // S
        this.useItemSound.play();
        this.item.useItem(enemyArr);
        this.item = -1;
      }

      else if (keyIsDown(40) && this.playerNum === 2) { // DOWN_ARROW
        this.useItemSound.play();
        this.item.useItem(enemyArr);
        this.item = -1;
      }
    }
  }

  // checkcing lives
  checkHealth() {
    if (this.health <= 0) {
      normalDropChance -= 0.2;
      this.lives--;
      this.timeDelay /= 0.95;
      this.maxHealth -= 2;
      this.maxHealth = constrain(this.maxHealth, 2, Infinity);
      this.health = this.maxHealth;
      this.deathSound.play();
    }
    return this.lives <= 0;
  }

  healthBar() {
    let yPos = this.y + this.size*0.50;
    let backBar = this.size;
    let frontBar = backBar - (this.maxHealth-this.health)*backBar/this.maxHealth;

    // back bar
    fill(0,0,255);
    rect(this.x, yPos, backBar, this.size/8);

    // health bar
    fill(255,0,0);
    rect(this.x, yPos, frontBar, this.size/8);

    push();
    fill("white");
    textSize(this.size*0.15);
    textAlign(CENTER, CENTER);
    text(this.health, this.x, yPos);
    pop();
  }
}
