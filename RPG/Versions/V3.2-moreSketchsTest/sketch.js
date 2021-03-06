// V3.2 - more sketch test
// Travis Ahern
// Nov. 01/18
//
// PROBLEMS:
// - hitting the edges the player bounces
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
let inventory = [];
let inventoryBoxSize;
let inventoryIsOpen;
let invenWidth = 8;
let invenHeight = 8;
let numOfArrows;
let numOfTraps;
let maxTraps;

// box option vars
let box = {};

// settings vars
let settingsIsOpen;
let settingsOptions = [];
let settingsChoice = -1;
let nothing = Infinity;
const WAIT_TIME = 150;

// bad guy vars
const NUM_OF_BADDIES = 50;
let badGuys = [];
let badGuysObjects = {};
let badGuysPosX = [];
let badGuysPosY = [];


function preload() {
  // backgrounds
  earth = loadImage("assets/lovelyHomepage.png");
  world.image = loadImage("assets/enviorment.png");

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
  keyBindings.placeTrap = 67; // c
  keyBindings.up = 87; // w
  keyBindings.left = 65; // a
  keyBindings.down = 83; // s
  keyBindings.right = 68; // d
  keyBindings.interact = 32; // Space
  keyBindings.inventory = 69; // e
  keyBindings.openMap = 77; // m
  keyBindArray = [ // displayed bindings
    keyBindings.toggleRanged,
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
    ["Random", raceSprites.randomSprite], ["Human", raceSprites.human],
    ["Half-Elf", raceSprites.halfElf], ["Elf", raceSprites.elf],
    ["Dwarf", raceSprites.dwarf], ["Halfling", raceSprites.halfling],
    ["Goblin", raceSprites.goblin], ["Orc", raceSprites.orc],
    ["Uruk-Hai", raceSprites.urukHai]];

  // skills
  allSkills = [
    ["Random", skillImages.randomSkill], ["Archer", skillImages.archer],
    ["Ranger", skillImages.ranger], ["Fighter", skillImages.fighter],
    ["Samurai", skillImages.samurai], ["Mage", skillImages.mage],
    ["Cleric", skillImages.cleric], ["Rogue", skillImages.rogue],
    ["Trapper", skillImages.trapper]];
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
  player.race = allRaces[0][1];
  player.skill = allSkills[0][1];
  player.DOT = (width*0.005 + height*0.005)/4;

  player.x = world.WIDTH/2;
  player.y = world.HEIGHT/2;

  player.speed = width*0.008; // temp

  // inventory starting
  rangedOn = false;
  mouseHolding = 0;
  inventory = make2DArray(invenWidth, invenHeight);
  inventoryBoxSize = textTop*2;
  inventoryIsOpen = false;

  numOfArrows = 5;
  numOfTraps = 10;
  inventory[0][0] = objectImg.arrow;
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

//------------------------------------------------------------------------------
//  CHECKING STATE--, startingState #'s          START
//------------------------------------------------------------------------------

function startMenu() {
  // start menu
  image(earth, width/2, height/2, width, height);

  if (state === 0) {
    // title screen
    fill(217, 128, 38);
    text("WELCOME TO EQUESTRIA", width/2, textTop);

    // options
    newGame();
    loadGame();
  }

  else if (state === 1) {
    // load game
    backButton();
    showSaves();
  }
}

function createChar() {
  // character creation
  if (state === 0) {
    image(earth, width/2, height/2, width, height);
    backButton();
    continueButton();

    // races
    selectRace();
    selectedRace();

    // skills
    selectSkill();
    selectedSkill();
  }

  if (state === 1) {
    // random character creation
    if (player.racePosistion === 0) {
      player.racePosistion = int(random(1, allRaces.length));
      player.race = allRaces[player.racePosistion][1];
    }

    if (player.skillPosistion === 0) {
      player.skillPosistion = int(random(1, allSkills.length));
      player.skill = allSkills[player.skillPosistion][1];
    }

    startingState = 2;
    state = 0;
    createBaddies();
  }
}

function createBaddies() {
  // starting baddies
  for (let i = 0; i < NUM_OF_BADDIES; i++) {
    // secret ending (in case things break)
    if (world.WIDTH <= width*2 && world.HEIGHT <= height*2) {
      print("YOU WIN THE GAME, GOOD FOR YOU!");
      secretEnding();
      break;
    }

    // spawning baddies
    let race = int(random(1, allRaces.length));
    let skill = int(random(1, allSkills.length));
    let xSpawn = random(-world.WIDTH/2 + width*0.10, world.WIDTH/2 - width*0.10);
    let ySpawn = random(-world.HEIGHT/2 + height*0.10, world.HEIGHT/2 - height*0.10);

    while (xSpawn >= -width*0.75 && xSpawn <= width*0.75
      && ySpawn >= -height*0.75 && ySpawn <= height*0.75) {

      xSpawn = random(-world.WIDTH/2 + width*0.10, world.WIDTH/2 - width*0.10);
      ySpawn = random(-world.HEIGHT/2 + height*0.10, world.HEIGHT/2 - height*0.10);
    }

    badGuys.push(new baddies(allRaces[race], allSkills[skill],
      xSpawn, ySpawn, player.speed));
  }
}

function playingGame() {
  if (settingsIsOpen) {
    settingsMenu();
  }

  else if (inventoryIsOpen) {
    lookInInventory();
  }

  else if (mapIsOpen) {
    drawMap();
  }

  // game enviorments
  else if (state === 0) {
    // background
    scrollingBackground();

    // minimap
    showMinimap();

    // player
    playerShow();
    playerMovement();
    playerMinimap(
      minimap.X, minimap.Y,
      minimap.WIDTH, minimap.HEIGHT,
      player.DOT);
    beautifulMouse();

    // baddies
    baddiesFoo();

    // objects
    objectFoo();
    floatingItems();
  }
}

// CHECKING STATE--
function draw() {
  image(world.image, width/2, height/2, width, height);

  // START MENU------
  if (startingState === 0) {
    startMenu();
  }

  // CREATE CHARACTER
  else if(startingState === 1) {
    createChar();
  }

  // PLAYING THE GAME
  else if (startingState === 2){
    playingGame();
  }

  // ENDINGS---------
  else if (startingState === "ending") {
    if (state === "secretEnding") {
      secretEnding();
    }
    else if (state === "gameOver") {
      gameOver();
    }
  }
}

//------------------------------------------------------------------------------
//  CHECKING STATE--, startingState #'s          END
//------------------------------------------------------------------------------
