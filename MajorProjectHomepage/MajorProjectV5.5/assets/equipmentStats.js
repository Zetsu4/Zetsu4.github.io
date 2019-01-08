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
  dropChance: 20
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
  dropChance: 15
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
  dropChance: 20
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
  dropChance: 15
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
  dropChance: 20
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
  dropChance: 15
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
  dropChance: 1
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
  dropChance: 5
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
  dropChance: 2
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
  dropChance: 2
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
  dropChance: 5
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
  dropChance: 20
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
  dropChance: 15
};

let head0 = {
  cost: 250,
  int: -82,
  agi: +57,
  str: +59,
  dex: +13,
  vit: +46,
  melee: -1.84,
  ranged: +0.89,
  magic: +1.09,
  trap: -1.14,
  expBonus: 27,
  dropChance: 10
};

let head1 = {
  cost: 70,
  int: +15,
  agi: -24,
  str: +83,
  dex: +52,
  vit: -39,
  melee: 0,
  ranged: +0.67,
  magic: -1.97,
  trap: -1.20,
  expBonus: -70,
  dropChance: 15
};

let head2 = {
  cost: 30,
  int: -51,
  agi: +28,
  str: -2,
  dex: +5,
  vit: +3,
  melee: +0.69,
  ranged: -1.88,
  magic: -0.7,
  trap: -0.74,
  expBonus: -80,
  dropChance: 25
};

let head3 = {
  cost: 100,
  int: +42,
  agi: +94,
  str: +21,
  dex: -32,
  vit: -45,
  melee: +0.30,
  ranged: +1.62,
  magic: +0.73,
  trap: -1.46,
  expBonus: -18,
  dropChance: 15
};

let head4 = {
  cost: 95,
  int: +97,
  agi: +17,
  str: -47,
  dex: -66,
  vit: -41,
  melee: +0.31,
  ranged: +1.45,
  magic: -1.65,
  trap: +0.33,
  expBonus: +38,
  dropChance: 10
};

let head5 = {
  cost: 15,
  int: -77,
  agi: +6,
  str: -83,
  dex: -87,
  vit: -5,
  melee: +1.91,
  ranged: -0.95,
  magic: -0.8,
  trap: +1.2,
  expBonus: -75,
  dropChance: 30
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
  dropChance: 20
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
  dropChance: 15
};

let chest0 = {
  cost: 50,
  int: +8,
  agi: -40,
  str: -144,
  dex: +83,
  vit: +146,
  melee: +2.83,
  ranged: -2.73,
  magic: +1.21,
  trap: +3.24,
  expBonus: -14,
  dropChance: 25
};

let chest1 = {
  cost: 30,
  int: -106,
  agi: +62,
  str: -95,
  dex: -98,
  vit: -134,
  melee: -1.16,
  ranged: +2.50,
  magic: +2.24,
  trap: -2.86,
  expBonus: -128,
  dropChance: 30
};

let chest2 = {
  cost: 50,
  int: -7,
  agi: -113,
  str: -25,
  dex: +91,
  vit: +69,
  melee: -0.52,
  ranged: -1.76,
  magic: -3.68,
  trap: -1.37,
  expBonus: +16,
  dropChance: 20
};

let chest3 = {
  cost: 90,
  int: +9,
  agi: +57,
  str: +42,
  dex: +16,
  vit: +99,
  melee: -1.02,
  ranged: +0.04,
  magic: -3.70,
  trap: -0.68,
  expBonus: -50,
  dropChance: 15
};

let chest4 = {
  cost: 100,
  int: +139,
  agi: +30,
  str: -46,
  dex: +70,
  vit: +23,
  melee: -3.3,
  ranged: -0.46,
  magic: +2.81,
  trap: -0.74,
  expBonus: -61,
  dropChance: 10
};

let chest5 = {
  cost: 150,
  int: -115,
  agi: +215,
  str: +154,
  dex: -198,
  vit: +76,
  melee: +0.01,
  ranged: +0.01,
  magic: +0.01,
  trap: +0.01,
  expBonus: +105,
  dropChance: 5
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
  dropChance: 25
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
  dropChance: 20
};

let feet0 = {
  cost: 15,
  int: +8,
  agi: -63,
  str: -31,
  dex: -66,
  vit: -57,
  melee: +0.96,
  ranged: -0.79,
  magic: -1.77,
  trap: 1.09,
  expBonus: +20,
  dropChance: 25
};

let feet1 = {
  cost: 35,
  int: +34,
  agi: -55,
  str: -2,
  dex: +70,
  vit: +3,
  melee: +0.27,
  ranged: +1.29,
  magic: +1.08,
  trap: -0.99,
  expBonus: 28,
  dropChance: 20
};

let feet2 = {
  cost: 75,
  int: -41,
  agi: -69,
  str: -62,
  dex: -19,
  vit: -9,
  melee: +1.68,
  ranged: +1.68,
  magic: +1.17,
  trap: +1.29,
  expBonus: -67,
  dropChance: 30
};

let feet3 = {
  cost: 40,
  int: +56,
  agi: -52,
  str: -32,
  dex: -51,
  vit: -22,
  melee: +0.30,
  ranged: -1.04,
  magic: -0.14,
  trap: +1.04,
  expBonus: -27,
  dropChance: 40
};

let feet4 = {
  cost: 50,
  int: +36,
  agi: +24,
  str: -36,
  dex: -70,
  vit: +1,
  melee: +0.93,
  ranged: -1.83,
  magic: +0.05,
  trap: +1.19,
  expBonus: -64,
  dropChance: 15
};

let feet5 = {
  cost: 50,
  int: +71,
  agi: +52,
  str: +13,
  dex: -48,
  vit: -17,
  melee: -0.46,
  ranged: -1.14,
  magic: +0.23,
  trap: +0.33,
  expBonus: +20,
  dropChance: 20
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
  dropChance: 25
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
  dropChance: 15
};

let shoulders0 = {
  cost: 70,
  int: -6,
  agi: +21,
  str: +38,
  dex: +17,
  vit: +59,
  melee: -0.28,
  ranged: -0.44,
  magic: -1.22,
  trap: -0.12,
  expBonus: +69,
  dropChance: 10
};

let shoulders1 = {
  cost: 75,
  int: -18,
  agi: +69,
  str: +35,
  dex: +54,
  vit: -67,
  melee: -0.05,
  ranged: +2.68,
  magic: -2.12,
  trap: +0.77,
  expBonus: +93,
  dropChance: 15
};

let shoulders2 = {
  cost: 100,
  int: +85,
  agi: +92,
  str: -85,
  dex: +56,
  vit: +80,
  melee: +2.39,
  ranged: -1.52,
  magic: -0.58,
  trap: +0.92,
  expBonus: +56,
  dropChance: 25
};

let shoulders3 = {
  cost: 20,
  int: -11,
  agi: +20,
  str: -42,
  dex: -38,
  vit: -38,
  melee: -2.59,
  ranged: +2.27,
  magic: +2.51,
  trap: -2.74,
  expBonus: +9,
  dropChance: 30
};

let shoulders4 = {
  cost: 40,
  int: +52,
  agi: +29,
  str: +43,
  dex: -39,
  vit: +60,
  melee: +2.30,
  ranged: +1.57,
  magic: +2.76,
  trap: +2.27,
  expBonus: -60,
  dropChance: 10
};

let shoulders5 = {
  cost: 20,
  int: -17,
  agi: -29,
  str: +22,
  dex: -72,
  vit: -23,
  melee: -2.20,
  ranged: -2.01,
  magic: +2.61,
  trap: +0.69,
  expBonus: -59,
  dropChance: 30
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
  cost: 60,
  int: +94,
  agi: +62,
  str: +78,
  dex: -39,
  vit: +71,
  melee: -2.71,
  ranged: +0.45,
  magic: -1.06,
  trap: +2.12,
  expBonus: -73,
  dropChance: 10
};

let legs1 = {
  cost: 70,
  int: +93,
  agi: +7,
  str: -51,
  dex: +80,
  vit: +22,
  melee: -0.51,
  ranged: +3.16,
  magic: -0.81,
  trap: +0.66,
  expBonus: -90,
  dropChance: 10
};

let legs2 = {
  cost: 40,
  int: -19,
  agi: +52,
  str: -69,
  dex: -78,
  vit: +17,
  melee: +2.07,
  ranged: -1.68,
  magic: -1.03,
  trap: +2.30,
  expBonus: -42,
  dropChance: 25
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
}; // HERE

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
