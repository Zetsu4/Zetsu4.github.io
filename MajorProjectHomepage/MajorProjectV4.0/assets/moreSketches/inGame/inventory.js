// INVENTORY-------
function lookInInventory() {
  // showing inventory
  background(179, 119, 0);
  stroke(204, 102, 0);
  rectMode(CORNER);
  for (let y = 0; y < inventory.length; y++) {
    for (let x = 0; x < inventory[y].length; x++) {
      let xPos = x*inventoryBoxSize + textTop/2;
      let yPos = y*inventoryBoxSize + textTop/2;

      fill(153, 77, 0);
      rect(xPos, yPos, inventoryBoxSize, inventoryBoxSize);
      hoverOverTile();
      drawImages();
      mouseHoldingImage();

      if (y+1 === inventory.length && x+1 === inventory[y].length) {
        noStroke();
        xPos = (x+1)*inventoryBoxSize + textTop/2;
        garbageCan(xPos + sprite.WIDTH/2, yPos + sprite.HEIGHT/2);
      }
    }
  }
  rectMode(CENTER);
}

function hoverOverTile() {
  // highlighting inventory
  let x = floor((mouseX - textTop/2) / inventoryBoxSize);
  let y = floor((mouseY - textTop/2) / inventoryBoxSize);

  if (x < invenWidth && x >= 0 && y < invenHeight && y >= 0) {
    fill(179, 89, 0);
    rect(x*inventoryBoxSize + textTop/2, y*inventoryBoxSize + textTop/2, inventoryBoxSize, inventoryBoxSize);
  }
}

function drawImages() {
  // items in inventory
  for (let y = 0; y < inventory.length; y++) {
    for (let x = 0; x < inventory[y].length; x++) {
      if (inventory[y][x] !== 0) {
        image(inventory[y][x], x*inventoryBoxSize + textTop*1.50, y*inventoryBoxSize + textTop*1.50, inventoryBoxSize, inventoryBoxSize);
      }
    }
  }
}

function mouseHoldingImage() {
  // item in mouse
  if (mouseHolding !== 0) {
    image(mouseHolding, pmouseX, pmouseY, inventoryBoxSize, inventoryBoxSize);
  }
}

function garbageCan(x, y) {
  if (buttonFoo(x, y, inventoryBoxSize, inventoryBoxSize, color(0, 0), color(0,0), "")) {
    image(world.trashCanOpen, x, y, sprite.WIDTH, sprite.HEIGHT);
  }

  else {
    image(world.trashCanClose, x, y, sprite.WIDTH, sprite.HEIGHT);
  }
}

function numOfItemsQuickCheck() {
  // a quick check for player in the enviorment
  let xPos = minimap.X + minimap.OUTTER_WIDTH/2 + 5;

  push();
  fill("red");
  textAlign(LEFT);

  // arrows in inventory
  text("Arrows -", xPos, textTop);
  text(numOfArrows, xPos + textTop*4, textTop);

  // traps in inventory
  text("Traps -", xPos, textTop*2);
  text(numOfTraps + " , " + objects.traps.length + "/" + maxTraps, xPos + textTop*4, textTop*2);
  pop();
}
