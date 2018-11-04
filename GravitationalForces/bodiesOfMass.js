class bodyOfMass {
  constructor(x, y, mass, radius, fixed, color) {
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.radius = radius;
    this.fixed = fixed;
    this.color = color;
    this.vH = 0;
    this.vV = 0;
  }

  show() {
    push();
    stroke(this.color);
    ellipse(this.x, this.y, this.radius);
    pop();
  }

  move(aH, aV) {
    if (!this.fixed) {
      this.vH += aH;
      this.x += this.vH;

      this.vV += aV;
      this.y += this.vV;
    }
  }

  mouseOver() {
    return dist(mouseX, mouseY, this.x, this.y) <= this.radius;
  }

  collide(x, y, r) {
    if (dist(this.x, this.y, x, y) < this.r + r) {
      this.
    }
  }
}
