class Enemy {
  constructor(x, y, race, skill, minLvl, maxLvl, offSetX = 0, offSetY = 0, attack = EnemyAttack, wid = spriteSize.width, hei = spriteSize.height, fontSizeChange = fontSize.playersDisplay, deathImage = sprites.death) {
    // position
    this.x = x-offSetX;
    this.y = y-offSetY;

    this.mapX = x;
    this.mapY = y;

    this.headToX = this.x;
    this.headToY = this.y;

    // race and skill
    this.race = race;
    this.skill = skill;

    // sprite
    this.raceImg = this.race.img;
    this.skillImg = this.skill.img;

    this.death = deathImage;

    this.width = wid;
    this.height = hei;
    this.fontSize = fontSizeChange;

    // stats
    this.lvl = constrain(int(random(minLvl, maxLvl+1)), 0, 100);
    this.expGained = (this.race.stats.expGained+this.skill.stats.expGained)*(this.lvl+1)/2;

    let extraPoints = (this.lvl-1)*5;
    this.int = this.race.stats.int + ceil(extraPoints/3);
    this.agi = this.race.stats.agi + ceil(extraPoints/3);
    this.str = this.race.stats.str + ceil(extraPoints/3);
    this.dex = this.race.stats.dex + ceil(extraPoints/3);
    this.vit = this.race.stats.vit + ceil(extraPoints/3);

    // health and mana
    this.totHp = 10*(this.vit+1);
    this.totMp = 10*(this.int+1);
    this.hp = this.totHp;
    this.mp = this.totMp;

    // attack
    this.mDmg = ceil(this.str*(1 + this.skill.stats.melee)); // melee damage
    this.rDmg = ceil(this.dex*(1 + this.skill.stats.ranged)); // ranged damage
    this.sDmg = ceil(this.int*(1 + this.skill.stats.magic)); // magic damage

    this.mainDmg = max(this.mDmg, this.rDmg, this.sDmg);
    this.attackPattern;
    if (this.mainDmg === this.mDmg)
      this.attackPattern = melee;
    else if (this.mainDmg === this.rDmg)
      this.attackPattern = ranged;
    else if (this.mainDmg === this.sDmg)
      this.attackPattern = spellCaster;

    this.allAttacks = [];
    this.attackType = attack;
    this.attackState = 0;
    this.lastAttack = 0;
    this.attackTimer = 2000 - (this.vit+this.agi)*10;
    this.attackTimer = constrain(this.attackTimer, 500, 5000);
    this.attackPoint = 0;
    this.theta = atan(this.y/this.x);


    // movement
    this.havePersued = false;
    this.speed = constrain((width*0.002 + width*this.agi*pow(10, -4)), width*0.0001, width*0.10);
    this.stun = false;
    this.stunTimer = 0;
    this.timer = 1000 - (this.vit+this.agi)*10;
    this.timer = constrain(this.timer, 250, 5000);

    // path finding
    this.dist = (width+height)*(this.agi/50);
    this.headingTo = random(true, false);
    this.findingPoint = true;
    this.resting = millis();
  }

  dead() {
    image(this.death, this.x, this.y, this.width, this.height);
  }

  takeDamage(dmg, trapped = false) {
    // taking damage
    this.hp -= dmg;
    this.stun = true;
    this.stunTimer = millis();
    if (trapped) {
      // reducing speed
      this.speed *= 0.75;
      this.speed = constrain(this.speed, width*0.0001, width*0.10);
    }
  }

  stuned() {
    // stuned
    if (this.stun)
      this.stun = !timerFoo(this.stunTimer, this.timer);
  }

  restingFoo(attacking = false) {
    this.headingTo = timerFoo(this.resting, (attacking ? this.timer : this.timer*2));
  }

  display() {
    image(this.raceImg, this.x, this.y, this.width, this.height);
    image(this.skillImg, this.x, this.y, this.width/2, this.height/2);

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

  onScreen() {
    return this.x > -width*0.75 && this.x < width*0.75 && this.y > -height*0.75 && this.y < height*0.75;
  }

  // AI
  movement(worldW, worldH, playerX, playerY) {
    // not stuned
    if (!this.stun) {
      // attack player
      if (this.onScreen()) {
        this.persuePlayer(playerX, playerY);
        this.display();
      }

      // monkeying about - RvB refrence
      else if (this.headingTo) {
        this.havePersued = false;
        // find point to go to
        if (this.findingPoint)
          this.findPoint(worldW, worldH, playerX, playerY);

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

    // stuned
    else {
      this.display();
      this.stuned();
    }
  }

  findPoint(worldW, worldH, playerX, playerY, wandering = true) {
    // find point
    if (wandering) {
      this.headToX = this.x + random(-this.dist, this.dist);
      this.headToY = this.y + random(-this.dist, this.dist);
    }

    else {
      this.headToX = this.x + random(-this.attackPattern.enemyDist/2, this.attackPattern.enemyDist/2);
      this.headToY = this.y + random(-this.attackPattern.enemyDist/2, this.attackPattern.enemyDist/2);
    }

    // constrain point to the world
    this.headToX = constrain(this.headToX, -worldW/2-playerX+width*0.51, worldW/2-playerX-width*0.51);
    this.headToY = constrain(this.headToY, -worldH/2-playerY+height*0.51, worldH/2-playerY-height*0.51);
    this.findingPoint = false;
  }

  goToPoint(pointX = this.headToX, pointY = this.headToY) {
    let moved = false;
    let pointXMin = pointX - this.speed*1.5;
    let pointXMax = pointX + this.speed*1.5;
    let pointYMin = pointY - this.speed*1.5;
    let pointYMax = pointY + this.speed*1.5;

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

  persuePlayer(playerX, playerY) {
    if (dist(0, 0, this.x, this.y) > this.attackPattern.enemyDist+this.speed*2) {
      // go to player
      this.goToPoint(0, 0);
      this.attackPoint = int(random(10)*10);
      this.headingTo = true;
    }

    else {
      // move around player, circularally
      this.theta = atan(this.y/this.x);

      if (this.headingTo) {
        // moving around in circlular ways
        if (this.attackPoint > 0) {
          this.theta -= this.speed/dist(this.x, this.y, 0, 0);
          this.attackPoint--;
        }

        else if (this.attackPoint < 0) {
          this.theta += this.speed/dist(this.x, this.y, 0, 0);
          this.attackPoint++;
        }

        else {
          this.headingTo = false;
          this.resting = millis();
        }
      }

      else {
        // resting
        this.restingFoo(true);
        this.attackPoint = int(random(-1, 1)*500);
      }

      // settting position
      if (this.x < 0) {
        // quad 2 and 3
        this.x = -cos(this.theta)*dist(this.x, this.y, 0, 0);
        this.y = -sin(this.theta)*dist(this.x, this.y, 0, 0);
      }
      else {
        // quad 1 and 4
        this.x = cos(this.theta)*dist(this.x, this.y, 0, 0);
        this.y = sin(this.theta)*dist(this.x, this.y, 0, 0);
      }

      // map position
      this.mapX = this.x+playerX;
      this.mapY = this.y+playerY;
    }

    // attack player
    this.attackPlayer();
  }

  attackPlayer() {
    if (this.attackState === 1) {
      this.attackPattern.soundAttack.play();
      this.allAttacks.push(new this.attackType(0, 0, this.x, this.y, this.attackPattern.attackSpeed, this.attackPattern.attackDist, this.mainDmg, this.attackPattern.img, this.attackPattern.soundHit));
      this.attackState = 0;
      this.lastAttack = millis();
    }

    else
      this.attackState = (timerFoo(this.lastAttack, this.attackTimer) ? 1:0);
  }

  mapping(worldW, worldH, mapX, mapY, mapW, mapH, dotSize) {
    // map position
    let mapMinX = mapX - mapW/2 + dotSize;
    let mapMaxX = mapX + mapW/2 - dotSize;
    let mapMinY = mapY - mapH/2 + dotSize;
    let mapMaxY = mapY + mapH/2 - dotSize;

    // dot
    let enemyX = map(this.mapX, -worldW/2, worldW/2, mapMinX, mapMaxX);
    let enemyY = map(this.mapY, -worldH/2, worldH/2, mapMinY, mapMaxY);
    fill("red");
    ellipse(enemyX, enemyY, dotSize);
  }

  // move with player
  moveEnemysX(moveSpeed, dir) {
    moveSpeed *= dir;

    this.x += moveSpeed;
    this.headToX += moveSpeed;
  }

  moveEnemysY(moveSpeed, dir) {
    moveSpeed *= dir;

    this.y += moveSpeed;
    this.headToY += moveSpeed;
  }
}
