function settingItemMap() {
  allItems.set("Hp Potion", {name:"Hp Potion",  amount: 0, description: "Replenishes HP", img: itemImg.hpPotion, equipable: false});
  allItems.set("Mp Potion", {name:"Mp Potion",  amount: 0, description: "Replenishes MP", img: itemImg.mpPotion, equipable: false});
  allItems.set("Arrows", {name:"Arrows",  amount: 0, description: "Used with bow", img: itemImg.arrowAttack, equipable: false});
  allItems.set("Traps", {name:"Traps",  amount: 0, description: "Traps to slow\nfast enemy's", img: itemImg.trap, equipable: false});

  // equipment
  equipmentWeapons();
  // equipmentHead();
  // equipmentChest();
  // equipmentFeet();
  // equipmentShoulders();
  // equipmentLegs();
  // equipmentHands();
}

function equipmentWeapons() {
  allItems.set("Pitch Fork", {name:"Pitch Fork",  amount: 0, description: "A pitch fork\nthat mobs carry",
  img: itemImg.equipment.pitchFork, stats: pitchFork, equipable: true, equipSlot: "weapon"});

  allItems.set("Shifty Sword", {name:"Shifty Sword",  amount: 0, description: "careful, it's shifty",
  img: itemImg.equipment.shiftySword, stats: shiftySword, equipable: true, equipSlot: "weapon"});

  // allItems.set("", {name:"",  amount: 0, description: "",
  // img: itemImg.equipment., stats: , equipable: true, equipSlot: "weapon"});
  //
  // allItems.set("", {name:"",  amount: 0, description: "",
  // img: itemImg.equipment., stats: , equipable: true, equipSlot: "weapon"});
  //
  // allItems.set("", {name:"",  amount: 0, description: "",
  // img: itemImg.equipment., stats: , equipable: true, equipSlot: "weapon"});
  //
  // allItems.set("", {name:"",  amount: 0, description: "",
  // img: itemImg.equipment., stats: , equipable: true, equipSlot: "weapon"});
}

// function equipmentHead() {
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "head"});
//
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "head"});
// }
//
// function equipmentChest() {
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "chest"});
//
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "chest"});
// }
//
// function equipmentFeet() {
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "feet"});
//
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "feet"});
// }
//
// function equipmentShoulders() {
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "shoulders"});
//
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "shoulders"});
// }
//
// function equipmentLegs() {
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "legs"});
//
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "legs"});
// }
//
// function equipmentHands() {
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "hands"});
//
//   allItems.set("", {name:"",  amount: 0, description: "",
//   img: itemImg.equipment., stats: , equipable: true, equipSlot: "hands"});
// }
