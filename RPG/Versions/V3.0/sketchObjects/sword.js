// sword swings
class sword {
  constructor (x, swiftness, image, goodOrBad) {
    this.x = x;
    this.speed = swiftness*0.05;
    this.image = image;
    this. alingment = goodOrBad;
    this. direction = atan2(mouseY - height/2, mouseX - width/2);
  }

  disapear(spriteW) {
    return this.x >= spriteW*2;
  }

  moveForward() {
    this.x += this.speed;
  }

  show(spriteW, spriteH) {
    push();
    rotate(this.direction);
    image(this.image, this.x, 0, spriteW, spriteH);
    pop();
  }
}
