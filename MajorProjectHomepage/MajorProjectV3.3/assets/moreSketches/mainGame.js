//------------------------------------------------------------------------------
//  PLAYING THE GAME, startingState 3            START
//------------------------------------------------------------------------------

// BACKGROUND------
function scrollingBackground() {
  image(world.image, world.imageX + width/2, world.imageY + height/2, world.WIDTH, world.HEIGHT);
}

// MINIMAP---------
function showMinimap() {
  // outter map
  fill("gold");
  rect(minimap.X, minimap.Y, minimap.OUTTER_WIDTH, minimap.OUTTER_HEIGHT);

  // inner map
  image(world.image, minimap.X, minimap.Y, minimap.WIDTH, minimap.HEIGHT);
}

// PLAYER----------
function playerShow() {
  image(player.race, width/2, height/2, sprite.WIDTH, sprite.HEIGHT);
  image(player.skill, width/2, height/2 - sprite.HEIGHT, sprite.WIDTH, sprite.HEIGHT);
}

function playerMovement() {
  // x-axis
  if (keyIsDown(keyBindings.left)) { // LEFT
    player.x -= player.speed;
    world.imageX += player.speed;
  }

  if (keyIsDown(keyBindings.right)) { // RIGHT
    player.x += player.speed;
    world.imageX -= player.speed;
  }

  // y-axis
  if (keyIsDown(keyBindings.up)) { // UP
    player.y -= player.speed;
    world.imageY += player.speed;
  }

  if (keyIsDown(keyBindings.down)) { // DOWN
    player.y += player.speed;
    world.imageY -= player.speed;
  }
  moveWithPlayer();
}

function moveWithPlayer() {
  // objects moving with player
  // x-axis
  if (player.x < 0 || player.x > world.WIDTH) {
    // staying in enviorment
    player.x = constrain(player.x, 0, world.WIDTH);
    world.imageX = constrain(world.imageX, -world.WIDTH/2 + sprite.WIDTH/2, world.WIDTH/2 - sprite.WIDTH/2);
  }

  else {
    // LEFT/RIGHT
    for (let badGuy of badGuys) { // baddies
      badGuy.moveWithPlayerX(keyBindings.left, keyBindings.right);
    }

    for (let trap of objects.traps) { // traps
      trap.moveWithPlayerX(keyBindings.left, keyBindings.right);
    }

    for (let arrow of objects.arrows) { // arrows
      arrow.moveWithPlayerX(keyBindings.left, keyBindings.right);
    }

    for (let slash of objects.melee) { // slashes
      slash.moveWithPlayerX(keyBindings.left, keyBindings.right);
    }

    for (let item of itemsOnGround) { // items on the ground
      item.moveWithPlayerX(keyBindings.left, keyBindings.right);
    }
  }

  // y-axis
  if (player.y < 0 || player.y > world.HEIGHT) {
    // staying in enviorment
    player.y = constrain(player.y, 0, world.HEIGHT);
    world.imageY = constrain(world.imageY, -world.HEIGHT/2 + sprite.HEIGHT/2, world.HEIGHT/2 - sprite.HEIGHT/2);
  }

  else {
    // UP/DOWN
    for (let badGuy of badGuys) { // baddies
      badGuy.moveWithPlayerY(keyBindings.up, keyBindings.down);
    }

    for (let trap of objects.traps) { // traps
      trap.moveWithPlayerY(keyBindings.up, keyBindings.down);
    }

    for (let arrow of objects.arrows) { // arrows
      arrow.moveWithPlayerY(keyBindings.up, keyBindings.down);
    }

    for (let slash of objects.melee) { // slashes
      slash.moveWithPlayerY(keyBindings.up, keyBindings.down);
    }

    for (let item of itemsOnGround) { // items on the ground
      item.moveWithPlayerY(keyBindings.up, keyBindings.down);
    }
  }
}

function playerMinimap(
  minimapX, minimapY,
  minimapW, minimapH,
  dotSize) {
  // player mapping
  let minimapXMin = minimapX - minimapW/2 + dotSize/2;
  let minimapXMax = minimapX + minimapW/2 - dotSize/2;

  let minimapYMin = minimapY - minimapH/2 + dotSize/2;
  let minimapYMax = minimapY + minimapH/2 - dotSize/2;

  // dot
  let playerX = map(player.x, 0, world.WIDTH, minimapXMin, minimapXMax, true);
  let playerY = map(player.y, 0, world.HEIGHT, minimapYMin, minimapYMax, true);

  // screen
  let rectWidth = map(width, 0, world.WIDTH, minimapXMin, minimapXMax - world.WIDTH*0.01);
  let rectHeight = map(height, 0, world.HEIGHT, minimapYMin, minimapYMax - world.HEIGHT*0.008);

  // player dot
  fill("blue");
  ellipse(playerX, playerY, dotSize);

  // screen
  noFill();
  stroke("white");
  rect(playerX, playerY, rectWidth, rectHeight);
  noStroke();
}

function beautifulMouse() {
  // mouse pointer
  let mousePos = atan2(mouseY - height/2, mouseX - width/2);
  push();
  translate(width/2, height/2);
  rotate(mousePos);
  if (rangedOn) { // ranged
    image(objectImg.bowIcon, sprite.WIDTH/2, 0, sprite.WIDTH, sprite.HEIGHT);
  }
  else { // melee
    image(objectImg. swordIcon, sprite.WIDTH/2, 0, sprite.WIDTH, sprite.HEIGHT);
  }
  pop();
}

function playerCoolDown() {
  let elapsedTime = millis() - attackCoolDownTime;

  if (attackCoolDown && elapsedTime >= lastTimeAttacked) {
    attackCoolDown = false;
  }
}

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

function numOfItemsQuickCheck() {
  let xPos = minimap.X + minimap.OUTTER_WIDTH/2;

  push();
  fill("purple");
  textAlign(LEFT);
  textSize(textTop/2);
  // arrows in inventory
  text("Arrows -", xPos, textTop/2);
  text(numOfArrows, xPos + textTop*2, textTop/2);

  // traps in inventory
  text("Traps -", xPos, textTop);
  text(numOfTraps + " , " + objects.traps.length + "/" + maxTraps, xPos + textTop*2, textTop);
  pop();
}

// ITEMS/OBJECTS---
function objectFoo() {
  // item/object
  for (let trap = 0; trap < objects.traps.length; trap++) { // traps
    if (objects.traps[trap].show(sprite.WIDTH, sprite.HEIGHT, keyBindings.interact)) {
      objects.traps.splice(trap, 1);
      numOfTraps++;
    }
  }

  for (let slash of objects.melee) { // sword
    slash.moveForward();
  }

  for (let arrow of objects.arrows) { // arrows
    arrow.moveForward();
  }
}

function baddiesFoo() {
  // baddies
  for (let i = 0; i < badGuys.length; i++) {
    if (badGuys[i].baddieOnScreen(player.x, player.y, world.WIDTH, world.HEIGHT)) {
      badGuys[i].attackPlayer(player.x, player.y, world.WIDTH, world.HEIGHT);
    }

    else {
      badGuys[i].movement(
        world.WIDTH, world.HEIGHT,
        sprite.WIDTH, sprite.HEIGHT,
        player.x, player.y);
    }

    badGuys[i].mapping(
      world.WIDTH, world.HEIGHT,
      minimap.X, minimap.Y,
      minimap.WIDTH, minimap.HEIGHT,
      player.DOT);

    badGuys[i].show(sprite.WIDTH, sprite.HEIGHT);

    // object collisions
    let badX = badGuys[i].otherX + width/2;
    let badY = badGuys[i].otherY + height/2;
    let badGuyHitBox = (sprite.WIDTH + sprite.HEIGHT)/4;

    // if (dist(badX, badY, width/2, height/2) <= badGuyHitBox) {
    //   // player
    //   gameOver();
    //   break;
    // }

    for (let trap = 0; trap < objects.traps.length; trap++) {
      // traps
      if (dist(badX, badY, objects.traps[trap].x, objects.traps[trap].y) <= badGuyHitBox) {
        objects.traps.splice(trap, 1);
        badGuyDeath(i, badGuys[i].otherX, badGuys[i].otherY);
      }
    }

    for (let slash = 0; slash < objects.melee.length; slash++) {
      // sword
      objects.melee[slash].show(sprite.WIDTH, sprite.HEIGHT);
      if (objects.melee[slash].disapear(sprite.WIDTH)) {
        objects.melee.splice(slash, 1);
      }

      else if (dist(badX, badY, objects.melee[slash].realX, objects.melee[slash].realY) <= badGuyHitBox) {
        objects.melee.splice(slash, 1);
        badGuyDeath(i, badGuys[i].otherX, badGuys[i].otherY);
      }
    }

    for (let arrow = 0; arrow < objects.arrows.length; arrow++) {
      // arrows
      objects.arrows[arrow].show(sprite.WIDTH, sprite.HEIGHT);
      if (objects.arrows[arrow].disapear()) {
        objects.arrows.splice(arrow, 1);
      }

      else if (dist(badX, badY, objects.arrows[arrow].realX, objects.arrows[arrow].realY) <= badGuyHitBox) {
        objects.arrows.splice(arrow, 1);
        badGuyDeath(i, badGuys[i].otherX, badGuys[i].otherY);
      }
    }
  }
}

function badGuyDeath(spotInArray, x, y) {
  itemDrops(x, y);
  badGuys.splice(spotInArray, 1);
}

function itemDrops(x, y) {
  // random item drops
  let numberOfItems = random(5);

  for (let i = 0; i < numberOfItems; i++) {
    let changeOfX = random(-sprite.WIDTH/2, sprite.WIDTH/2);
    let changeOfY = random(-sprite.HEIGHT/2, sprite.HEIGHT/2);
    let randomItem = random(20);

    if (randomItem <= 15) { // arrows
      itemsOnGround.push(new arrow(0, 0, objectImg.arrow, player.speed, x + changeOfX, y + changeOfY));
    }

    // else if (randomItem <= 10) { // traps
    //   itemsOnGround.push(new trap(0, 0, objectImg.trap, player.speed, x + changeOfX, y + changeOfY));
    // }
  }
}

function floatingItems() {
  // items on the ground
  for (let i = 0; i < itemsOnGround.length; i++) {
    itemsOnGround[i].itemShow(sprite.WIDTH, sprite.HEIGHT);
    itemsOnGround[i].mapping(
      world.WIDTH, world.HEIGHT,
      minimap.X, minimap.Y,
      minimap.WIDTH, minimap.HEIGHT,
      player.x, player.y,
      player.DOT*0.75);

    if (itemsOnGround[i].pickUp(sprite.WIDTH, sprite.HEIGHT)) {

      if (itemsOnGround[i].image === objectImg.arrow) { // arrows
        numOfArrows++;
      }

      else if (itemsOnGround[i].image === objectImg.trap) { // traps
        numOfTraps++;
      }
      itemsOnGround.splice(i, 1);
    }
  }
}

// OTHER FUNCTIONS-
function waiting() {
  let waiting = millis();
  while (millis() - waiting <= WAIT_TIME) {
    nothing--;
  }
}

function keyPressed() {
  if (startingState === 2) {
    // open settings
    if (keyCode === keyBindings.settings) {
      settingsIsOpen = !settingsIsOpen;
      settingsChoice = -1;
    }

    // open map
    if (keyCode === keyBindings.openMap && !inventoryIsOpen) {
      mapIsOpen = !mapIsOpen;
    }

    if (!settingsIsOpen) {
      // open inventory
      if (keyCode === keyBindings.inventory) {
        inventoryIsOpen = !inventoryIsOpen;
      }

      // toggle melee/ranged
      if (keyCode === keyBindings.toggleRanged) {
        rangedOn = !rangedOn;
      }

      // place traps
      if (keyCode === keyBindings.placeTrap && !inventoryIsOpen && objects.traps.length < maxTraps && numOfTraps > 0) {
        objects.traps.push(new trap(width/2, height/2, objectImg.trap, player.speed));
        numOfTraps--;
      }
    }
  }
}

function mousePressed() {
  // player attack
  if (startingState === 2 && !settingsIsOpen && !inventoryIsOpen && !mapIsOpen && !attackCoolDown) {
    // ranged
    if (rangedOn && numOfArrows > 0) {
      objects.arrows.push(new arrow(0, sprite.WIDTH, objectImg.arrow, player.speed));
      numOfArrows--;
      attackCoolDown = true;
      lastTimeAttacked = millis();
    }
    // melee
    else if (!rangedOn) {
      objects.melee.push(new sword(0, sprite.WIDTH, objectImg.sword, player.speed));
      attackCoolDown = true;
      lastTimeAttacked = millis();
    }
  }

  if (inventoryIsOpen) {
    // interacting with inventory
    let x = floor((mouseX - textTop/2) / inventoryBoxSize);
    let y = floor((mouseY - textTop/2) / inventoryBoxSize);

    if (x < invenWidth && x >= 0 && y < invenHeight && y >= 0) {
      let newMouse = inventory[y][x];
      let gridSpot = mouseHolding;

      inventory[y][x] = gridSpot;
      mouseHolding = newMouse;
    }
  }
}

//------------------------------------------------------------------------------
//  PLAYING THE GAME, startingState 3            END
//------------------------------------------------------------------------------
