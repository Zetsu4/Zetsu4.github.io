class EnemyAttack {
  constructor(x, y, changeX, changeY, dx, dist, damage, img, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;

    this.changeX = changeX;
    this.changeY = changeY;

    this.rotation = atan2(-this.changeY, -this.changeX);

    this.realX = this.x+cos(this.rotation)*this.changeY;
    this.realY = this.x+sin(this.rotation)*this.changeX;

    // speed
    this.dx = dx;
    this.dist = dist;

    // damage
    this.damage = damage;

    // image
    this.img = img;
    this.width = wid;
    this.height = hei;
  }

  move() {
    // moving
    this.x += this.dx;
    this.realX = this.changeX+cos(this.rotation)*this.x;
    this.realY = this.changeY+sin(this.rotation)*this.x;
    return this.x >= this.dist;
  }

  display() {
    push();
    translate(this.changeX, this.changeY);
    rotate(this.rotation);
    image(this.img, this.x, 0, this.width, this.height);
    pop();
  }
}
