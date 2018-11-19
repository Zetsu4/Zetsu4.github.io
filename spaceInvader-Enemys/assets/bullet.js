// Travis Ahern
// Nov. 16, 2018

class Bullet {
  constructor(x, y, sprtW, sprtH) {
    // position
    this.x = x;
    this.y = y;
    this.dx = random(-width*0.001, width*0.001);
    this.dy = random(height*0.003, height*0.005);

    // sprite
    this.img = img.bullet;
    this.sprtW = sprtW;
    this.sprtH = sprtH;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    image(this.img, this.x, this.y, this.sprtW, this.sprtH);
  }

  hitEdge() {
    return this.y > height || this.x > width || this.x < 0;
  }
}
