function itemsInWorld() {
  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].display();
    if (items.playerAttack[i].move())
      items.playerAttack.splice(i, 1);
  }
}

// loot drop
function lootDrop(x, y) {
  let numOfItems = int(random(player.lvl*1.5));
  numOfItems = constrain(numOfItems, 2, 15);

  for (let i = 0; i < numOfItems; i++) {
    let changeX = random(-spriteSize.width*0.75, spriteSize.width*0.75);
    let changeY = random(-spriteSize.height*0.75, spriteSize.height*0.75);
    let randomItem = random(100);

    // items
    if (randomItem <= 20) { // arrows
      items.onGround.push();
    }

    else if (randomItem <= 40) { // traps
      items.onGround.push();
    }

    else if (randomItem <= 80) { // equipment
      randomItem = random();
      // items.onGround.push();
    }

    // potions
    randomItem = random(100);
    if (randomItem <= 20) { // hp potions
      items.onGround.push();
    }
    else if (randomItem <= 20) { // mp potions
      items.onGround.push();
    }
}

// move with player
function moveItemsX(dir) {
  let speed = player.speed*dir;

  for (let i=items.onGround.length-1; i >= 0; i--) {
    items.onGround[i].changeX += speed;
  }

  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].changeX += speed;
  }

  for (let i=items.enemyAttack.length-1; i >= 0; i--) {
    items.enemyAttack[i].changeX += speed;
  }
}

function moveItemsY(dir) {
  let speed = player.speed*dir;

  for (let i=items.onGround.length-1; i >= 0; i--) {
    items.onGround[i].changeY += speed;
  }

  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].changeY += speed;
  }

  for (let i=items.enemyAttack.length-1; i >= 0; i--) {
    items.enemyAttack[i].changeY += speed;
  }
}
