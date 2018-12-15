function createEnemys() {
  // starting baddies
  for (let i = 0; i < NUM_OF_ENEMYS; i++) {
    // secret ending (in case things break)
    if (world.width <= width*4 && world.height <= height*4) {
      cheaterEnding();
      break;
    }

    // spawning baddies
    let race = int(random(1, allRaces.length));
    let skill = int(random(1, allSkills.length));
    let xSpawn = random(-world.width/2, world.width/2);
    let ySpawn = random(-world.height/2, world.height/2);

    xy = rerstrainEnemySpawn(xSpawn, ySpawn);
    xSpawn = xy[0];
    ySpawn = xy[1];

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
