function inventoryMenu() {
  let xPos = inventory.width*inventory.boxSize + inventory.boxSize/2;
  let yPos = inventory.boxSize/2;
  drawGrid(xPos, yPos);
  displayStats(xPos, yPos);
}

// grid
function drawGrid(xPos, yPos) {
  push();
  // show inventory grid
  background(179, 119, 0);
  stroke(204, 102, 0);
  rectMode(CORNER);
  imageMode(CORNER);
  translate(-width/2, -height/2);
  for (let y = 0; y < player.inventory.length; y++) {
    for (let x = 0; x < player.inventory[y].length; x++) {
      let xPos2 = x*inventory.boxSize;
      let yPos2 = y*inventory.boxSize;

      // inventory grid
      fill(153, 77, 0);
      rect(xPos2, yPos2, inventory.boxSize, inventory.boxSize);
      if (player.inventory[y][x] !== "empty")
        drawItemIninventory(player.inventory[y][x].img, player.inventory[y][x].amount, xPos2, yPos2);
    }
  }
  hoverOverTile();

  // garbage
  garbageCan(xPos, yPos);
  mouseHolding();
  pop();
}

function drawItemIninventory(img, number, x, y) {
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
    fill(179, 89, 0);
    rect(xPos2, yPos2, inventory.boxSize, inventory.boxSize);
    if (player.inventory[y][x] !== "empty")
      drawItemIninventory(player.inventory[y][x].img, player.inventory[y][x].amount, xPos2, yPos2);

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
    drawItemIninventory(mouseCarring.img, mouseCarring.amount, mouseX-inventory.boxSize/2, mouseY-inventory.boxSize/2);
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
