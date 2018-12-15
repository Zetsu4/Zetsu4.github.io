class Enemy {
  constructor(x, y, race, skill, minLvl, maxLvl, wid = spriteSize.width, hei = spriteSize.height, fontSizeChange = fontSize.playersDisplay) {
    // position
    this.x = x;
    this.y = y;

    this.mapX = this.x;
    this.mapY = this.y;

    this.headToX = this.x;
    this.headToY = this.y;

    // race and skill
    this.race = race;
    this.skill = skill;

    // sprite
    this.raceImg = this.race.img;
    this.skillImg = this.skill.img;

    this.width = wid;
    this.height = hei;
    this.fontSize = fontSizeChange;

    // stats
    this.lvl = int(random(minLvl, maxLvl));
    this.expGained = (this.race.stats.expGained+this.skill.stats.expGained)*this.lvl/2;

    let extraPoints = (this.lvl-1)*5;
    this.int = this.race.stats.int + ceil(extraPoints/5);
    this.agi = this.race.stats.agi + ceil(extraPoints/5);
    this.str = this.race.stats.str + ceil(extraPoints/5);
    this.dex = this.race.stats.dex + ceil(extraPoints/5);
    this.vit = this.race.stats.vit + ceil(extraPoints/5);

    // health and mana
    this.totHp = 10*(this.vit+1);
    this.totMp = 10*(this.int+1);
    this.hp = this.totHp;
    this.mp = this.totMp;

    // attack
    this.mDmg = ceil(this.str*(1 + this.skill.stats.melee)); // melee damage
    this.rDmg = ceil(this.dex*(1 + this.skill.stats.ranged)); // ranged damage
    this.sDmg = ceil(this.int*(1 + this.skill.stats.magic)); // magic damage

    this.lastAttack = 0;
    this.timer = 1000 - (this.vit+this.agi)*15;

    // movement
    this.speed = width*0.002 + width*this.agi*pow(10, -4);
    this.stuned = false;

    // path finding
    this.dist = (width+height)*(this.agi/50);
    this.headingTo = false;
    this.findingPoint = true;
    this.resting = millis();
  }

  takeDamage(dmg, trapped = false) {
    this.hp -= dmg;
    this.stuned = true;
    this.lastAttack = millis();
    if (trapped)
      this.speed *= 0.85;
  }

  stuned() {
    // stuned
    if (this.stuned) {
      let elapsedTime = millis() - this.lastAttack;
      if (elapsedTime >= this.timer)
        this.stuned = false;
    }
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

  // AI
  movement(worldW, worldH, playerX, playerY) {
    // attack player
    if (this.x > -width*0.75 && this.x < width*0.75 && this.y > -height*0.75 && this.y < height*0.75) {
      this.attackPlayer();
      this.display();
    }

    // move freely
    else {
      if (this.headingTo) {
        // find point
        if (this.findingPoint) {
          this.headToX = this.x + random(-this.dist/2, this.dist/2);
          this.headToY = this.y + random(-this.dist/2, this.dist/2);

          // constrain point to the world
          this.headToX = constrain(this.headToX, -worldW/2 - playerX, worldW/2 - playerX);
          this.headToY = constrain(this.headToY, -worldH/2 - playerY, worldH/2 - playerY);
          this.findingPoint = false;
        }

        // move to point
        else {
          let moved = false;
          let pointXMin = this.headToX - width*0.01;
          let pointXMax = this.headToX + width*0.01;
          let pointYMin = this.headToY - height*0.01;
          let pointYMax = this.headToY + height*0.01;

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

          if (this.y > pointYMax) { // top
            moved = true;
            this.y -= this.speed;
            this.mapY -= this.speed;
          }

          else if (this.y < pointYMin) { // bottom
            moved = true;
            this.y += this.speed;
            this.mapY += this.speed;
          }

          // if not moved then rest
          if (!moved) {
            this.findingPoint = true;
            this.headingTo = false;
            this.resting = millis();
          }
        }
      }

      // resting
      else {
        let elapsedTime = millis() - this.resting;
        if (elapsedTime >= this.timer*2)
          this.headingTo = true;
      }
    }
  }

  attackPlayer() {
    if (this.x > 0) {
      this.x -= this.speed;
      this.mapX -= this.speed;
    }

    if (this.x < 0) {
      this.x += this.speed;
      this.mapX += this.speed;
    }

    if (this.y > 0) {
      this.y -= this.speed;
      this.mapY -= this.speed;
    }

    if (this.y < 0) {
      this.y += this.speed;
      this.mapY += this.speed;
    }
  }

  constrainToWorld(worldW, worldH, playerX, playerY) {
    this.x = constrain(this.x, -worldW/2 - playerX, worldW/2 - playerX);
    this.y = constrain(this.y, -worldH/2 - playerY, worldH/2 - playerY);
  }

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
}
