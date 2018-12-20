function inventoryMenu() {
  background(179, 119, 0);
  let xPos = inventory.width*inventory.boxSize + inventory.boxSize/2;
  let yPos = inventory.boxSize/2;

  // equipment
  equipLayout();

  // stats
  displayStats(xPos, yPos);

  // grid
  drawGrid(xPos, yPos);
}

// equipment
function equipLayout() {
  let x = width*0.25;
  let y = -height*0.10;
  let wid = inventory.boxSize*10;
  let hei = inventory.boxSize*10;
  // layout
  image(itemImg.inventoryLayout, x, y, wid, hei);

  // equip slots
  for (let i=0; i < inventory.equipSlots.length; i++) {
    inventory.equipSlots[i].display();

    // clicking slot
    if (inventory.equipSlots[i].hovering() && mouseIsPressed) {
      if (inventory.equipSlots[i].equipped !== "empty") {
        // if equip slot has an item,
        // put that item in inventory
        let added = false;
        for (let y = 0; y < player.inventory.length; y++) {
          for (let x = 0; x < player.inventory[y].length; x++) {
            if (player.inventory[y][x] === "empty" && !added) {
              player.inventory[y][x] = allItems.get(inventory.equipSlots[i].equipped.name);
              added = true;
            }
          }
        }
        inventory.equipSlots[i].equipped = "empty";

        // calculating removed equipment
        calculateStats();
      }

      // if mouse is holding an item
      if (mouseCarring !== "empty") {
        // and that item is equipment
        if (mouseCarring.equipable) {
          // AND that item is equipping to the correct spot
          if (mouseCarring.equipSlot === inventory.equipSlots[i].bodyPosition) {
            clickWait();
            // then equip it
            inventory.equipSlots[i].equipped = mouseCarring;
            inventory.equipSlots[i].requip();
            mouseCarring = "empty";

            // calculating newly equipped gear
            calculateStats();
          }
        }
      }
    }
  }
}

// grid
function drawGrid(xPos, yPos) {
  push();
  // show inventory grid
  stroke(204, 102, 0);
  fill(buttons.brown);
  rectMode(CORNER);
  imageMode(CORNER);
  translate(-width/2, -height/2);

  // garbage
  garbageCan(xPos, yPos);

  // inventory
  for (let y = 0; y < player.inventory.length; y++) {
    for (let x = 0; x < player.inventory[y].length; x++) {
      let xPos2 = x*inventory.boxSize;
      let yPos2 = y*inventory.boxSize;

      // inventory grid
      rect(xPos2, yPos2, inventory.boxSize, inventory.boxSize);
      if (player.inventory[y][x] !== "empty")
        drawItemInInventory(player.inventory[y][x].img, player.inventory[y][x].amount, xPos2, yPos2);
    }
  }
  hoverOverTile();
  mouseHolding();
  pop();
}

function drawItemInInventory(img, number, x, y) {
    // draw image
    image(img, x, y, inventory.boxSize, inventory.boxSize);
    push();
    textAlign(RIGHT, BOTTOM);
    textSize(fontSize.playersDisplay);
    noStroke();
    fill("white");
    text(number, x+inventory.boxSize, y+inventory.boxSize);
    pop();
}

function hoverOverTile() {
  // highlighting inventory
  let x = floor(mouseX/inventory.boxSize);
  let y = floor(mouseY/inventory.boxSize);

  if (x < inventory.width && x >= 0 && y < inventory.height && y >= 0) {
    let xPos2 = x*inventory.boxSize;
    let yPos2 = y*inventory.boxSize;

    // highlight box
    fill(buttons.lightBrown);
    rect(xPos2, yPos2, inventory.boxSize, inventory.boxSize);
    if (player.inventory[y][x] !== "empty") {
      drawItemInInventory(player.inventory[y][x].img, player.inventory[y][x].amount, xPos2, yPos2);
      rect(mouseX+width*0.01, mouseY, width*0.10, height*0.05+(fontSize.default+fontSize.playersDisplay*12));

      // description of item
      push();
      noStroke();
      fill("black");
      textAlign(LEFT, TOP);

      // item name
      textSize(fontSize.default*0.75);
      text(player.inventory[y][x].name, mouseX+width*0.015, mouseY);

      // description and stats
      textSize(fontSize.playersDisplay);
      let statText = "";
      statText += player.inventory[y][x].description+"\n";
      for (let theStat in player.inventory[y][x].stats)
        statText += theStat+": "+player.inventory[y][x].stats[theStat]+"\n";
      text(statText, mouseX+width*0.015, mouseY+fontSize.default*0.75);
      pop();
    }

    // mouse clicking in inventory
    if (mouseIsPressed) {
      clickWait();
      let newMouseCarring = player.inventory[y][x];
      let newPlayerInventory = mouseCarring;

      mouseCarring = newMouseCarring;
      player.inventory[y][x] = newPlayerInventory;
    }
  }
}

function garbageCan(x, y) {
  let newX = x - inventory.boxSize/2;
  let newY = y - inventory.boxSize/2;
  if (mouseX >= newX && mouseX <= x + inventory.boxSize/2
   && mouseY >= newY && mouseY <= y + inventory.boxSize/2) {
    image(itemImg.garbageOpened, newX, newY, inventory.boxSize, inventory.boxSize);
    if (mouseIsPressed) {
      if (mouseCarring !== "empty") {
        mouseCarring.amount = 0;
        mouseCarring = "empty";
      }
    }
  }

  else
    image(itemImg.garbageClosed, newX, newY, inventory.boxSize, inventory.boxSize);
}

function mouseHolding() {
  if (mouseCarring !== "empty")
    drawItemInInventory(mouseCarring.img, mouseCarring.amount, mouseX-inventory.boxSize/2, mouseY-inventory.boxSize/2);
}

// stats
function displayStats(x, y) {
  // text
  push();
  fill("white");
  textFont(fonts.default, fontSize.playersDisplay*1.25);
  textAlign(LEFT, TOP);

  let lvlPercent = (player.exp/player.nextLvl)*100;
  text("\n\
Lvl- "+player.lvl+"\n\
exp- "+player.exp+"/"+player.nextLvl+" = "+lvlPercent.toFixed(2)+"%\n\
hp- "+player.hp+"/"+player.totHp+"\n\
mp- "+player.mp+"/"+player.totMp+"\n\
Speed- "+player.speed.toFixed(2)+"\n\
Melee- "+player.mDmg+"\n\
Ranged- "+player.rDmg+"\n\
Magic- "+player.sDmg+"\n\
Trap- "+player.tDmg+"\n\
points- "+player.points+"\n\
int- "+player.int+"\n\
agi- "+player.agi+"\n\
str- "+player.str+"\n\
dex- "+player.dex+"\n\
vit- "+player.vit
  , x-width*0.515, -height*0.47);
  pop();

  // points to spend
  checkForPoints(x, y);
}

function checkForPoints(x, y) {
  // spending point boxes
  if (player.points > 0) {
    push();
    stroke(204, 102, 0);
    let newX = x + inventory.boxSize*1.5;

    for (let i = 0; i < buttons.lvlUp.length; i++) {
      let newY = i*y;

      if (buttons.lvlUp[i].clicked()) {
        clickWait();
        player.points--;
        levelingUp(i);
        calculateStats();
      }
    }
    pop();
  }
}

function levelingUp(i) {
  // spending points
  if (i === 0)
    player.int++;
  else if (i === 1)
    player.agi++;
  else if (i === 2)
    player.str++;
  else if (i === 3)
    player.dex++;
  else if (i === 4)
    player.vit++;
}
