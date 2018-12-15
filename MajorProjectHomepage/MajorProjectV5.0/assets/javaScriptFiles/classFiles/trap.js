class Trap {
  constructor(x, y, changeX, changeY, damage, img, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;

    this.changeX = changeX;
    this.changeY = changeY;

    this.realX = this.changeX+cos(0)*this.x;
    this.realY = this.changeY+sin(0)*this.x;

    // damage
    this.damage = damage;
    this.trap = true;

    // image
    this.img = img;
    this.width = wid;
    this.height = hei;
  }

  move(interact = keyBindings.get("Interact").code) {
    this.realX = this.changeX+cos(0)*this.x;
    this.realY = this.changeY+sin(0)*this.x;

    if (this.x+this.changeX > -this.width/2 && this.x+this.changeX < this.width/2
     && this.y+this.changeY > -this.height/2 && this.y+this.changeY < this.height/2) {
          let charValue = interact;

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
          return keyIsDown(interact);
    }

    return false;
  }

  display() {
    image(this.img, this.x+this.changeX, this.y+this.changeY, this.width, this.height);
  }
}
