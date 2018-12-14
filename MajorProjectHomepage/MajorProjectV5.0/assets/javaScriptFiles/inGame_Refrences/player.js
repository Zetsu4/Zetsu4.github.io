function movement() {
  player.speed = (player.toggleSpeed ? player.totSpeed*player.speedMultiplier : player.totSpeed);

  if (keyIsDown(keyBindings.get("Move Up").code)) {
    player.y -= player.speed;
    world.changedY += player.speed;
  }

  if (keyIsDown(keyBindings.get("Move Down").code)) {
    player.y += player.speed;
    world.changedY -= player.speed;
  }

  if (keyIsDown(keyBindings.get("Move Left").code)) {
    player.x -= player.speed;
    world.changedX += player.speed;
  }

  if (keyIsDown(keyBindings.get("Move Right").code)) {
    player.x += player.speed;
    world.changedX -= player.speed;
  }

  // constrain
  player.x = constrain(player.x, -world.width/2 + width/2, world.width/2 - width/2);
  player.y = constrain(player.y, -world.height/2 + height/2, world.height/2 - height/2);

  world.changedX = constrain(world.changedX, -world.width/2 + width/2, world.width/2 - width/2);
  world.changedY = constrain(world.changedY, -world.height/2 + height/2, world.height/2 - height/2);
}
