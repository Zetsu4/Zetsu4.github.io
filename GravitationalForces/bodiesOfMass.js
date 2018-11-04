class bodyOfMass {
  constructor(x, y, mass, radius, fixed, color) {
    this.x = x;
    this.y = y;
    this.mass = mass;
    this.radius = radius;
    this.fixed = fixed;
    this.color = color;
    this.velocity = 0;
  }

  show() {
    push();
    stroke(this.color);
    ellipse(this.x, this.y, this.radius);
    pop();
  }

  move(acceleration) {
    if (!this.fixed) {
      this.velocity += acceleration/100000;
      this.x += this.velocity;
    }
  }

  mouseOver() {
    return dist(mouseX, mouseY, this.x, this.y) <= this.radius;
  }
}
