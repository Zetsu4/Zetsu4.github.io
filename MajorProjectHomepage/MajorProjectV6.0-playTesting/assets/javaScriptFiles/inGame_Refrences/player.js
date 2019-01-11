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
      moveNPCsY(1);
      moveGuildY(1);
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
      moveNPCsY(-1);
      moveGuildY(-1);
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
      moveNPCsX(1);
      moveGuildX(1);
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
      moveNPCsX(-1);
      moveGuildX(-1);
      moveItemsX(-1);
      enemysMoveX(-1);
    }

    // resetting the original position
    oldX = player.x;
  }
}

function consumePotion(name, points, totPoints) {
  sounds.consumePotion.play();
  points += (player.lvl+(name === "Hp Potion" ? player.vit : player.int))*5;
  points = constrain(ceil(points), 1, totPoints);
  allItems.get(name).amount--;
  if (allItems.get(name).amount <= 0)
    checkEmpty(name);

  name === "Hp Potion" ? player.hp = points : player.mp = points;
}

function playerExp(amount) {
  // gaining exp
  player.exp += amount*(constrain((1+player.expBonus/100), 0.50, Infinity));
  while (player.exp >= player.nextLvl) {
    // level up
    player.exp -= player.nextLvl;
    player.nextLvl = int(player.nextLvl*(1.20+(player.lvl/100)));
    player.lvl++;
    player.points += 5;
    calculateStats();
    player.hp = player.totHp;
    player.mp = player.totMp;
  }
}

function playerCoolDown() {
  // cool down from attacks
  player.coolDown = !timerFoo(player.previousAttack, player.coolDownTime);
}

function playerTakeDamage(dmg) {
  player.hp -= dmg;
  if (player.hp <= 0)
    gameOver();
}

function teleportArea(newArea) {
  world.area = newArea;
  state = 0;
  player.x = 0;
  player.y = 0;
  world.changedX = 0;
  world.changedY = 0;
  enemyArr = [];
  checkState();
  setNPCs();
  allItems.get("Town Portal").amount--;
  if (allItems.get("Town Portal").amount <= 0)
    checkEmpty("Town Portal");
}
