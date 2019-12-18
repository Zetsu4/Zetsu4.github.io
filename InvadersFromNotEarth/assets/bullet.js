// Travis Ahern
// Nov. 16, 2018

class Bullet {
  constructor(x, y, sprtSize, img, goodBad) {
    // position
    this.x = x;
    this.y = y;
    this.dx = random(-width*0.0005, width*0.0005);
    this.dy = random(height*0.005, height*0.010);
    this.alingment = goodBad;

    this.dx *= this.alingment === "good" ? 0.5:1;
    this.dy *= this.alingment === "good" ? -1.5:1;

    // sprite
    this.img = img;
    this.sprtSize = sprtSize;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    image(this.img, this.x, this.y, this.sprtSize, this.sprtSize);
  }

  hitPlayer(playerX, playerY) {
    return dist(this.x, this.y, playerX, playerY) <= this.sprtSize;
  }

  hitEdge() {
    return (this.alingment === "good" ? this.y < 0 : this.y > height) || this.x > width || this.x < 0;
  }
}
