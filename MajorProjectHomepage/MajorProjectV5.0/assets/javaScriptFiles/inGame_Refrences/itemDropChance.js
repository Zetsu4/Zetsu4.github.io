function itemDropChance(x, y) {
  let changeX = random(-spriteSize.width, spriteSize.width);
  let changeY = random(-spriteSize.height, spriteSize.height);
  let randomItem = random(100);

  // random items
  if (randomItem <= 40)  // arrows
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Arrows"), spriteSize.width, spriteSize.height/2));

  else if (randomItem <= 80)  // traps
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Traps")));

  else if (randomItem <= 90) // equipment
    equipmentLootDrops(x, y, changeX, changeY);

  // random potions
  changeX = random(-spriteSize.width, spriteSize.width);
  changeY = random(-spriteSize.height, spriteSize.height);
  randomItem = random(100);
  if (randomItem <= 25)  // hp potions
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Hp Potion")));

  else if (randomItem <= 50)  // mp potions
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Mp Potion")));
}

function equipmentLootDrops(x, y, changeX, changeY) {
  let randomItem = random(1000);

  // weapons
  if (randomItem <= 200)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

  else if (randomItem <= 400)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));

  // head
  else if (randomItem <= 200)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

  else if (randomItem <= 400)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));

  // chest
  else if (randomItem <= 200)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

  else if (randomItem <= 400)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));

  // feet
  else if (randomItem <= 200)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

  else if (randomItem <= 400)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));

  // shoulders
  else if (randomItem <= 200)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

  else if (randomItem <= 400)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));

  // legs
  else if (randomItem <= 200)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

  else if (randomItem <= 400)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));

  // hands
  else if (randomItem <= 200)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

  else if (randomItem <= 400)
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));
}
