// Travis Ahern
// Nov. 30, 2018

class MoreMaxHealth {
  constructor() {
    this.img = img.moreMaxHealth;
  }

  pickUp(playerObj) {
    playerObj.maxHealth++;
    playerObj.maxHealth = constrain(playerObj.maxHealth, 2, 50);
    playerObj.health = playerObj.maxHealth;
    return playerObj;
  }
}
