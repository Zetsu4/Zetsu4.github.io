class Enemy {
  constructor(x, y, race, skill, minLvl, maxLvl) {
    // position
    this.x = x;
    this.y = y;

    // race and skill
    this.race = race;
    this.skill = skill;

    // stats
    this.lvl = int(random(minLvl, maxLvl));
    this.expGained = (this.race.stats.expGained+this.skill.stats.expGained)*this.lvl;

    let extraPoints = (this.lvl-1)*5;
    this.int = this.race.stats.int + ceil(extraPoints/5);
    this.agi = this.race.stats.agi + ceil(extraPoints/5);
    this.str = this.race.stats.str + ceil(extraPoints/5);
    this.dex = this.race.stats.dex + ceil(extraPoints/5);
    this.vit = this.race.stats.vit + ceil(extraPoints/5);

    // health and mana
    this.totHP = 10*(this.vit+1);
    this.totMP = 10*(this.int+1);
    this.hp = this.totHP;
    this.mp = this.totMP;

    // attack
    this.mDmg = ceil(this.str*(2 - this.skill.stats.melee/75)); // melee damage
    this.rDmg = ceil(this.dex*(2 - this.skill.stats.melee/75)); // ranged damage
    this.sDmg = ceil(this.int*(2 - this.skill.stats.melee/75)); // magic damage

    this.lastAttack = 0;
    this.timer = 1000 - (this.vit+this.agi)*15;
    this.onScreen = false;

    // movement
    this.speed = width*0.0075 + width*this.agi*pow(10, -4);
    this.stuned = false;
  }

  takeDamage(dmg, trapped = false) {
    this.hp -= dmg;
    this.stuned = true;
    if (trapped) {
      this.speed *= 0.20;
    }
  }

  stuned() {
    // stuned
    if (this.stuned) {
      let elapsedTime = millis() - this.lastAttack;
      if (elapsedTime >= this.timer) {
        this.stuned = false;
        this.lastAttack = millis();
      }
    }
  }
}
