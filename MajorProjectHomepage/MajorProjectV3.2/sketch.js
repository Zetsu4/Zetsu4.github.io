// V3.2
// Travis Ahern
// Oct. 30/18
//
// PROBLEMS:
// - hitting the edges the player bounces
//
// CREDITS:
// art by Steven Valley and Travis Ahern
// some code was taken and modified from,
// Coding Train - Coding Challange - (Game of Life, Langtons Ant).
//
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
  world.image = loadImage("assets/enviorment2.png");

  // items
  objectImg.sword = loadImage("assets/Objects/sword.png");
  objectImg.arrow = loadImage("assets/Objects/arrows.png");
  objectImg.trap = loadImage("assets/Objects/traps.png");

  // mouse pointer
  objectImg.swordIcon = loadImage("assets/Objects/swordicon.png");
  objectImg.bowIcon = loadImage("assets/Objects/bowicon.png");

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

// draw button
function buttonFoo(boxPosX, boxPosY,
  boxWidth, boxHeight,
  restColor, hoverColor,
  words) {
  // draw one button
  if (mouseX >= boxPosX - boxWidth/2 && mouseX <= boxPosX + boxWidth/2
    && mouseY >= boxPosY - boxHeight/2 && mouseY <= boxPosY + boxHeight/2) {
    fill(hoverColor);

    if (mouseIsPressed) {
      // clicking button
      return true;
    }
  }

  else {
    // not hovering over box
    fill(restColor);
  }

  //create box
  rect(boxPosX, boxPosY, boxWidth, boxHeight);

  // writing text
  fill("Black");
  text(words, boxPosX, boxPosY + textTop/4);
  return false;
}

//------------------------------------------------------------------------------
//  START MENU------                             START
//------------------------------------------------------------------------------

function newGame() {
  // new game
  if (buttonFoo(width/2, height*0.55, box.width*2, box.height, "red", greenColor, "CREATE NEW FILE")) {
    startingState = 1;
  }
}

function loadGame() {
  // load game
  if (buttonFoo(width/2, height*0.80, box.width*2, box.height, "red", greenColor, "LOAD SAVE FILE")) {
    state = 1;
  }
}

function showSaves() {
  // choseing saved game

}

function saveGame() {
  // save game

}

//------------------------------------------------------------------------------
//  START MENU------                             END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  CREATE CHARACTER, startingState 2            START
//------------------------------------------------------------------------------

// RACE------------

function selectRace() {
  // races
  for (let i = 0; i < allRaces.length; i++) {
    let yPos = box.yStart + i*box.heightRace;
    if (buttonFoo(box.xRace, yPos, box.width, box.heightRace, "red", greenColor, allRaces[i][0])) {
      player.racePosistion = i;
      player.race = allRaces[i][1];
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

function selectSkill() {
  // skills
  for (let i = 0; i < allSkills.length; i++) {
    let yPos = box.yStart + i*box.heightSkill;
    if (buttonFoo(box.xSkill, yPos, box.width, box.heightSkill, "red", greenColor, allSkills[i][0])) {
      player.skillPosistion = i;
      player.skill = allSkills[i][1];
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

function backButton() {
  // back button
  let restColor;
  let hoverColor;
  if (startingState === 1) {
    // settings menu
    restColor = "red";
    hoverColor = greenColor;
  }
  else {
    // start menu
    restColor = "orange";
    hoverColor = "lightOrange";
  }
  push();
  textSize(textTop/2);
  if (buttonFoo(box.width*0.15, box.yStart/4, box.width*0.30, box.yStart/2, restColor, hoverColor, "BACK")) {
    if (settingsIsOpen) {
      // settings menu
      settingsChoice = -1;
    }
    else {
      // start menu
      startingState = 0;
      state = 0;
    }
  }
  pop();
}

function continueButton() {
  // continue button
  if (buttonFoo(width/2, box.yStart/4, box.width*1.50, box.yStart/2, greenColor, greenColor, "CONTINUE")) {
    state = 1;
  }
}

//------------------------------------------------------------------------------
//  CREATE CHARACTER, startingState 2            END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  PLAYING THE GAME, startingState 3            START
//------------------------------------------------------------------------------

// BACKGROUND------

function scrollingBackground() {
  image(world.image, world.imageX + width/2, world.imageY + height/2, world.WIDTH, world.HEIGHT);
}

// MINIMAP---------

function showMinimap() {
  // outter map
  fill("gold");
  rect(minimap.X, minimap.Y, minimap.OUTTER_WIDTH, minimap.OUTTER_HEIGHT);

  // inner map
  image(world.image, minimap.X, minimap.Y, minimap.WIDTH, minimap.HEIGHT);
}

// PLAYER----------

function playerShow() {
  image(player.race, width/2, height/2, sprite.WIDTH, sprite.HEIGHT);
  image(player.skill, width/2, height/2 - sprite.HEIGHT, sprite.WIDTH, sprite.HEIGHT);
}

function playerMovement() {
  // x-axis
  if (keyIsDown(keyBindArray[3])) { // LEFT
    player.x -= player.speed;
    world.imageX += player.speed;
  }

  if (keyIsDown(keyBindArray[5])) { // RIGHT
    player.x += player.speed;
    world.imageX -= player.speed;
  }

  // y-axis
  if (keyIsDown(keyBindArray[2])) { // UP
    player.y -= player.speed;
    world.imageY += player.speed;
  }

  if (keyIsDown(keyBindArray[4])) { // DOWN
    player.y += player.speed;
    world.imageY -= player.speed;
  }
  moveWithPlayer();
}

function moveWithPlayer() {
  // objects moving with player
  // x-axis
  if (player.x < 0 || player.x > world.WIDTH) {
    // staying in enviorment
    player.x = constrain(player.x, 0, world.WIDTH);
    world.imageX = constrain(world.imageX, -world.WIDTH/2 + sprite.WIDTH/2, world.WIDTH/2 - sprite.WIDTH/2);
  }

  else {
    // LEFT/RIGHT
    for (let badGuy of badGuys) { // baddies
      badGuy.moveWithPlayerX(keyBindArray[3], keyBindArray[5]);
    }

    for (let trap of objects.traps) { // traps
      trap.moveWithPlayerX(keyBindArray[3], keyBindArray[5]);
    }

    for (let arrow of objects.arrows) { // arrows
      arrow.moveWithPlayerX(keyBindArray[3], keyBindArray[5]);
    }

    for (let slash of objects.melee) { // slashes
      slash.moveWithPlayerX(keyBindArray[3], keyBindArray[5]);
    }

    for (let item of itemsOnGround) { // items on the ground
      item.moveWithPlayerX(keyBindArray[3], keyBindArray[5]);
    }
  }

  // y-axis
  if (player.y < 0 || player.y > world.HEIGHT) {
    // staying in enviorment
    player.y = constrain(player.y, 0, world.HEIGHT);
    world.imageY = constrain(world.imageY, -world.HEIGHT/2 + sprite.HEIGHT/2, world.HEIGHT/2 - sprite.HEIGHT/2);
  }

  else {
    // UP/DOWN
    for (let badGuy of badGuys) { // baddies
      badGuy.moveWithPlayerY(keyBindArray[2], keyBindArray[4]);
    }

    for (let trap of objects.traps) { // traps
      trap.moveWithPlayerY(keyBindArray[2], keyBindArray[4]);
    }

    for (let arrow of objects.arrows) { // arrows
      arrow.moveWithPlayerY(keyBindArray[2], keyBindArray[4]);
    }

    for (let slash of objects.melee) { // slashes
      slash.moveWithPlayerY(keyBindArray[2], keyBindArray[4]);
    }

    for (let item of itemsOnGround) { // items on the ground
      item.moveWithPlayerY(keyBindArray[2], keyBindArray[4]);
    }
  }
}

function playerMinimap(
  minimapX, minimapY,
  minimapW, minimapH,
  dotSize) {
  // player mapping
  let minimapXMin = minimapX - minimapW/2 + dotSize/2;
  let minimapXMax = minimapX + minimapW/2 - dotSize/2;

  let minimapYMin = minimapY - minimapH/2 + dotSize/2;
  let minimapYMax = minimapY + minimapH/2 - dotSize/2;

  // dot
  let playerX = map(player.x, 0, world.WIDTH, minimapXMin, minimapXMax, true);
  let playerY = map(player.y, 0, world.HEIGHT, minimapYMin, minimapYMax, true);

  // screen
  let rectWidth = map(width, 0, world.WIDTH, minimapXMin, minimapXMax - world.WIDTH*0.01);
  let rectHeight = map(height, 0, world.HEIGHT, minimapYMin, minimapYMax - world.HEIGHT*0.008);

  // player dot
  fill("blue");
  ellipse(playerX, playerY, dotSize);

  // screen
  noFill();
  stroke("white");
  rect(playerX, playerY, rectWidth, rectHeight);
  noStroke();
}

function beautifulMouse() {
  // mouse pointer
  let mousePos = atan2(mouseY - height/2, mouseX - width/2);
  push();
  translate(width/2, height/2);
  rotate(mousePos);
  if (rangedOn) { // ranged
    image(objectImg.bowIcon, sprite.WIDTH/2, 0, sprite.WIDTH, sprite.HEIGHT);
  }
  else { // melee
    image(objectImg. swordIcon, sprite.WIDTH/2, 0, sprite.WIDTH, sprite.HEIGHT);
  }
  pop();
}

// INVENTORY-------

function lookInInventory() {
  // showing inventory
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
  // highlighting inventory
  let x = floor((mouseX - textTop/2) / inventoryBoxSize);
  let y = floor((mouseY - textTop/2) / inventoryBoxSize);

  if (x < invenWidth && x >= 0 && y < invenHeight && y >= 0) {
    fill(179, 89, 0);
    rect(x*inventoryBoxSize + textTop/2, y*inventoryBoxSize + textTop/2, inventoryBoxSize, inventoryBoxSize);
  }
}

function drawImages() {
  // items in inventory
  for (let y = 0; y < inventory.length; y++) {
    for (let x = 0; x < inventory[y].length; x++) {
      if (inventory[y][x] !== 0) {
        image(inventory[y][x], x*inventoryBoxSize + textTop*1.50, y*inventoryBoxSize + textTop*1.50, inventoryBoxSize, inventoryBoxSize);
      }
    }
  }
}

function mouseHoldingImage() {
  // item in mouse
  if (mouseHolding !== 0) {
    image(mouseHolding, pmouseX, pmouseY, inventoryBoxSize, inventoryBoxSize);
  }
}

// ITEMS/OBJECTS---

function objectFoo() {
  // item/object
  for (let slash of objects.melee) { // sword
    slash.moveForward();
  }

  for (let arrow of objects.arrows) { // arrows
    arrow.moveForward();
  }
}

function baddiesFoo() {
  // baddies
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

    // object collisions
    let badX = badGuys[i].otherX + width/2;
    let badY = badGuys[i].otherY + height/2;
    let badGuyHitBox = (sprite.WIDTH + sprite.HEIGHT)/4;

    if (dist(badX, badY, width/2, height/2) <= badGuyHitBox) {
      // player
      gameOver();
      break;
    }

    for (let trap = 0; trap < objects.traps.length; trap++) {
      // traps
      objects.traps[trap].show(sprite.WIDTH, sprite.HEIGHT);
      if (dist(badX, badY, objects.traps[trap].x, objects.traps[trap].y) <= badGuyHitBox) {
        objects.traps.splice(trap, 1);
        badGuyDeath(i, badGuys[i].otherX, badGuys[i].otherY);
      }
    }

    for (let slash = 0; slash < objects.melee.length; slash++) {
      // sword
      objects.melee[slash].show(sprite.WIDTH, sprite.HEIGHT);
      if (objects.melee[slash].disapear(sprite.WIDTH)) {
        objects.melee.splice(slash, 1);
      }

      else if (dist(badX, badY, objects.melee[slash].realX, objects.melee[slash].realY) <= badGuyHitBox) {
        objects.melee.splice(slash, 1);
        badGuyDeath(i, badGuys[i].otherX, badGuys[i].otherY);
      }
    }

    for (let arrow = 0; arrow < objects.arrows.length; arrow++) {
      // arrows
      objects.arrows[arrow].show(sprite.WIDTH, sprite.HEIGHT);
      if (objects.arrows[arrow].disapear()) {
        objects.arrows.splice(arrow, 1);
      }

      else if (dist(badX, badY, objects.arrows[arrow].realX, objects.arrows[arrow].realY) <= badGuyHitBox) {
        objects.arrows.splice(arrow, 1);
        badGuyDeath(i, badGuys[i].otherX, badGuys[i].otherY);
      }
    }
  }
}

function badGuyDeath(spotInArray, x, y) {
  itemDrops(x, y);
  badGuys.splice(spotInArray, 1);
}

function itemDrops(x, y) {
  // random item drops
  let numberOfItems = random(5);

  for (let i = 0; i < numberOfItems; i++) {
    let changeOfX = random(-width*0.01, width*0.01);
    let changeOfY = random(-height*0.01, height*0.01);
    let randomItem = random(20);

    if (randomItem <= 5) { // arrows
      itemsOnGround.push(new arrow(0, 0, objectImg.arrow, player.speed, x + changeOfX, y + changeOfY));
    }

    else if (randomItem <= 10) { // traps
      itemsOnGround.push(new trap(0, 0, objectImg.trap, player.speed, x + changeOfX, y + changeOfY));
    }
  }
}

function floatingItems() {
  // items on the ground
  for (let i = 0; i < itemsOnGround.length; i++) {
    itemsOnGround[i].itemShow(sprite.WIDTH, sprite.HEIGHT);

    if (itemsOnGround[i].pickUp(sprite.WIDTH, sprite.HEIGHT)) {

      if (itemsOnGround[i].image === objectImg.arrow) { // arrows
        numOfArrows++;
      }

      else if (itemsOnGround[i].image === objectImg.trap) { // traps
        numOfTraps++;
      }
      itemsOnGround.splice(i, 1);
    }
  }
}

// SETTINGS--------

function settingsMenu() {
  // settings menu
  if (settingsChoice === -1) {
    changingKeys = false;
    for (let i = 0; i < settingsOptions.length; i++) {
      let yPos = box.yStart + i*box.heightSettings;

      if (buttonFoo(width/2, yPos, box.width, box.heightSettings, "orange", "lightorange", settingsOptions[i])) {
        settingsChoice = settingsOptions[i];
      }
    }
  }

  // settings functions
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

function displayControls() {
  // key bindigns
  image(world.image, width/2, height/2, width, height);
  fill("orange");
  rect(width/2, height/2, width*0.40, height);

  // if changes are made here, change the "reBindKeys()" function
  fill("black");
  text(
    "ESC - OPEN SETTINGS\n\
    LEFT MOUSE BUTTON - ATTACK\n\
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

function reBindKeys_Button() {
  // button to re-bind controls
  push();
  textSize(height*0.02);
  if (buttonFoo(width - box.width, height*0.95, box.width, height*0.05, "orange", "lightorange", "CHANGE KEYBINDINGS")) {
    waiting();
    changingKeys = !changingKeys;
  }
  pop();
}

function reBindKeys() {
  // change key bindings
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

function drawMap() {
  // map
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

function waiting() {
  let waiting = millis();
  while (millis() - waiting <= WAIT_TIME) {
    nothing--;
  }
}

function keyPressed() {
  // open settings
  if (keyCode === keyBindings.settings && startingState === 2) {
    settingsIsOpen = !settingsIsOpen;
    settingsChoice = -1;
  }

  // open map
  if (keyCode === keyBindArray[8] && startingState === 2 && !inventoryIsOpen) {
    mapIsOpen = !mapIsOpen;
  }

  // open inventory
  if (keyCode === keyBindArray[7] && startingState === 2 && !settingsIsOpen) {
    inventoryIsOpen = !inventoryIsOpen;
  }

  // place traps
  if (keyCode === keyBindArray[1] && startingState === 2 && !settingsIsOpen && !inventoryIsOpen && objects.traps.length < maxTraps) {
    objects.traps.push(new trap(width/2, height/2, objectImg.trap, player.speed));
    numOfTraps--;
  }

  // toggle melee/ranged
  if (keyCode === keyBindArray[0] && startingState === 2 && !settingsIsOpen) {
    rangedOn = !rangedOn;
  }

}

function mousePressed() {
  // player attack
  if (startingState === 2 && !settingsIsOpen && !inventoryIsOpen && !mapIsOpen) {
    // ranged
    if (rangedOn && numOfArrows > 0) {
      objects.arrows.push(new arrow(0, sprite.WIDTH, objectImg.arrow, player.speed));
      numOfArrows--;
    }
    // melee
    else if (!rangedOn) {
      objects.melee.push(new sword(0, sprite.WIDTH, objectImg.sword, player.speed));
    }
  }

  if (inventoryIsOpen) {
    // interacting with inventory
    let x = floor((mouseX - textTop/2) / inventoryBoxSize);
    let y = floor((mouseY - textTop/2) / inventoryBoxSize);

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

//------------------------------------------------------------------------------
//  ENDINGS---------, end game states   START
//------------------------------------------------------------------------------

function secretEnding() {
  // secret ending
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

function gameOver() {
  // game over screen
  startingState = "ending";
  state = "gameOver";
  background(0);
  fill("red");
  text("GAME OVER,\nyou suck", width/2, height/2);
  text("Press 'Esc' to return to main menu", width/2, height*0.80);

  if (keyCode === keyBindings.settings) {
    startingState = 0;
    state = 0;
    settingsIsOpen = false;
    badGuys = [];
    setup();
  }
}

//------------------------------------------------------------------------------
//   ENDINGS--------, end game states   END
//------------------------------------------------------------------------------
