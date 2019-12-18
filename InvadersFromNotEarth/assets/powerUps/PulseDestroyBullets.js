// Travis Ahern
// Nov. 30, 2018

class PulseDestroyBullets {
  constructor() {
    this.img = img.destroyBullets;
  }

  pickUp(playerObj) {
    playerObj.item = new PulseDestroyBullets();
    return playerObj;
  }

  useItem(enemyArr) {
    enemyArr.map(enemyBullet => enemyBullet.deleteBullets());
  }
}
