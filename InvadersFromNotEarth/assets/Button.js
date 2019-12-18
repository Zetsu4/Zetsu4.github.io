// Cody Flynn
// Nov. 24, 2018

class Button  {
  constructor(x, y, words) {
    // position
    this.x = x;
    this.y = y;

    // size
    this.width = width/2;
    this.height = height/4;

    // other
    this.words = words;
    this.hit = false;
  }

  drawButton() {
    let col = this.hit ? "grey" : "white";
    fill(col);

    rect(this.x, this.y, this.width, this.height);

    push();
    textSize(textSizes*2);
    fill("black");
    text(this.words, this.x, this.y);
    pop();
  }

  checkClick() {
    this.hit = this.buttonHover(this.x, this.y, this.width, this.height);
    return this.hit && mouseIsPressed;
  }

  buttonHover(x, y, w, h) {
    let left = x - w/2;
    let right = x + w/2;
    let top = y - h/2;
    let bottom = y + h/2;

    return (mouseX >= left && mouseX <= right
    && mouseY >= top && mouseY <= bottom);
  }
}
