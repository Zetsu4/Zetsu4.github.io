class bodyOfMass {
  constructor(x, y, mass, radius, fixed) {
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.radius = radius;
    this.fixed = fixed;
    this.color = color(random(255), random(255), random(255), 120);
    this.vH = 0;
    this.vV = 0;
  }

  show() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
  }

  move(aH, aV) {
    if (!this.fixed) {
      this.vH += aH;
      this.vV += aV;

      this.x += this.vH;
      this.y += this.vV;
    }
  }

  mouseOver() {
    return dist(mouseX, mouseY, this.x, this.y) <= this.radius;
  }

  collide() {
    this.x -= this.vH;
    this.y -= this.vV;

    this.vH = 0;
    this.vV = 0;
  }
}
