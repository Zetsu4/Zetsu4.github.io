// Travis Ahern
// Nov. 16, 2018

class Bullet {
  constructor(x, y, sprtW, sprtH, goodBad) {
    // position
    this.x = x;
    this.y = y;
    this.dx = random(-width*0.0005, width*0.0005);
    this.dy = random(height*0.003, height*0.005);
    this.alingment = goodBad;

    this.dy *= this.alingment === "good" ? -1: 1;

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
    return (this.alingment === "good" ? this.y < 0 : this.y > height) || this.x > width || this.x < 0;
  }
}
