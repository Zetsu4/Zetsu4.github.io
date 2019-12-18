// Travis Ahern
// Nov. 30, 2018

class ExtraLife {
  constructor() {
    this.img = img.extraLife;
  }

  pickUp(playerObj) {
    playerObj.lives++;
    playerObj.lives = constrain(playerObj.lives, -1, 10);
    return playerObj;
  }
}
