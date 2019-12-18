// Travis Ahern
// Dec. 1, 2018

class RespawnEnemys {
  constructor() {
    this.img = img.respawnEnemys;
  }

  pickUp(playerObj) {
    playerObj.item = new RespawnEnemys;
    return playerObj;
  }

  useItem(enemyArr) {
    normalDropChance += 0.2;
    normalDropChance = constrain(normalDropChance, 0, 20);
    hardMode = true;
    enemyArr.map(enemyBullet => enemyBullet.spawnEnemys());
  }
}
