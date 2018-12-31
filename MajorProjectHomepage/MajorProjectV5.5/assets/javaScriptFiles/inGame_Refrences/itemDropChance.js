function itemDropChance(enemy) {
  itemDropEnemy = enemy;
  allItems.forEach(dropItem);
}

function dropItem(value, key, map) {
  let changeX = random(-spriteSize.width, spriteSize.width);
  let changeY = random(-spriteSize.height, spriteSize.height);
  let dropChance = random(500);
  let randomAmount = int(random(value.dropAmountMin*itemDropEnemy.lvl*0.25, value.dropAmountMax*itemDropEnemy.lvl*0.25));

  if (value.equipable) // equipment drops one
    randomAmount = 1;

  if (randomAmount > 0 && dropChance <= value.dropChance) // drop if item drops
    items.onGround.push(new ItemOnGround(itemDropEnemy.x+changeX, itemDropEnemy.y+changeY, value, world.area, randomAmount));
}
