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
  changeWalkSpeed();

  // equipment


  // stats
  push();
  fill("white");
  textSize(textTop*0.75);
  textAlign(LEFT, TOP);
  text("\n\
Lvl- " + player.lvl + "\n\
exp- " + player.exp + "/" + nextLvl + "\n\
hp- " + player.hp + "/" + player.totHP + "\n\
mp- " + player.mp + "/" + player.totMP + "\n\
Speed- " + player.speed.toFixed(2) + "\n\
Melee- " + player.mDmg + "\n\
Ranged- " + player.rDmg + "\n\
Magic- " + player.sDmg + "\n\
Trap- " + player.tDmg + "\n\
points- " + player.points + "\n\
int- " + player.int + "\n\
agi- " + player.agi + "\n\
str- " + player.str + "\n\
dex- " + player.dex + "\n\
vit- " + player.vit
  , x - inventoryBoxSize/2 + 4, y);
  pop();

  if (player.points > 0) {
    noStroke();
    let newX = x + inventoryBoxSize*1.5;
    for (let i = 0; i < 5; i++) {
      let newY = i*(y - textTop/2) + textTop*12;
      if (buttonFoo(newX, newY, textTop, textTop, color(153, 77, 0), color(204, 102, 0), "up")) {
        waiting();
        player.points--;
        levelingUp(i);
        calculatingStats();
      }
    }
  }
}

function levelingUp(i) {
  if (i === 0) {
    player.int++;
  }
  else if (i === 1) {
    player.agi++;
  }
  else if (i === 2) {
    player.str++;
  }
  else if (i === 3) {
    player.dex++;
  }
  else if (i === 4) {
    player.vit++;
  }
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

function changeWalkSpeed() {
  let x = inventoryBoxSize - textTop/2;
  let y = inventoryBoxSize*(invenHeight+1);

  if (buttonFoo(x, y, inventoryBoxSize, inventoryBoxSize, color(153, 77, 0), color(204, 102, 0), "75%")) {
    // walk speed 75%
    player.walk = 0.75;
  }

  if (buttonFoo(x*3, y, inventoryBoxSize, inventoryBoxSize, color(153, 77, 0), color(204, 102, 0), "50%")) {
    // walk speed 50%
    player.walk = 0.50;
  }

  if (buttonFoo(x*5, y, inventoryBoxSize, inventoryBoxSize, color(153, 77, 0), color(204, 102, 0), "25%")) {
    // walk speed 25%
    player.walk = 0.25;
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
