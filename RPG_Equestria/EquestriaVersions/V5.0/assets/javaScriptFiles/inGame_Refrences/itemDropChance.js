function itemDropChance(x, y) {
  let dropped = false;
  let changeX = random(-spriteSize.width, spriteSize.width);
  let changeY = random(-spriteSize.height, spriteSize.height);
  let randomItem = random(100);

  // random items
  if (randomItem <= 60) { // arrows
    dropped = true;
    let randomAmount = random(1, 6);
    for (let i=0; i<randomAmount; i++)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Arrows"), spriteSize.width, spriteSize.height/2));
  }

  else if (randomItem <= 80) { // traps
    dropped = true;
    let randomAmount = random(1, 4);
    for (let i=0; i<randomAmount; i++)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Traps")));
  }

  // random potions
  if (!dropped) {
    changeX = random(-spriteSize.width, spriteSize.width);
    changeY = random(-spriteSize.height, spriteSize.height);
    randomItem = random(100);

    if (randomItem <= 10) // hp potions
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Hp Potion")));

    else if (randomItem <= 20) // mp potions
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Mp Potion")));

    else // equipment
      equipmentLootDrops(x, y, changeX, changeY);
  }
}

function equipmentLootDrops(x, y, changeX, changeY) {
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
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Flat Rock")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Paper Bag")));
  }

  // chest
  else if (randomEquipment <= chance*3) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Brown Shirt")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Grey Shirt")));
  }

  // feet
  else if (randomEquipment <= chance*4) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Grass")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Grass Shoes")));
  }

  // shoulders
  else if (randomEquipment <= chance*5) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Round Rocks")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Weak Plates")));
  }

  // legs
  else if (randomEquipment <= chance*6) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Blue Pants")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Grass Pants")));
  }

  // hands
  else if (randomEquipment <= chance*7) {
    if (randomItem <= 200)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Leather Gloves")));

    else if (randomItem <= 400)
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Rock Gloves")));
  }
}
