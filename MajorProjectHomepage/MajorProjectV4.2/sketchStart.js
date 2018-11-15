// V4.2
// Travis Ahern
// Nov. 9, 2018
//
// PROBLEMS:
// - hitting the edges the player bounces
// - AI for the bad guys, sucks
// - when the bad guys are stuned and leave the screen,
// they are stuned when they re-enter the screen despite time passed
// - can't load games
//
// CREDITS:
// art by Steven Valley and Travis Ahern.
// made using javascript, in the atom text editor.
//
// TO DO:
// add the good images---------------------------5%
// get the save and load game functions working--40%
// get the settings menu working-----------------80%
// fix baddie spawns-----------------------------100%
// baddie deaths and player attack---------------75%
// baddie attacks--------------------------------20%
// have a race and skill-------------------------80%
// add a lvl system------------------------------99%
// have an actual enviorment---------------------10%
// fix all items/objects-------------------------60%
// inventory interaction-------------------------70%
// fix key bindings map--------------------------10%


// state vars
let startingState;
let state;

// other vars
let textTop;
let allFileSave = [];
let greenColor;
let raceSprites = {};
let skillImages = {};
let sprite = {};
let allRaces, allSkills;
let objectImg = {};
let objects = {};
let itemsOnGround = [];

// key bindings
let keyBindings = {};
let keyBindArray = [];
let changingKeys;

// enviorment vars
let earth;
let world = {};
let minimap = {};
let mapIsOpen = false;

// player vars
let player = {};
let nextLvl;
let rangedOn;
let magicOn;
// inventory
let mouseHolding;
let inventory = [];
let inventoryBoxSize;
let inventoryIsOpen;
let invenWidth = 8;
let invenHeight = 8;
let numOfHpPotions;
let numOfMpPotions;
let numOfArrows;
let numOfTraps;
let maxTraps;
// attacking
let attackCoolDown;
let attackCoolDownTime;
let lastTimeAttacked;
let lastTimeHit;
let elapsedTime;

// box option vars
let box = {};

// settings vars
let settingsIsOpen;
let settingsOptions = [];
let settingsChoice = -1;
let nothing = Infinity;
const WAIT_TIME = 150;

// bad guy vars
const NUM_OF_BADDIES = 75;
let badGuys = [];
let badGuysObjects = {};
let badGuysPosX = [];
let badGuysPosY = [];


function preload() {
  // backgrounds
  earth = loadImage("assets/lovelyHomepage.png");
  world.image = loadImage("assets/enviorment.png");

  // garbage can
  world.trashCanClose = loadImage("assets/garbageClosed.png");
  world.trashCanOpen = loadImage("assets/garbageOpened.png");

  // items
  objectImg.sword = loadImage("assets/Objects/images/sword.png");
  objectImg.arrow = loadImage("assets/Objects/images/arrows.png");
  objectImg.fireBall = loadImage("assets/Objects/images/fireBall.png");
  objectImg.trap = loadImage("assets/Objects/images/traps.png");
  objectImg.hpPotion = loadImage("assets/Objects/images/hpPotion.png");
  objectImg.mpPotion = loadImage("assets/Objects/images/mpPotion.png");

  // mouse pointer
  objectImg.swordIcon = loadImage("assets/Objects/images/swordIcon.png");
  objectImg.bowIcon = loadImage("assets/Objects/images/bowIcon.png");
  objectImg.magicIcon = loadImage("assets/Objects/images/magicIcon.png");

  // race sprites
  raceSprites.randomSprite = loadImage("assets/Races/Random.png");
  raceSprites.human = loadImage("assets/Races/Human.png");
  raceSprites.halfElf = loadImage("assets/Races/Half-Elf.png");
  raceSprites.elf = loadImage("assets/Races/Elf.png");
  raceSprites.dwarf = loadImage("assets/Races/Dwarf.png");
  raceSprites.halfling = loadImage("assets/Races/Halfling.png");
  raceSprites.goblin = loadImage("assets/Races/Goblin.png");
  raceSprites.orc = loadImage("assets/Races/Orc.png");
  raceSprites.urukHai = loadImage("assets/Races/Uruk-Hai.png");

  // skill sprites
  skillImages.randomSkill = loadImage("assets/Skills/Random.png");
  skillImages.archer = loadImage("assets/Skills/Archer.png");
  skillImages.ranger = loadImage("assets/Skills/Ranger.png");
  skillImages.fighter = loadImage("assets/Skills/Fighter.png");
  skillImages.samurai = loadImage("assets/Skills/Samurai.png");
  skillImages.mage = loadImage("assets/Skills/Mage.png");
  skillImages.cleric = loadImage("assets/Skills/Cleric.png");
  skillImages.rogue = loadImage("assets/Skills/Rogue.png");
  skillImages.trapper = loadImage("assets/Skills/Trapper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  startingState = 0;
  state = 0;

  // setting text font
  textTop = (width*0.03 + height*0.03)/2;
  textFont("BOLD", textTop);

  // allinging
  textAlign(CENTER);
  imageMode(CENTER);
  rectMode(CENTER);

  // settings starts closed
  settingsIsOpen = false;
  settingsOptions = ["Resume", "Controls", "Map", "Save", "Load", "Main Menu"];

  greenColor = color(0, 255, 0);

  // save files
  allFileSave = ["New Save", "New Save", "New Save", "New Save", "New Save"];

  defaultKeyBinds();
  defaultWorldMap();
  defaultSprites();
  settingItems();
  defaultPlayer();
  settingBoxSizes();
}

// setup functions
function defaultKeyBinds() {
  keyBindings = new Map();

  // unchangable
  keyBindings.set("settings", 27); // Escape
  keyBindings.set("walk", 16); // SHIFT

  // changable
  // DO NOT CHANGE THIS ORDER
  keyBindings.set("keyArray", [ // displayed bindings
    ["toggleRanged", 82], // R
    ["toggleMagic", 84], // T
    ["placeTrap", 81], // Q
    ["up", 87], // W
    ["left", 65], // A
    ["down", 83], // S
    ["right", 68], // D
    ["interact", 32], // SPACE
    ["inventory", 69], // E
    ["openMap", 77], // M
    ["drinkHealthPotion", 70], // F
    ["drinkManaPotion", 71] // G
  ]);

  changingKeys = false;
}

function defaultWorldMap() {
  // world coordinates
  world.WIDTH = width*10;
  world.HEIGHT = height*10;
  world.imageX = 0;
  world.imageY = 0;

  // minimap
  minimap.OUTTER_WIDTH = width*0.17;
  minimap.OUTTER_HEIGHT = height*0.22;
  minimap.WIDTH = width*0.15;
  minimap.HEIGHT = height*0.20;
  minimap.X = minimap.WIDTH/2 + width*0.01;
  minimap.Y = minimap.HEIGHT/2 + height*0.01;
}

function defaultSprites() {
  // sizes
  sprite.DISPLAY_WIDTH = width*0.30;
  sprite.DISPLAY_HEIGHT = height*0.50;
  sprite.WIDTH = width*0.05;
  sprite.HEIGHT = height*0.10;

  // races
  allRaces = [
    ["Random", raceSprites.randomSprite], ["Human", raceSprites.human, human],
    ["Half-Elf", raceSprites.halfElf, halfElf], ["Elf", raceSprites.elf, elf],
    ["Dwarf", raceSprites.dwarf, dwarf], ["Halfling", raceSprites.halfling, halfling],
    ["Goblin", raceSprites.goblin, goblin], ["Orc", raceSprites.orc, orc],
    ["Uruk-Hai", raceSprites.urukHai, urukHai]];

  // skills
  allSkills = [
    ["Random", skillImages.randomSkill], ["Archer", skillImages.archer, archer],
    ["Ranger", skillImages.ranger, ranger], ["Fighter", skillImages.fighter, fighter],
    ["Samurai", skillImages.samurai, samurai], ["Mage", skillImages.mage, mage],
    ["Cleric", skillImages.cleric, cleric], ["Rogue", skillImages.rogue, rogue],
    ["Trapper", skillImages.trapper, trapper]];
}

function settingItems() {
  // item arrays
  // player
  objects.melee = [];
  objects.arrows = [];
  objects.magic = [];
  objects.traps = [];
  maxTraps = 4;

  // baddies
  badGuysObjects.melee = [];
  badGuysObjects.arrows = [];
}

function defaultPlayer() {
  // player starting
  player.racePosistion = 0;
  player.skillPosistion = 0;
  player.raceImage = allRaces[0][1];
  player.skillImage = allSkills[0][1];
  player.DOT = (width*0.005 + height*0.005)/4;

  // stats
  nextLvl = 100;
  player.points = 0;
  player.exp = 0;
  player.lvl = 1;
  player.int = 1;
  player.agi = 1;
  player.str = 1;
  player.dex = 1;
  player.vit = 1;

  // damage and health
  player.invincable = false;
  player.invincableTime = 1000;
  player.totHP = 10;
  player.totMP = 10;
  player.hp = 10;
  player.mp = 10;
  player.mDmg = 10; // melee damage
  player.rDmg = 10; // ranged damage
  player.sDmg = 10; // magic damage
  player.tDmg = 10; // trap damage

  player.x = world.WIDTH/2;
  player.y = world.HEIGHT/2;
  player.movedX = 0;
  player.movedY = 0;
  player.speed = width*0.007 + width*player.agi*pow(10, -4);
  player.toggleWalk = false;

  // inventory starting
  rangedOn = false;
  magicOn = false;
  mouseHolding = 0;
  garbageHolding = 0;
  inventory = make2DArray(invenWidth, invenHeight);
  inventoryBoxSize = textTop*2;
  inventoryIsOpen = false;
  itemsOnGround = [];

  numOfHpPotions = 4;
  numOfMpPotions = 4;
  numOfArrows = 10;
  numOfTraps = 10;
  inventory[0][0] = new ItemInInventory(objectImg.hpPotion, numOfHpPotions);
  inventory[0][1] = new ItemInInventory(objectImg.mpPotion, numOfMpPotions);
  inventory[0][2] = new ItemInInventory(objectImg.arrow, numOfArrows);
  inventory[0][3] = new ItemInInventory(objectImg.trap, numOfTraps);

  attackCoolDown = false;
  attackCoolDownTime = 750;
  lastTimeAttacked = 0;
  lastTimeHit = 0;
}

function settingBoxSizes() {
  // universal
  box.height = height*0.20;
  box.width = width*0.15;
  box.yStart = height*0.10;

  // races
  box.heightRace = height*0.90/allRaces.length;
  box.xRace = width*0.15;

  // skills
  box.heightSkill = height*0.90/allSkills.length;
  box.xSkill = width*0.85;

  // settings
  box.heightSettings =  height*0.90/settingsOptions.length;
}

function make2DArray(rows, cols) {
  let newArray = [];

  // making the grid
  for (let y = 0; y < rows; y++) {
    newArray.push([]);
    for (let x = 0; x < cols; x++) {
      newArray[y].push(0);
    }
  }
  return newArray;
}
