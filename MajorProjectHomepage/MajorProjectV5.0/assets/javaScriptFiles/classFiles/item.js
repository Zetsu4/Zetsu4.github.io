class Item {
  constructor(x, y, img, name, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;

    // sprite
    this.img = img;
    this.width = wid;
    this.height = hei;

    this.itemName = name;
  }

  display() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
}
