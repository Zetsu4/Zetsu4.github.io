// Travis Ahern
// Nov. 16, 2018

class CommonEnemy {
  constructor(x, y, sprtW, sprtH) {
    // position
    this.x = x;
    this.y = y;

    // sprite
    this.img = img.commonSprite;
    this.sprtW = sprtW;
    this.sprtH = sprtH;
  }

  takeTurn(dir, changedDir) {
    this.move(dir, changedDir);
    this.shoot();
    this.display();
  }

  display() {
    image(this.img, this.x, this.y, this.sprtW, this.sprtH);
  }

  move(dir, changedDir) {
    changedDir ? (this.y += this.sprtH) : (this.x += (dir === "right" ? this.sprtW : -this.sprtW));
  }

  shoot() {

  }
}
