// Travis Ahern
// Nov. 30, 2018

class MaxHealth {
  constructor() {
    this.img = img.maxHealth;
  }

  pickUp(playerObj) {
    playerObj.health = playerObj.maxHealth;
    return playerObj;
  }
}
