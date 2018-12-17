class InventoryItem {
  constructor(x, y, item, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;

    // item
    this.item = item;

    // sprite
    this.width = wid;
    this.height = hei;
  }

  display() {
    image(this.item.img, this.x, this.y, this.width, this.height);
  }
}
