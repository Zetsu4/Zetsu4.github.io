// Travis Ahern
// Nov. 16, 2018

class EnemyBox {
  constructor(x, y, enemyType, numOfEnemys, sprtW, sprtH, timer) {
    // position
    this.x = x;
    this.y = y;
    this.dir = random(["right", "left"]);

    // enemys
    this.enysAcrsX = int(numOfEnemys);
    this.enysAcrsY = int(this.enysAcrsX*0.75);
    this.enemyType = enemyType;
    this.sprtW = sprtW;
    this.sprtH = sprtH;
    this.enemys = [];

    // time between actions
    this.timeDelay = timer*1000;
    this.timer = millis();
  }

  spawnEnemys() {
    for (let i = -this.enysAcrsX/2; i < this.enysAcrsX/2; i++) {
      for (let j = -this.enysAcrsY/2; j < this.enysAcrsY/2; j++) {

        // fill this box with enemy units
        let x = this.x + this.sprtW*i + this.sprtW/2;
        let y = this.y + this.sprtH*j + this.sprtH/2;
        this.enemys.push(new this.enemyType(x, y, this.sprtW, this.sprtH));
      }
    }
  }

  checkTurn() {
    rect(this.x, this.y, this.sprtW*this.enysAcrsX, this.sprtH*this.enysAcrsY);

    let elapsedTime = millis() - this.timer;

    elapsedTime > this.timeDelay ? this.move() : this.display();
  }

  move() {
    // enemy turn
    this.timer = millis();

    // change directions?
    let changedDir = this.dir;
    this.dir === "right" ?
     (this.dir = (this.boxEdge("right") < width ? "right" : "left"))
    :(this.dir = (this.boxEdge("left") < 0 ? "right" : "left"));
    changedDir = changedDir !== this.dir ? true : false;

    this.enemys.map(enys => enys.takeTurn(this.dir, changedDir));

    changedDir ? (this.y += this.sprtH) : (this.x += (this.dir === "right" ? this.sprtW : -this.sprtW));
  }

  boxEdge(side) {
    return (side === "right" ?
    this.x + this.sprtW * this.enysAcrsX/2 + this.sprtW:
    this.x - this.sprtW * this.enysAcrsX/2 - this.sprtW);
  }

  display() {
    // show yourselvs
    this.enemys.map(enys => enys.display());
  }
}
