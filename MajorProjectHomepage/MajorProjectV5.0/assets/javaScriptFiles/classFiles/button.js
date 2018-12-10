class Button {
  constructor(x, y, w, h, rest, hover, text) {
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
  }

  clicked() {
    let left = this.x + width/2 - this.width/2;
    let right = this.x + width/2 + this.width/2;
    let top = this.y + height/2 - this.height/2;
    let bottom = this.y + height/2 + this.height/2;

    if (mouseX > left && mouseX < right &&
        mouseY > top && mouseY < bottom) {

      fill(this.hoverCol);
      if (mouseIsPressed)
        return true;
    }
    else
      fill(this.restCol);

    rect(this.x, this.y, this.width, this.height);

    fill("black");
    text(this.text, this.x, this.y);
    return false;
  }
}
