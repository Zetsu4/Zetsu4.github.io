class Trap {
  constructor(x, y, changeX, changeY, img, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;
    this.changeX = changeX;
    this.changeY = changeY;

    // image
    this.img = img;
    this.width = wid;
    this.height = hei;
  }

  move() {
    if (this.x+this.changeX > -this.width/2 && this.x+this.changeX < this.width/2
     && this.y+this.changeY > -this.height/2 && this.y+this.changeY < this.height/2) {
          let charValue = keyBindings.get("Interact").code;

          if (charValue === 27)
            charValue = 'Escape';

          else if (charValue === 16)
            charValue = 'Shift';

          else if (charValue === 32)
            charValue = 'Space';

          push();
          fill("blue");
          textSize(fontSize.playersDisplay);
          text("Pick Up - '"+charValue+ "'", this.x+this.changeX, this.y+this.changeY + this.height/2);
          pop();
    }
  }

  display() {
    image(this.img, this.x+this.changeX, this.y+this.changeY, this.width, this.height);
  }
}
