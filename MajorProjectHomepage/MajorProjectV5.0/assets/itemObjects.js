function settingItemMap() {
  allItems.set("Hp Potion", {name:"Hp Potion",  amount: 0, description: "Replenishes HP", img: itemImg.hpPotion});
  allItems.set("Mp Potion", {name:"Mp Potion",  amount: 0, description: "Replenishes MP", img: itemImg.mpPotion});
  allItems.set("Arrows", {name:"Arrows",  amount: 0, description: "Used with bow", img: itemImg.arrowAttack});
  allItems.set("Traps", {name:"Traps",  amount: 0, description: "Traps to slow\nfast enemy's", img: itemImg.trap});

  // equipment
  allItems.set("Pitch Fork", {name:"Pitch Fork",  amount: 0, description: "A pitch fork\nthat mobs carry", img: itemImg.equipment.pitchFork, stats: pitchFork});
}
