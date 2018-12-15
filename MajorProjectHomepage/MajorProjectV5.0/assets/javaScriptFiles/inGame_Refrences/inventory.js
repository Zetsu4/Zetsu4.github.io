function inventoryMenu() {
  // show inventory grid
  background(179, 119, 0);
  stroke(204, 102, 0);

  push();
  rectMode(CORNER);
  translate(-width/2, -height/2);
  for (let y = 0; y < player.inventory.length; y++) {
    for (let x = 0; x < player.inventory[y].length; x++) {
      let xPos = x*inventory.boxSize;
      let yPos = y*inventory.boxSize;

      // inventory grid
      fill(153, 77, 0);
      rect(xPos, yPos, inventory.boxSize, inventory.boxSize);
    }
  }
  hoverOverTile();
  pop();

  // stats
  push();
  fill("white");
  textFont(fonts.default, fontSize.default);
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
  , -width*0., -height*0.49);
  pop();
}

function hoverOverTile() {
  // highlighting inventory
  let x = floor(mouseX/inventory.boxSize);
  let y = floor(mouseY/inventory.boxSize);

  if (x < inventory.width && x >= 0 && y < inventory.height && y >= 0) {
    fill(179, 89, 0);
    rect(x*inventory.boxSize, y*inventory.boxSize, inventory.boxSize, inventory.boxSize);
  }
}
