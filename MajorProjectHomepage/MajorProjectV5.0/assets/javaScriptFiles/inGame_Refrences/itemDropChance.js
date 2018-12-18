function itemDropChance(x, y) {
  let changeX = random(-spriteSize.width*1.75, spriteSize.width*1.75);
  let changeY = random(-spriteSize.height*1.75, spriteSize.height*1.75);
  let randomItem = random(100);

  // random items
  if (randomItem <= 30)  // arrows
    items.onGround.push(new ItemOnGround(x, y, allItems.get("Arrows"), spriteSize.width, spriteSize.height/2));

  else if (randomItem <= 60)  // traps
    items.onGround.push(new ItemOnGround(x, y, allItems.get("Traps")));

  else if (randomItem <= 85) { // equipment
    randomItem = random(1000);
    // items.onGround.push(new ItemOnGround(x, y, allItems.get("")));
  }

  // random potions
  randomItem = random(100);
  if (randomItem <= 25)  // hp potions
    items.onGround.push(new ItemOnGround(x, y, allItems.get("Hp Potion")));

  else if (randomItem <= 50)  // mp potions
    items.onGround.push(new ItemOnGround(x, y, allItems.get("Mp Potion")));
}
