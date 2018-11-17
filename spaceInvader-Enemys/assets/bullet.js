// Travis Ahern
// Nov. 16, 2018

class Bullet {
  constructor(x, y, sprtW, sprtH) {
    // position
    this.x = x;
    this.y = y;
    this.dx = random(-width*0.003, width*0.003);
    this.dy = random(height*0.003, height*0.004);

    // sprite
    this.img = img.bullet;
    this.sprtW = sprtW;
    this.sprtH = sprtH;
  }

  display() {
    image(this.img, this.x, this.y, this.sprtW, this.sprtH);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
