class bodyOfMass {
  constructor(x, y, mass, fixed, color) {
    this.x = x;
    this.y = y;
    this.mass = mass/4;
    this.fixed = fixed;
    this.rotation = 0;
    this.color = color;
  }

  show() {
    push();
    stroke(this.color);
    translate(this.x, this.y);
    rotate(this.rotation);
    ellipse(0, 0, this.mass);
    pop();
  }

  move() {

  }

  mouseOver() {
    return dist(mouseX, mouseY, this.x, this.y) <= this.mass;
  }
}
