function settingItemMap() {
  // non equipable items
  allItems.set("Hp Potion", {name:"Hp Potion", description: "Replenishes HP", img: itemImg.hpPotion,
  equipable: false, stats: {dropChance: 50, dropAmountMin: 1, dropAmountMax: 2, cost: 20}, amount: 0});

  allItems.set("Mp Potion", {name:"Mp Potion", description: "Replenishes MP", img: itemImg.mpPotion,
  equipable: false, stats: {dropChance: 75, dropAmountMin: 1, dropAmountMax: 3, cost: 15}, amount: 0});

  allItems.set("Arrows", {name:"Arrows", description: "Used with bow", img: itemImg.arrowAttack,
  equipable: false, stats: {dropChance: 100, dropAmountMin: 1, dropAmountMax: 10, cost: 2}, amount: 0});

  allItems.set("Traps", {name:"Traps", description: "Traps to slow\nfast enemy's", img: itemImg.trap,
  equipable: false, stats: {dropChance: 90, dropAmountMin: 1, dropAmountMax: 5, cost: 10}, amount: 0});

  allItems.set("Town Portal", {name:"Town Portal", description: "Teleport to\ntown instantly", img: itemImg.townPortal,
  equipable: false, stats: {dropChance: 80, dropAmountMin: 1, dropAmountMax: 2, cost: 5}, amount: 0});

  allItems.set("Money", {name:"Money", description: "The currency\nof equestria", img: itemImg.money,
  equipable: false, stats: {dropChance: 70, dropAmountMin: 5, dropAmountMax: 15, cost: 0}, amount: 0});


  // equipment
  equipmentWeapons();
  equipmentHead();
  equipmentChest();
  equipmentFeet();
  equipmentShoulders();
  equipmentLegs();
  equipmentHands();
}

function equipmentWeapons() {
  allItems.set("Pitch Fork", {name:"Pitch Fork", description: "A pitch fork\nthat mobs carry", img: itemImg.equipment.pitchFork,
  equipable: true, equipSlot: "weapon", stats: pitchFork, amount: 0});

  allItems.set("Shifty Sword", {name:"Shifty Sword", description: "careful, it's shifty", img: itemImg.equipment.shiftySword,
  equipable: true, equipSlot: "weapon", stats: shiftySword, amount: 0});

  allItems.set("Cross Bow", {name:"Cross Bow", description: "It's a cross bow", img: itemImg.equipment.crossBow,
  equipable: true, equipSlot: "weapon", stats: crossBow, amount: 0});

  allItems.set("Cross Boe", {name:"Cross Boe", description: "It's crossed boe's", img: itemImg.equipment.crossBoe,
  equipable: true, equipSlot: "weapon", stats: crossBoe, amount: 0});

  allItems.set("Real Wand", {name:"Real Wand", description: "Totally a real wand\n(not a stick)", img: itemImg.equipment.realWand,
  equipable: true, equipSlot: "weapon", stats: realWand, amount: 0});

  allItems.set("Real Staff", {name:"Real Staff", description: "Surely it's different\nfrom a stick", img: itemImg.equipment.realStaff,
  equipable: true, equipSlot: "weapon", stats: realStaff, amount: 0});

  allItems.set("Stick", {name:"Stick", description: "He didn't even\nchange the picture", img: itemImg.equipment.realWand,
  equipable: true, equipSlot: "weapon", stats: stick, amount: 0});

  allItems.set("Small Rock", {name:"Small Rock", description: "A rock you\nfound", img: itemImg.equipment.smallRock,
  equipable: true, equipSlot: "weapon", stats: smallRock, amount: 0});
}

function equipmentHead() {
  allItems.set("Flat Rock", {name:"Flat Rock", description: "A flat rock\nfor your head", img: itemImg.equipment.flatRock,
  equipable: true, equipSlot: "head", stats: flatRock, amount: 0});

  allItems.set("Paper Bag", {name:"Paper Bag", description: "To cover your\nugly mug", img: itemImg.equipment.paperBag,
  equipable: true, equipSlot: "head", stats: paperBag, amount: 0});
}

function equipmentChest() {
  allItems.set("Brown Shirt", {name:"Brown Shirt", description: "It's made out\nof wood", img: itemImg.equipment.brownShirt,
  equipable: true, equipSlot: "chest", stats: brownShirt, amount: 0});

  allItems.set("Grey Shirt", {name:"Grey Shirt", description: "I thought it\nwas steel", img: itemImg.equipment.greyShirt,
  equipable: true, equipSlot: "chest", stats: greyShirt, amount: 0});
}

function equipmentFeet() {
  allItems.set("Grass", {name:"Grass", description: "It's grass", img: itemImg.equipment.grass,
  equipable: true, equipSlot: "feet", stats: grass, amount: 0});

  allItems.set("Grass Shoes", {name:"Grass Shoes", description: "I thought it\nwas steel", img: itemImg.equipment.grassShoes,
  equipable: true, equipSlot: "feet", stats: grassShoes, amount: 0});
}

function equipmentShoulders() {
  allItems.set("Round Rocks", {name:"Round Rocks", description: "Round rocks for\nyour shoulders", img: itemImg.equipment.roundRocks,
  equipable: true, equipSlot: "shoulders", stats: roundRocks, amount: 0});

  allItems.set("Weak Plates", {name:"Weak Plates", description: "Shoulder plates that\nare weak", img: itemImg.equipment.weakPlates,
  equipable: true, equipSlot: "shoulders", stats: weakPlates, amount: 0});
}

function equipmentLegs() {
  allItems.set("Blue Pants", {name:"Blue Pants", description: "Blue Pants", img: itemImg.equipment.bluePants,
  equipable: true, equipSlot: "legs", stats: bluePants, amount: 0});

  allItems.set("Grass Pants", {name:"Grass Pants", description: "Pants made from\ngrass", img: itemImg.equipment.grassPants,
  equipable: true, equipSlot: "legs", stats: grassPants, amount: 0});
}

function equipmentHands() {
  allItems.set("Leather Gloves", {name:"Leather Gloves", description: "Gloves made out\nof leather", img: itemImg.equipment.leatherGloves,
  equipable: true, equipSlot: "hands", stats: leatherGloves, amount: 0});

  allItems.set("Rock Gloves", {name:"Rock Gloves", description: "Rough rocks for\nyour hands", img: itemImg.equipment.rockGloves,
  equipable: true, equipSlot: "hands", stats: rockGloves, amount: 0});
}
