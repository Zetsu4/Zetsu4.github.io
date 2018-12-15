function enemys() {
  for (let i=enemyArr.length-1; i >= 0; i--) {
    enemyArr[i].movement(world.width, world.height, player.x, player.y);
    enemyArr[i].constrainToWorld(world.width, world.height, player.x, player.y);
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
        items.playerAttack[j].trap ? enemyArr[i].takeDamage(dmg, true) : enemyArr[i].takeDamage(dmg, false);
        items.playerAttack.splice(j, 1);
      }
    }
    // dead enemy
    if (enemyArr[i].hp <= 0) {
      let expGained = enemyArr[i].expGained;
      playerExp(expGained);
      lootDrop(enemyArr[i].x, enemyArr[i].y);
      enemyArr.splice(i, 1);
    }
  }
}

// move with player
function enemysMoveX(dir) {
  for (let i=enemyArr.length-1; i >= 0; i--)
    enemyArr[i].moveEnemysX(player.speed, dir);
}

function enemysMoveY(dir) {
  for (let i=enemyArr.length-1; i >= 0; i--)
    enemyArr[i].moveEnemysY(player.speed, dir);
}


// spawn starting enemys
function createEnemys() {
  for (let i = 0; i < NUM_OF_ENEMYS; i++) {
    // in case world is too small
    if (world.width <= width*4 && world.height <= height*4) {
      cheaterEnding();
      break;
    }

    // enemy vars
    let race = int(random(1, allRaces.length));
    let skill = int(random(1, allSkills.length));
    let xSpawn = random(-world.width/2, world.width/2);
    let ySpawn = random(-world.height/2, world.height/2);

    xy = rerstrainEnemySpawn(xSpawn, ySpawn);
    xSpawn = xy[0];
    ySpawn = xy[1];

    // spawn them in
    enemyArr.push(new Enemy(xSpawn, ySpawn, allRaces[race], allSkills[skill], player.lvl+2, player.lvl+8));
  }
}

function rerstrainEnemySpawn(xSpawn, ySpawn) {
  let coordinates = [xSpawn, ySpawn];

  while (xSpawn >= -width && xSpawn <= width
      && ySpawn >= -height && ySpawn <= height) {

    xSpawn = random(-world.width/2, world.width/2);
    ySpawn = random(-world.height/2, world.height/2);
  }

  coordinates[0] = xSpawn;
  coordinates[1] = ySpawn;
  return coordinates;
}