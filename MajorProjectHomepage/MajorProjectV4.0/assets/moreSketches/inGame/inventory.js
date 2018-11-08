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

      if (y+1 === inventory.length && x+1 === inventory[y].length) {
        xPos = (x+1)*inventoryBoxSize + textTop/2;
        garbageCan(xPos + sprite.WIDTH/2, yPos + sprite.HEIGHT/2);
      }

      mouseHoldingImage();
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
  // drwa items in inventory
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
      let newGarbage = mouseHolding;
      let newMouse = garbageHolding;

      mouseHolding = newMouse;
      garbageHolding = newGarbage;

      if (newMouse !== 0 && newGarbage !== 0) {
        mouseHolding = 0;
        garbage = newGarbage;
      }

      waiting();
    }
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
