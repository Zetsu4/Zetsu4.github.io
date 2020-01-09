function itemDropChance(enemy) {
  itemDropEnemy = enemy;
  hasDropped = false;
  allItems.forEach(dropItem);
}

function dropItem(value, key, map) {
  if (!hasDropped) {
    let aNumber = 5*(20*numOfItems - itemDropEnemy.lvl);
    let dropChance = random(aNumber);

    if (dropChance <= value.stats.dropChance) { // drop if item drops
      let changeX = random(-spriteSize.width, spriteSize.width);
      let changeY = random(-spriteSize.height, spriteSize.height);
      let randomAmount = 0;

      if (value.equipable) // equipment drops one
        randomAmount = 1;
      else
        randomAmount = constrain(int(random(value.stats.dropAmountMin + itemDropEnemy.lvl * (value.stats.dropAmountMin / 100), value.stats.dropAmountMax + itemDropEnemy.lvl * (value.stats.dropAmountMax / 100))), 1, Infinity);

      if (itemDropEnemy.name !== "") { // drop on player - quest drop
        items.onGround.push(new ItemOnGround(changeX, changeY, value, world.area, randomAmount));
        hasDropped = true;
      }
      else { // drop on enemy corpse
        items.onGround.push(new ItemOnGround(itemDropEnemy.x + changeX, itemDropEnemy.y + changeY, value, world.area, randomAmount));
        hasDropped = true;
      }
    }
  }
}
