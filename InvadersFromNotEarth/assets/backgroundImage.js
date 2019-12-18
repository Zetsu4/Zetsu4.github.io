// Travis Ahern
// Dec. 2, 2018

class SpaceBackground {
  constructor(img, num) {
    // size
    this.width = width;
    this.height = height*1.5;

    // scroll position
    this.x = width/2;
    this.y = -(this.height-1)/2 - num*this.height;
    this.yStart = this.y;
    this.dy = 0;
    this.y += this.height;

    // image
    this.img = img;
  }

  display() {
    image(this.img, this.x, this.y, this.width, this.height);
    image(this.img, this.x, this.y - this.height, this.width, this.height);
  }

  scroll(theScore) {
    this.y += this.dy;
    if (this.y > -this.yStart + this.height) {
      this.y = this.yStart + this.height;
    }
    this.dy = height*theScore/4e5;
    this.dy = constrain(this.dy, height/4e5, height*0.1);
  }
}
