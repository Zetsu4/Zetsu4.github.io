// Travis Ahern
// Dec. 1, 2018

class DestroyEnemys {
  constructor() {
    this.img = img.destroyEnemys;
  }

  pickUp(playerObj) {
    playerObj.item = new DestroyEnemys();
    return playerObj;
  }

  useItem(enemyArr) {
    enemyArr.map(enemyBox => enemyBox.deleteEnemys());
  }
}
