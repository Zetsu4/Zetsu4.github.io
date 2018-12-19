class EquipBox {
  constructor(x, y, w, h, rest, hover, spot) {
    // position
    this.x = x;
    this.y = y;

    // sprite
    this.width = w;
    this.height = h;
    this.img = null;

    // color
    this.restCol = rest;
    this.hoverCol = hover;

    // equip slot
    this.bodyPosition = spot;
    this.equipped = "empty";
  }

  display() {
    push();
    stroke(204, 102, 0);
    if (this.hovering())
      fill(this.hoverCol);
    else
      fill(this.restCol);

    rect(this.x, this.y, this.width, this.height);

    if (this.equipped !== "empty") {
      image(this.img, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  requip() {
    // changing the equip slot
    if (this.equipped = "empty")
      this.img = null;
    else
      this.img = this.equipped.img;
  }

  hovering() {
    return mouseX-width/2 > this.x-this.width/2 && mouseX-width/2 < this.x+this.width/2 && mouseY-height/2 > this.y-this.height/2 && mouseY-height/2 < this.y+this.height/2;
  }
}
