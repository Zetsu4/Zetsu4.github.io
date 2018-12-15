class Attack {
  constructor(x, y, changeX, changeY, dx, dist, img, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;
    this.changeX = changeX;
    this.changeY = changeY;
    this.realX = 0;
    this.realY = 0;

    // speed
    this.dx = dx;
    this.dist = dist;

    // image
    this.img = img;
    this.rotation = atan2(mouseY - height/2, mouseX - width/2);
    this.width = wid;
    this.height = hei;
  }

  move() {
    this.x += this.dx;
    this.realX = width/2 + this.changeX + cos(this.rotation)*this.x;
    this.realY = height/2 + this.changeY + sin(this.rotation)*this.x;
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
