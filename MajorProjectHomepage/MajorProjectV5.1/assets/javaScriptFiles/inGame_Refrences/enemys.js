function enemys() {
  // loop through enemys
  for (let i=enemyArr.length-1; i >= 0; i--) {
    if (enemyArr[i].hp > 0) {
      // move
      enemyArr[i].movement(world.width, world.height, player.x, player.y);

      // map
      enemyArr[i].mapping(
        world.width, world.height,
        minimap.x, minimap.y,
        minimap.imgWidth, minimap.imgHeight,
        player.dotSize*0.75
      );

      // collisions
      for (let j=items.playerAttack.length-1; j >= 0; j--) {
        if (dist(items.playerAttack[j].realX, items.playerAttack[j].realY, enemyArr[i].x, enemyArr[i].y) <= (enemyArr[i].width+enemyArr[i].height)/2) {
          let dmg = items.playerAttack[j].damage;
          enemyArr[i].takeDamage(dmg, items.playerAttack[j].trap);
          items.playerAttack.splice(j, 1);
        }
      }
    }

    // attacks
    enemyAttackFoo(i);

    // dead enemy
    if (enemyArr[i].hp <= 0) {
      enemyArr[i].dead();
      if (enemyArr[i].allAttacks.length <= 0) {
        let expGained = enemyArr[i].expGained;
        playerExp(expGained);
        lootDrop(enemyArr[i].x, enemyArr[i].y);
        killedEnemys++;
        enemyArr.splice(i, 1);
      }
    }
  }

  // respawn enemys
  if (enemyArr.length < world.state.numOfEnemys)
    spawnEnemys();
  else if (enemyArr.length > world.state.numOfEnemys)
    enemyArr.splice(enemyArr.length-1, 1);
}

// move with player
function enemysMoveX(dir) {
  let speed = player.speed*dir;

  for (let i=enemyArr.length-1; i >= 0; i--) {
    enemyArr[i].moveEnemysX(player.speed, dir);
    for (let j=enemyArr[i].allAttacks.length-1; j >= 0; j--) {
      enemyArr[i].allAttacks[j].changeX += speed;
    }
  }
}

function enemysMoveY(dir) {
  let speed = player.speed*dir;

  for (let i=enemyArr.length-1; i >= 0; i--) {
    enemyArr[i].moveEnemysY(player.speed, dir);
    for (let j=enemyArr[i].allAttacks.length-1; j >= 0; j--) {
      enemyArr[i].allAttacks[j].changeY += speed;
    }
  }
}

// enemy attacks
function enemyAttackFoo(enemyIndex) {
  let collisionDist = (spriteSize.width+spriteSize.height)/3;
  for (let i = enemyArr[enemyIndex].allAttacks.length-1; i >= 0; i--) {
    // attacks do stuff
    enemyArr[enemyIndex].allAttacks[i].display();
    if (enemyArr[enemyIndex].allAttacks[i].move())
      enemyArr[enemyIndex].allAttacks.splice(i, 1);

    // collision with player
    else if (dist(enemyArr[enemyIndex].allAttacks[i].realX, enemyArr[enemyIndex].allAttacks[i].realY, 0, 0) < collisionDist) {
      playerTakeDamage(enemyArr[enemyIndex].allAttacks[i].damage);
      enemyArr[enemyIndex].allAttacks.splice(i, 1);
    }

    // collision with player attack
    else {
      for (let j=items.playerAttack.length-1; j >= 0; j--) {
        if (!items.playerAttack[j].trap) {
          if (dist(enemyArr[enemyIndex].allAttacks[i].realX, enemyArr[enemyIndex].allAttacks[i].realY, items.playerAttack[j].realX, items.playerAttack[j].realY) < collisionDist) {
            enemyArr[enemyIndex].allAttacks.splice(i, 1);
            items.playerAttack.splice(j, 1);
            break;
          }
        }
      }
    }
  }
}

// spawn starting enemys
function spawnEnemys() {
  if (world.width <= width*2.5 && world.height <= height*2.5)
    // in case world is too small
    cheaterEnding();

  // enemy vars
  let race = int(random(1, allRaces.length));
  let skill = int(random(1, allSkills.length));
  let xSpawn = random(world.state.zone.x-world.state.zone.wid/2+width/2, world.state.zone.x+world.state.zone.wid/2-width/2);
  let ySpawn = random(world.state.zone.y-world.state.zone.hei/2+height/2, world.state.zone.y+world.state.zone.hei/2-height/2);

  xy = rerstrainEnemySpawn(xSpawn, ySpawn);
  xSpawn = xy[0];
  ySpawn = xy[1];

  // spawn
  let minLvl = constrain(player.lvl-2, 0, 90) + world.state.enemyLvlBonus;
  let maxLvl = constrain(player.lvl+(player.exp/player.nextLvl*10*killedEnemys*0.05), 4, 100) + world.state.enemyLvlBonus;
  enemyArr.push(new Enemy(xSpawn, ySpawn, allRaces[race], allSkills[skill], minLvl, maxLvl, -player.x, -player.y));
}

function rerstrainEnemySpawn(xSpawn, ySpawn) {
  // restraining enemys from player
  let coordinates = [xSpawn, ySpawn];

  while (xSpawn >= -width && xSpawn <= width
      && ySpawn >= -height && ySpawn <= height) {

    xSpawn = random(world.state.zone.x-world.state.zone.wid/2+width/2, world.state.zone.x+world.state.zone.wid/2-width/2);
    ySpawn = random(world.state.zone.y-world.state.zone.hei/2+height/2, world.state.zone.y+world.state.zone.hei/2-height/2);
  }

  coordinates[0] = xSpawn;
  coordinates[1] = ySpawn;
  return coordinates;
}
