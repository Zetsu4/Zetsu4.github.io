// V4.0
// Travis Ahern
// Nov. 1/18
//
// PROBLEMS:
// - hitting the edges the player bounces
// - AI for the bad guys, sucks
// - rebinding the key bindings only works for lowercase letters
//
// CREDITS:
// art by Steven Valley and Travis Ahern.
// some code was taken and modified from,
// Coding Train - Coding Challange - (Game of Life, Langtons Ant).
//
// TO DO:
// add the good images---------------------------5%
// get the save and load game functions working--0%
// get the settings menu working-----------------70%
// fix baddie spawns-----------------------------100%
// baddie deaths and player attack---------------45%
// baddie attacks--------------------------------10%
// have a race and skill-------------------------10%
// add a lvl system------------------------------0%
// have an actual enviorment---------------------10%
// fix all items/objects-------------------------0%
// inventory interaction-------------------------30%


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
let rangedOn;
let mouseHolding;
let garbageHolding;
let inventory = [];
let inventoryBoxSize;
let inventoryIsOpen;
let invenWidth = 8;
let invenHeight = 8;
let numOfArrows;
let numOfTraps;
let maxTraps;
let attackCoolDown;
let attackCoolDownTime;
let lastTimeAttacked;

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
  objectImg.trap = loadImage("assets/Objects/images/traps.png");

  // mouse pointer
  objectImg.swordIcon = loadImage("assets/Objects/images/swordicon.png");
  objectImg.bowIcon = loadImage("assets/Objects/images/bowicon.png");

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
  // unchangable
  keyBindings.settings = 27; // Escape
  // changable
  keyBindings.toggleRanged = 82; // r
  keyBindings.toggleMagic = 84; // t
  keyBindings.placeTrap = 81; // q
  keyBindings.up = 87; // w
  keyBindings.left = 65; // a
  keyBindings.down = 83; // s
  keyBindings.right = 68; // d
  keyBindings.interact = 70; // f
  keyBindings.inventory = 69; // e
  keyBindings.openMap = 77; // m
  keyBindArray = [ // displayed bindings
    keyBindings.toggleRanged,
    keyBindings.toggleMagic,
    keyBindings.placeTrap,
    keyBindings.up,
    keyBindings.left,
    keyBindings.down,
    keyBindings.right,
    keyBindings.interact,
    keyBindings.inventory,
    keyBindings.openMap];

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
  objects.traps = [];
  maxTraps = 4;

  // baddies
  badGuysObjects.melee = [];
  badGuysObjects.arrows = [];
  badGuysObjects.traps = [];
}

function defaultPlayer() {
  // player starting
  player.racePosistion = 0;
  player.skillPosistion = 0;
  player.raceImage = allRaces[0][1];
  player.skillImage = allSkills[0][1];
  player.DOT = (width*0.005 + height*0.005)/4;

  // stats
  player.int = 100;
  player.agi = 10;
  player.str = 100;
  player.dex = 100;
  player.vit = 100;

  // damage and health
  player.hp = 10;
  player.mDmg = 10; // melee damage
  player.rDmg = 10; // ranged damage
  player.sDmg = 10; // magic damage

  player.x = world.WIDTH/2;
  player.y = world.HEIGHT/2;
  player.speed = width*0.007 + width*player.agi*pow(10, -4);

  // inventory starting
  rangedOn = false;
  mouseHolding = 0;
  garbageHolding = 0;
  inventory = make2DArray(invenWidth, invenHeight);
  inventoryBoxSize = textTop*2;
  inventoryIsOpen = false;
  itemsOnGround = [];

  numOfArrows = 10;
  numOfTraps = 10;
  inventory[0][0] = new itemInInventory(objectImg.arrow, numOfArrows);
  inventory[0][1] = new itemInInventory(objectImg.trap, numOfTraps);

  attackCoolDown = false;
  attackCoolDownTime = 500;
  lastTimeAttacked = 0;
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
