function settingItemMap() {
  // non equipable items
  allItems.set("Hp Potion", {name:"Hp Potion", description: "Replenishes HP", img: itemImg.hpPotion,
  equipable: false, stats: {dropChance: 40, dropAmountMin: 1, dropAmountMax: 2, cost: 20}, amount: 0});

  allItems.set("Mp Potion", {name:"Mp Potion", description: "Replenishes MP", img: itemImg.mpPotion,
  equipable: false, stats: {dropChance: 50, dropAmountMin: 1, dropAmountMax: 3, cost: 15}, amount: 0});

  allItems.set("Arrows", {name:"Arrows", description: "Used with bow", img: itemImg.arrowAttack,
  equipable: false, stats: {dropChance: 75, dropAmountMin: 2, dropAmountMax: 10, cost: 2}, amount: 0});

  allItems.set("Traps", {name:"Traps", description: "Traps to slow\nfast enemy's", img: itemImg.trap,
  equipable: false, stats: {dropChance: 60, dropAmountMin: 1, dropAmountMax: 5, cost: 10}, amount: 0});

  allItems.set("Town Portal", {name:"Town Portal", description: "Teleport to\ntown instantly", img: itemImg.townPortal,
  equipable: false, stats: {dropChance: 70, dropAmountMin: 1, dropAmountMax: 2, cost: 5}, amount: 0});

  allItems.set("Money", {name:"Money", description: "The currency\nof this game", img: itemImg.money,
  equipable: false, stats: {dropChance: 100, dropAmountMin: 5, dropAmountMax: 15, cost: 0}, amount: 0});


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
}

function equipmentWeapons() {
  // melee
  allItems.set("Pitch Fork", {name:"Pitch Fork", description: "A pitch fork\nthat mobs carry", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: pitchFork, amount: 0});

  allItems.set("Shifty Sword", {name:"Shifty Sword", description: "careful, it's shifty", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: shiftySword, amount: 0});

  allItems.set("Ice Pick", {name:"Ice Pick", description: "Pick for ice", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: icePick, amount: 0});

  allItems.set("Halberd", {name:"Halberd", description: "Halberd thing", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: halberd, amount: 0});

  // ranged
  allItems.set("Normal Bow", {name:"Normal Bow", description: "It's a normal bow", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: normalBow, amount: 0});

  allItems.set("Cross Bow", {name:"Cross Bow", description: "It's a cross bow", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: crossBow, amount: 0});

  // magic
  allItems.set("Real Wand", {name:"Real Wand", description: "Totally a real\nwand", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: realWand, amount: 0});

  allItems.set("Real Staff", {name:"Real Staff", description: "Totally a real\staff", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: realStaff, amount: 0});

  // other
  allItems.set("Small Rock", {name:"Small Rock", description: "A small rock", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: smallRock, amount: 0});

  allItems.set("Whip", {name:"Whip", description: "Whoochu\n(whip sounds)", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: whip, amount: 0});

  allItems.set("Hand Fan", {name:"Hand Fan", description: "For a hot\nday", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: handFan, amount: 0});

    // rare
  allItems.set("Stick", {name:"Stick", description: "It's super weak", img: itemImg.weapon,
  equipable: true, equipSlot: "weapon", stats: stick, amount: 0});
}

function equipmentHead() {
  allItems.set("Flat Rock", {name:"Flat Rock", description: "A flat rock\nfor your head", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: flatRock, amount: 0});

  allItems.set("Paper Bag", {name:"Paper Bag", description: "To cover your\nugly mug", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: paperBag, amount: 0});

  allItems.set("Helm", {name:"Helm", description: "Helm", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: helm, amount: 0});

  allItems.set("Cap", {name:"Cap", description: "Head cap", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: cap, amount: 0});

  allItems.set("Cloth Cap", {name:"Cloth Cap", description: "Cap made from\ncoth", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: clothCap, amount: 0});

  allItems.set("Helmet", {name:"Helmet", description: "Helmet for your\nhead", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: helmet, amount: 0});

  allItems.set("Leather Cap", {name:"Leather Cap", description: "Cap made from\nleather", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: leatherCap, amount: 0});

  allItems.set("Hat", {name:"Hat", description: "Plain hat", img: itemImg.head,
  equipable: true, equipSlot: "head", stats: hat, amount: 0});
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

  allItems.set("Padded Shoulders", {name:"Padded Shoulders", description: "Padded shoulder\npeice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: paddedShoulders, amount: 0});

  allItems.set("Weak Plates", {name:"Weak Plates", description: "Shoulder plates that\nare weak", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: weakPlates, amount: 0});

  allItems.set("Ragged Shoulders", {name:"Ragged Shoulders", description: "Ragged shoulder\npeice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: raggedShoulders, amount: 0});

  allItems.set("Cloth Shoulders", {name:"Cloth Shoulders", description: "Cloth shoulder\npeice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: clothShoulders, amount: 0});

  allItems.set("Padded Plates", {name:"Padded Plates", description: "Padded shoulder\nplates", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: paddedPlates, amount: 0});

  allItems.set("Eathernal Shoulders", {name:"Eathernal Shoulders", description: "Eathernal shoulder\npeice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: eathernalShoulders, amount: 0});

  allItems.set("Leather Shoulders", {name:"Leather Shoulders", description: "Leather shoulder\npeice", img: itemImg.shoulders,
  equipable: true, equipSlot: "shoulders", stats: leatherShoulders, amount: 0});
}

function equipmentLegs() {
  allItems.set("Grass Pants", {name:"Grass Pants", description: "Pants made from\ngrass", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: grassPants, amount: 0});

  allItems.set("Pants", {name:"Pants", description: "Generic pants", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: pants, amount: 0});

  allItems.set("Blue Pants", {name:"Blue Pants", description: "Blue Pants", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: bluePants, amount: 0});

  allItems.set("Cargo Shorts", {name:"Cargo Shorts", description: "Can hold lots\nof stuff", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: cargoShorts, amount: 0});

  allItems.set("Camo Pants", {name:"Camo Pants", description: "You won't be\nspotted", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: camoPants, amount: 0});

  allItems.set("Metal Pants", {name:"Metal Pants", description: "The stuff\nsquires wear", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: metalPants, amount: 0});

  allItems.set("Fire Pants", {name:"Fire Pants", description: "Liar", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: firePants, amount: 0});

  allItems.set("Soft Pants", {name:"Soft Pants", description: "Oh, so soft", img: itemImg.legs,
  equipable: true, equipSlot: "legs", stats: softPants, amount: 0});
}

function equipmentHands() {
  allItems.set("Leather Gloves", {name:"Leather Gloves", description: "Gloves made out\nof leather", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: leatherGloves, amount: 0});

  allItems.set("Rock Gloves", {name:"Rock Gloves", description: "Rough rocks for\nyour hands", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: rockGloves, amount: 0});

  allItems.set("Cloth Gloves", {name:"Cloth Gloves", description: "Gloves made out\nof cloth", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: clothGloves, amount: 0});

  allItems.set("Tough Gloves", {name:"Tough Gloves", description: "Tough gloves", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: toughGloves, amount: 0});

  allItems.set("Gloves", {name:"Gloves", description: "Plain gloves", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: gloves, amount: 0});

  allItems.set("Cotton Gloves", {name:"Cotton Gloves", description: "Gloves made out\nof cotton", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: cottonGloves, amount: 0});

  allItems.set("Strong Gloves", {name:"Strong Gloves", description: "Strong Gloves", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: strongGloves, amount: 0});

  allItems.set("Padded Gloves", {name:"Padded Gloves", description: "Gloves with more\nprotection", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: paddedGloves, amount: 0});

  allItems.set("Rubber Gloves", {name:"Rubber Gloves", description: "Gloves made out\nof rubber", img: itemImg.hands,
  equipable: true, equipSlot: "hands", stats: rubberGloves, amount: 0});
}
