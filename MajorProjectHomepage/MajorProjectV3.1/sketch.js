// V3.1
// Travis Ahern
// Oct. 28/18
//
// PROBLEMS:
// - hitting the edges the player bounces
//
// CREDITS:
// art by Steven Valley.
// some code was taken and modified from,
// Coding Train - Coding Challange - (Game of Life, Langtons Ant).
//
// add the good images---------------------------5%
// get the save and load game functions working--0%
// get the settings menu working-----------------60%
// fix baddie spawns-----------------------------100%
// baddie deaths and player attack---------------30%
// have a race and skill-------------------------0%
// add a lvl system------------------------------0%
// have an actual enviorment---------------------10%

// state vars
let startingState; // start menu variable
let state; // state variable

// other vars
let textTop; // text at top of screen also the font size
let allFileSave = []; // files that have been saved
let greenColor; // bright green
let raceSprites = {}; // race sprites
let skillImages = {}; // skill images
let sprite = {}; // sprite sizes
let allRaces, allSkills; // all races and skills
let itemDrop = {}; // item images in game
let objectImg = {}; // object images
let objects = {}; // objects, like arrows
let maxTraps; // max number of traps the player can have

// key bindings
let keyBindings = {}; // key bindings
let keyBindArray = []; // display array
let changingKeys;

// enviorment vars
let earth; // the Lovely Homepage
let world = {}; // world bounds
let minimap = {}; // minimap vars
let mapIsOpen = false; // map

// player vars
let player = {}; // player settings
let rangedOn; // ranged wepeon toggle
let mouseHolding; // item in mouse
let inventory = []; // inventory
let inventoryBoxSize; // box size
let inventoryIsOpen; // inventory toggle
let invenWidth = 8;
let invenHeight = 8;

let numOfArrows;

// box option vars
let box = {}; // choice box size

// settings vars
let settingsIsOpen; // settings toggle
let settingsOptions = []; // settings options
let settingsChoice = -1; // settings choice
let nothing = Infinity; // literally nothing
const WAIT_TIME = 150; // wait time for clicking "Main menu"

// bad guy vars
const NUM_OF_BADDIES = 50; // number of bad guys
let badGuys = []; // where bad guy objects go
let badGuysPosX = []; // collision spots x
let badGuysPosY = []; // collision spots y

// loading data
function preload() {
  // backgrounds
  earth = loadImage("assets/lovelyHomepage.png");
  world.image = loadImage("assets/enviorment2.png");

  // objects
  objectImg.sword = loadImage("assets/Objects/sword.png");
  objectImg.arrow = loadImage("assets/Objects/arrows.png");
  objectImg.trap = loadImage("assets/Objects/traps.png");

  // object markers
  objectImg.swordIcon = loadImage("assets/Objects/swordicon.png");
  objectImg.bowIcon = loadImage("assets/Objects/bowicon.png");

  // sprites
  raceSprites.randomSprite = loadImage("assets/Races/Random.png");
  raceSprites.human = loadImage("assets/Races/Human.png");
  raceSprites.halfElf = loadImage("assets/Races/Half-Elf.png");
  raceSprites.elf = loadImage("assets/Races/Elf.png");
  raceSprites.dwarf = loadImage("assets/Races/Dwarf.png");
  raceSprites.halfling = loadImage("assets/Races/Halfling.png");
  raceSprites.goblin = loadImage("assets/Races/Goblin.png");
  raceSprites.orc = loadImage("assets/Races/Orc.png");
  raceSprites.urukHai = loadImage("assets/Races/Uruk-Hai.png");

  // skills
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
  textAlign(CENTER);

  // setting image origin to center
  imageMode(CENTER);
  rectMode(CENTER);

  greenColor = color(0, 255, 0);

  // key bindings
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
  keyBindArray = [ // display bindings
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

  // world coordinates
  world.WIDTH = width*10;
  world.HEIGHT = height*10;
  world.imageX = 0;
  world.imageY = 0;

  // minimap vars
  minimap.OUTTER_WIDTH = width*0.17;
  minimap.OUTTER_HEIGHT = height*0.22;
  minimap.WIDTH = width*0.15;
  minimap.HEIGHT = height*0.20;
  minimap.X = minimap.WIDTH/2 + width*0.01;
  minimap.Y = minimap.HEIGHT/2 + height*0.01;

  // save files
  allFileSave = ["New Save", "New Save", "New Save", "New Save", "New Save"];

  // image sizes
  sprite.DISPLAY_WIDTH = width*0.30;
  sprite.DISPLAY_HEIGHT = height*0.50;
  sprite.WIDTH = width*0.05;
  sprite.HEIGHT = height*0.10;

  // race options
  allRaces = [
    ["Random", raceSprites.randomSprite], ["Human", raceSprites.human],
    ["Half-Elf", raceSprites.halfElf], ["Elf", raceSprites.elf],
    ["Dwarf", raceSprites.dwarf], ["Halfling", raceSprites.halfling],
    ["Goblin", raceSprites.goblin], ["Orc", raceSprites.orc],
    ["Uruk-Hai", raceSprites.urukHai]];

  // skill options
  allSkills = [
    ["Random", skillImages.randomSkill], ["Archer", skillImages.archer],
    ["Ranger", skillImages.ranger], ["Fighter", skillImages.fighter],
    ["Samurai", skillImages.samurai], ["Mage", skillImages.mage],
    ["Cleric", skillImages.cleric], ["Rogue", skillImages.rogue],
    ["Trapper", skillImages.trapper]];

  // objects
  objects.melee = [];
  objects.arrows = [];
  objects.traps = [];
  maxTraps = 4;

  // player vars
  player.racePosistion = 0;
  player.skillPosistion = 0;
  player.race = allRaces[0][1];
  player.skill = allSkills[0][1];
  player.DOT = (width*0.005 + height*0.005)/4;

  player.x = world.WIDTH/2;
  player.y = world.HEIGHT/2;

  player.speed = 10; // temp

  rangedOn = false;
  mouseHolding = 0;
  inventory = make2DArray(invenWidth, invenHeight);
  inventoryBoxSize = textTop*2;
  inventoryIsOpen = false;

  numOfArrows = 5;
  inventory[0][0] = objectImg.arrow;

  // settings starts closed
  settingsIsOpen = false;
  settingsOptions = ["Resume", "Controls", "Map", "Save", "Load", "Main Menu"];

  // constant options
  box.height = height*0.20; // start menu box hieght
  box.width = width*0.15;
  box.yStart = height*0.10;

  // race options
  box.heightRace = height*0.90/allRaces.length;
  box.xRace = width*0.15;

  // skill options
  box.heightSkill = height*0.90/allSkills.length;
  box.xSkill = width*0.85;

  // settings options
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
//  START MENU------                             START
//------------------------------------------------------------------------------

// create new character option
function optionCreateNewSave() {

  if (buttonFoo(width/2, height*0.55, box.width*2, box.height, "red", greenColor, "CREATE NEW FILE")) {
    startingState = 1;
  }
}

// load character option
function optionLoadSave() {

  if (buttonFoo(width/2, height*0.80, box.width*2, box.height, "red", greenColor, "LOAD SAVE FILE")) {
    state = 1;
  }

  let boxPosY = height*0.80;

  // hovering over the choice
  if (mouseX >= width/2 - box.width && mouseX <= width/2 + box.width
    && mouseY >= boxPosY - box.height/2 && mouseY <= boxPosY + box.height/2) {

    fill(0, 255, 0);
    if (mouseIsPressed) {
      state = 1;
    }
  }

  // not hovering over the choice
  else {
    fill("red");
  }

  // box
  rect(width/2, boxPosY, box.width*2, box.height);
  fill("black");
  text("LOAD SAVE FILE", width/2, boxPosY);
}

// chose a saved file
function showSaves() {
  displayOptions(allFileSave, width/2, box.width, box.height);
}

// save game
function saveGame() {

}

//------------------------------------------------------------------------------
//  START MENU------                             END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  CREATE CHARACTER, startingState 2            START
//------------------------------------------------------------------------------

// draw a button
function buttonFoo(boxPosX, boxPosY,
  boxWidth, boxHeight,
  restColor, hoverColor,
  words) {

  if (mouseX >= boxPosX - boxWidth/2 && mouseX <= boxPosX + boxWidth/2
    && mouseY >= boxPosY - boxHeight/2 && mouseY <= boxPosY + boxHeight/2) {
    fill(hoverColor);

    // clicking button
    if (mouseIsPressed) {
      return true;
    }
  }

  // not hovering over box
  else {
    fill(restColor);
  }

  //creating the box
  rect(boxPosX, boxPosY, boxWidth, boxHeight);

  // writing "back"
  fill("Black");
  text(words, boxPosX, boxPosY + textTop/4);
  return false;
}

function displayOptions(theArray, xPos,
  boxWidth, boxHeight,
  restColor = "orange", hoverColor = "lightOrange", arrayPos2 = false) {

  for (let i = 0; i < theArray.length; i++) {
    let yPos = box.yStart + i*boxHeight;

    if (arrayPos2) {
      buttonFoo(xPos, yPos, boxWidth, boxHeight, restColor, hoverColor, theArray[i][0]);
    }

    else {
      buttonFoo(xPos, yPos, boxWidth, boxHeight, restColor, hoverColor, theArray[i]);
    }
  }
}


// RACE------------

// race options
function selectRace() {
  displayOptions(allRaces, box.xRace,
    box.width, box.heightRace,
    "red", greenColor, true);

  let xLeft = box.xRace - box.width/2;
  let xRight = box.xRace + box.width/2;

  if (mouseIsPressed && mouseX >= xLeft && mouseX <= xRight) {
    for (let i = 0; i < allRaces.length; i++) {
      let yTop = box.yStart + i*box.heightRace - box.heightRace/2;
      let yBottom = box.yStart + i*box.heightRace + box.heightRace/2;

      if (mouseY >= yTop && mouseY <= yBottom) {
        player.racePosistion = i;
        player.race = allRaces[i][1];
      }
    }
  }
}

function selectedRace() {
  let boxPosY = box.yStart + player.racePosistion*box.heightRace;

  // creating the selected box
  fill(0, 255, 0);
  rect(box.xRace, boxPosY, box.width, box.heightRace);

  // writing the skill name
  fill("black");
  text(allRaces[player.racePosistion][0], box.xRace, boxPosY + box.heightRace/4, box.width, box.heightRace);

  image(player.race, width/2, height*0.70, sprite.DISPLAY_WIDTH, sprite.DISPLAY_HEIGHT);
}


// SKILL-----------

// skill options
function selectSkill() {
  displayOptions(allSkills, box.xSkill,
    box.width, box.heightSkill,
    "red", greenColor, true);

  let xLeft = box.xSkill - box.width/2;
  let xRight = box.xSkill + box.width/2;

  if (mouseIsPressed && mouseX >= xLeft && mouseX <= xRight) {
    for (let i = 0; i < allSkills.length; i++) {
      let yTop = box.yStart + i*box.heightSkill - box.heightSkill/2;
      let yBottom = box.yStart + i*box.heightSkill + box.heightSkill/2;

      if (mouseY >= yTop && mouseY <= yBottom) {
        player.skillPosistion = i;
        player.skill = allSkills[i][1];
      }
    }
  }
}

function selectedSkill() {
  let boxPosY = box.yStart + player.skillPosistion*box.heightSkill;

  // creating the selected box
  fill(0, 255, 0);
  rect(box.xSkill, boxPosY, box.width, box.heightSkill);

  // writing the skill name
  fill("black");
  text(allSkills[player.skillPosistion][0], box.xSkill, boxPosY + box.heightSkill/4, box.width, box.heightSkill);

  image(player.skill, box.xSkill - box.width, box.yStart, sprite.WIDTH + box.width/4, sprite.HEIGHT + box.heightSkill/2);
}


// BACK/CONTINUE---

// back button
function backButton() {
  let boxWidth = box.width*0.30;
  let boxPosX = boxWidth/2;
  let boxPosY = height*0.01;

  // hovering over box
  if (mouseX >= boxPosX - boxWidth/2 && mouseX <= boxPosX + boxWidth/2
  && mouseY >= 0 && mouseY <= boxPosY + box.yStart/2) {
    // settings menu
    if (settingsIsOpen) {
      fill("lightorange");
    }
    // start menu
    else {
      fill(0, 255, 0);
    }

    // clicking button
    if (mouseIsPressed) {
      // settings menu
      if (settingsIsOpen) {
        settingsChoice = -1;
      }
      // start menu
      else {
        startingState = 0;
        state = 0;
      }
    }
  }

  // not hovering over box
  else {
    // settings menu
    if (settingsIsOpen) {
      fill("orange");
    }
    // start menu
    else {
      fill("red");
    }
  }

  //creating the box
  rect(boxPosX, boxPosY, boxWidth, box.yStart);

  // writing "back"
  fill("Black");
  textSize(height*0.02);
  text("BACK", boxPosX, textTop);
  textSize(textTop);
}

// continue button
function continueButton() {
  // creating the box
  fill(0, 255, 0);
  rect(width/2, 0, box.width*1.50, box.yStart);

  // writing "continue"
  fill("Black");
  text("CONTINUE", width/2, textTop);

  // button clicked
  if (mouseIsPressed && mouseX >= width/2 - box.width*1.50/2 && mouseX <= width/2 + box.width*1.50/2) {
    if (mouseY >= 0 && mouseY <= box.yStart/2) {
      state = 1;
    }
  }
}

//------------------------------------------------------------------------------
//  CREATE CHARACTER, startingState 2            END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  PLAYING THE GAME, startingState 3            START
//------------------------------------------------------------------------------


// BACKGROUND------

// background
function scrollingBackground() {
  image(world.image, world.imageX + width/2, world.imageY + height/2, world.WIDTH, world.HEIGHT);
}


// MINIMAP---------

// minimap
function showMinimap() {
  // outter map
  fill("gold");
  rect(minimap.X, minimap.Y, minimap.OUTTER_WIDTH, minimap.OUTTER_HEIGHT);

  // inner map
  image(world.image, minimap.X, minimap.Y, minimap.WIDTH, minimap.HEIGHT);
}


// PLAYER----------

// show player
function playerShow() {
  image(player.race, width/2, height/2, sprite.WIDTH, sprite.HEIGHT);
  image(player.skill, width/2, height/2 - sprite.HEIGHT, sprite.WIDTH, sprite.HEIGHT);
}

// player movement
function playerMovement() {
  // x-axis
  if (keyIsDown(keyBindArray[3])) { // a
    player.x -= player.speed;
    world.imageX += player.speed;
  }

  if (keyIsDown(keyBindArray[5])) { // d
    player.x += player.speed;
    world.imageX -= player.speed;
  }

  // y-axis
  if (keyIsDown(keyBindArray[2])) { // w
    player.y -= player.speed;
    world.imageY += player.speed;
  }

  if (keyIsDown(keyBindArray[4])) { // s
    player.y += player.speed;
    world.imageY -= player.speed;
  }
  moveWithPlayer();
}

// objects moving with player
function moveWithPlayer() {
  // edges-x
  if (player.x < 0 || player.x > world.WIDTH) {
    // constrain x
    player.x = constrain(player.x, 0, world.WIDTH);
    world.imageX = constrain(world.imageX, -world.WIDTH/2 + sprite.WIDTH/2, world.WIDTH/2 - sprite.WIDTH/2);
  }

  else {
    // baddies moving with player left/right
    for (let badGuy of badGuys) {
      badGuy.moveWithPlayerX(keyBindArray[3], keyBindArray[5]);
    }
    // traps
    for (let trap of objects.traps) {
      trap.moveWithPlayerX(keyBindArray[3], keyBindArray[5]);
    }
    // arrows
    for (let arrow of objects.arrows) {
      arrow.moveWithPlayerX(keyBindArray[3], keyBindArray[5]);
    }
    // slashes
    for (let slash of objects.melee) {
      slash.moveWithPlayerX(keyBindArray[3], keyBindArray[5]);
    }
  }

  // edges-y
  if (player.y < 0 || player.y > world.HEIGHT) {
    // constrain y
    player.y = constrain(player.y, 0, world.HEIGHT);
    world.imageY = constrain(world.imageY, -world.HEIGHT/2 + sprite.HEIGHT/2, world.HEIGHT/2 - sprite.HEIGHT/2);
  }

  else {
    // baddies moving with player up/down
    for (let badGuy of badGuys) {
      badGuy.moveWithPlayerY(keyBindArray[2], keyBindArray[4]);
    }
    // traps
    for (let trap of objects.traps) {
      trap.moveWithPlayerY(keyBindArray[2], keyBindArray[4]);
    }
    // arrows
    for (let arrow of objects.arrows) {
      arrow.moveWithPlayerY(keyBindArray[2], keyBindArray[4]);
    }
    // slashes
    for (let slash of objects.melee) {
      slash.moveWithPlayerY(keyBindArray[2], keyBindArray[4]);
    }
  }
}

// player on minimap
function playerMinimap(
  minimapX, minimapY,
  minimapW, minimapH,
  dotSize) {
  // minimap boundries
  let minimapXMin = minimapX - minimapW/2 + dotSize/2;
  let minimapXMax = minimapX + minimapW/2 - dotSize/2;

  let minimapYMin = minimapY - minimapH/2 + dotSize/2;
  let minimapYMax = minimapY + minimapH/2 - dotSize/2;

  // mapping dot
  let playerX = map(player.x, 0, world.WIDTH, minimapXMin, minimapXMax, true);
  let playerY = map(player.y, 0, world.HEIGHT, minimapYMin, minimapYMax, true);

  // mapping screen on the map
  let rectWidth = map(width, 0, world.WIDTH, minimapXMin, minimapXMax - world.WIDTH*0.01);
  let rectHeight = map(height, 0, world.HEIGHT, minimapYMin, minimapYMax - world.HEIGHT*0.008);

  // player dot
  fill("blue");
  ellipse(playerX, playerY, dotSize);

  // puuting screen on the map
  noFill();
  stroke("white");
  rect(playerX, playerY, rectWidth, rectHeight);
  noStroke();
}

// beautify the mouse, sort of
function beautifulMouse() {
  let mousePos = atan2(mouseY - height/2, mouseX - width/2);
  push();
  translate(width/2, height/2);
  rotate(mousePos);
  if (rangedOn) {
    image(objectImg.bowIcon, sprite.WIDTH/2, 0, sprite.WIDTH, sprite.HEIGHT);
  }
  else {
    image(objectImg. swordIcon, sprite.WIDTH/2, 0, sprite.WIDTH, sprite.HEIGHT);
  }
  pop();
}


// INVENTORY-------

// open inventory
function lookInInventory() {
  background(179, 119, 0);
  stroke(204, 102, 0);
  rectMode(CORNER);
  for (let y = 0; y < inventory.length; y++) {
    for (let x = 0; x < inventory[y].length; x++) {
      let xPos = x*inventoryBoxSize + textTop/2;
      let yPos = y*inventoryBoxSize + textTop/2;

      fill(153, 77, 0);
      rect(xPos, yPos, inventoryBoxSize, inventoryBoxSize);
      hoverOverTile();
      drawImages();
      mouseHoldingImage();
    }
  }
  rectMode(CENTER);
}

function hoverOverTile() {
  let x = floor((mouseX - textTop/2) / inventoryBoxSize);
  let y = floor((mouseY - textTop/2) / inventoryBoxSize);

  // highlighting mouse spot
  if (x < invenWidth && x >= 0 && y < invenHeight && y >= 0) {
    fill(179, 89, 0);
    rect(x*inventoryBoxSize + textTop/2, y*inventoryBoxSize + textTop/2, inventoryBoxSize, inventoryBoxSize);
  }
}

function drawImages() {
  for (let y = 0; y < inventory.length; y++) {
    for (let x = 0; x < inventory[y].length; x++) {
      if (inventory[y][x] !== 0) {
        image(inventory[y][x], x*inventoryBoxSize + textTop*1.50, y*inventoryBoxSize + textTop*1.50, inventoryBoxSize, inventoryBoxSize);
      }
    }
  }
}

function mouseHoldingImage() {
  if (mouseHolding !== 0) {
    image(mouseHolding, pmouseX, pmouseY, inventoryBoxSize, inventoryBoxSize);
  }
}



// SETTINGS--------

// settings menu
function settingsMenu() {

  if (settingsChoice === -1) {
    changingKeys = false;
    for (let i = 0; i < settingsOptions.length; i++) {
      let yPos = box.yStart + i*box.heightSettings;

      if (buttonFoo(width/2, yPos, box.width, box.heightSettings, "orange", "lightorange", settingsOptions[i])) {
        settingsChoice = settingsOptions[i];
      }
    }
  }

  if (settingsChoice === "Resume") {
    settingsIsOpen = !settingsIsOpen;
    settingsChoice = -1;
  }

  else if (settingsChoice === "Controls") {
    displayControls();
  }

  else if (settingsChoice === "Map") {
    drawMap();
  }

  else if (settingsChoice === "Save") {
    saveGame();
  }

  else if (settingsChoice === "Load") {
    showSaves();
  }

  else if (settingsChoice === "Main Menu") {
    startingState = 0;
    state = 0;
    changingKeys = false;
    badGuys = [];
    waiting();
    setup();
  }

  if (settingsChoice !== -1) {
    backButton();
  }
}

// key bindings
function displayControls() {
  image(world.image, width/2, height/2, width, height);
  fill("orange");
  rect(width/2, height/2, width*0.40, height);

  fill("black");
  // if this changes, change the "reBindKeys" function
  text(
    "ESC - OPEN SETTINGS\n\
    RIGHT MOUSE BUTTON - ATTACK\n\
    " + String.fromCharCode(keyBindArray[0]) + " - TOGGLE RANGED ATTACK\n\
    " + String.fromCharCode(keyBindArray[1]) + " - PLACE TRAP\n\
    " + String.fromCharCode(keyBindArray[2]) + " - UP\n\
    " + String.fromCharCode(keyBindArray[3]) + " - LEFT\n\
    " + String.fromCharCode(keyBindArray[4]) + " - DOWN\n\
    " + String.fromCharCode(keyBindArray[5]) + " - RIGHT\n\
    " + String.fromCharCode(keyBindArray[6]) + " - INTERACT\n\
    " + String.fromCharCode(keyBindArray[7]) + " - INVENTORY\n\
    " + String.fromCharCode(keyBindArray[8]) + " - OPEN MAP",
    width/2, textTop);
  reBindKeys_Button();
  if (changingKeys) {
    reBindKeys();
  }
}

// change key bindings
function reBindKeys() {
  let boxWidth = box.width/2;
  let boxHeight = textTop*1.30;
  let xPos = width*0.15 + boxWidth;

  for (let i = 0; i < keyBindArray.length; i++) {
    let yPos = box.yStart + i*boxHeight + textTop;

    if (buttonFoo(xPos, yPos, boxWidth, boxHeight, "orange", "lightorange", String.fromCharCode(keyBindArray[i]))) {
      waiting();
      let newKey = prompt("Please enter new key", String.fromCharCode(keyBindArray[i]));

      if (newKey === " ") {
        keyBindArray[i] = 32;
      }

      else if (newKey !== null) {
        keyBindArray[i] = newKey.charCodeAt(0) - 32;
      }
    }
  }
}

function reBindKeys_Button() {
  push();
  textSize(height*0.02);
  if (buttonFoo(width - box.width, height*0.95, box.width, height*0.05, "orange", "lightorange", "CHANGE KEYBINDINGS")) {
    waiting();
    changingKeys = !changingKeys;
  }
  pop();
}


// map
function drawMap() {
  image(world.image, width/2, height/2, width, height);

  playerMinimap(
    width/2, height/2,
    width, height,
    player.DOT*4);

  for (let badGuy of badGuys) {
    badGuy.mapping(
      world.WIDTH, world.HEIGHT,
      width/2, height/2,
      width, height,
      player.DOT*4);
  }
}


// OTHER FUNCTIONS-

// waiting
function waiting() {
  let waiting = millis();
  while (millis() - waiting <= WAIT_TIME) {
    nothing--;
  }
}

// object functions
function objectFoo() {
  // translate(width/2, height/2);

  for (let slash of objects.melee) { // sword
    slash.moveForward();
  }

  for (let arrow of objects.arrows) { // arrows
    arrow.moveForward();
  }
}

// baddies functions
function baddiesFoo() {
  for (let i = 0; i < badGuys.length; i++) {
    if (badGuys[i].baddieOnScreen(player.x, player.y, world.WIDTH, world.HEIGHT)) {
      badGuys[i].attackPlayer(player.x, player.y, world.WIDTH, world.HEIGHT);
    }

    else {
      badGuys[i].movement(
        world.WIDTH, world.HEIGHT,
        sprite.WIDTH, sprite.HEIGHT,
        player.x, player.y);
    }

    badGuys[i].mapping(
      world.WIDTH, world.HEIGHT,
      minimap.X, minimap.Y,
      minimap.WIDTH, minimap.HEIGHT,
      player.DOT);

    badGuys[i].show(sprite.WIDTH, sprite.HEIGHT);
    // if (badGuys[i].collision(sprite.WIDTH, sprite.HEIGHT)) {
    //   gameOver();
    //   break;
    // }

    // object collision
    let badX = badGuys[i].otherX + width/2;
    let badY = badGuys[i].otherY + height/2;
    for (let trap = 0; trap < objects.traps.length; trap++) { // traps
      objects.traps[trap].show(sprite.WIDTH, sprite.HEIGHT);
      if (objects.traps[trap].alingment === "good" && dist(badX, badY, objects.traps[trap].x, objects.traps[trap].y) <= sprite.WIDTH/2) {
        objects.traps.splice(trap, 1);
        badGuys.splice(i, 1);
      }
    }

    for (let slash = 0; slash < objects.melee.length; slash++) { // sword
      objects.melee[slash].show(sprite.WIDTH, sprite.HEIGHT);
      if (objects.melee[slash].disapear(sprite.WIDTH)) {
        objects.melee.splice(slash, 1);
      }

      else if (objects.melee[slash].alingment === "good" && dist(badX, badY, objects.melee[slash].realX, objects.melee[slash].realY) <= (sprite.WIDTH + sprite.HEIGHT)/2) {
        objects.melee.splice(slash, 1);
        badGuys.splice(i, 1);
      }
    }

    for (let arrow = 0; arrow < objects.arrows.length; arrow++) { // arrows
      objects.arrows[arrow].show(sprite.WIDTH, sprite.HEIGHT);
      if (objects.arrows[arrow].disapear()) {
        objects.arrows.splice(arrow, 1);
      }

      else if (objects.arrows[arrow].alingment === "good" && dist(badX, badY, objects.arrows[arrow].realX, objects.arrows[arrow].realY) <= (sprite.WIDTH + sprite.HEIGHT)/2) {
        objects.arrows.splice(arrow, 1);
        badGuys.splice(i, 1);
      }
    }
  }
}

// key pressed functions
function keyPressed() {
  // opening settings
  if (keyCode === keyBindings.settings && startingState === 2) {
    settingsIsOpen = !settingsIsOpen;
    settingsChoice = -1;
  }

  // opening map
  if (keyCode === keyBindArray[8] && startingState === 2 && !inventoryIsOpen) {
    mapIsOpen = !mapIsOpen;
  }

  // opening inventory
  if (keyCode === keyBindArray[7] && startingState === 2 && !settingsIsOpen) {
    inventoryIsOpen = !inventoryIsOpen;
  }

  // placing traps
  if (keyCode === keyBindArray[1] && startingState === 2 && !settingsIsOpen && !inventoryIsOpen && objects.traps.length < maxTraps) {
    objects.traps.push(new trap(width/2, height/2, objectImg.trap, player.speed, "good"));
  }

  // switching from melee to ranged
  if (keyCode === keyBindArray[0] && startingState === 2 && !settingsIsOpen) {
    rangedOn = !rangedOn;
  }

}

// player attack
function mousePressed() {
  if (startingState === 2 && !settingsIsOpen && !inventoryIsOpen && !mapIsOpen) {
    // ranged attack
    if (rangedOn && numOfArrows > 0) {
      objects.arrows.push(new arrow(0, sprite.WIDTH, objectImg.arrow, "good", player.speed));
      numOfArrows--;
    }
    // melee attack
    else if (!rangedOn) {
      objects.melee.push(new sword(0, sprite.WIDTH, objectImg.sword, "good", player.speed));
    }
  }

  if (inventoryIsOpen) {
    let x = floor((mouseX - textTop/2) / inventoryBoxSize);
    let y = floor((mouseY - textTop/2) / inventoryBoxSize);

    // interacting with grid
    if (x < invenWidth && x >= 0 && y < invenHeight && y >= 0) {
      let newMouse = inventory[y][x];
      let gridSpot = mouseHolding;

      inventory[y][x] = gridSpot;
      mouseHolding = newMouse;
    }
  }
}

//------------------------------------------------------------------------------
//  PLAYING THE GAME, startingState 3            END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  CHECKING STATE--, startingState #'s          START
//------------------------------------------------------------------------------

// start menu
function startMenu() {
  image(earth, width/2, height/2, width, height);

  // start menu
  if (state === 0) {
    // title screen
    fill(217, 128, 38);
    text("WELCOME TO EQUESTRIA", width/2, textTop);

    // options
    optionCreateNewSave();
    optionLoadSave();
  }

  // files that have been saved
  else if (state === 1) {
    backButton();
    showSaves();
  }
}

// creating a character
function createChar() {
  // character creation
  if (state === 0) {
    // background and continue
    image(earth, width/2, height/2, width, height);
    backButton();
    continueButton();

    // race
    selectRace();
    selectedRace();

    // skill
    selectSkill();
    selectedSkill();
  }

  // random character creation
  if (state === 1) {
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

// creating starting baddies
function createBaddies() {
  for (let i = 0; i < NUM_OF_BADDIES; i++) {
    // secret ending YES
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

// playing the game
function playingGame() {
  // settings menu
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

  // GAME OVER-------
  else if (startingState === "gameOver") {
    gameOver();
  }

  // ENDING----------
  else if (startingState === "ending") {
    if (state === "secretEnding") {
      secretEnding();
    }
  }
}

//------------------------------------------------------------------------------
//  CHECKING STATE--, startingState #'s          END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  ENDING----------, end game states   START
//------------------------------------------------------------------------------

// secret ending
function secretEnding() {
  startingState = "ending";
  state = "secretEnding";
  background(255);
  fill("orange");
  text("YOU'VE DISCOVERED THE SECRET ENDING!\
  \nGOOD FOR YOU!!", width/2, height/2);
  textFont("Font Style Normal", textTop/2);
  text("you cheater", width/2, height*0.80);
  textFont("BOLD", textTop);
}

//------------------------------------------------------------------------------
//   ENDING---------, end game states   END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  GAME OVER-------, startingState "gameOver"   START
//------------------------------------------------------------------------------
function gameOver() {
  startingState = "gameOver";
  state = "gameOver";
  background(0);
  fill("red");
  text("GAME OVER,\nyou suck", width/2, height/2);
  text("Press 'Esc' to return to main menu", width/2, height*0.80);

  if (keyCode === ESCAPE) {
    startingState = 0;
    state = 0;
    settingsIsOpen = false;
    badGuys = [];
    setup();
  }
}
//------------------------------------------------------------------------------
//  GAME OVER-------, startingState "gameOver"   END
//------------------------------------------------------------------------------
