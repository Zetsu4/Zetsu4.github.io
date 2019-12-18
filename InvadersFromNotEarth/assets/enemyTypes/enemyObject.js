class Enemy {
  constructor(x, y, enemyType) {
    // position
    this.x = x;
    this.y = y;

    // sprite
    this.img = enemyType.sprite;
    this.sprtSize = enemyType.size;

    // speed
    this.dx = this.sprtSize*enemyType.dxMultiplier;
    this.dy = this.sprtSize*enemyType.dyMultiplier;

    // attack chance
    this.attackMultiplier = enemyType.attackMultiplier;

    // health
    this.hp = enemyType.hp;

    // points gaind
    this.score = enemyType.scoreGained;
  }

  display() {
    image(this.img, this.x, this.y, this.sprtSize, this.sprtSize);
  }

  takeTurn(dir, changedDir) {
    // actions
    this.display();
    return this.move(dir, changedDir);
  }

  move(dir, changedDir) {
    let moved = changedDir ? this.dy : this.dx;
    changedDir ? (this.y += moved) : (this.x += (dir === "right" ? moved : -moved));
    return moved;
  }

  shoot(numOfEnemysleft) {
    // chance to fire a bullet
    // chance based on number of live enemys in this platoon
    let shot = random(this.attackMultiplier*numOfEnemysleft);

    return shot < numOfEnemysleft;
  }

  hitBottom() {
    return this.y + this.sprtSize >= height*0.95;
  }
}
