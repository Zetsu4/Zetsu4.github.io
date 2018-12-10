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
let textFontSize;
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

// key-bindings
let keyBindings;


function preload() {
  // backgrounds
  worldBackgrounds.homePage = loadImage("assets/img/lovelyHomepage.png");
  worldBackgrounds.grass = loadImage("assets/img/grass.png");

  // inventory delete button
  itemImg.garbageClosed = loadImage("assets/img/garbageClosed.png");
  itemImg.garbageOpened = loadImage("assets/img/garbageOpened.png");

  // items
  itemImg.swordAttack = loadImage("assets/items/img/sword.png");
  itemImg.arrowAttack = loadImage("assets/items/img/arrows.png");
  itemImg.fireBallAttack = loadImage("assets/items/img/fireBall.png");
  itemImg.trap = loadImage("assets/items/img/traps.png");
  itemImg.hpPotion = loadImage("assets/items/img/hpPotion.png");
  itemImg.mpPotion = loadImage("assets/items/img/mpPotion.png");

  // mouse pointers
  itemImg.swordIcon = loadImage("assets/items/img/equippedIcons/swordIcon.png");
  itemImg.bowIcon = loadImage("assets/items/img/equippedIcons/bowIcon.png");
  itemImg.magicIcon = loadImage("assets/items/img/equippedIcons/magicIcon.png");

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
  textFontSize = (width*0.03 + height*0.03)/2;
  textSize(textFontSize);

  // alligning
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
  rectMode(CENTER);

  // buttons
  buttons.red = color(255, 0, 0);
  buttons.green = color(0, 255, 0);
  buttons.back = new Button(-width*0.475, -height*0.475, width*0.025, height*0.025, buttons.red, buttons.green, "BACK");

  // assinging variables
  settingKeyBindings();
  settingWorld();
  settingSprites();
  itemArrays();
  setPlayer();
  setButtonAtributes();
}

function settingKeyBindings() {
  keyBindings = new Map();

  keyBindings.set("Settings", 27); // Escape
  keyBindings.set("Toggle Walk", 16); // Shift
  keyBindings.set("Toggle Ranged", 82); // R
  keyBindings.set("Toggle Magic", 84); // T
  keyBindings.set("Place Trap", 81); // Q
  keyBindings.set("Move Up", 87); // W
  keyBindings.set("Move Left", 65); // A
  keyBindings.set("Move Down", 83); // S
  keyBindings.set("Move Right", 68); // D
  keyBindings.set("Interact", 32); // Space
  keyBindings.set("Inventory", 69); // E
  keyBindings.set("Open Map", 77); // M
  keyBindings.set("Consume HP Poition", 70); // F
  keyBindings.set("Consume MP Poition", 71); // G
}

function settingWorld() {
  world.enviorment = "Meadow";
  world.image = worldBackgrounds.grass;

  // coordinates
  world.width = width*10;
  world.height = height*10;
  world.changedX = 0;
  world.changedY = 0;

  // minimap
  minimap.padWidth = width*0.15;
  minimap.padHeight = height*0.15;
  minimap.imgWidth = width*0.10;
  minimap.imgHeight = height*0.10;
  minimap.x = minimap.imgWidth/2 + minimap.padWidth/2;
  minimap.y = minimap.imgHeight/2 + minimap.padHieght/2;
}

function settingSprites() {
  // sprite size
  spriteSize.sampleWidth = width*0.30;
  spriteSize.sampleHeight = height*0.30;
  spriteSize.width = width*0.05;
  spriteSize.height = height*0.10;

  // race
  allRaces = [
    {name: "Random", img: sprites.random}, {name: "Human", img: sprites.race.human, stats: human},
    {name: "Half-Elf", img: sprites.race.halfElf, stats: halfElf}, {name: "Elf", img: sprites.race.elf, stats: elf},
    {name: "Dwarf", img: sprites.race.dwarf, stats: dwarf}, {name: "Halfling", img: sprites.race.halfling, stats: halfling},
    {name: "Goblin", img: sprites.race.goblin, stats: goblin}, {name: "Orc", img: sprites.race.orc, stats: orc},
    {name: "Uruk-Hai", img: sprites.race.urukHai, stats: urukHai}];

  // skill
  allSkills = [
    {name: "Random", img: sprites.random}, {name: "Archer", img: sprites.skill.archer, stats: archer},
    {name: "Ranger", img: sprites.skill.ranger, stats: ranger}, {name: "Fighter", img: sprites.skill.fighter, stats: fighter},
    {name: "Samurai", img: sprites.skill.samurai, stats: samurai}, {name: "Mage", img: sprites.skill.mage, stats: mage},
    {name: "Cleric", img: sprites.skill.cleric, stats: cleric}, {name: "Rogue", img: sprites.skill.rogue, stats: rogue},
    {name: "Trapper", img: sprites.skill.trapper, stats: trapper}];
}

function itemArrays() {
  items.onGround = [];
  items.playerAttack = [];
  items.enemyAttack = [];
}

function setPlayer() {
  player.race = allRaces[0];
  player.skill = allSkills[0];
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
  // buttonAtributes.settings.height = height*0.90/settings.length;
  buttonAtributes.settings.x = 0;
}
