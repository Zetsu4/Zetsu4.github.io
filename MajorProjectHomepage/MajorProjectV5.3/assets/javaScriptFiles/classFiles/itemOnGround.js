class ItemOnGround {
  constructor(x, y, item, areaName, amount = 1, wid = spriteSize.width, hei = spriteSize.height) {
    // position
    this.x = x;
    this.y = y;

    this.areaExisting = areaName;

    // sprite
    this.img = item.img;
    this.width = wid;
    this.height = hei;

    this.name = item.name;
    this.amount = amount;
  }

  display() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.mapping();
  }

  mapping(
    worldW = world.width, worldH = world.height,
    mapX = minimap.x, mapY = minimap.y,
    mapW = minimap.imgWidth, mapH = minimap.imgHeight,
    dotSize = player.dotSize*0.50
  ) {
    // map position
    let mapMinX = mapX - mapW/2 + dotSize;
    let mapMaxX = mapX + mapW/2 - dotSize;
    let mapMinY = mapY - mapH/2 + dotSize;
    let mapMaxY = mapY + mapH/2 - dotSize;

    // dot
    let enemyX = map(player.x+this.x, -worldW/2, worldW/2, mapMinX, mapMaxX);
    let enemyY = map(player.y+this.y, -worldH/2, worldH/2, mapMinY, mapMaxY);
    fill("white");
    ellipse(enemyX, enemyY, dotSize);
  }
}
