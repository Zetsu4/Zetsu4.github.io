// V2.1
// Travis Ahern
// oct. 11/18

// state vars
let startingState = 3; // start menu variable
let state = 1; // state variable

// other vars
let textTop; // text at top of screen also the font size

let movementSpeed = 100; // temp

// enviorment vars
let earth; // the Lovely Homepage
let world = {}; // world bounds
let minimap = {}; // minimap vars

// saved files
let allFileSave = []; // files that have been saved

// player vars
let spriteSize = {}; // sprite sizes
let allRaces, allSkills; // all races and skills
let raceSprites = {}; // race sprites
let skillImages = {}; // skill images
let player = {}; // player settings

// box option vars
let box = {}; // choice box size

// settings vars
let settingsIsOpen; // settings is open or it isn't
let settingsOptions = []; // settings options

// bad guy vars
let badGuys = []; // where bad guy objects go

// preloading images
function preload() {
  earth = loadImage("assets/lovelyHomepage.png");
  world.image = loadImage("assets/enviorment.png");

  raceSprites.randomSprite = loadImage("assets/Races/Random.png");
  raceSprites.human = loadImage("assets/Races/Human.png");
  raceSprites.halfElf = loadImage("assets/Races/Half-Elf.png");
  raceSprites.elf = loadImage("assets/Races/Elf.png");
  raceSprites.dwarf = loadImage("assets/Races/Dwarf.png");
  raceSprites.halfling = loadImage("assets/Races/Halfling.png");
  raceSprites.goblin = loadImage("assets/Races/Goblin.png");
  raceSprites.orc = loadImage("assets/Races/Orc.png");
  raceSprites.urukHai = loadImage("assets/Races/Uruk-Hai.png");

  skillImages.randomSkill = loadImage("assets/Skills/Random.png");
  skillImages.archer = loadImage("assets/Skills/Archer.png");
  skillImages.ranger = loadImage("assets/Skills/Ranger.png");
  skillImages.fighter = loadImage("assets/Skills/Fighter.png");
  skillImages.samurai = loadImage("assets/Skills/Samurai.png");
  skillImages.mage = loadImage("assets/Skills/Mage.png");
  skillImages.cleric = loadImage("assets/Skills/Cleric.png");
  skillImages.rogue = loadImage("assets/Skills/Rogue.png");
  skillImages.enemy = loadImage("assets/Skills/Enemy.png");
}

// setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  // setting text font
  textTop = (width*0.03 + height*0.03)/2;
  textFont("BOLD", textTop);
  textAlign(CENTER);

  // setting image origin to center
  imageMode(CENTER);
  rectMode(CENTER);

  // world coordinates
  world.width = width*10;
  world.height = height*10;
  // world.imageX = width/2;
  // world.imageY = height/2;
  world.imageX = 0;
  world.imageY = 0;

  // minimap vars
  minimap.stroke = (width*0.01 + height*0.01)/2;
  minimap.width = width*0.15;
  minimap.height = height*0.20;
  minimap.x = minimap.width/2 + minimap.stroke;
  minimap.y = minimap.height/2 + minimap.stroke;

  // save files
  allFileSave = ["saves"];

  // image sizes
  spriteSize.displayWidth = width*0.30;
  spriteSize.displayHeight = height*0.50;
  spriteSize.width = width*0.05;
  spriteSize.height = height*0.10;

  // race options
  allRaces = [
    ["Random", raceSprites.randomSprite], ["Human", raceSprites.human], ["Half-Elf", raceSprites.halfElf],
    ["Elf", raceSprites.elf], ["Dwarf", raceSprites.dwarf], ["Halfling", raceSprites.halfling],
    ["Goblin", raceSprites.goblin], ["Orc", raceSprites.orc], ["Uruk-Hai", raceSprites.urukHai]];

  // skill options
  allSkills = [
    ["Random", skillImages.randomSkill], ["Archer", skillImages.archer], ["Ranger", skillImages.ranger],
    ["Fighter", skillImages.fighter], ["Samurai", skillImages.samurai], ["Mage", skillImages.mage],
    ["Cleric", skillImages.cleric], ["Rogue", skillImages.rogue], ["Enemy", skillImages.enemy]];

  // player vars
  player.racePosistion = 0;
  player.skillPosistion = 0;
  player.race = allRaces[0][1];
  player.skill = allSkills[0][1];

  player.x = world.width/2;
  player.y = world.height/2;

  // constant option vars
  box.height = height*0.20; // start menu box hieght
  box.width = width*0.15;
  box.yStart = height*0.10;

  // race option vars
  box.heightRace = height*0.90/allRaces.length;
  box.xRace = width*0.15;
  box.yTextRace = box.yStart + box.heightRace*0.10;

  // skill option vars
  box.heightSkill = height*0.90/allSkills.length;
  box.xSkill = width*0.85;
  box.yTextSkill = box.yStart + box.heightSkill*0.10;

  // settings starts closed
  settingsIsOpen = false;
  settingsOptions = ["Resume", "Controls", "Save", "Load", "Main Menu"];
}

//------------------------------------------------------------------------------
//  START MENU        START
//------------------------------------------------------------------------------

function createNewSave() {
  let boxPosY = height*0.55;

  // hovering over the choice
  if (mouseX >= width/2 - box.width && mouseX <= width/2 + box.width
    && mouseY >= boxPosY - box.height/2 && mouseY <= boxPosY + box.height/2) {

    fill(0, 255, 0);
    if (mouseIsPressed) {
      startingState = 2;
    }
  }

  // not hovering over the choice
  else {
    fill("red");
  }

  // box
  rect(width/2, boxPosY, box.width*2, box.height);
  fill("black");
  text("CREATE NEW FILE", width/2, boxPosY);
}

function loadSave() {
  let boxPosY = height*0.80;

  // hovering over the choice
  if (mouseX >= width/2 - box.width && mouseX <= width/2 + box.width
    && mouseY >= boxPosY - box.height/2 && mouseY <= boxPosY + box.height/2) {

    fill(0, 255, 0);
    if (mouseIsPressed) {
      state = 2;
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

function showSaves() {
  for (let i = 0; i < allFileSave.length; i++) {

    fill("red");
    rect(box.xRace, box.yStart + i*box.heightRace, box.width, box.heightRace);

    fill("black");
    text(allFileSave[i], box.xRace, box.yTextRace + i*box.heightRace);
  }
}

//------------------------------------------------------------------------------
//  START MENU         END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  CREATING A NEW CHARACTER, startingState 2         START
//------------------------------------------------------------------------------


// RACE

// race options
function showRaceOptions() {
  for (let i = 0; i < allRaces.length; i++) {
    // creating the boxes
    fill("red");
    rect(box.xRace, box.yStart + i*box.heightRace, box.width, box.heightRace);

    // writing the skill name
    fill("black");
    text(allRaces[i][0], box.xRace, box.yTextRace + i*box.heightRace);
  }
}

// selecting a race
function selectRace() {
  let xLeft = box.xRace - box.width/2;
  let xRight = box.xRace + box.width/2;

  if (mouseIsPressed && mouseX >= xLeft && mouseX <= xRight) {
    for (let i = 0; i < allRaces.length; i++) {
      let yTop = box.yStart + i*box.heightRace - box.heightRace/2;
      let yBottom = box.yStart + i*box.heightRace + box.heightRace/2;

      if (mouseY >= yTop && mouseY <= yBottom) {
        player.racePosistion = i;
        player.sprite = allRaces[i][1];
      }
    }
  }
}

// highlight selected race
function highlightRace() {
  // creating the selected box
  fill(0, 255, 0);
  rect(box.xRace, box.yStart + box.heightRace*player.racePosistion, box.width, box.heightRace);

  // writing the skill name
  fill("black");
  text(allRaces[player.racePosistion][0], box.xRace, box.yTextRace + player.racePosistion*box.heightRace);

  image(player.race, width/2, height*0.70, spriteSize.displayWidth, spriteSize.displayHeight);
}


// SKILL

// skill options
function showSkillOptions() {
  for (let i = 0; i < allSkills.length; i++) {
    // creating the boxes
    fill("red");
    rect(box.xSkill, box.yStart + i*box.heightSkill, box.width, box.heightSkill);

    // writing the skill name
    fill("black");
    text(allSkills[i][0], box.xSkill, box.yTextSkill + i*box.heightSkill);
  }
}

// selecting a skill
function selectSkill() {
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

// highlight selected skill
function highlightSkill() {
  // creating the selected box
  fill(0, 255, 0);
  rect(box.xSkill, box.yStart + box.heightSkill*player.skillPosistion, box.width, box.heightSkill);

  // writing the skill name
  fill("black");
  text(allSkills[player.skillPosistion][0], box.xSkill, box.yTextSkill + player.skillPosistion*box.heightSkill);

  image(player.skill, box.xSkill - box.width, box.yStart, spriteSize.width + box.width/4, spriteSize.height + box.heightSkill/2);
}


// BACK/CONTINUE

// back button
function backButton() {
  let boxWidth = box.width*0.30;
  let boxPosX = boxWidth/2;
  let boxPosY = height*0.01;

  // hovering over box
  if (mouseX >= boxPosX - boxWidth/2
  && mouseX <= boxPosX + boxWidth/2
  && mouseY >= 0 && mouseY <= boxPosY + box.yStart/2) {

    fill(0, 255, 0);
    if (mouseIsPressed) {
      startingState = 1;
      state = 1;
    }
  }

  // not hovering over box
  else {
    fill("red");
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
      state = 2;
    }
  }
}

//------------------------------------------------------------------------------
//  CREATING A NEW CHARACTER, startingState 2         END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  PLAYING THE GAME, startingState 3         START
//------------------------------------------------------------------------------

// background
function scrollingBackground() {
  image(world.image, world.imageX, world.imageY, world.width, world.height);
}

// minimap
function showMinimap() {
  // outter map
  noFill();
  strokeWeight(minimap.stroke);
  stroke(240, 240, 0, 150);
  rect(minimap.x, minimap.y, minimap.width, minimap.height);

  // inner map
  strokeWeight(1);
  stroke("black");
  fill(0, 255, 0, 200);
  rect(minimap.x, minimap.y, minimap.width - minimap.stroke/2, minimap.height - minimap.stroke/2);
}

// show player
function playerShow() {
  image(player.race, width/2, height/2, spriteSize.width, spriteSize.height);
}

// player movement
function playerMovement() {
  // loop around x-axis
  if (player.x < 0) {
    player.x  = world.width - width;
    world.imageX = -world.width/2 + width;
  }

  else if (player.x > world.width - width) {
    player.x = 0;
    world.imageX = world.width/2;
  }

  // x-axis
  if (keyIsDown(65)) { // a
    player.x -= movementSpeed;
    world.imageX += movementSpeed;
  }

  if (keyIsDown(68)) { // d
    player.x += movementSpeed;
    world.imageX -= movementSpeed;
  }


  // loop around y-axis
  if (player.y < 0) {
    player.y = world.height - height;
    world.imageY = -world.height/2 + height;
  }

  else if (player.y > world.height - height) {
    player.y = 0;
    world.imageY = world.height/2;

  }

  // y-axis
  if (keyIsDown(87)) { // w
    player.y -= movementSpeed;
    world.imageY += movementSpeed;
  }

  if (keyIsDown(83)) { // s
    player.y += movementSpeed;
    world.imageY -= movementSpeed;
  }
}

// settings menu
function settingsMenu() {
  let boxHeight = height*0.90/settingsOptions.length;
  for (let i = 0; i < settingsOptions.length; i++) {
    let boxPosY = box.yStart + i*boxHeight;
    // creating the boxes
    fill("blue");
    rect(width/2, boxPosY, width*0.25, boxHeight);

    // writing the skill name
    fill("black");
    text(settingsOptions[i], width/2, boxPosY);
  }
}

//------------------------------------------------------------------------------
//  PLAYING THE GAME, startingState 3         END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  CHECKING STATE, startingState #'s         START
//------------------------------------------------------------------------------

// start menu
function startMenu() {
  image(earth, width/2, height/2, width, height);

  // start menu
  if (state === 1) {
    // title screen
    fill(217, 128, 38);
    text("WELCOME TO EQUESTRIA", width/2, textTop);

    // options
    createNewSave();
    loadSave();
  }

  // files that have been saved
  else if (state === 2) {
    backButton();
    showSaves();
  }
}

// creating a character
function createChar() {
  // character creation
  if (state === 1) {
    // background and continue
    image(earth, width/2, height/2, width, height);
    backButton();
    continueButton();

    // races
    showRaceOptions();
    selectRace();
    highlightRace();

    // skills
    showSkillOptions();
    selectSkill();
    highlightSkill();
  }

  // random character creation
  if (state === 2) {
    if (player.racePosistion === 0) {
      player.racePosistion = int(random(1, allRaces.length));
      player.race = allRaces[player.racePosistion][1];
    }

    if (player.skillPosistion === 0) {
      player.skillPosistion = int(random(1, allSkills.length));
      player.skill = allSkills[player.skillPosistion][1];
    }
    startingState = 3;
    state = 1;
  }
}

// playing
function playingGame() {
  // settings menu
  if (settingsIsOpen) {
    settingsMenu();
  }

  // game enviorments
  else if (state === 1) {
    // background
    scrollingBackground();

    // minimap
    showMinimap();

    // player
    playerShow();
    playerMovement();
  }
}


// CHECKING STATE
function draw() {
  background(0, 255, 0);
  // START MENU
  if (startingState === 1) {
    startMenu();
  }

  // CREATING A NEW CHARACTER
  else if(startingState === 2) {
    createChar();
  }

  // PLAYING THE GAME
  else if (startingState === 3){
    playingGame();
  }
}

function keyPressed() {
  // checking if settings was opened and playing game
  if (keyCode === ESCAPE && startingState === 3) {
    settingsIsOpen = !settingsIsOpen;
  }
}

//------------------------------------------------------------------------------
//  CHECKING STATE, startingState #'s         END
//------------------------------------------------------------------------------
