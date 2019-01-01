// weapons
let pitchFork = {
  cost: 20,
  int: -1,
  agi: -2,
  str: +2,
  dex: +1,
  vit: +3,
  melee: +0.02,
  ranged: 0,
  magic: 0,
  trap: 0,
  expBonus: 0,
  dropChance: 100
};

let shiftySword = {
  cost: 30,
  int: -3,
  agi: +3,
  str: +1,
  dex: +2,
  vit: +1,
  melee: +0.03,
  ranged: 0,
  magic: 0,
  trap: 0,
  expBonus: +2,
  dropChance: 80
};

let crossBow = {
  cost: 20,
  int: -3,
  agi: +3,
  str: -2,
  dex: +2,
  vit: +1,
  melee: 0,
  ranged: +0.03,
  magic: 0,
  trap: +0.01,
  expBonus: +1,
  dropChance: 100
};

let crossBoe = {
  cost: 25,
  int: -5,
  agi: +5,
  str: -3,
  dex: +2,
  vit: +5,
  melee: -0.02,
  ranged: +0.01,
  magic: 0,
  trap: 0,
  expBonus: +3,
  dropChance: 90
};

let realWand = {
  cost: 15,
  int: +3,
  agi: -1,
  str: -1,
  dex: -1,
  vit: -1,
  melee: -0.03,
  ranged: +0.01,
  magic: +0.05,
  trap: +0.01,
  expBonus: 0,
  dropChance: 100
};

let realStaff = {
  cost: 20,
  int: +5,
  agi: -2,
  str: -2,
  dex: -1,
  vit: +1,
  melee: -0.04,
  ranged: 0,
  magic: +0.07,
  trap: 0,
  expBonus: +2,
  dropChance: 90
};

let stick = {
  cost: 100,
  int: +20,
  agi: +20,
  str: +20,
  dex: +20,
  vit: +20,
  melee: +1.5,
  ranged: +1.5,
  magic: +1.5,
  trap: +1.5,
  expBonus: +50,
  dropChance: 10
};

let smallRock = {
  cost: 1,
  int: +1,
  agi: +1,
  str: +1,
  dex: -2,
  vit: -2,
  melee: +0.01,
  ranged: +0.01,
  magic: +0.01,
  trap: +0.01,
  expBonus: -2,
  dropChance: 50
};

// head
let flatRock = {
  cost: 10,
  int: -5,
  agi: -2,
  str: +5,
  dex: -1,
  vit: +3,
  melee: +0.01,
  ranged: -0.03,
  magic: -0.03,
  trap: +0.01,
  expBonus: +7,
  dropChance: 90
};

let paperBag = {
  cost: 15,
  int: +2,
  agi: +3,
  str: +5,
  dex: +2,
  vit: -2,
  melee: 0,
  ranged: 0,
  magic: 0,
  trap: +0.05,
  expBonus: -2,
  dropChance: 90
};

// chest
let brownShirt = {
  cost: 20,
  int: 0,
  agi: -2,
  str: +1,
  dex: -1,
  vit: +5,
  melee: +0.02,
  ranged: -0.02,
  magic: 0,
  trap: 0,
  expBonus: +1,
  dropChance: 100
};

let greyShirt = {
  cost: 30,
  int: +2,
  agi: +2,
  str: +2,
  dex: +2,
  vit: +5,
  melee: +0.01,
  ranged: +0.01,
  magic: +0.01,
  trap: +0.01,
  expBonus: -5,
  dropChance: 80
};

// feet
let grass = {
  cost: 5,
  int: -3,
  agi: -3,
  str: -3,
  dex: -3,
  vit: +5,
  melee: -0.03,
  ranged: -0.03,
  magic: -0.03,
  trap: -0.02,
  expBonus: +10,
  dropChance: 125
};

let grassShoes = {
  cost: 15,
  int: +2,
  agi: +2,
  str: +2,
  dex: +2,
  vit: +7,
  melee: +0.02,
  ranged: +0.02,
  magic: +0.02,
  trap: +0.02,
  expBonus: -15,
  dropChance: 100
};

// shoulders
let roundRocks = {
  cost: 10,
  int: -3,
  agi: -2,
  str: +4,
  dex: -2,
  vit: +5,
  melee: +0.04,
  ranged: -004,
  magic: -0.02,
  trap: +0.02,
  expBonus: +2,
  dropChance: 110
};

let weakPlates = {
  cost: 20,
  int: +1,
  agi: +1,
  str: +1,
  dex: +1,
  vit: +2,
  melee: +0.01,
  ranged: +0.01,
  magic: +0.01,
  trap: +0.01,
  expBonus: -5,
  dropChance: 100
};

// legs
let bluePants = {
  cost: 20,
  int: +5,
  agi: +2,
  str: -2,
  dex: -3,
  vit: +5,
  melee: -0.04,
  ranged: +0.04,
  magic: +0.07,
  trap: -0.02,
  expBonus: +2,
  dropChance: 80
};

let grassPants = {
  cost: 20,
  int: -5,
  agi: -5,
  str: -5,
  dex: -5,
  vit: -5,
  melee: -0.10,
  ranged: -0.10,
  magic: -0.10,
  trap: -0.10,
  expBonus: +30,
  dropChance: 100
};

// hands
let leatherGloves = {
  cost: 30,
  int: +1,
  agi: +3,
  str: +5,
  dex: +1,
  vit: +6,
  melee: +0.08,
  ranged: +0.10,
  magic: -0.10,
  trap: +0.08,
  expBonus: -8,
  dropChance: 110
};

let rockGloves = {
  cost: 35,
  int: -5,
  agi: -2,
  str: +5,
  dex: -2,
  vit: +10,
  melee: +0.10,
  ranged: -0.10,
  magic: -0.02,
  trap: +0.04,
  expBonus: +7,
  dropChance: 90
};
