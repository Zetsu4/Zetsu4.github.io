// Travis Ahern
// Nov. 30, 2018

class PowerUp {
  constructor(x, y, power, size) {
    // position
    this.x = x;
    this.y = y;

    // speed
    this.dx = random(-width*0.0015, width*0.0015);
    this.dy = random(-height*0.004, -height*0.006);

    // acceleration
    this.ay = height*0.01/100;

    // power up
    this.power = power;
    this.size = size*0.70;
    this.dir = this.dx < 0 ? -1:1;
    this.rotation = random(height*0.05);
  }

  display() {
    // spinning
    push();
    angleMode(DEGREES);
    translate(this.x, this.y);
    rotate(this.rotation);
    image(this.power.img, 0, 0, this.size, this.size);
    pop();

    let changeRotation = (5 + this.dy*this.ay*5)*this.dir;
    this.rotation += changeRotation;
  }

  move() {
    // move
    this.x += this.dx;
    this.y += this.dy;

    this.x = constrain(this.x, this.size, width-this.size);

    // falling
    this.dy += this.ay;
  }

  pickUpPower(playerObj) {
    return this.power.pickUp(playerObj);
  }

  hitEdge() {
    return this.y > height;
  }
}
