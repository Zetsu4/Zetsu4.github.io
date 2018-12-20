function itemDropChance(x, y) {
  let changeX = random(-spriteSize.width, spriteSize.width);
  let changeY = random(-spriteSize.height, spriteSize.height);
  let randomItem = random(100);

  // random items
  if (randomItem <= 60) { // arrows
    let randomAmount = random(2, 10);
    for (let i=0; i<randomAmount; i++)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Arrows"), spriteSize.width, spriteSize.height/2));
  }

  else if (randomItem <= 80) { // traps
    let randomAmount = random(2, 10);
    for (let i=0; i<randomAmount; i++)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Traps")));
  }

  // random potions
  changeX = random(-spriteSize.width, spriteSize.width);
  changeY = random(-spriteSize.height, spriteSize.height);
  randomItem = random(100);
  if (randomItem <= 10)  // hp potions
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Hp Potion")));

  else if (randomItem <= 20)  // mp potions
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Mp Potion")));
}

function equipmentLootDrops(x, y) {
  let changeX = random(-spriteSize.width, spriteSize.width);
  let changeY = random(-spriteSize.height, spriteSize.height);
  let randomEquipment = random(100);
  let randomItem = random(1000);
  let chance = 100/3.5;

  // weapons
  if (randomEquipment <= chance*1) {
    if (randomItem <= 100)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

    else if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));

    else if (randomItem <= 300)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Cross Bow")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Cross Boe")));

    else if (randomItem <= 500)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Real Wand")));

    else if (randomItem <= 600)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Real Staff")));
  }

  // head
  else if (randomEquipment <= chance*2) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));
  }

  // chest
  else if (randomEquipment <= chance*3) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));
  }

  // feet
  else if (randomEquipment <= chance*4) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));
  }

  // shoulders
  else if (randomEquipment <= chance*5) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));
  }

  // legs
  else if (randomEquipment <= chance*6) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));
  }

  // hands
  else if (randomEquipment <= chance*7) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Pitch Fork")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Shifty Sword")));
  }
}
