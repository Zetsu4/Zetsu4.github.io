// arrows
class arrow {
  constructor(x, swiftness, image, goodOrBad) {
    this.x = x;
    this.realX = 0;
    this.realY = 0;
    this.speed = swiftness*0.10;
    this.image = image;
    this.alingment = goodOrBad;
    this.direction = atan2(mouseY - height/2, mouseX - width/2);
  }

  disapear() {
    return this.x >= width/2;
  }

  moveForward() {
    this.x += this.speed;
    this.realX = width/2 + cos(this.direction)*this.x;
    this.realY = height/2 + cos(this.direction)*this.x;
  }

  show(spriteW, spriteH) {
    push();
    translate(width/2, height/2);
    rotate(this.direction);
    image(this.image, this.x, 0, spriteW, spriteH*0.25);
    pop();
  }
}
