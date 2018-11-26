// Travis Ahern
// Nov. 16, 2018

class CommonEnemy {
  constructor(x, y, sprtW, sprtH, bullet) {
    // position
    this.x = x;
    this.y = y;

    // sprite
    this.img = img.commonSprite;
    this.sprtW = sprtW;
    this.sprtH = sprtH;

    // bullets
    this.shot = bullet;
    this.shots = [];
  }

  takeTurn(dir, changedDir, numOfBullets) {
    this.move(dir, changedDir);
    this.display();

    if (numOfBullets <= 5) {
      this.shoot();
    }
  }

  display() {
    image(this.img, this.x, this.y, this.sprtW, this.sprtH);
  }

  move(dir, changedDir) {
    changedDir ? (this.y += this.sprtH) : (this.x += (dir === "right" ? this.sprtW : -this.sprtW));
  }

  shoot() {
    let shot = random(1000);

    if (shot < 10) {
      this.shots.push(new this.shot(this.x, this.y, this.sprtW, this.sprtH, "bad"));
    }
  }

  moveShots() {
    this.shots.map(shot => shot.move());
    for (let i = this.shots.length-1; i >= 0; i--) {
      if (this.shots[i].hitEdge()) {
        this.shots.splice(i,1);
      }
    }
  }
}
