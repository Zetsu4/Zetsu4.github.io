class Button {
  constructor(x, y, w, h, rest, hover, text, thisFont = fonts.default, size = fontSize.default) {
    // position
    this.x = x;
    this.y = y;

    // size
    this.width = w;
    this.height = h;

    // colors
    this.restCol = rest;
    this.hoverCol = hover;

    // buttons words
    this.text = text;
    this.font = thisFont
    this.fontSize = size;
  }

  clicked() {
    let pressed = false;

    if (this.hovering()) {
      // hovering
      fill(this.hoverCol);
      if (mouseIsPressed)
        pressed = true;
    }
    else
      fill(this.restCol);

    // box
    rect(this.x, this.y, this.width, this.height);

    // text
    fill("black");
    push();
    textFont(this.font, this.fontSize);
    text(this.text, this.x, this.y);
    pop();
    return pressed;
  }

  hovering() {
    let left = this.x + width/2 - this.width/2;
    let right = this.x + width/2 + this.width/2;
    let top = this.y + height/2 - this.height/2;
    let bottom = this.y + height/2 + this.height/2;

    return mouseX > left && mouseX < right &&
           mouseY > top && mouseY < bottom;
  }
}
