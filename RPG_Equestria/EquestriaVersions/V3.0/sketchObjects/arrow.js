// arrows
class arrow {
  constructor(x, swiftness, image, goodOrBad) {
    this.x = x;
    this.speed = swiftness*0.10;
    this.image = image;
    this.alignment = goodOrBad;
    this.direction = atan2(mouseY - height/2, mouseX - width/2);
  }

  disapear() {
    return this.x >= width/2;
  }

  moveForward() {
    this.x += this.speed;
  }

  show(spriteW, spriteH) {
    push();
    rotate(this.direction);
    image(this.image, this.x, 0, spriteW, spriteH*0.25);
    pop();
  }
}
