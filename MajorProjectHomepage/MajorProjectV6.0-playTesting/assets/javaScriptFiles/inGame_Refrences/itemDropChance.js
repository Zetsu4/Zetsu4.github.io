function itemDropChance(enemy) {
  itemDropEnemy = enemy;
  hasDropped = false;
  allItems.forEach(dropItem);
}

function dropItem(value, key, map) {
  if (!hasDropped) {
    let aNumber = (100*numOfItems)/value.stats.dropChance - itemDropEnemy.lvl;
    console.log(aNumber);
    let dropChance = random(constrain(aNumber, 100, Infinity));

    if (dropChance <= 50) { // drop if item drops
      let changeX = random(-spriteSize.width, spriteSize.width);
      let changeY = random(-spriteSize.height, spriteSize.height);
      let randomAmount = 0;

      if (value.equipable) // equipment drops one
        randomAmount = 1;
      else
        randomAmount = constrain(int(random(value.stats.dropAmountMin+itemDropEnemy.lvl*0.01, value.stats.dropAmountMax+itemDropEnemy.lvl*0.01)), 1, Infinity);

      items.onGround.push(new ItemOnGround(itemDropEnemy.x+changeX, itemDropEnemy.y+changeY, value, world.area, randomAmount));
      hasDropped = true;
    }
  }
}
