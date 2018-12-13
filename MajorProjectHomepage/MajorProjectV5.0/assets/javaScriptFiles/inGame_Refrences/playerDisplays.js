function playerDisplays() {
  // background
  checkWorld();
  displayBackground();

  // mini-map
  miniMap();

  // player
  push();
  textSize(fontSize.playersDisplay);
  playerSprite();
  playerLvL();
  inventoryQuickCheck();
  infoBars();
  pop();
}

// background
function checkWorld() {

}

function displayBackground() {
  image(world.state.img, world.changedX, world.changedY, world.width, world.height);
}

// mini-map
function miniMap() {
  // padding
  fill("gold");
  rect(minimap.x, minimap.y, minimap.padWidth, minimap.padHeight);

  // background image
  image(world.state.img, minimap.x, minimap.y, minimap.imgWidth, minimap.imgHeight);

  mapPlayer();
}

function mapPlayer() {
  // map position
  let mapMinX = minimap.x - minimap.imgWidth/2 + player.dotSize;
  let mapMaxX = minimap.x + minimap.imgWidth/2 - player.dotSize;
  let mapMinY = minimap.y - minimap.imgHeight/2 + player.dotSize;
  let mapMaxY = minimap.y + minimap.imgHeight/2 - player.dotSize;

  // dot
  let playerX = map(player.x, -world.width/2, world.width/2, mapMinX, mapMaxX);
  let playerY = map(player.y, -world.height/2, world.height/2, mapMinY, mapMaxY);
  fill("blue");
  ellipse(playerX, playerY, player.dotSize);

  // screen
  let rectWidth = map(width, 0, world.width, mapMinX/world.sizeMult/1.75, mapMaxX/world.sizeMult/1.75);
  let rectHeight = map(height, 0, world.height, mapMinY/world.sizeMult*1.75, mapMaxY/world.sizeMult*1.75);
  push();
  noFill();
  stroke("white");
  rect(playerX, playerY, rectWidth, rectHeight);
  pop();
}

// player
function playerSprite() {
  image(player.race.img, 0, 0, spriteSize.width, spriteSize.height);

  push();
  fill("white");
  textAlign(LEFT, TOP);
  text(player.name+"\n"+player.race.name+" - "+player.skill.name, -width*0.49, -height*0.485);
  pop();
}

function playerLvL() {
  fill("black");
  rect(0, height*0.475, width*0.10, height*0.05);

  fill("white");
  text("Exp. " + player.exp + "/" + player.nextLvl, 0, height*0.475);
  text("Lv. " + player.lvl, 0, spriteSize.height*0.60);
}

function inventoryQuickCheck() {

}

function infoBars() {
  push();
    let left = -width*0.49;
    let top = -height*0.425;
    let w = width*0.15;
    let h = height*0.02;
    let textX = left+w/2;
    rectMode(CORNER);
    // health
    push();
    backBar(left, top, w, h);
    let changeOfHP = player.totHp - player.hp;
    let mappedHP = map(changeOfHP, 0, player.totHp, 0, w);
    fill("red");
    rect(left, top, w-mappedHP, h);

    fill("white");
    text(player.hp + "/" + player.totHp, textX, top+h/4);
    pop();

    // mana
    push();
    let top2 = top + h*2;
    backBar(left, top2, w, h);

    let changeOfMP = player.totMp - player.mp;
    let mappedMP = map(changeOfMP, 0, player.totMp, 0, w);
    fill("blue");
    rect(left, top2, w-mappedMP, h);

    fill("white");
    text(player.mp + "/" + player.totMp, textX, top2+h/4);
    pop();
  pop();
}

function backBar(x, y, w, h) {
  push();
  stroke("silver");
  fill("gray");
  rect(x-1, y-1, w, h);
  pop();
}
