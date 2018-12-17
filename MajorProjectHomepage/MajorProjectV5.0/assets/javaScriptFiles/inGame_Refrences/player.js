function playerMovement() {
  // to check if hit edge
  let oldX = player.x;
  let oldY = player.y;

  player.speed = (player.toggleSpeed ? player.totSpeed*player.speedMultiplier : player.totSpeed);

  if (keyIsDown(keyBindings.get("Move Up").code)) {
    player.y -= player.speed;
    world.changedY += player.speed;

    // constrain
    player.y = constrain(player.y, -world.height/2 + height/2, world.height/2 - height/2);
    world.changedY = constrain(world.changedY, -world.height/2 + height/2, world.height/2 - height/2);

    // moving stuff with player
    if (player.y !== oldY) {
      moveItemsY(1);
      enemysMoveY(1);
    }

    // resetting the original position
    oldY = player.y;
  }

  if (keyIsDown(keyBindings.get("Move Down").code)) {
    player.y += player.speed;
    world.changedY -= player.speed;

    // constrain
    player.y = constrain(player.y, -world.height/2 + height/2, world.height/2 - height/2);
    world.changedY = constrain(world.changedY, -world.height/2 + height/2, world.height/2 - height/2);

    // moving stuff with player
    if (player.y !== oldY) {
      moveItemsY(-1);
      enemysMoveY(-1);
    }

    // resetting the original position
    oldY = player.y;
  }

  if (keyIsDown(keyBindings.get("Move Left").code)) {
    player.x -= player.speed;
    world.changedX += player.speed;

    // constrain
    player.x = constrain(player.x, -world.width/2 + width/2, world.width/2 - width/2);
    world.changedX = constrain(world.changedX, -world.width/2 + width/2, world.width/2 - width/2);

    // moving stuff with player
    if (player.x !== oldX) {
      moveItemsX(1);
      enemysMoveX(1);
    }

    // resetting the original position
    oldX = player.x;
  }

  if (keyIsDown(keyBindings.get("Move Right").code)) {
    player.x += player.speed;
    world.changedX -= player.speed;

    // constrain
    player.x = constrain(player.x, -world.width/2 + width/2, world.width/2 - width/2);
    world.changedX = constrain(world.changedX, -world.width/2 + width/2, world.width/2 - width/2);

    // moving stuff with player
    if (player.x !== oldX) {
      moveItemsX(-1);
      enemysMoveX(-1);
    }

    // resetting the original position
    oldX = player.x;
  }
}

function playerExp(amount) {
  // gaining exp
  player.exp += amount;
  if (player.exp >= player.nextLvl) {
    // level up
    player.lvl++;
    player.points += 5;
    player.nextLvl = player.nextLvl*2 + player.lvl*50;
  }
}

function playerCoolDown() {
  // cool down from attacks
  let elapsedTime = millis() - player.previousAttack;
  if (player.coolDown && elapsedTime >= player.coolDownTime)
    player.coolDown = false;
}
