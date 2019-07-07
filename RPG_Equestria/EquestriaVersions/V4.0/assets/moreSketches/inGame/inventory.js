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

      // inventory grid
      fill(153, 77, 0);
      rect(xPos, yPos, inventoryBoxSize, inventoryBoxSize);
      hoverOverTile();

    }
  }

  // delete items icon
  let x = textTop*1.5 + invenWidth*inventoryBoxSize;
  let y = textTop*1.5;

  garbageCan(x, y);

  // inventory interaction
  drawImages();
  mouseHoldingImage();
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
  // draw items in inventory
  for (let y = 0; y < inventory.length; y++) {
    for (let x = 0; x < inventory[y].length; x++) {
      if (inventory[y][x] !== 0) {
        inventory[y][x].showInInventory(y, x, inventoryBoxSize, textTop*1.5, false, textTop);
      }
    }
  }
}

function updateItems() {
  // update items in inventory
  for (let y = 0; y < inventory.length; y++) {
    for (let x = 0; x < inventory[y].length; x++) {
      // updating numbers
      if (inventory[y][x] !== 0) {
        if (inventory[y][x].img === objectImg.arrow) { // arrows
          inventory[y][x].updateNumber(numOfArrows);
        }

        else if (inventory[y][x].img === objectImg.trap) { // traps
          inventory[y][x].updateNumber(numOfTraps);
        }

        else if (inventory[y][x].img === objectImg.hpPotion) { // hp Potions
          inventory[y][x].updateNumber(numOfHpPotions);
        }

        else if (inventory[y][x].img === objectImg.mpPotion) { // mp Potions
          inventory[y][x].updateNumber(numOfMpPotions);
        }
      }

      // delete item if there are none
      if (inventory[y][x].numberOfItem === 0) {
        inventory[y][x] = 0;
      }
    }
  }
}

function mouseHoldingImage() {
  // item in mouse
  if (mouseHolding !== 0) {
    mouseHolding.showInInventory(mouseY, mouseX, inventoryBoxSize, textTop*1.5, true, textTop);
  }
}

function garbageCan(x, y) {
  if (mouseX >= x - inventoryBoxSize/2 && mouseX <= x + inventoryBoxSize/2
   && mouseY >= y - inventoryBoxSize/2 && mouseY <= y + inventoryBoxSize/2) {
    image(world.trashCanOpen, x, y, sprite.WIDTH, sprite.HEIGHT);

    if (mouseIsPressed) {

      if (mouseHolding.img === objectImg.arrow) { // arrows
        numOfArrows = 0;
      }

      else if (mouseHolding.img === objectImg.trap) { // traps
        numOfTraps = 0;
      }

      else if (mouseHolding.img === objectImg.hpPotion) { // hp Potions
        numOfHpPotions = 0;
      }

      else if (mouseHolding.img === objectImg.mpPotion) { // mp Potions
        numOfMpPotions = 0;
      }

      // delete item
      mouseHolding = 0;

      waiting();
    }
  }

  else {
    image(world.trashCanClose, x, y, sprite.WIDTH, sprite.HEIGHT);
  }
}

function numOfItemsQuickCheck() {
  // a quick check for player in the enviorment
  let xPos = width*0.99;
  let newTextSize = textTop*0.80;

  push();
  fill("red");
  textSize(newTextSize);
  textAlign(RIGHT);

  // quick check items
  let quickItemCheck = [
    ["HP Potion", numOfHpPotions], ["MP Potion", numOfMpPotions],
    ["Arrows", numOfArrows],
    ["Traps", numOfTraps], ["Traps Down", objects.traps.length + "/" + maxTraps]];

  for (let i = 0; i < quickItemCheck.length; i++) {
    let yPos = newTextSize*(i+1);
    text(quickItemCheck[i][0] + " - " + quickItemCheck[i][1], xPos, yPos);
  }
  pop();
}
