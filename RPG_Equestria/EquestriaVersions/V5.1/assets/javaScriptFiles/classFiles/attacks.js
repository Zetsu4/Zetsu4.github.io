class Attack {
  constructor(x, y, changeX, changeY, dx, dist, damage, img, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;

    this.changeX = changeX;
    this.changeY = changeY;

    this.rotation = atan2(mouseY - height/2, mouseX - width/2);

    this.realX = this.changeX+cos(this.rotation)*this.x;
    this.realY = this.changeY+sin(this.rotation)*this.x;

    // speed
    this.dx = dx;
    this.dist = dist;

    // damage
    this.damage = damage;
    this.trap = false;

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

  mapping() {
    // error preventing
  }
}
