let names = [
  "Sir, Prize",
  "Sir, Pent",
  "Sir, Cumfrence",
  "Sir, Ten Lee",
  "Sir, Tified",
  "Sir, Cul",
  "Sir, Real",
  "Sir, Face"
];

class GuildMember {
  constructor(raceIndex, skillIndex, lvl, attackConstructor = Attack, wid = spriteSize.width, hei = spriteSize.height, fontSizeChange = fontSize.playersDisplay, deathImage = sprites.death) {
    // position
    this.x = random(-wid, wid);
    this.y = random(-hei, hei);

    // sprite
    this.raceIndex = raceIndex;
    this.skillIndex = skillIndex;
    this.race = raceSpecific.guild[this.raceIndex];
    this.skill = skillSpecific.guild[this.skillIndex];

    this.death = deathImage;

    this.width = wid;
    this.height = hei;
    this.fontSize = fontSizeChange;

    // stats
    this.lvl = lvl;

    let extraPoints = (this.lvl-1)*5;
    this.int = this.race.stats.int + floor(extraPoints/3);
    this.agi = constrain(this.race.stats.agi + floor(extraPoints/3), 1, 100);
    this.str = this.race.stats.str + floor(extraPoints/3);
    this.dex = this.race.stats.dex + floor(extraPoints/3);
    this.vit = this.race.stats.vit + floor(extraPoints/3);

    // health and mana
    this.totHp = 10*(this.vit+1);
    this.totMp = 10*(this.int+1);
    this.hp = this.totHp;
    this.mp = this.totMp;

    // attack
    this.mDmg = floor(this.str*(0.7 + this.skill.stats.melee)); // melee damage
    this.rDmg = floor(this.dex*(0.7 + this.skill.stats.ranged)); // ranged damage
    this.sDmg = floor(this.int*(0.7 + this.skill.stats.magic)); // magic damage

    this.mainDmg = max(this.rDmg, this.sDmg);
    this.attackingType;
    if (this.mainDmg === this.rDmg)
      this.attackingType = ranged
    else if (this.mainDmg === this.sDmg)
      this.attackingType = spellCaster;

    this.attackConstructor = attackConstructor;
    this.attackState = 0;
    this.lastAttack = millis();
    this.attackTimer = 5000 - (this.vit+this.agi)*10;
    this.attackTimer = constrain(this.attackTimer, 500, 5000);

    // movement
    this.speed = constrain((width*0.0025 + width*(this.agi)*pow(10, -4)), width*0.0001, width*0.10);
    this.stun = false;
    this.stunTimer = 0;
    this.timer = 1000 - (this.vit+this.agi)*10;
    this.timer = constrain(this.timer, 250, 5000);

    this.dist = width*0.20;
    this.theta = atan(this.y/this.x);
    this.movePoint = 0;
    this.headingTo = false;
    this.resting = millis();

  }

  dead() {
    image(this.death, this.x, this.y, this.width, this.height);
  }

  takeDamage(dmg) {
    // taking damage
    this.hp -= dmg;
    this.stun = true;
    this.stunTimer = millis();
  }

  stuned() {
    // stuned
    if (this.stun)
      this.stun = !timerFoo(this.stunTimer, this.timer*2);
  }

  restingFoo() {
    this.headingTo = timerFoo(this.resting, this.timer);
  }

  display() {
    image(this.race.img, this.x, this.y, this.width, this.height);
    image(this.skill.img, this.x, this.y, this.width/2, this.height/2);

    push();
    // level
    fill("white");
    textSize(this.fontSize);
    text("lvl. "+this.lvl, this.x, this.y+this.height*0.55);

    // health
    rectMode(CORNER);

    let theWidth = this.width*1.5;
    let theHeight = this.height/4;
    let xPos = this.x-theWidth/2;
    let yPos = this.y-this.height/2-theHeight;

    // back bar
    push();
    stroke("silver");
    fill("gray");
    rect(xPos, yPos, theWidth, theHeight);
    pop();

    // health bar
    let remainingHealth = this.totHp - this.hp;
    let hpBar = map(remainingHealth, 0, this.totHp, 0, theWidth);

    fill("red");
    rect(xPos+1, yPos+1, theWidth-hpBar, theHeight);

    // numbers
    fill("white");
    text(this.hp+"/"+this.totHp, this.x, yPos+theHeight/2);
    pop();
  }

  // AI
  movement() {
    if (!this.stun)
      this.persuePlayer();

    // stuned
    else
      this.stuned();

    this.display();
  }

  goToPoint() {
    let moved = false;
    let pointMin = -this.speed*1.5;
    let pointMax = this.speed*1.5;

    if (this.x > pointMax) { // left
      moved = true;
      this.x -= this.speed;
      this.mapX -= this.speed;
    }

    else if (this.x < pointMin) { // right
      moved = true;
      this.x += this.speed;
      this.mapX += this.speed;
    }

    if (this.y > pointMax) { // up
      moved = true;
      this.y -= this.speed;
      this.mapY -= this.speed;
    }

    else if (this.y < pointMin) { // down
      moved = true;
      this.y += this.speed;
      this.mapY += this.speed;
    }

    return moved;
  }

  persuePlayer() {
    let speed = 0;
    if (dist(0, 0, this.x, this.y) > this.attackPattern.enemyDist+this.speed*2)
      // go to player
      speed = this.speed/7.5;

    // move around player, circularally
    this.theta = atan(this.y/this.x);

    if (this.attackPoint > 1) {
      this.theta -= this.speed/dist(this.x, this.y, 0, 0);
      this.attackPoint--;
    }

    else if (this.attackPoint < -1) {
      this.theta += this.speed/dist(this.x, this.y, 0, 0);
      this.attackPoint++;
    }

    else
      this.attackPoint = int(random(-1, 1)*100);

    // settting position
    if (this.x < 0) {
      // quad 2 and 3
      this.x = -cos(this.theta)*(dist(this.x, this.y, 0, 0)-(speed*this.speed));
      this.y = -sin(this.theta)*(dist(this.x, this.y, 0, 0)-(speed*this.speed));
    }

    else {
      // quad 1 and 4
      this.x = cos(this.theta)*(dist(this.x, this.y, 0, 0)-(speed*this.speed));
      this.y = sin(this.theta)*(dist(this.x, this.y, 0, 0)-(speed*this.speed));
    }

    this.x = constrain(this.x, -worldW/2-playerX+width*0.51, worldW/2-playerX-width*0.51);
    this.y = constrain(this.y, -worldH/2-playerY+height*0.51, worldH/2-playerY-height*0.51);
  }

  // attacking enemys
  attackEnemy(enemyX, enemyY) {
    if (!this.stun) {
      if (this.attackState === 1) {
        this.attackingType.soundAttack.play();
        this.attackState = 0;
        this.lastAttack = millis();
        return (new this.attackConstructor(0, 0, this.x, this.y, this.attackingType.attackSpeed, this.attackingType.attackDist, this.mainDmg, this.attackingType.img, this.attackingType.soundHit, enemyX+width/2-this.x, enemyY+height/2-this.y));
      }

      else
        this.attackState = (timerFoo(this.lastAttack, this.attackTimer) ? 1:0);
    }

    return "empty";
  }

  // move with player
  moveX(moveSpeed, dir) {
    moveSpeed *= dir;

    this.x += moveSpeed;
  }

  moveY(moveSpeed, dir) {
    moveSpeed *= dir;

    this.y += moveSpeed;
  }
}
