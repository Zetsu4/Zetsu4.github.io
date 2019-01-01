// V5.5
// Travis Ahern
// Dec. 31, 2018
//
// PROBLEMS:
// - no story
// - things are not balanced (stats, drop chance, money, etc.)
//
// CREDITS:
// sounds from: freesounds.org and openGameArt.org
// background images by: Steven Valley
// sprites by: Travis Ahern
// other images by: Travis Ahern
// made using javascript, in the Atom text editor.
// -Asir added, as Travis- I am the best, no one can defeat me, not even Mr. Schellenberg!! -Asir has ended, because of Travis-

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

// race/skill arrays
let allRaces = [];
let allSkills = [];
let raceSpecific = {};
let skillSpecific = {};

// NPC's
let numOfNPCs = 50;
let allNPCs = [];
let shopKeeps = [];
let shopInventory;
let guildKeepers = [];
let refreshTimer;
let lastRefresh;

// world
let drawingBack;
let world = {};
let minimap = {};

// races/skills button arrays
let raceButtons = [];
let skillButtons = [];

let randomChoice = {
  description: "Random",
};

// attacks
let melee = {};
let ranged = {};
let spellCaster = {};

// items
let allItems;
let items = {};
let recentPickUps = "";
let recentsTimer;
let recentsLastTime;
let itemDropEnemy;
let shopItemRefreshName = "";

// player
let player = {};
let guildMembers = [];

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

// click wait
let waiting;
const WAIT_TIME = 150;

function preload() {
  soundFormats("mp3", "wav");

  // sounds
    // background
  sounds.startMenu = loadSound("assets/sound/background/startMenu.wav");
  sounds.overWorld = loadSound("assets/sound/background/overWorld.mp3");
  sounds.itemShop = loadSound("assets/sound/background/itemShop.mp3");
  sounds.caves = loadSound("assets/sound/background/caves.mp3");
  sounds.demonGate = loadSound("assets/sound/background/demonGate.wav");
  sounds.demonRealm = loadSound("assets/sound/background/demonRealm.mp3");
  sounds.castle = loadSound("assets/sound/background/castle.mp3");
  sounds.dungeon = loadSound("assets/sound/background/dungeon.mp3");
  sounds.gameOver = loadSound("assets/sound/background/gameOver.mp3");

    // attack
  sounds.swordAttack = loadSound("assets/sound/attack/slash.wav");
  sounds.arrowAttack = loadSound("assets/sound/attack/arrowShot.mp3");
  sounds.fireballAttack = loadSound("assets/sound/attack/fireballCast.mp3");
  sounds.swordHit = loadSound("assets/sound/attack/slashHit.mp3");
  sounds.arrowHit = loadSound("assets/sound/attack/arrowHit.mp3");
  sounds.fireballHit = loadSound("assets/sound/attack/fireballHit.mp3");
  sounds.trapHit = loadSound("assets/sound/attack/trapHit.wav");

    // other
  sounds.pickUp = loadSound("assets/sound/pickUp.mp3");
  sounds.consumePotion = loadSound("assets/sound/consumePotion.wav");
  sounds.enemyDeath = loadSound("assets/sound/enemyDeath.wav");

  // fonts
  fonts.default = loadFont("assets/fonts/default.TTF");

  // backgrounds
  worldBackgrounds.homePage = loadImage("assets/img/backgrounds/lovelyHomepage.png");

    // over world
  worldBackgrounds.grass = loadImage("assets/img/backgrounds/grass.png");
  worldBackgrounds.town = loadImage("assets/img/backgrounds/town.png");
  worldBackgrounds.desert = loadImage("assets/img/backgrounds/desert.png");
  worldBackgrounds.forest = loadImage("assets/img/backgrounds/forest.png");
  worldBackgrounds.mountain = loadImage("assets/img/backgrounds/mountain.png");

    // cave
  worldBackgrounds.caveOpening = loadImage("assets/img/backgrounds/caveOpening.png");
  worldBackgrounds.cave = loadImage("assets/img/backgrounds/cave.png");
  worldBackgrounds.caveExit = loadImage("assets/img/backgrounds/caveExit.png");

    // demon realm
  worldBackgrounds.demonGate = loadImage("assets/img/backgrounds/demonGate.png");
  worldBackgrounds.demonRealm = loadImage("assets/img/backgrounds/demonRealm.png");

    // castle
  worldBackgrounds.castleEntrance = loadImage("assets/img/backgrounds/castleEntrance.png");
  worldBackgrounds.castle = loadImage("assets/img/backgrounds/castle.png");

    // dungeon
  worldBackgrounds.dungeon = loadImage("assets/img/backgrounds/dungeon.png");

    // other
  worldBackgrounds.house = loadImage("assets/img/backgrounds/house.png");
  worldBackgrounds.stairs = loadImage("assets/img/backgrounds/stairs.png");
  worldBackgrounds.door = loadImage("assets/img/backgrounds/door.png");

  // NPC's
  npcImg.genericNPC = loadImage("assets/img/sprites/NPC.png");
  npcImg.shopKeep = loadImage("assets/img/sprites/shopKeep.png");
  npcImg.guildKeeper = loadImage("assets/img/sprites/guildKeeper.png");

  guildTicket = loadImage("assets/img/guildTicket.png");
  guildTicketBack = loadImage("assets/img/guildTicketBack.png");

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
  itemImg.townPortal = loadImage("assets/img/items/townPortal.png");
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

  sounds.secret.blipBackground = loadSound("assets/easterEggs/sound/blipBackground.wav");
  sounds.secret.blipAttack = loadSound("assets/easterEggs/sound/blipAttack.wav");
  sounds.secret.blipPickUp = loadSound("assets/easterEggs/sound/blipPickUp.wav");
  sounds.secret.blipEnemyDeath = loadSound("assets/easterEggs/sound/blipEnemyDeath.wav");
  sounds.secret.blipGameOver = loadSound("assets/easterEggs/sound/blipGameOver.wav");

    // backgrounds
  worldBackgrounds.secret = {};

  // worldBackgrounds.secret. = loadImage("assets/easterEggs/background/.png");

    // sprites
  sprites.secret = {};
  sprites.secret.race = {};
  sprites.secret.skill = {};

  sprites.secret.death = loadImage("assets/img/sprites/enemyDeath.png");
  sprites.secret.random = loadImage("assets/img/sprites/random.png");

  sprites.secret.race.dwarf = loadImage("assets/races/img/dwarf.png");
  sprites.secret.race.elf = loadImage("assets/races/img/elf.png");
  sprites.secret.race.goblin = loadImage("assets/races/img/goblin.png");
  sprites.secret.race.halfElf = loadImage("assets/races/img/half-elf.png");
  sprites.secret.race.halfling = loadImage("assets/races/img/halfling.png");
  sprites.secret.race.human = loadImage("assets/races/img/human.png");
  sprites.secret.race.orc = loadImage("assets/races/img/orc.png");
  sprites.secret.race.urukHai = loadImage("assets/races/img/uruk-hai.png");

  sprites.secret.skill.archer = loadImage("assets/skills/img/archer.png");
  sprites.secret.skill.cleric = loadImage("assets/skills/img/cleric.png");
  sprites.secret.skill.fighter = loadImage("assets/skills/img/fighter.png");
  sprites.secret.skill.mage = loadImage("assets/skills/img/mage.png");
  sprites.secret.skill.ranger = loadImage("assets/skills/img/ranger.png");
  sprites.secret.skill.rogue = loadImage("assets/skills/img/rogue.png");
  sprites.secret.skill.samurai = loadImage("assets/skills/img/samurai.png");
  sprites.secret.skill.trapper = loadImage("assets/skills/img/trapper.png");

  npcImg.secret = {};
  npcImg.secret.genericNPC = loadImage("assets/img/sprites/NPC.png");
  npcImg.secret.shopKeep = loadImage("assets/img/sprites/shopKeep.png");

  setSounds();
}

function setSounds() {
  // background
  sounds.startMenu.setVolume(0.6);
  sounds.overWorld.setVolume(0.3);
  sounds.itemShop.setVolume(0.3);
  sounds.caves.setVolume(1);
  sounds.demonGate.setVolume(1);
  sounds.demonRealm.setVolume(1);
  sounds.castle.setVolume(1);
  sounds.dungeon.setVolume(1);
  sounds.gameOver.setVolume(1.25);

  // attack
  sounds.swordAttack.setVolume(3);
  sounds.arrowAttack.setVolume(1.5);
  sounds.fireballAttack.setVolume(1);
  sounds.swordHit.setVolume(0.25);
  sounds.arrowHit.setVolume(0.95);
  sounds.fireballHit.setVolume(1);
  sounds.trapHit.setVolume(0.25);

  // other
  sounds.pickUp.setVolume(1);
  sounds.consumePotion.setVolume(0.7);
  sounds.enemyDeath.setVolume(2.5);

  // easter egg
  sounds.secret.blipBackground.setVolume(1);
  sounds.secret.blipAttack.setVolume(1);
  sounds.secret.blipPickUp.setVolume(1);
  sounds.secret.blipEnemyDeath.setVolume(1);
  sounds.secret.blipGameOver.setVolume(1);
}

function setup() {
  // canvas
  createCanvas(windowWidth, windowHeight);
  noStroke();

  sounds.startMenu.play();

  sounds.startMenu.loop();
  sounds.overWorld.loop();
  sounds.itemShop.loop();
  sounds.caves.loop();
  sounds.demonGate.loop();

  sounds.overWorld.stop();
  sounds.itemShop.stop();
  sounds.caves.stop();
  sounds.demonGate.stop();

  // resetting
  startingState = 0;
  state = 0;
  recentPickUps = "";
  enemyArr = [];
  guildMembers = [];
  drawingBack = true;
  refreshTimer = 30*1000;
  lastRefresh = millis();
  recentsTimer = 5000;
  recentsLastTime = millis();

  // text
  fontSize.default = (width+height)*0.015;
  fontSize.playersDisplay = fontSize.default/2;
  textFont(fonts.default, fontSize.default);

  // setting attack types
  melee = {
    enemyDist: width*0.05,
    attackDist: width*0.075,
    attackSpeed: width*0.01,
    img: itemImg.swordAttack,
    soundAttack: sounds.swordAttack,
    soundHit: sounds.swordHit
  };

  ranged = {
    enemyDist: width*0.30,
    attackDist: width*0.75,
    attackSpeed: width*0.02,
    img: itemImg.arrowAttack,
    soundAttack: sounds.arrowAttack,
    soundHit: sounds.arrowHit
  };

  spellCaster = {
    enemyDist: width*0.125,
    attackDist: width*0.50,
    attackSpeed: width*0.015,
    img: itemImg.fireBallAttack,
    soundAttack: sounds.fireballAttack,
    soundHit: sounds.fireballHit
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
  buttons.back = new Button(-width*0.475, -height*0.475, width*0.05, height*0.05, buttons.red, buttons.green, "Back", "BOLD", fontSize.playersDisplay);
  buttons.continue = new Button(0, -height*0.4625, width*0.20, height*0.075, buttons.red, buttons.green, "Continue");
  buttons.reName = new Button(0, -height*0.15, width*0.15, height*0.075, buttons.red, buttons.green, "MOI");

  // assinging variables
  settingSprites();
  setSettingsMenu();
  settingKeyBindings();
  settingWorld();
  setItems();
  setPlayer();
  setNPCs();
  setShops();

  setEasterEgg();

  // heal button
  let shorterLine /*great variable name*/ = (inventory.width+1)*inventory.boxSize-width/2+inventory.boxSize;
  buttons.heal = new Button(shorterLine, -height*0.45, inventory.boxSize, inventory.boxSize, buttons.brown, buttons.lightBrown, "Heal", "BOLD");

  // level up buttons
  buttons.lvlUp = [];
  for (let i=0; i<5; i++) {
    let x = inventory.width*inventory.boxSize + inventory.boxSize*1.75;
    let y = (inventory.boxSize+fontSize.playersDisplay*1.8*10) + (fontSize.playersDisplay/3+height*0.025)*i - height/2;
    buttons.lvlUp.push(new Button(x-width/2, y, width*0.02, height*0.025, buttons.brown, buttons.lightBrown, "+", "BOLD", fontSize.playersDisplay));
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

  raceSpecific.guild = [
    {name: "Human", img: sprites.race.human, stats: human}, {name: "Half-Elf", img: sprites.race.halfElf, stats: halfElf},
    {name: "Elf", img: sprites.race.elf, stats: elf}, {name: "Dwarf", img: sprites.race.dwarf, stats: dwarf},
    {name: "Halfling", img: sprites.race.halfling, stats: halfling}
  ];

  raceSpecific.cave = [
    {name: "Goblin", img: sprites.race.goblin, stats: goblin}, {name: "Orc", img: sprites.race.orc, stats: orc},
    {name: "Uruk-Hai", img: sprites.race.urukHai, stats: urukHai}
  ];

  raceSpecific.demons = [
    {name: "Fire Imp", img: sprites.race.goblin, stats: fireImp}, {name: "Gate Gaurd 2.0", img: sprites.race.orc, stats: gateGaurd2},
    {name: "Gate Gaurd", img: sprites.race.urukHai, stats: gateGaurd}
  ];

  // skill
  allSkills = [
    {name: "Random", img: sprites.random, stats: randomChoice}, {name: "Archer", img: sprites.skill.archer, stats: archer},
    {name: "Ranger", img: sprites.skill.ranger, stats: ranger}, {name: "Fighter", img: sprites.skill.fighter, stats: fighter},
    {name: "Samurai", img: sprites.skill.samurai, stats: samurai}, {name: "Mage", img: sprites.skill.mage, stats: mage},
    {name: "Cleric", img: sprites.skill.cleric, stats: cleric}, {name: "Rogue", img: sprites.skill.rogue, stats: rogue},
    {name: "Trapper", img: sprites.skill.trapper, stats: trapper}
  ];

  skillSpecific.guild = [
    {name: "Archer", img: sprites.skill.archer, stats: archer}, {name: "Mage", img: sprites.skill.mage, stats: mage}
  ];

  skillSpecific.cave = [
    {name: "Archer", img: sprites.skill.archer, stats: archer}, {name: "Fighter", img: sprites.skill.fighter, stats: fighter}
  ];

  skillSpecific.demons = [
    {name: "Slitty Slit", img: sprites.skill.samurai, stats: demonMelee}, {name: "Fire Thing", img: sprites.skill.mage, stats: demonMagic}
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

  // main menu confirmation buttons
  settings.mainMenu = {};

    // YES
  settings.mainMenu.yes = new Button(
    buttonAtributes.race.x, 0,
    buttonAtributes.width, buttonAtributes.settings.height,
    buttons.orange, buttons.lightOrange, "Yes"
  );

    // NO
  settings.mainMenu.no = new Button(
    buttonAtributes.skill.x, 0,
    buttonAtributes.width, buttonAtributes.settings.height,
    buttons.orange, buttons.lightOrange, "No"
  );
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
  keyBindings.set("Use Town Portal", {code: 84, button: 0}); // T
  keyBindings.set("Interact", {code: 32, button: 0}); // Space
  keyBindings.set("Enter Area", {code: 67, button: 0}); // C

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
  worldEnviorment = {};

    // over world
  worldEnviorment.overWorld = new Map();
  worldEnviorment.overWorld.set("Meadows", {img: worldBackgrounds.grass, name: "Meadows", color: color(249, 166, 6), numOfEnemys: 30, enemy: {lvlMin: 1, lvlMax: 4, race: allRaces, skill: allSkills}, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.overWorld.set("Town", {img: worldBackgrounds.town, name: "Town", color: color(0, 255, 0), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: 0, y: 0, wid: world.width*0.15, hei: world.height*0.15}});
  worldEnviorment.overWorld.set("Desert", {img: worldBackgrounds.desert, name: "Desert", color: color(0, 0, 255), numOfEnemys: 40, enemy: {lvlMin: 2, lvlMax: 5, race: allRaces, skill: allSkills}, zone: {x: -world.width*0.2125, y: world.height*0.30, wid: world.width*0.575, hei: world.height*0.40}});
  worldEnviorment.overWorld.set("Forest", {img: worldBackgrounds.forest, name: "Forest", color: color(135, 96, 66), numOfEnemys: 40, enemy: {lvlMin: 4, lvlMax: 8, race: allRaces, skill: allSkills}, zone: {x: world.width*0.30, y: -world.height*0.325, wid: world.width*0.40, hei: world.height*0.35}});
  worldEnviorment.overWorld.set("Mountains", {img: worldBackgrounds.mountain, name: "Mountains", color: color(162, 206, 228), numOfEnemys: 45, enemy: {lvlMin: 5, lvlMax: 10, race: allRaces, skill: allSkills}, zone: {x: -world.width*0.40, y: -world.height*0.275, wid: world.width*0.20, hei: world.height*0.45}});
  worldEnviorment.overWorld.set("Cave Opening", {img: worldBackgrounds.caveOpening, name: "Cave Opening", color: color(255), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: world.width*0.35, y: world.height*0.35, wid: world.width*0.05, hei: world.height*0.05}});
  worldEnviorment.overWorld.set("Castle Gate", {img: worldBackgrounds.castleEntrance, name: "Castle Gate", color: color(255), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: 0, y: -world.height*0.40, wid: world.width*0.05, hei: world.height*0.05}});

    // caves
  worldEnviorment.cave = new Map();
  worldEnviorment.cave.set("Cave", {img: worldBackgrounds.cave, name: "Cave", color: color(139, 15, 205), numOfEnemys: 40, enemy: {lvlMin: 10, lvlMax: 15, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.cave.set("Demon Gate", {img: worldBackgrounds.demonGate, name: "Demon Gate Enter", color: color(25, 255, 199), numOfEnemys: 50, enemy: {lvlMin: 13, lvlMax: 25, race: raceSpecific.demons, skill: skillSpecific.demons}, zone: {x: 0, y: 0, wid: world.width*0.20, hei: world.height*0.20}});
  worldEnviorment.cave.set("Cave Exit", {img: worldBackgrounds.caveExit, name: "Cave Exit", color: color(200), numOfEnemys: 3, enemy: {lvlMin: 9, lvlMax: 13, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: world.width*0.35, y: world.height*0.35, wid: world.width*0.05, hei: world.height*0.05}});
  worldEnviorment.cave.set("Castle Cave Exit", {img: worldBackgrounds.stairs, name: "Castle Cave Exit", color: color(200), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: -world.width*0.20, y: world.height*0.45, wid: width*0.25, hei: height*0.25}});

    // demon realm
  worldEnviorment.demonRealm = new Map();
  worldEnviorment.demonRealm.set("Demon Realm", {img: worldBackgrounds.demonRealm, name: "Demon Realm", color: color(212, 0, 57), numOfEnemys: 50, enemy: {lvlMin: 20, lvlMax: 27, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.demonRealm.set("Demon Gate", {img: worldBackgrounds.demonGate, name: "Demon Gate Exit", color: color(212, 0, 57), numOfEnemys: 20, enemy: {lvlMin: 15, lvlMax: 24, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: 0, y: 0, wid: world.width*0.10, hei: world.height*0.10}});

    // castle
  worldEnviorment.castle = new Map();
  worldEnviorment.castle.set("Castle", {img: worldBackgrounds.castle, name: "Castle", color: color(212, 0, 57), numOfEnemys: 40, enemy: {lvlMin: 10, lvlMax: 20, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.castle.set("Castle Exit", {img: worldBackgrounds.door, name: "Castle Exit", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: 0, y: -world.height*0.45, wid: width*0.50, hei: height*0.25}});
  worldEnviorment.castle.set("Cave Entrance", {img: worldBackgrounds.stairs, name: "Cave Entrance", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: -world.width*0.20, y: world.height*0.45, wid: width*0.25, hei: height*0.25}});
  worldEnviorment.castle.set("Dungeon Entrance", {img: worldBackgrounds.stairs, name: "Dungeon Entrance", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: world.width*0.20, y: world.height*0.45, wid: width*0.25, hei: height*0.25}});

    // dungeon 1
  worldEnviorment.dungeon1 = new Map();
  worldEnviorment.dungeon1.set("Dungeon 1", {img: worldBackgrounds.dungeon, name: "Dungeon 1", color: color(212, 0, 57), numOfEnemys: 45, enemy: {lvlMin: 30, lvlMax: 50, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.dungeon1.set("Dungeon Exit", {img: worldBackgrounds.stairs, name: "Dungeon Exit", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: world.width*0.20, y: world.height*0.45, wid: width*0.25, hei: height*0.25}});
  worldEnviorment.dungeon1.set("Down 2", {img: worldBackgrounds.stairs, name: "Down 2", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: -world.width*0.45, y: -world.height*0.45, wid: width*0.25, hei: height*0.25}});

    // dungeon 2
  worldEnviorment.dungeon2 = new Map();
  worldEnviorment.dungeon2.set("Dungeon 2", {img: worldBackgrounds.dungeon, name: "Dungeon 2", color: color(212, 0, 57), numOfEnemys: 45, enemy: {lvlMin: 30, lvlMax: 50, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.dungeon2.set("Up 1", {img: worldBackgrounds.stairs, name: "Up 1", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: -world.width*0.45, y: -world.height*0.45, wid: width*0.25, hei: height*0.25}});
  worldEnviorment.dungeon2.set("Down 3", {img: worldBackgrounds.stairs, name: "Down 3", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: world.width*0.45, y: world.height*0.45, wid: width*0.25, hei: height*0.25}});

    // dungeon 3
  worldEnviorment.dungeon3 = new Map();
  worldEnviorment.dungeon3.set("Dungeon 3", {img: worldBackgrounds.dungeon, name: "Dungeon 3", color: color(212, 0, 57), numOfEnemys: 45, enemy: {lvlMin: 30, lvlMax: 50, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.dungeon3.set("Up 2", {img: worldBackgrounds.stairs, name: "Up 2", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: world.width*0.45, y: world.height*0.45, wid: width*0.25, hei: height*0.25}});
  worldEnviorment.dungeon3.set("Down 4", {img: worldBackgrounds.stairs, name: "Down 4", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: -world.width*0.45, y: -world.height*0.45, wid: width*0.25, hei: height*0.25}});

    // dungeon 4
  worldEnviorment.dungeon4 = new Map();
  worldEnviorment.dungeon4.set("Dungeon 4", {img: worldBackgrounds.dungeon, name: "Dungeon 4", color: color(212, 0, 57), numOfEnemys: 45, enemy: {lvlMin: 30, lvlMax: 50, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.dungeon4.set("Up 3", {img: worldBackgrounds.stairs, name: "Up 3", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: -world.width*0.45, y: -world.height*0.45, wid: width*0.25, hei: height*0.25}});
  worldEnviorment.dungeon4.set("Down 5", {img: worldBackgrounds.stairs, name: "Down 5", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: world.width*0.45, y: world.height*0.45, wid: width*0.25, hei: height*0.25}});

    // dungeon 5
  worldEnviorment.dungeon5 = new Map();
  worldEnviorment.dungeon5.set("Dungeon 5", {img: worldBackgrounds.dungeon, name: "Dungeon 5", color: color(212, 0, 57), numOfEnemys: 45, enemy: {lvlMin: 30, lvlMax: 50, race: raceSpecific.cave, skill: skillSpecific.cave}, zone: {x: 0, y: 0, wid: world.width, hei: world.height}});
  worldEnviorment.dungeon5.set("Up 4", {img: worldBackgrounds.stairs, name: "Up 4", color: color(212, 0, 57), numOfEnemys: 0, enemy: {lvlMin: 0, lvlMax: 0, race: allRaces, skill: allSkills}, zone: {x: world.width*0.45, y: world.height*0.45, wid: width*0.25, hei: height*0.25}});

  world.state = worldEnviorment.overWorld.get("Town");
  world.area = "Over World";
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
  player.inGuild = false;

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
  allNPCs = [];
  for (let i=0; i < numOfNPCs; i++) {
    let xSpawn = random(world.state.zone.x-world.state.zone.wid/2, world.state.zone.x+world.state.zone.wid/2);
    let ySpawn = random(world.state.zone.y-world.state.zone.hei/2, world.state.zone.y+world.state.zone.hei/2);
    allNPCs.push(new NonPlayableCharacters(xSpawn, ySpawn, npcImg.genericNPC, randomTalk));
  }

  shopKeeps = [];
  shopKeeps.push(new NonPlayableCharacters(width*0.25, 0, npcImg.shopKeep, "Welcome to\nthe shop.", "Shop"));

  guildKeepers = [];
  guildKeepers.push(new NonPlayableCharacters(-width*0.25, 0, npcImg.guildKeeper, "Welcome to\nthe Guild.", "Guild"));
}

function setShops() {
  shopInventory = make2DGrid(inventory.shop.width, inventory.shop.height);

  // items always in shop
  shopInventory[0][0] = {name: "Hp Potion", img: itemImg.hpPotion};
  shopInventory[0][1] = {name: "Mp Potion", img: itemImg.mpPotion};
  shopInventory[0][2] = {name: "Arrows", img: itemImg.arrowAttack};
  shopInventory[0][3] = {name: "Traps", img: itemImg.trap};
  shopInventory[0][4] = {name: "Town Portal", img: itemImg.townPortal};

  guildInventory = make2DGrid(inventory.shop.width, inventory.shop.height);

  // player not in guild
  if (!player.inGuild)
    guildInventory[0][0] = {name: "Guild Ticket", description: "BUY NOW!!", race: {img: guildTicketBack}, skill: {img: guildTicket}, stats: {}, cost: 100};

}

function setInventory() {
  mouseCarring = "empty";

  // inventory atributes
  inventory.boxSize = (width+height)*0.04;
  inventory.width = 4;
  inventory.height = 6;

  // shop inventory
  inventory.shop = {};
  inventory.shop.width = 6;
  inventory.shop.height = 6;
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
  easterEgg.soundsBlip = false;
  easterEgg.spritesOG = false;
}
