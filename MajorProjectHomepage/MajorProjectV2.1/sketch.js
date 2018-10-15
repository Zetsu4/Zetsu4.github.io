// V2.1
// Travis Ahern
// oct. 11/18
//
// the "AI" in the baddies.js was taken from
// Coding Train, coding challenge #89, Langton's ant.

// state vars
let startingState = 0; // start menu variable
let state = 0; // state variable

// other vars
let textTop; // text at top of screen also the font size
let allFileSave = []; // files that have been saved

// enviorment vars
let earth; // the Lovely Homepage
let world = {}; // world bounds
let minimap = {}; // minimap vars

// player vars
let sprite = {}; // sprite sizes
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
let spawnPoints = {}; // locations they can spawn

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
    ["Cleric", skillImages.cleric], ["Rogue", skillImages.rogue]];

  // player vars
  player.racePosistion = 0;
  player.skillPosistion = 0;
  player.race = allRaces[0][1];
  player.skill = allSkills[0][1];
  player.DOT = (width*0.01 + height*0.01)/2;

  player.x = world.WIDTH/2;
  player.y = world.HEIGHT/2;

  player.speed = 10;

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

// create new character option
function createNewSave() {
  let boxPosY = height*0.55;

  // hovering over the choice
  if (mouseX >= width/2 - box.width && mouseX <= width/2 + box.width
    && mouseY >= boxPosY - box.height/2 && mouseY <= boxPosY + box.height/2) {

    fill(0, 255, 0);
    if (mouseIsPressed) {
      startingState = 1;
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

// load character option
function loadSave() {
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

// chose, load save file
function showSaves() {
  let boxHeight = height*0.90/allFileSave.length;

  for (let i = 0; i < allFileSave.length; i++) {
    let yTop = box.yStart + i*boxHeight - boxHeight/2;
    let yBottom = box.yStart + i*boxHeight + boxHeight/2;

    // hovering over box
    if (mouseX >= width/2 - box.width/2 && mouseX <= width/2 + box.width/2
    && mouseY >= yTop && mouseY <= yBottom) {

      fill(0, 255, 0);
      // if (mouseIsPressed) {
      //
      // }
    }

    // not hovering over box
    else {
      fill("red");
    }

    //creating the box
    rect(width/2, box.yStart + i*boxHeight, box.width, boxHeight);

    // writting file name
    fill("Black");
    text(allFileSave[i], width/2, box.yStart + i*boxHeight);
  }
}

// save game
function saveGame() {

}

//------------------------------------------------------------------------------
//  START MENU         END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  CREATING A NEW CHARACTER, startingState 2         START
//------------------------------------------------------------------------------


// RACE-----------

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
        player.race = allRaces[i][1];
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

  image(player.race, width/2, height*0.70, sprite.DISPLAY_WIDTH, sprite.DISPLAY_HEIGHT);
}


// SKILL----------

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

  image(player.skill, box.xSkill - box.width, box.yStart, sprite.WIDTH + box.width/4, sprite.HEIGHT + box.heightSkill/2);
}


// BACK/CONTINUE--

// back button
function backButton() {
  let boxWidth = box.width*0.30;
  let boxPosX = boxWidth/2;
  let boxPosY = height*0.01;

  // hovering over box
  if (mouseX >= boxPosX - boxWidth/2 && mouseX <= boxPosX + boxWidth/2
  && mouseY >= 0 && mouseY <= boxPosY + box.yStart/2) {

    fill(0, 255, 0);
    if (mouseIsPressed) {
      startingState = 0;
      state = 0;
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
      state = 1;
    }
  }
}

//------------------------------------------------------------------------------
//  CREATING A NEW CHARACTER, startingState 2         END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  PLAYING THE GAME, startingState 3         START
//------------------------------------------------------------------------------


// BACKGROUND-----

// background
function scrollingBackground() {
  image(world.image, world.imageX + width/2, world.imageY + height/2, world.WIDTH, world.HEIGHT);
}


// MINIMAP--------

// minimap
function showMinimap() {
  // outter map
  fill("gold");
  rect(minimap.X, minimap.Y, minimap.OUTTER_WIDTH, minimap.OUTTER_HEIGHT);

  // inner map
  image(world.image, minimap.X, minimap.Y, minimap.WIDTH, minimap.HEIGHT);
}


// PLAYER---------

// moveig baddies with the player
function moveBaddies() {
  for (let i = 0; i < badGuys.length; i++) {
    badGuys[i].loopAround(
      player.x, player.y,
      sprite.WIDTH, sprite.HEIGHT,
      world.WIDTH, world.HEIGHT);
  }
}

// show player
function playerShow() {
  image(player.race, width/2, height/2, sprite.WIDTH, sprite.HEIGHT);
  image(player.skill, width/2, height/2 - sprite.HEIGHT, sprite.WIDTH, sprite.HEIGHT);
}

// player movement
function playerMovement() {
  // boundries
  let boundX = world.WIDTH - sprite.WIDTH;
  let boundY = world.HEIGHT - sprite.HEIGHT;

  // x-axis
  if (keyIsDown(65)) { // a
    player.x -= player.speed;
    world.imageX += player.speed;
  }

  if (keyIsDown(68)) { // d
    player.x += player.speed;
    world.imageX -= player.speed;
  }

  // loop around x-axis
  if (player.x < sprite.WIDTH/2) {
    moveBaddies();
    player.x  += boundX;
    world.imageX -= boundX;
  }

  else if (player.x > world.WIDTH - sprite.WIDTH/2) {
    moveBaddies();
    player.x -= boundX;
    world.imageX += boundX;
  }

  // y-axis
  if (keyIsDown(87)) { // w
    player.y -= player.speed;
    world.imageY += player.speed;
  }

  if (keyIsDown(83)) { // s
    player.y += player.speed;
    world.imageY -= player.speed;
  }

  // loop around y-axis
  if (player.y < sprite.HEIGHT/2) {
    moveBaddies();
    player.y += boundY;
    world.imageY -= boundY;
  }

  else if (player.y > world.HEIGHT - sprite.HEIGHT/2) {
    moveBaddies();
    player.y -= boundY;
    world.imageY += boundY;
  }
}

// player on minimap
function playerMinimap() {
  // minimap boundries
  let minimapXMin = minimap.X - minimap.WIDTH/2 + player.DOT/2;
  let minimapXMax = minimap.X + minimap.WIDTH/2 - player.DOT/2;

  let minimapYMin = minimap.Y - minimap.HEIGHT/2 + player.DOT/2;
  let minimapYMax = minimap.Y + minimap.HEIGHT/2 - player.DOT/2;

  // mapping dot
  let playerX = map(player.x, 0, world.WIDTH, minimapXMin, minimapXMax);
  let playerY = map(player.y, 0, world.HEIGHT, minimapYMin, minimapYMax);

  // mapping screen on the map
  let rectWidth = map(width, 0, world.WIDTH, minimapXMin, minimapXMax);
  let rectHeight = map(height, 0, world.HEIGHT, minimapYMin, minimapYMax);

  // player dot
  fill("blue");
  ellipse(playerX, playerY, player.DOT);

  // puuting screen on the map
  noFill();
  stroke("white");
  rect(playerX, playerY, rectWidth, rectHeight);
  stroke("black");
}


// SETTINGS-------

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
  if (state === 0) {
    // title screen
    fill(217, 128, 38);
    text("WELCOME TO EQUESTRIA", width/2, textTop);

    // options
    createNewSave();
    loadSave();
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

    for (let i = 0; i < 100; i++) {
      let race = random(allRaces);
      let skill = random(allSkills);

      let xSpawn = random(-world.WIDTH/2 + width/2 + sprite.WIDTH,
        world.WIDTH/2 + width/2 - sprite.WIDTH);

      let ySpawn = random(-world.HEIGHT/2 + height/2 + sprite.HEIGHT,
        world.HEIGHT/2 + height/2 - sprite.HEIGHT);

      while (race === allRaces[0]) {
        race = random(allRaces);
      }

      while (skill === allSkills[0]) {
        skill = random(allSkills);
      }

      append(badGuys, new baddies(race, skill, xSpawn, ySpawn, player.speed));
    }

  }
}

// playing
function playingGame() {
  // settings menu
  if (settingsIsOpen) {
    settingsMenu();
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
    playerMinimap();

    // baddies
    for (let i = 0; i < badGuys.length; i++) {
      badGuys[i].movement(
        world.WIDTH, world.HEIGHT,
        sprite.WIDTH, sprite.HEIGHT);

      badGuys[i].moveWithPlayer();
      badGuys[i].mapping(
        world.WIDTH, world.HEIGHT,
        minimap.X, minimap.Y,
        minimap.WIDTH, minimap.HEIGHT,
        player.DOT/2);

      badGuys[i].show(sprite.WIDTH, sprite.HEIGHT);
    }
  }
}


// CHECKING STATE-
function draw() {
  background(0, 255, 0);
  // START MENU
  if (startingState === 0) {
    startMenu();
  }

  // CREATING A NEW CHARACTER
  else if(startingState === 1) {
    createChar();
  }

  // PLAYING THE GAME
  else if (startingState === 2){
    playingGame();
  }
}

function keyPressed() {
  // checking if settings was opened and playing game
  if (keyCode === ESCAPE && startingState === 2) {
    settingsIsOpen = !settingsIsOpen;
  }
}

//------------------------------------------------------------------------------
//  CHECKING STATE, startingState #'s         END
//------------------------------------------------------------------------------
