function itemDropChance(enemy) {
  itemDropEnemy = enemy;
  hasDropped = false;
  allItems.forEach(dropItem);
}

function dropItem(value, key, map) {
  if (!hasDropped) {
    let changeX = random(-spriteSize.width, spriteSize.width);
    let changeY = random(-spriteSize.height, spriteSize.height);
    let dropChance = random(numOfItems*(1000 - itemDropEnemy.lvl));
    let randomAmount = 0;

    if (value.equipable) // equipment drops one
      randomAmount = 1;
    else
      randomAmount = int(random(value.stats.dropAmountMin*itemDropEnemy.lvl*0.25, value.stats.dropAmountMax*itemDropEnemy.lvl*0.25));

    if (randomAmount > 0 && dropChance <= value.stats.dropChance) { // drop if item drops
      items.onGround.push(new ItemOnGround(itemDropEnemy.x+changeX, itemDropEnemy.y+changeY, value, world.area, randomAmount));
      hasDropped = true;
    }
  }
}
