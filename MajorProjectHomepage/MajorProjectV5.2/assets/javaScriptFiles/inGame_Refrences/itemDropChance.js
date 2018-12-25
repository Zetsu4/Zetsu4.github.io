function itemDropChance(x, y) {
  let dropped = false;
  let changeX = random(-spriteSize.width, spriteSize.width);
  let changeY = random(-spriteSize.height, spriteSize.height);
  let randomItem = random(100);

  // money
  let amountOfMoney = int(random(-player.lvl, (player.lvl+killedEnemys)/2));
  let changeX2 = random(-spriteSize.width, spriteSize.width);
  let changeY2 = random(-spriteSize.height, spriteSize.height);
  if (amountOfMoney > 0)
    items.onGround.push(new ItemOnGround(x+changeX2, y+changeY2, allItems.get("Money"), world.area, amountOfMoney));

  // random items
  if (randomItem <= 60) { // arrows
    let randomAmount = int(random(1, 6));
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Arrows"), world.area, randomAmount, spriteSize.width, spriteSize.height/2));
    dropped = true;
  }

  else if (randomItem <= 80) { // traps
    let randomAmount = int(random(1, 4));
    items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Traps"), world.area, randomAmount));
    dropped = true;
  }

  // random potions
  if (!dropped) {
    changeX = random(-spriteSize.width, spriteSize.width);
    changeY = random(-spriteSize.height, spriteSize.height);
    randomItem = random(100);

    if (randomItem <= 10) // hp potions
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Hp Potion"), world.area));

    else if (randomItem <= 20) // mp potions
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get("Mp Potion"), world.area));

    else // equipment
      items.onGround.push(new ItemOnGround(x+changeX, y+changeY, allItems.get(equipmentLootDrops()), world.area));
  }
}

function equipmentLootDrops() {
  let randomEquipment = random(100);
  let randomItem = random(1000);
  let chance = 100/7;

  // weapons
  if (randomEquipment <= chance*1) {
    if (randomItem <= 100)
      return "Pitch Fork";

    else if (randomItem <= 200)
      return "Shifty Sword";

    else if (randomItem <= 300)
      return "Cross Bow";

    else if (randomItem <= 400)
      return "Cross Boe";

    else if (randomItem <= 500)
      return "Real Wand";

    else if (randomItem <= 600)
      return "Real Staff";

    else if (randomItem <= 602)
      return "Stick";
  }

  // head
  else if (randomEquipment <= chance*2) {
    if (randomItem <= 200)
      return "Flat Rock";

    else if (randomItem <= 400)
      return "Paper Bag";
  }

  // chest
  else if (randomEquipment <= chance*3) {
    if (randomItem <= 200)
      return "Brown Shirt";

    else if (randomItem <= 400)
      return "Grey Shirt";
  }

  // feet
  else if (randomEquipment <= chance*4) {
    if (randomItem <= 200)
      return "Grass";

    else if (randomItem <= 400)
      return "Grass Shoes";
  }

  // shoulders
  else if (randomEquipment <= chance*5) {
    if (randomItem <= 200)
      return "Round Rocks";

    else if (randomItem <= 400)
      return "Weak Plates";
  }

  // legs
  else if (randomEquipment <= chance*6) {
    if (randomItem <= 200)
      return "Blue Pants";

    else if (randomItem <= 400)
      return "Grass Pants";
  }

  // hands
  else if (randomEquipment <= chance*7) {
    if (randomItem <= 200)
      return "Leather Gloves";

    else if (randomItem <= 400)
      return "Rock Gloves";
  }

  return "Small Rock";
}
