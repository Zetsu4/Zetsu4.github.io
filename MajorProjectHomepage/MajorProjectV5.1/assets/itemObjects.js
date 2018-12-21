function settingItemMap() {
  allItems.set("Hp Potion", {name:"Hp Potion",  amount: 0, description: "Replenishes HP", img: itemImg.hpPotion, equipable: false});
  allItems.set("Mp Potion", {name:"Mp Potion",  amount: 0, description: "Replenishes MP", img: itemImg.mpPotion, equipable: false});
  allItems.set("Arrows", {name:"Arrows",  amount: 0, description: "Used with bow", img: itemImg.arrowAttack, equipable: false});
  allItems.set("Traps", {name:"Traps",  amount: 0, description: "Traps to slow\nfast enemy's", img: itemImg.trap, equipable: false});

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
  allItems.set("Pitch Fork", {name:"Pitch Fork",  amount: 0, description: "A pitch fork\nthat mobs carry",
  img: itemImg.equipment.pitchFork, stats: pitchFork, equipable: true, equipSlot: "weapon"});

  allItems.set("Shifty Sword", {name:"Shifty Sword",  amount: 0, description: "careful, it's shifty",
  img: itemImg.equipment.shiftySword, stats: shiftySword, equipable: true, equipSlot: "weapon"});

  allItems.set("Cross Bow", {name:"Cross Bow",  amount: 0, description: "It's a cross bow",
  img: itemImg.equipment.crossBow, stats: crossBow, equipable: true, equipSlot: "weapon"});

  allItems.set("Cross Boe", {name:"Cross Boe",  amount: 0, description: "It's crossed boe's",
  img: itemImg.equipment.crossBoe, stats: crossBoe, equipable: true, equipSlot: "weapon"});

  allItems.set("Real Wand", {name:"Real Wand",  amount: 0, description: "Totally a real wand\n(not a stick)",
  img: itemImg.equipment.realWand, stats: realWand, equipable: true, equipSlot: "weapon"});

  allItems.set("Real Staff", {name:"Real Staff",  amount: 0, description: "Surely it's different\nfrom a stick",
  img: itemImg.equipment.realStaff, stats: realStaff, equipable: true, equipSlot: "weapon"});
}

function equipmentHead() {
  allItems.set("Flat Rock", {name:"Flat Rock",  amount: 0, description: "A flat rock\nfor your head",
  img: itemImg.equipment.flatRock, stats: flatRock, equipable: true, equipSlot: "head"});

  allItems.set("Paper Bag", {name:"Paper Bag",  amount: 0, description: "To cover your\nugly mug",
  img: itemImg.equipment.paperBag, stats: paperBag, equipable: true, equipSlot: "head"});
}

function equipmentChest() {
  allItems.set("Brown Shirt", {name:"Brown Shirt",  amount: 0, description: "It's made out\nof wood",
  img: itemImg.equipment.brownShirt, stats: brownShirt, equipable: true, equipSlot: "chest"});

  allItems.set("Grey Shirt", {name:"Grey Shirt",  amount: 0, description: "I thought it\nwas steel",
  img: itemImg.equipment.greyShirt, stats: greyShirt, equipable: true, equipSlot: "chest"});
}

function equipmentFeet() {
  allItems.set("Grass", {name:"Grass",  amount: 0, description: "It's grass",
  img: itemImg.equipment.grass, stats: grass, equipable: true, equipSlot: "feet"});

  allItems.set("Grass Shoes", {name:"Grass Shoes",  amount: 0, description: "Shoes made from\ngrass",
  img: itemImg.equipment.grassShoes, stats: grassShoes, equipable: true, equipSlot: "feet"});
}

function equipmentShoulders() {
  allItems.set("Round Rocks", {name:"Round Rocks",  amount: 0, description: "Round rocks for\nyour shoulders",
  img: itemImg.equipment.roundRocks, stats: roundRocks, equipable: true, equipSlot: "shoulders"});

  allItems.set("Weak Plates", {name:"Weak Plates",  amount: 0, description: "Shoulder plates that\nare weak",
  img: itemImg.equipment.weakPlates, stats: weakPlates, equipable: true, equipSlot: "shoulders"});
}

function equipmentLegs() {
  allItems.set("Blue Pants", {name:"Blue Pants",  amount: 0, description: "Pants that are\nblue",
  img: itemImg.equipment.bluePants, stats: bluePants, equipable: true, equipSlot: "legs"});

  allItems.set("Grass Pants", {name:"Grass Pants",  amount: 0, description: "Pants made from\ngrass",
  img: itemImg.equipment.grassPants, stats: grassPants, equipable: true, equipSlot: "legs"});
}

function equipmentHands() {
  allItems.set("Leather Gloves", {name:"Leather Gloves",  amount: 0, description: "Gloves made out\nof leather",
  img: itemImg.equipment.leatherGloves, stats: leatherGloves, equipable: true, equipSlot: "hands"});

  allItems.set("Rock Gloves", {name:"Rock Gloves",  amount: 0, description: "Rough rocks for\nyour hands",
  img: itemImg.equipment.rockGloves, stats: rockGloves, equipable: true, equipSlot: "hands"});
}
