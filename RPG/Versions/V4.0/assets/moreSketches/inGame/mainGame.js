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
  image(player.raceImage, width/2, height/2, sprite.WIDTH, sprite.HEIGHT);
  image(player.skillImage, width/2, height/2 - sprite.HEIGHT, sprite.WIDTH, sprite.HEIGHT);
  playerHealth();
}

function playerHealth() {
  // constant health bar vars
  let x = width/2;
  let y = height/2 + sprite.HEIGHT;
  let w = sprite.WIDTH;
  let h = sprite.HEIGHT/4;

  // health bar
  fill(0, 0, 255);
  rect(x, y, w, h);

  // HP
  push();
  let currentHP = player.totHP - player.hp;
  let changeOfHP = map(currentHP, 0, player.totHP, 0, sprite.WIDTH);

  rectMode(CORNER);
  fill(255, 0, 0);
  rect(x - w/2, y - h/2, w - changeOfHP, h);
  pop();

  // outline
  push();
  noFill();
  strokeWeight(2);
  stroke("silver");
  rect(x, y, w, h);
  pop();
}

function playerMovement() {
  if (keyIsDown(keyBindings.walk)) { // SHIFT
    // walking
    player.speed = player.walk;
  }

  else {
    // normal
    player.speed = player.totSpeed;
  }

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
      badGuy.moveWithPlayerX(keyBindings.left, keyBindings.right, player.speed);
    }

    for (let trap of objects.traps) { // traps
      trap.moveWithPlayerX(keyBindings.left, keyBindings.right, player.speed);
    }

    for (let arrow of objects.arrows) { // arrows
      arrow.moveWithPlayerX(keyBindings.left, keyBindings.right, player.speed);
    }

    for (let slash of objects.melee) { // slashes
      slash.moveWithPlayerX(keyBindings.left, keyBindings.right, player.speed);
    }

    for (let item of itemsOnGround) { // items on the ground
      item.moveWithPlayerX(keyBindings.left, keyBindings.right, player.speed);
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
      badGuy.moveWithPlayerY(keyBindings.up, keyBindings.down, player.speed);
    }

    for (let trap of objects.traps) { // traps
      trap.moveWithPlayerY(keyBindings.up, keyBindings.down, player.speed);
    }

    for (let arrow of objects.arrows) { // arrows
      arrow.moveWithPlayerY(keyBindings.up, keyBindings.down, player.speed);
    }

    for (let slash of objects.melee) { // slashes
      slash.moveWithPlayerY(keyBindings.up, keyBindings.down, player.speed);
    }

    for (let item of itemsOnGround) { // items on the ground
      item.moveWithPlayerY(keyBindings.up, keyBindings.down, player.speed);
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
  else if (elapsedTime <= lastTimeAttacked){
    let mousePos = atan2(mouseY - height/2, mouseX - width/2);
    push();
    translate(width/2, height/2);
    rotate(mousePos);
    fill(50, 150);
    ellipse(sprite.WIDTH/2, 0, sprite.WIDTH);
    pop();
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
        objects.traps.push(new trap(width/2, height/2, objectImg.trap, player.x, player.y, false));
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
