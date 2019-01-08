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

let weapon0 = {
  cost: 75,
  int: +20,
  agi: +10,
  str: 0,
  dex: 0,
  vit: +15,
  melee: 0,
  ranged: 0,
  magic: +1.5,
  trap: +0.5,
  expBonus: +10,
  dropChance: 10
};

let weapon1 = {
  cost: 80,
  int: +10,
  agi: +10,
  str: +10,
  dex: +10,
  vit: +10,
  melee: +1.5,
  ranged: +1.5,
  magic: +1.5,
  trap: +1.5,
  expBonus: +40,
  dropChance: 10
};

let weapon2 = {
  cost: 200,
  int: +50,
  agi: +50,
  str: +50,
  dex: +50,
  vit: +50,
  melee: +2,
  ranged: +2,
  magic: +2,
  trap: +2,
  expBonus: +75,
  dropChance: 5
};

let weapon3 = {
  cost: 500,
  int: +100,
  agi: +20,
  str: -30,
  dex: +10,
  vit: +35,
  melee: -1.5,
  ranged: +0.5,
  magic: +4,
  trap: +2,
  expBonus: +25,
  dropChance: 5
};

let weapon4 = {
  cost: 250,
  int: -20,
  agi: +20,
  str: +250,
  dex: -20,
  vit: -10,
  melee: +5,
  ranged: -5,
  magic: -5,
  trap: -5,
  expBonus: +50,
  dropChance: 10
};

let weapon5 = {
  cost: 1000,
  int: +200,
  agi: +200,
  str: +200,
  dex: +200,
  vit: +200,
  melee: +2.5,
  ranged: +2.5,
  magic: +2.5,
  trap: +2.5,
  expBonus: +50,
  dropChance: 1
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

let head0 = {
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

let head1 = {
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

let head2 = {
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

let head3 = {
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

let head4 = {
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

let head5 = {
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

let chest0 = {
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

let chest1 = {
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

let chest2 = {
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

let chest3 = {
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

let chest4 = {
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

let chest5 = {
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

let feet0 = {
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

let feet1 = {
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

let feet2 = {
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

let feet3 = {
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

let feet4 = {
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

let feet5 = {
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

let shoulders0 = {
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

let shoulders1 = {
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

let shoulders2 = {
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

let shoulders3 = {
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

let shoulders4 = {
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

let shoulders5 = {
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

let legs0 = {
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

let legs1 = {
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

let legs2 = {
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

let legs3 = {
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

let legs4 = {
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

let legs5 = {
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

let hands0 = {
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

let hands1 = {
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

let hands2 = {
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

let hands3 = {
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

let hands4 = {
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

let hands5 = {
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
