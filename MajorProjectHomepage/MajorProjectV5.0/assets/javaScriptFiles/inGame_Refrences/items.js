function itemsInWorld() {
  // items on ground
  for (let i=items.onGround.length-1; i >= 0; i--) {
    items.onGround[i].display();
    if (dist(items.onGround[i].x, items.onGround[i].y, 0, 0) <= (spriteSize.width+spriteSize.height)/2) {
      // pick up item
      if (allItems.get(items.onGround[i].name).amount <= 0) {
        let added = false;
        for (let y = 0; y < player.inventory.length; y++) {
          for (let x = 0; x < player.inventory[y].length; x++) {
            if (player.inventory[y][x] === "empty" && !added) {
              player.inventory[y][x] = allItems.get(items.onGround[i].name);
              player.inventory[y][x].amount++;
              added = true;
            }
          }
        }
      }
      items.onGround.splice(i, 1);
    }
  }

  // player attacks
  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].display();
    if (items.playerAttack[i].move())
      items.playerAttack.splice(i, 1);
  }
}

function lootDrop(x, y) {
  // loot drop
  let numOfItems = int(random(player.lvl*1.5));
  numOfItems = constrain(numOfItems, 2, 15);

  for (let i = 0; i < numOfItems; i++) {
    let changeX = random(-spriteSize.width*0.75, spriteSize.width*0.75);
    let changeY = random(-spriteSize.height*0.75, spriteSize.height*0.75);
    let randomItem = random(100);

    // random items
    if (randomItem <= 20)  // arrows
      items.onGround.push(new ItemOnGround(x, y, itemImg.arrowAttack, "Arrows", spriteSize.width, spriteSize.height/2));

    else if (randomItem <= 40)  // traps
      items.onGround.push(new ItemOnGround(x, y, itemImg.trap, "Traps"));

    else if (randomItem <= 80) { // equipment
      randomItem = random();
      // items.onGround.push();
    }

    // random potions
    randomItem = random(100);
    if (randomItem <= 20)  // hp potions
      items.onGround.push(new ItemOnGround(x, y, itemImg.hpPotion, "Hp Potion"));

    else if (randomItem <= 20)  // mp potions
      items.onGround.push(new ItemOnGround(x, y, itemImg.mpPotion, "Mp Potion"));
  }
}

// move with player
function moveItemsX(dir) {
  let speed = player.speed*dir;

  // items on ground
  for (let i=items.onGround.length-1; i >= 0; i--) {
    items.onGround[i].x += speed;
  }

  // players attacks
  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].changeX += speed;
  }

  // enemy attacks
  for (let i=items.enemyAttack.length-1; i >= 0; i--) {
    items.enemyAttack[i].changeX += speed;
  }
}

function moveItemsY(dir) {
  let speed = player.speed*dir;

  // items on ground
  for (let i=items.onGround.length-1; i >= 0; i--) {
    items.onGround[i].y += speed;
  }

  // players attacks
  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].changeY += speed;
  }

  // enemy attacks
  for (let i=items.enemyAttack.length-1; i >= 0; i--) {
    items.enemyAttack[i].changeY += speed;
  }
}
