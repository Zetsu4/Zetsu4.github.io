// V5.0
// Travis Ahern
// Dec. 6, 2018
//
// PROBLEMS:
// - nothing exists
//
// CREDITS:
// background images by: Steven Valley
// sprites by: Travis Ahern
// made using javascript, in the Atom text editor.
// -Asir added- I am the best, no one can defeat me, not even Mr. Schellenberg!! -Asir ended-
//
// TO DO:
// everything ----- 0%


// general
let startingState = 0;
let state = 0;
let previousState = state;
let fontSize = {};
let fonts = {};
let buttons = {};
let buttonAtributes = {
  race: {},
  skill: {},
  settings: {}
};

// images
let worldBackgrounds = {};
let itemImg = {};
let sprites = {
  race: {},
  skill: {}
};
let spriteSize = {};

// world
let worldState;
let world = {};
let minimap = {};

// races/skills button arrays
let raceButtons = [];
let skillButtons = [];

// items
let items = {};

// player
let player = {};

// inventory
let inventory = [];

// settings
let settings = {};

// key-bindings
let keyBindings;


function preload() {
  // fonts
  fonts.default = loadFont("assets/fonts/default.TTF");

  // backgrounds
  worldBackgrounds.homePage = loadImage("assets/img/lovelyHomepage.png");
  worldBackgrounds.grass = loadImage("assets/img/grass.png");

  // inventory delete button
  itemImg.garbageClosed = loadImage("assets/img/garbageClosed.png");
  itemImg.garbageOpened = loadImage("assets/img/garbageOpened.png");

  // items
  itemImg.swordAttack = loadImage("assets/img/items/sword.png");
  itemImg.arrowAttack = loadImage("assets/img/items/arrows.png");
  itemImg.fireBallAttack = loadImage("assets/img/items/fireBall.png");
  itemImg.trap = loadImage("assets/img/items/traps.png");
  itemImg.hpPotion = loadImage("assets/img/items/hpPotion.png");
  itemImg.mpPotion = loadImage("assets/img/items/mpPotion.png");

  // mouse pointers
  itemImg.swordIcon = loadImage("assets/img/items/equippedIcons/swordIcon.png");
  itemImg.bowIcon = loadImage("assets/img/items/equippedIcons/bowIcon.png");
  itemImg.magicIcon = loadImage("assets/img/items/equippedIcons/magicIcon.png");

  // sprites
  sprites.random = loadImage("assets/img/random.png");

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
}

function setup() {
  // canvas
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // text
  fontSize.default = (width+height)*0.015;
  fontSize.playersDisplay = fontSize.default/2;
  textFont(fonts.default, fontSize.default);

  // alligning
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
  rectMode(CENTER);

  // buttons
  buttons.red = color(255, 0, 0);
  buttons.green = color(0, 255, 0);
  buttons.back = new Button(-width*0.475, -height*0.475, width*0.05, height*0.05, buttons.red, buttons.green, "Back");
  buttons.continue = new Button(0, -height*0.4625, width*0.20, height*0.075, buttons.red, buttons.green, "Continue");

  // assinging variables
  settingKeyBindings();
  settingWorld();
  settingSprites();
  itemArrays();
  setPlayer();
  setSettingsMenu();
}

function settingKeyBindings() {
  keyBindings = new Map();

  keyBindings.set("Settings", {code: 27, state: "settings"}); // Escape
  keyBindings.set("Open Map", {code: 77, state: "map"}); // M
  keyBindings.set("Inventory", {code: 69, state: "inventory"}); // E
  keyBindings.set("Toggle Ranged", {code: 82, state: "ranged"}); // R
  keyBindings.set("Toggle Magic", {code: 84, state: "magic"}); // T
  keyBindings.set("Place Trap", 81); // Q
  keyBindings.set("Move Up", 87); // W
  keyBindings.set("Move Left", 65); // A
  keyBindings.set("Move Down", 83); // S
  keyBindings.set("Move Right", 68); // D
  keyBindings.set("Toggle Walk", 16); // Shift
  keyBindings.set("Consume HP Poition", 70); // F
  keyBindings.set("Consume MP Poition", 71); // G
  keyBindings.set("Interact", 32); // Space
}

function settingWorld() {
  worldState = new Map();
  worldState.set("Meadow", {img: worldBackgrounds.grass, name: "Meadow"});
  world.state = worldState.get("Meadow");

  // coordinates
  world.sizeMult = 10;
  world.width = width*world.sizeMult;
  world.height = height*world.sizeMult;
  world.changedX = 0;
  world.changedY = 0;

  // minimap
  minimap.padWidth = width*0.20;
  minimap.padHeight = height*0.30;
  minimap.imgWidth = width*0.18;
  minimap.imgHeight = height*0.28;
  minimap.x = -width/2 + minimap.padWidth/2;
  minimap.y = height/2 - minimap.padHeight/2;
}

function settingSprites() {
  // sprite size
  spriteSize.sampleWidth = width*0.30;
  spriteSize.sampleHeight = height*0.50;
  spriteSize.width = width*0.05;
  spriteSize.height = height*0.10;

  // race
  allRaces = [
    {name: "Random", img: sprites.random}, {name: "Human", img: sprites.race.human, stats: human},
    {name: "Half-Elf", img: sprites.race.halfElf, stats: halfElf}, {name: "Elf", img: sprites.race.elf, stats: elf},
    {name: "Dwarf", img: sprites.race.dwarf, stats: dwarf}, {name: "Halfling", img: sprites.race.halfling, stats: halfling},
    {name: "Goblin", img: sprites.race.goblin, stats: goblin}, {name: "Orc", img: sprites.race.orc, stats: orc},
    {name: "Uruk-Hai", img: sprites.race.urukHai, stats: urukHai}
  ];

  // skill
  allSkills = [
    {name: "Random", img: sprites.random}, {name: "Archer", img: sprites.skill.archer, stats: archer},
    {name: "Ranger", img: sprites.skill.ranger, stats: ranger}, {name: "Fighter", img: sprites.skill.fighter, stats: fighter},
    {name: "Samurai", img: sprites.skill.samurai, stats: samurai}, {name: "Mage", img: sprites.skill.mage, stats: mage},
    {name: "Cleric", img: sprites.skill.cleric, stats: cleric}, {name: "Rogue", img: sprites.skill.rogue, stats: rogue},
    {name: "Trapper", img: sprites.skill.trapper, stats: trapper}
  ];
}

function itemArrays() {
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

  // damage
  player.mDmg = 0; // melee
  player.rDmg = 0; // ranged
  player.sDmg = 0; // magic
  player.tDmg = 0; // trap

  // movement speed
  player.toggleSpeed = false;
  player.totSpeed = 0;
  player.speedMultiplier = 0;
  player.speed = 0;

  // level
  player.lvl = 0;
  player.exp = 0;
  player.nextLvl = 100;
  player.points = 0;

  // in world
  player.x = 0;
  player.y = 0;
  player.dotSize = (width+height)*0.0025;
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

function setSettingsMenu() {
  settings.options = [
    {name: "Resume", state: 0},
    {name: "Controls", state: "Controls"},
    {name: "Map", state: "Map"},
    {name: "Save", state: "Settings"},
    {name: "Load", state: "Settings"},
    {name: "Main Menu", state: "Main Menu"}
  ];

  setButtonAtributes();
  settings.boxs = [];
  for (let i=0; i < settings.options.length; i++)
    settings.boxs.push(new Button(
      buttonAtributes.settings.x, buttonAtributes.listStart+(i*buttonAtributes.settings.height),
      buttonAtributes.width, buttonAtributes.settings.height,
      "orange", color(250, 220, 0), settings.options[i].name
    ));
}
