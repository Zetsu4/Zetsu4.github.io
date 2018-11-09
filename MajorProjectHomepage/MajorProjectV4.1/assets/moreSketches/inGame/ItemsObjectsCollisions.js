// ITEMS/OBJECTS---
function baddiesFoo() {
  // baddies
  for (let i = 0; i < badGuys.length; i++) {
    if (badGuys[i].baddieOnScreen(player.x, player.y, world.WIDTH, world.HEIGHT)) {
      badGuys[i].attackPlayer(player.x, player.y, world.WIDTH, world.HEIGHT);
    }

    else {
      badGuys[i].movement(
        world.WIDTH, world.HEIGHT,
        sprite.WIDTH, sprite.HEIGHT,
        player.x, player.y);
    }

    badGuys[i].mapping(
      world.WIDTH, world.HEIGHT,
      minimap.X, minimap.Y,
      minimap.WIDTH, minimap.HEIGHT,
      player.DOT);

    badGuys[i].show(sprite.WIDTH, sprite.HEIGHT);

    // object collisions
    let badX = badGuys[i].otherX + width/2;
    let badY = badGuys[i].otherY + height/2;
    let badGuyHitBox = (sprite.WIDTH + sprite.HEIGHT)/4;
    let allCollisionableObjects = objects.traps.length + objects.melee.length + objects.arrows.length;

    if (dist(badX, badY, width/2, height/2) <= badGuyHitBox) {
      // player
      gameOver();
      break;
    }

    for (let j = 0; j < allCollisionableObjects; j++) {
      // traps
      if (j < objects.traps.length) {
        if (dist(badX, badY, objects.traps[j].x, objects.traps[j].y) <= badGuyHitBox) {
          objects.traps.splice(j, 1);
          badGuyDeath(i, badGuys[i].x, badGuys[i].y, badGuys[i].otherX, badGuys[i].otherY);
        }
      }

      // sword
      if (j < objects.melee.length) {
        if (dist(badX, badY, objects.melee[j].realX, objects.melee[j].realY) <= badGuyHitBox) {
          objects.melee.splice(j, 1);
          badGuyDeath(i, badGuys[i].x, badGuys[i].y, badGuys[i].otherX, badGuys[i].otherY);
        }

        else if (objects.melee[j].disapear(sprite.WIDTH)) {
          objects.melee.splice(j, 1);
        }
      }

      // arrows
      if (j < objects.arrows.length) {
        if (objects.arrows[j].disapear()) {
          objects.arrows.splice(j, 1);
        }

        else if (dist(badX, badY, objects.arrows[j].realX, objects.arrows[j].realY) <= badGuyHitBox) {
          objects.arrows.splice(j, 1);
          badGuyDeath(i, badGuys[i].x, badGuys[i].y, badGuys[i].otherX, badGuys[i].otherY);
        }
      }
    }
  }
}

function objectFoo() {
  let allCollisionableObjects = objects.traps.length + objects.melee.length + objects.arrows.length;

  // objects
  for (let i = 0; i < allCollisionableObjects; i++) {
      // traps
      if (i < objects.traps.length) {
        objects.traps[i].mapping(
          world.WIDTH, world.HEIGHT,
          minimap.X, minimap.Y,
          minimap.WIDTH, minimap.HEIGHT,
          player.DOT, color(0, 255, 255));
        if (objects.traps[i].show(sprite.WIDTH, sprite.HEIGHT, keyBindings.get("keyArray")[7][1])) {
          objects.traps.splice(i, 1);
          numOfTraps++;
        }
      }

      // sword
      if (i < objects.melee.length) {
        objects.melee[i].moveForward();
        objects.melee[i].show(sprite.WIDTH, sprite.HEIGHT);
      }

      // arrows
      if (i < objects.arrows.length) {
        objects.arrows[i].moveForward();
        objects.arrows[i].show(sprite.WIDTH, sprite.HEIGHT);
      }
  }
}

function badGuyDeath(spotInArray, x, y, otherX, otherY) {
  itemDrops(x, y, otherX, otherY);
  badGuys.splice(spotInArray, 1);
}

function itemDrops(x, y, otherX, otherY) {
  // random item drops
  let numberOfItems = random(5);

  for (let i = 0; i < numberOfItems; i++) {
    let changeOfX = random(-sprite.WIDTH/2, sprite.WIDTH/2);
    let changeOfY = random(-sprite.HEIGHT/2, sprite.HEIGHT/2);
    let randomItem = random(100);

    if (randomItem <= 10) { // arrows
      itemsOnGround.push(new arrow(0, 0, objectImg.arrow, otherX + changeOfX, otherY + changeOfY, x, y));
    }

    else if (randomItem <= 20) { // traps
      itemsOnGround.push(new trap(0, 0, objectImg.trap, 0, 0, true, otherX + changeOfX, otherY + changeOfY, x, y));
    }

    else if (randomItem <= 30) { // hp Potions
      itemsOnGround.push(new hpPotion(objectImg.hpPotion, otherX + changeOfX, otherY + changeOfY, x, y));
    }

    else if (randomItem <= 40) { // mp Potions
      itemsOnGround.push(new mpPotion(objectImg.mpPotion, otherX + changeOfX, otherY + changeOfY, x, y));
    }
  }
}

function floatingItems() {
  // items on the ground
  for (let i = 0; i < itemsOnGround.length; i++) {
    itemsOnGround[i].itemShow(sprite.WIDTH, sprite.HEIGHT);
    itemsOnGround[i].mapping(
      world.WIDTH, world.HEIGHT,
      minimap.X, minimap.Y,
      minimap.WIDTH, minimap.HEIGHT,
      player.DOT*0.75, "white");

    if (itemsOnGround[i].pickUp(sprite.WIDTH, sprite.HEIGHT)) {

      // arrows
      if (itemsOnGround[i].image === objectImg.arrow) {
        numOfArrows = pickUpItem(numOfArrows, objectImg.arrow);
      }

      // traps
      else if (itemsOnGround[i].image === objectImg.trap) {
        numOfTraps = pickUpItem(numOfTraps, objectImg.trap);
      }

      // hp Potions
      else if (itemsOnGround[i].img === objectImg.hpPotion) {
        numOfHpPotions = pickUpItem(numOfHpPotions, objectImg.hpPotion);
      }

      // mp Potions
      else if (itemsOnGround[i].img === objectImg.mpPotion) {
        numOfMpPotions = pickUpItem(numOfMpPotions, objectImg.mpPotion);
      }

      // delete the item on the ground
      itemsOnGround.splice(i, 1);
    }
  }
}

function pickUpItem(numOfItem, itemImage) {
  if (numOfItem === 0) {
    numOfItem++;
    putInInventory(itemImage, numOfItem);
  }

  else {
    numOfItem++;
  }

  return numOfItem;
}

function putInInventory(img, numOfItem) {
  for (let y = 0; y < inventory.length; y++) {
    for (let x = 0; x < inventory[y].length; x++) {
      if (inventory[y][x] === 0) {
        inventory[y][x] = new itemInInventory(img, numOfItem);
        return false;
      }
    }
  }
}
