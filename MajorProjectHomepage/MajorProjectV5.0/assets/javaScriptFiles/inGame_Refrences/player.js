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

function consumePotion(name, points, totPoints) {
  points += (player.lvl+player.vit)/2*(name === "Hp Potion" ? player.str : player.int);
  points = constrain(ceil(points), 1, totPoints);
  allItems.get(name).amount--;
  if (allItems.get(name).amount <= 0)
    checkEmpty(name);

  name === "Hp Potion" ? player.hp = points : player.mp = points;
}

function playerExp(amount) {
  // gaining exp
  player.exp += amount*(1+player.expBonus/1000);
  while (player.exp >= player.nextLvl) {
    // level up
    player.exp -= player.nextLvl;
    player.nextLvl += player.nextLvl + player.lvl*10;
    player.lvl++;
    player.points += 5;
    calculateStats();
    player.hp = player.totHp;
    player.mp = player.totMp;
  }
}

function playerCoolDown() {
  // cool down from attacks
  let elapsedTime = millis() - player.previousAttack;
  if (player.coolDown && elapsedTime >= player.coolDownTime)
    player.coolDown = false;
}

function playerTakeDamage(dmg) {
  player.hp -= dmg;
  if (player.hp <= 0) {
    gameOver();
  }
}
