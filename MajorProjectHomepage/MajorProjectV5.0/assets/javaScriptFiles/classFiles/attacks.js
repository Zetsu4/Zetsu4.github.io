class Attack {
  constuctor(x, y, changeX, changeY, dx, dist, img, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;
    this.changeX = changeX;
    this.changeY = changeY;

    // speed
    this.dx = dx;
    this.dist = dist;

    // image
    this.img = img;
    this.rotation = atan2(mouseY - height/2, mouseX - widht/2);
    this.width = wid;
    this.height = hei;
  }

  move() {
    this.x += this.dx;
    if (this.x >= this.dist) {

    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    image(this.img, 0, 0, this.width, this.height);
    pop();
  }
}
