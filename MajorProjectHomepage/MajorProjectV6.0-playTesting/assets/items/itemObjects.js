function settingItemMap() {
  // non equipable items
  allItems.set("Hp Potion", {name:"Hp Potion", description: "Replenishes HP", img: itemImg.hpPotion,
  equipable: false, stats: {dropChance: 30, dropAmountMin: 1, dropAmountMax: 2, cost: 20}, amount: 0});

  allItems.set("Mp Potion", {name:"Mp Potion", description: "Replenishes MP", img: itemImg.mpPotion,
  equipable: false, stats: {dropChance: 350, dropAmountMin: 1, dropAmountMax: 3, cost: 15}, amount: 0});

  allItems.set("Arrows", {name:"Arrows", description: "Used with bow", img: itemImg.arrowAttack,
  equipable: false, stats: {dropChance: 500, dropAmountMin: 1, dropAmountMax: 10, cost: 2}, amount: 0});

  allItems.set("Traps", {name:"Traps", description: "Traps to slow\nfast enemy's", img: itemImg.trap,
  equipable: false, stats: {dropChance: 400, dropAmountMin: 1, dropAmountMax: 5, cost: 10}, amount: 0});

  allItems.set("Town Portal", {name:"Town Portal", description: "Teleport to\ntown instantly", img: itemImg.townPortal,
  equipable: false, stats: {dropChance: 400, dropAmountMin: 1, dropAmountMax: 2, cost: 5}, amount: 0});

  allItems.set("Money", {name:"Money", description: "The currency\nof this game", img: itemImg.money,
  equipable: false, stats: {dropChance: 900, dropAmountMin: 5, dropAmountMax: 15, cost: 0}, amount: 0});


  // equipment
  equipmentWeapons();
  equipmentHead();
  equipmentChest();
  equipmentFeet();
  equipmentShoulders();
  equipmentLegs();
  equipmentHands();

  allItems.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  numOfItems = allItems.size;
  console.log(numOfItems);
}

function equipmentWeapons() {
  allItems.set("Pitch Fork", {name:"Pitch Fork", description: "A pitch fork\nthat mobs carry", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: pitchFork, amount: 0});

  allItems.set("Shifty Sword", {name:"Shifty Sword", description: "careful, it's shifty", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: shiftySword, amount: 0});

  allItems.set("Cross Bow", {name:"Cross Bow", description: "It's a cross bow", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: crossBow, amount: 0});

  allItems.set("Cross Boe", {name:"Cross Boe", description: "It's crossed boe's", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: crossBoe, amount: 0});

  allItems.set("Real Wand", {name:"Real Wand", description: "Totally a real wand\n(not a stick)", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: realWand, amount: 0});

  allItems.set("Real Staff", {name:"Real Staff", description: "Surely it's different\nfrom a stick", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: realStaff, amount: 0});

  allItems.set("Stick", {name:"Stick", description: "He didn't even\nchange the picture", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: stick, amount: 0});

  allItems.set("Small Rock", {name:"Small Rock", description: "A rock you\nfound", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: smallRock, amount: 0});

  allItems.set("Weapon 0", {name:"Weapon 0", description: "Weapon", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: weapon0, amount: 0});

  allItems.set("Weapon 1", {name:"Weapon 1", description: "Weapon", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: weapon1, amount: 0});

  allItems.set("Weapon 2", {name:"Weapon 2", description: "Weapon", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: weapon2, amount: 0});

  allItems.set("Weapon 3", {name:"Weapon 3", description: "Weapon", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: weapon3, amount: 0});

  allItems.set("Weapon 4", {name:"Weapon 4", description: "Weapon", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: weapon4, amount: 0});

  allItems.set("Weapon 5", {name:"Weapon 5", description: "Weapon", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: weapon5, amount: 0});
}

function equipmentHead() {
  allItems.set("Flat Rock", {name:"Flat Rock", description: "A flat rock\nfor your head", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: flatRock, amount: 0});

  allItems.set("Paper Bag", {name:"Paper Bag", description: "To cover your\nugly mug", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: paperBag, amount: 0});

  allItems.set("Head 0", {name:"Head 0", description: "Head peice", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: head0, amount: 0});

  allItems.set("Head 1", {name:"Head 1", description: "Head peice", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: head1, amount: 0});

  allItems.set("Head 2", {name:"Head 2", description: "Head peice", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: head2, amount: 0});

  allItems.set("Head 3", {name:"Head 3", description: "Head peice", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: head3, amount: 0});

  allItems.set("Head 4", {name:"Head 4", description: "Head peice", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: head4, amount: 0});

  allItems.set("Head 5", {name:"Head 5", description: "Head peice", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: head5, amount: 0});
}

function equipmentChest() {
  allItems.set("Brown Shirt", {name:"Brown Shirt", description: "It's made out\nof wood", img: itemImg.chest,
  equipable: true, equipSlot: "chest", stats: brownShirt, amount: 0});

  allItems.set("Grey Shirt", {name:"Grey Shirt", description: "I thought it\nwas steel", img: itemImg.chest,
  equipable: true, equipSlot: "chest", stats: greyShirt, amount: 0});

  allItems.set("Tattered Robe", {name:"Tattered Robe", description: "A tattered robe", img: itemImg.chest,
  equipable: true, equipSlot: "chest", stats: tatteredRobe, amount: 0});

  allItems.set("Leather Armor", {name:"Leather Armor", description: "Armor, made from\nleather", img: itemImg.chest,
  equipable: true, equipSlot: "chest", stats: leatherArmor, amount: 0});

  allItems.set("Chain Mail", {name:"Chain Mail", description: "Rings all,\na round", img: itemImg.chest,
  equipable: true, equipSlot: "chest", stats: chainMail, amount: 0});

  allItems.set("New Robe", {name:"New Robe", description: "Brand new\nrobe", img: itemImg.chest,
  equipable: true, equipSlot: "chest", stats: newRobe, amount: 0});

  allItems.set("Hard Leather", {name:"Hard Leather", description: "Hardened leather", img: itemImg.chest,
  equipable: true, equipSlot: "chest", stats: hardLeather, amount: 0});

  allItems.set("Iron Plate", {name:"Iron Plate", description: "Hard as iron", img: itemImg.chest,
  equipable: true, equipSlot: "chest", stats: ironPlate, amount: 0});
}

function equipmentFeet() {
  allItems.set("Old Shoes", {name:"Old Shoes", description: "Worn down shoes", img: itemImg.feet,
  equipable: true, equipSlot: "feet", stats: oldShoes, amount: 0});

  allItems.set("Shoes", {name:"Shoes", description: "Plain shoes", img: itemImg.feet,
  equipable: true, equipSlot: "feet", stats: shoes, amount: 0});

  allItems.set("Leather Boots", {name:"Leather Boots", description: "We need boots\non the ground", img: itemImg.feet,
  equipable: true, equipSlot: "feet", stats: leatherBoots, amount: 0});

  allItems.set("Eather Nano Shoes", {name:"Eather Nano Shoes", description: "They're eathernal", img: itemImg.feet,
  equipable: true, equipSlot: "feet", stats: eatherNanoShoes, amount: 0});

  allItems.set("Rock Boots", {name:"Rock Boots", description: "Rock on", img: itemImg.feet,
  equipable: true, equipSlot: "feet", stats: rockBoots, amount: 0});

  allItems.set("Camo Boots", {name:"Camo Boots", description: "They'll never\nspot you", img: itemImg.feet,
  equipable: true, equipSlot: "feet", stats: camoBoots, amount: 0});

  allItems.set("Ethereal Shoes", {name:"Ethereal Shoes", description: "Magic shoes", img: itemImg.feet,
  equipable: true, equipSlot: "feet", stats: etherealShoes, amount: 0});

  allItems.set("Steel Boots", {name:"Steel Boots", description: "We need boots\non the ground", img: itemImg.feet,
  equipable: true, equipSlot: "feet", stats: steelBoots, amount: 0});
}

function equipmentShoulders() {
  allItems.set("Round Rocks", {name:"Round Rocks", description: "Round rocks for\nyour shoulders", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: roundRocks, amount: 0});

  allItems.set("Weak Plates", {name:"Weak Plates", description: "Shoulder plates that\nare weak", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: weakPlates, amount: 0});

  allItems.set("Shoulders 0", {name:"Shoulders 0", description: "Shoulder peice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: shoulders0, amount: 0});

  allItems.set("Shoulders 1", {name:"Shoulders 1", description: "Shoulder peice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: shoulders1, amount: 0});

  allItems.set("Shoulders 2", {name:"Shoulders 2", description: "Shoulder peice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: shoulders2, amount: 0});

  allItems.set("Shoulders 3", {name:"Shoulders 3", description: "Shoulder peice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: shoulders3, amount: 0});

  allItems.set("Shoulders 4", {name:"Shoulders 4", description: "Shoulder peice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: shoulders4, amount: 0});

  allItems.set("Shoulders 5", {name:"Shoulders 5", description: "Shoulder peice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: shoulders5, amount: 0});
}

function equipmentLegs() {
  allItems.set("Blue Pants", {name:"Blue Pants", description: "Blue Pants", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: bluePants, amount: 0});

  allItems.set("Grass Pants", {name:"Grass Pants", description: "Pants made from\ngrass", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: grassPants, amount: 0});

  allItems.set("Legs 0", {name:"Legs 0", description: "Leg peice", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: legs0, amount: 0});

  allItems.set("Legs 1", {name:"Legs 1", description: "Leg peice", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: legs1, amount: 0});

  allItems.set("Legs 2", {name:"Legs 2", description: "Leg peice", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: legs2, amount: 0});

  allItems.set("Legs 3", {name:"Legs 3", description: "Leg peice", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: legs3, amount: 0});

  allItems.set("Legs 4", {name:"Legs 4", description: "Leg peice", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: legs4, amount: 0});

  allItems.set("Legs 5", {name:"Legs 5", description: "Leg peice", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: legs5, amount: 0});
}

function equipmentHands() {
  allItems.set("Leather Gloves", {name:"Leather Gloves", description: "Gloves made out\nof leather", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: leatherGloves, amount: 0});

  allItems.set("Rock Gloves", {name:"Rock Gloves", description: "Rough rocks for\nyour hands", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: rockGloves, amount: 0});

  allItems.set("Hands 0", {name:"Hands 0", description: "Hand peice", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: hands0, amount: 0});

  allItems.set("Hands 1", {name:"Hands 1", description: "Hand peice", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: hands1, amount: 0});

  allItems.set("Hands 2", {name:"Hands 2", description: "Hand peice", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: hands2, amount: 0});

  allItems.set("Hands 3", {name:"Hands 3", description: "Hand peice", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: hands3, amount: 0});

  allItems.set("Hands 4", {name:"Hands 4", description: "Hand peice", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: hands4, amount: 0});

  allItems.set("Hands 5", {name:"Hands 5", description: "Hand peice", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: hands5, amount: 0});
}
