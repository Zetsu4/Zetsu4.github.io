// V5.1
// Travis Ahern
// Dec. 11, 2018
//
// PROBLEMS:
// - saving and loading games
// - going to new areas
// - NPC's
// - no shops
// - no story
//
// CREDITS:
// background images by: Steven Valley
// sprites by: Travis Ahern
// other images by: Travis Ahern
// made using javascript, in the Atom text editor.
// -Asir added- I am the best, no one can defeat me, not even Mr. Schellenberg!! -Asir ended-


// general
let startingState = 0;
let state = 0;
let previousState = state;
let buttons = {};
let buttonAtributes = {
  race: {},
  skill: {},
  settings: {}
};
let easterEgg = {};

// sound
let sounds = {}

// text
let fontSize = {};
let fonts = {};

// images
let worldBackgrounds = {};
let npcImg = {};
let itemImg = {};
let sprites = {
  race: {},
  skill: {}
};
let spriteSize = {};

// NPC's
let numOfNPCs = 50;
let allNPCs = [];
let shopKeeps = [];
let refreshTimer;
let lastRefresh;

// world
let drawingBack;
let worldState;
let world = {};
let minimap = {};

// races/skills button arrays
let raceButtons = [];
let skillButtons = [];

let randomChoice = {
  description: "Random",
};

// items
let allItems;
let items = {};

// player
let player = {};

// inventory
let inventory = {};
let mouseCarring;

// settings
let settings = {};

// key-bindings
let keyBindings;
let rebindButtons = [];

// enemys
let killedEnemys = 0;
let enemyArr = [];

// waiting
let waiting;
const WAIT_TIME = 150;

function preload() {
  // sounds
  // sounds.attack = loadSound("assets/sound/attack.mp3");
  // sounds.pickUp = loadSound("assets/sound/pickUp.mp3");
  // sounds.enemyDeath = loadSound("assets/sound/enemyDeath.mp3");
  // sounds.lose = loadSound("assets/sound/lose.mp3");

  // fonts
  fonts.default = loadFont("assets/fonts/default.TTF");

  // backgrounds
  worldBackgrounds.homePage = loadImage("assets/img/backgrounds/lovelyHomepage.png");
  worldBackgrounds.grass = loadImage("assets/img/backgrounds/grass.png");
  // worldBackgrounds.town = loadImage("assets/img/backgrounds/town.png");
  // worldBackgrounds.desert = loadImage("assets/img/backgrounds/desert.png");
  // worldBackgrounds.forest = loadImage("assets/img/backgrounds/forest.png");
  // worldBackgrounds.mountain = loadImage("assets/img/backgrounds/mountain.png");

  // NPC's
  npcImg.genericNPC = loadImage("assets/img/sprites/NPC.png");
  npcImg.shopKeep = loadImage("assets/img/sprites/shopKeep.png");

  // inventory delete button
  itemImg.garbageClosed = loadImage("assets/img/inventory/garbageClosed.png");
  itemImg.garbageOpened = loadImage("assets/img/inventory/garbageOpened.png");

  // layout
  itemImg.inventoryLayout = loadImage("assets/img/inventory/inventroyEquipLayout.png");

  // items
  itemImg.swordAttack = loadImage("assets/img/items/sword.png");
  itemImg.arrowAttack = loadImage("assets/img/items/arrows.png");
  itemImg.fireBallAttack = loadImage("assets/img/items/fireBall.png");
  itemImg.hpPotion = loadImage("assets/img/items/hpPotion.png");
  itemImg.mpPotion = loadImage("assets/img/items/mpPotion.png");
  itemImg.trap = loadImage("assets/img/items/traps.png");
  itemImg.money = loadImage("assets/img/items/money.png");

  // mouse pointers
  itemImg.swordIcon = loadImage("assets/img/items/equippedIcons/swordIcon.png");
  itemImg.bowIcon = loadImage("assets/img/items/equippedIcons/bowIcon.png");
  itemImg.magicIcon = loadImage("assets/img/items/equippedIcons/magicIcon.png");

  // equipment
  itemImg.equipment = {};

    // weapons
  itemImg.equipment.pitchFork = loadImage("assets/img/items/equipment/weapons/pitchFork.png");
  itemImg.equipment.shiftySword = loadImage("assets/img/items/equipment/weapons/shiftySword.png");
  itemImg.equipment.crossBow = loadImage("assets/img/items/equipment/weapons/crossBow.png");
  itemImg.equipment.crossBoe = loadImage("assets/img/items/equipment/weapons/crossBoe.png");
  itemImg.equipment.realWand = loadImage("assets/img/items/equipment/weapons/realWand.png");
  itemImg.equipment.realStaff = loadImage("assets/img/items/equipment/weapons/realStaff.png");
  itemImg.equipment.smallRock = loadImage("assets/img/items/equipment/weapons/smallRock.png");

    // head
  itemImg.equipment.paperBag = loadImage("assets/img/items/equipment/head/paperBag.png");
  itemImg.equipment.flatRock = loadImage("assets/img/items/equipment/head/flatRock.png");

    // chest
  itemImg.equipment.brownShirt = loadImage("assets/img/items/equipment/chest/brownShirt.png");
  itemImg.equipment.greyShirt = loadImage("assets/img/items/equipment/chest/greyShirt.png");

    // feet
  itemImg.equipment.grass = loadImage("assets/img/items/equipment/feet/grass.png");
  itemImg.equipment.grassShoes = loadImage("assets/img/items/equipment/feet/grassShoes.png");

    // shoulders
  itemImg.equipment.weakPlates = loadImage("assets/img/items/equipment/shoulders/weakPlates.png");
  itemImg.equipment.roundRocks = loadImage("assets/img/items/equipment/shoulders/roundRocks.png");

    // legs
  itemImg.equipment.bluePants = loadImage("assets/img/items/equipment/legs/bluePants.png");
  itemImg.equipment.grassPants = loadImage("assets/img/items/equipment/legs/grassPants.png");

    // hands
  itemImg.equipment.leatherGloves = loadImage("assets/img/items/equipment/hands/leatherGloves.png");
  itemImg.equipment.rockGloves = loadImage("assets/img/items/equipment/hands/rockGloves.png");

  // sprites
  sprites.death = loadImage("assets/img/sprites/enemyDeath.png");
  sprites.random = loadImage("assets/img/sprites/random.png");

  sprites.race.dwarf = loadImage("assets/races/img/dwarf.png");
  sprites.race.elf = loadImage("assets/races/img/elf.png");
  sprites.race.goblin = loadImage("assets/races/img/goblin.png");
  sprites.race.halfElf = loadImage("assets/races/img/half-elf.png");
  sprites.race.halfling = loadImage("assets/races/img/halfling.png");
  sprites.race.human = loadImage("assets/races/img/human.png");
  sprites.race.orc = loadImage("assets/races/img/orc.png");
  sprites.race.urukHai = loadImage("assets/races/img/uruk-hai.png");

  sprites.skill.archer = loadImage("assets/skills/img/archer.png");
  sprites.skill.cleric = loadImage("assets/skills/img/cleric.png");
  sprites.skill.fighter = loadImage("assets/skills/img/fighter.png");
  sprites.skill.mage = loadImage("assets/skills/img/mage.png");
  sprites.skill.ranger = loadImage("assets/skills/img/ranger.png");
  sprites.skill.rogue = loadImage("assets/skills/img/rogue.png");
  sprites.skill.samurai = loadImage("assets/skills/img/samurai.png");
  sprites.skill.trapper = loadImage("assets/skills/img/trapper.png");

  // easter eggs
    // sounds
  sounds.secret = {};

  // sounds.secret.blipAttack = loadSound("assets/easterEggs/sound/blipAttack.mp3");
  // sounds.secret.blipPickUp = loadSound("assets/easterEggs/sound/blipPickUp.mp3");
  // sounds.secret.blipEnemyDeath = loadSound("assets/easterEggs/sound/blipDeath.mp3");
  // sounds.secret.blipLose = loadSound("assets/easterEggs/sound/blipDeath.mp3");

    // backgrounds
  worldBackgrounds.secret = {};

  // worldBackgrounds.secret. = loadImage("assets/easterEggs/background/.png");

    // images
  itemImg.secret = {};

  // itemImg.secret. = loadImage("assets/easterEggs/image/.png");
}

function setup() {
  // canvas
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // resetting
  startingState = 0;
  state = 0;
  enemyArr = [];
  drawingBack = true;
  refreshTimer = 30*1000;
  lastRefresh = millis();

  // text
  fontSize.default = (width+height)*0.015;
  fontSize.playersDisplay = fontSize.default/2;
  textFont(fonts.default, fontSize.default);

  // setting attack types
  melee = {
    enemyDist: width*0.10,
    attackDist: width*0.10,
    attackSpeed: width*0.0075,
    img: itemImg.swordAttack
  };

  ranged = {
    enemyDist: width*0.30,
    attackDist: width*0.75,
    attackSpeed: width*0.01,
    img: itemImg.arrowAttack
  };

  spellCaster = {
    enemyDist: width*0.20,
    attackDist: width*0.50,
    attackSpeed: width*0.008,
    img: itemImg.fireBallAttack
  };

  // alligning
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);

  // button colors
  buttons.red = color(255, 0, 0);
  buttons.green = color(0, 255, 0);
  buttons.orange = color(255, 165, 0);
  buttons.lightOrange = color(255, 220, 0);
  buttons.brown = color(153, 77, 0);
  buttons.lightBrown = color(179, 89, 0);

  // buttons
  buttons.back = new Button(-width*0.475, -height*0.475, width*0.05, height*0.05, buttons.red, buttons.green, "Back", fontSize.playersDisplay);
  buttons.continue = new Button(0, -height*0.4625, width*0.20, height*0.075, buttons.red, buttons.green, "Continue", fontSize.default);
  buttons.reName = new Button(0, -height*0.15, width*0.15, height*0.075, buttons.red, buttons.green, "MOI", fontSize.default);

  // assinging variables
  settingSprites();
  setSettingsMenu();
  settingKeyBindings();
  settingWorld();
  setItems();
  setPlayer();
  setNPCs();

  setEasterEgg();

  // heal button
  buttons.heal = new Button(-(inventory.width+1)*inventory.boxSize+width*0.2, -height*0.45, inventory.boxSize, inventory.boxSize, buttons.brown, buttons.lightBrown, "Heal", fontSize.default);

  // level up buttons
  buttons.lvlUp = [];
  for (let i=0; i<5; i++) {
    let x = inventory.width*inventory.boxSize + inventory.boxSize*1.75;
    let y = (inventory.boxSize+fontSize.playersDisplay*1.8*10) + (fontSize.playersDisplay/3+height*0.025)*i - height/2;
    buttons.lvlUp.push(new Button(x-width/2, y, width*0.02, height*0.025, buttons.brown, buttons.lightBrown, "+", fontSize.playersDisplay));
  }
}

function settingSprites() {
  // sprite size
  spriteSize.sampleWidth = width*0.30;
  spriteSize.sampleHeight = height*0.50;
  spriteSize.width = width*0.05;
  spriteSize.height = height*0.10;

  // race
  allRaces = [
    {name: "Random", img: sprites.random, stats: randomChoice}, {name: "Human", img: sprites.race.human, stats: human},
    {name: "Half-Elf", img: sprites.race.halfElf, stats: halfElf}, {name: "Elf", img: sprites.race.elf, stats: elf},
    {name: "Dwarf", img: sprites.race.dwarf, stats: dwarf}, {name: "Halfling", img: sprites.race.halfling, stats: halfling},
    {name: "Goblin", img: sprites.race.goblin, stats: goblin}, {name: "Orc", img: sprites.race.orc, stats: orc},
    {name: "Uruk-Hai", img: sprites.race.urukHai, stats: urukHai}
  ];

  // skill
  allSkills = [
    {name: "Random", img: sprites.random, stats: randomChoice}, {name: "Archer", img: sprites.skill.archer, stats: archer},
    {name: "Ranger", img: sprites.skill.ranger, stats: ranger}, {name: "Fighter", img: sprites.skill.fighter, stats: fighter},
    {name: "Samurai", img: sprites.skill.samurai, stats: samurai}, {name: "Mage", img: sprites.skill.mage, stats: mage},
    {name: "Cleric", img: sprites.skill.cleric, stats: cleric}, {name: "Rogue", img: sprites.skill.rogue, stats: rogue},
    {name: "Trapper", img: sprites.skill.trapper, stats: trapper}
  ];
}

function setSettingsMenu() {
  // all options found in the settings menu
  settings.options = [
    {name: "Resume", state: 0},
    {name: "Controls", state: "Controls"},
    {name: "Map", state: "Map"},
    {name: "Save", state: "Save"},
    {name: "Load", state: "Load"},
    {name: "Main Menu", state: "Main Menu"}
  ];

  setButtonAtributes();

  // buttons for the settings options
  settings.boxs = [];
  for (let i=0; i < settings.options.length; i++)
    settings.boxs.push(new Button(
      buttonAtributes.settings.x, buttonAtributes.listStart+(i*buttonAtributes.settings.height),
      buttonAtributes.width, buttonAtributes.settings.height,
      buttons.orange, buttons.lightOrange, settings.options[i].name
    ));
  }

function settingKeyBindings() {
  // key bindings
  keyBindings = new Map();

  keyBindings.set("Settings", {code: 27, state: "settings", button: 0}); // Escape
  keyBindings.set("Open Map", {code: 77, state: "map", button: 0}); // M
  keyBindings.set("Inventory", {code: 69, state: "inventory", button: 0}); // E
  keyBindings.set("Toggle Ranged", {code: 49, state: "ranged", button: 0}); // R
  keyBindings.set("Toggle Magic", {code: 50, state: "magic", button: 0}); // T
  keyBindings.set("Place Trap", {code: 81, button: 0}); // Q
  keyBindings.set("Move Up", {code: 87, button: 0}); // W
  keyBindings.set("Move Left", {code: 65, button: 0}); // A
  keyBindings.set("Move Down", {code: 83, button: 0}); // S
  keyBindings.set("Move Right", {code: 68, button: 0}); // D
  keyBindings.set("Toggle Walk", {code: 16, button: 0}); // Shift
  keyBindings.set("Consume HP Poition", {code: 70, button: 0}); // F
  keyBindings.set("Consume MP Poition", {code: 71, button: 0}); // G
  keyBindings.set("Interact", {code: 32, button: 0}); // Space

  keyBindings.forEach(setKeyButtons);
}

function settingWorld() {
  // coordinates
  world.sizeMult = 20;
  world.width = width*world.sizeMult;
  world.height = height*world.sizeMult;
  world.changedX = 0;
  world.changedY = 0;

  // different enviorments
  worldEnviorment = new Map();
  worldEnviorment.set("Meadows", {img: worldBackgrounds.grass, name: "Meadows", color: color(249, 166, 6), numOfEnemys: 30, enemyLvlBonus: 0, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.set("Town", {img: worldBackgrounds.grass, name: "Town", color: color(0, 255, 0), numOfEnemys: 0, enemyLvlBonus: 0, zone: {x: 0, y: 0, wid: world.width*0.15, hei: world.height*0.15}});
  worldEnviorment.set("Desert", {img: worldBackgrounds.grass, name: "Desert", color: color(0, 0, 255), numOfEnemys: 40, enemyLvlBonus: 0, zone: {x: -world.width*0.35, y: world.height*0.35, wid: world.width*0.30, hei: world.height*0.30}});
  worldEnviorment.set("Forest", {img: worldBackgrounds.grass, name: "Forest", color: color(135, 96, 66), numOfEnemys: 40, enemyLvlBonus: 2, zone: {x: world.width*0.35, y: -world.height*0.35, wid: world.width*0.30, hei: world.height*0.30}});
  worldEnviorment.set("Mountains", {img: worldBackgrounds.grass, name: "Mountains", color: color(162, 206, 228), numOfEnemys: 45, enemyLvlBonus: 4, zone: {x: -world.width*0.35, y: -world.height*0.35, wid: world.width*0.30, hei: world.height*0.30}});
  world.state = worldEnviorment.get("Town");
  world.checkingState = true;
  world.checkTimer = 4*1000;
  world.lastCheck = 0;

  // minimap
  minimap.padWidth = width*0.25;
  minimap.padHeight = height*0.30;
  minimap.imgWidth = minimap.padWidth-width*0.02;
  minimap.imgHeight = minimap.padHeight-height*0.02;
  minimap.screenWidth = map(width, 0, width, 0, minimap.imgWidth/world.sizeMult);
  minimap.screenHeight = map(height, 0, height, 0, minimap.imgHeight/world.sizeMult);
  minimap.x = -width/2 + minimap.padWidth/2;
  minimap.y = height/2 - minimap.padHeight/2;
}

function setItems() {
  allItems = new Map();

  settingItemMap();

  // items in the world
  items.onGround = [];
  items.playerAttack = [];
  items.enemyAttack = [];
}

function setPlayer() {
  // character
  player.name = "MOI";

  player.raceIndex = 0
  player.race = allRaces[player.raceIndex];

  player.skillIndex = 0;
  player.skill = allSkills[player.skillIndex];

  // stats
  player.int = 0; // Intellegence
  player.agi = 0; // Agillity
  player.str = 0; // Strength
  player.dex = 0; // Dexterity
  player.vit = 0; // Vitality

  player.totHp = 0;
  player.hp = 0;

  player.totMp = 0;
  player.mp = 0;

  // atack
  player.attackState = "melee";
  player.coolDown = false;
  player.coolDownTime = 0;
  player.previousAttack = 0;
  player.mDmg = 0; // melee
  player.rDmg = 0; // ranged
  player.sDmg = 0; // magic
  player.tDmg = 0; // trap

  // movement
  player.toggleSpeed = false;
  player.totSpeed = 0;
  player.speedMultiplier = 0;
  player.speed = 0;

  // level
  player.lvl = 0;
  player.exp = 0;
  player.nextLvl = 100;
  player.points = 0;
  player.expBonus = 0;

  // in world
  player.x = 0;
  player.y = 0;
  player.dotSize = (width+height)*0.002;

  // inventory
  setInventory();
  player.inventory = make2DGrid(inventory.width, inventory.height);
}

function setNPCs() {
  for (let i=0; i < numOfNPCs; i++) {
    let xSpawn = random(world.state.zone.x-world.state.zone.wid/2, world.state.zone.x+world.state.zone.wid/2);
    let ySpawn = random(world.state.zone.y-world.state.zone.hei/2, world.state.zone.y+world.state.zone.hei/2);
    allNPCs.push(new NonPlayableCharacters(xSpawn, ySpawn, npcImg.genericNPC, "Hello, world!"));
  }

  shopKeeps.push(new NonPlayableCharacters(spriteSize.width, 0, npcImg.shopKeep, "Welcome to\nthe shop.", true));
  setShops();
}

function setShops() {
  shopInventory = make2DGrid(inventory.shop.width, inventory.shop.height);

  // items always in shop
  shopInventory[0][0] = {name: "Hp Potion", img: itemImg.hpPotion};
  shopInventory[0][1] = {name: "Mp Potion", img: itemImg.mpPotion};
  shopInventory[0][2] = {name: "Arrows", img: itemImg.arrowAttack};
  shopInventory[0][3] = {name: "Traps", img: itemImg.trap};
}

function setInventory() {
  mouseCarring = "empty";

  // inventory atributes
  inventory.boxSize = (width+height)*0.04;
  inventory.width = 4;
  inventory.height = 8;

  // shop inventory
  inventory.shop = {};
  inventory.shop.width = 6;
  inventory.shop.height = 8;
  inventory.shop.offsetX = 7;

  // equip slots
  let x = width*0.25;
  let y = -height*0.10;
  let wid = inventory.boxSize*5;
  let hei = inventory.boxSize*5;
  inventory.equipSlots = [];
  inventory.equipSlots.push(new EquipBox(x-wid/2, y      , inventory.boxSize, inventory.boxSize, buttons.brown, buttons.lightBrown, "weapon")); // weapon
  inventory.equipSlots.push(new EquipBox(x      , y-hei/2, inventory.boxSize, inventory.boxSize, buttons.brown, buttons.lightBrown, "head")); // head
  inventory.equipSlots.push(new EquipBox(x      , y      , inventory.boxSize, inventory.boxSize, buttons.brown, buttons.lightBrown, "chest")); // chest
  inventory.equipSlots.push(new EquipBox(x      , y+hei/2, inventory.boxSize, inventory.boxSize, buttons.brown, buttons.lightBrown, "feet")); // feet
  inventory.equipSlots.push(new EquipBox(x+wid/4, y-hei/3, inventory.boxSize, inventory.boxSize, buttons.brown, buttons.lightBrown, "shoulders")); // shoulders
  inventory.equipSlots.push(new EquipBox(x+wid/4, y+hei/3, inventory.boxSize, inventory.boxSize, buttons.brown, buttons.lightBrown, "legs")); // legs
  inventory.equipSlots.push(new EquipBox(x+wid/2, y      , inventory.boxSize, inventory.boxSize, buttons.brown, buttons.lightBrown, "hands")); // hands
}

function setButtonAtributes() {
  // universal
  buttonAtributes.width = width*0.15;
  buttonAtributes.listStart = -height*0.40;

  // race
  buttonAtributes.race.height = height*0.90/allRaces.length;
  buttonAtributes.race.x = -width*0.35;

  // skill
  buttonAtributes.skill.height = height*0.90/allSkills.length;
  buttonAtributes.skill.x = width*0.35;

  // settings
  buttonAtributes.settings.height = height*0.90/settings.options.length;
  buttonAtributes.settings.x = 0;
}

function setKeyButtons(value, key, map) {
  // buttons to rebind keys
  let i = static(map.size);
  let yPos = -height*0.48+(i*fontSize.default*1.4);
  map.get(key).button = new Button(fontSize.default*4.5, yPos, width*0.10, fontSize.default*1.4, buttons.orange, buttons.lightOrange, "");
}

function make2DGrid(cols, rows) {
  // for inventory display purposes
  let newArray = [];
  for (let y = 0; y < rows; y++) {
    newArray.push([]);
    for (let x = 0; x < cols; x++) {
      newArray[y].push("empty");
    }
  }
  return newArray;
}

function setEasterEgg() {
  easterEgg.backgrounds = false;
  easterEgg.sounds = false;
  easterEgg.images = false;
}
