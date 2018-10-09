// V1.0
// Travis Ahern
// Sept. 29/18

// vars
let state = 1;
let homePage;
let enemyFlag;
let badGuy = {
  sprite: 0,
  x: 0,
  y: 0
};
let createPlayer;
let createBaddie;

// enviorment vars
let enviorment = {
  xMin: 0,
  yMin: 0,
  xMax: 1000,
  yMax: 1000
};
let enviormentBack = {
  image: 0,
  x: 0,
  y: 0,
  width: 10,
  height: 10
};
let visibleScreen = {
  xMin: 0,
  yMin: 0,
  xMax: 1000,
  yMax: 1000
};

// creating the char, state 1
let allRaces, allCharClasses;
let sprites = {
  randomSprite: 0,
  human: 0,
  halfElf: 0,
  elf: 0,
  dwarf: 0,
  halfling: 0,
  goblin: 0,
  orc: 0,
  urukHai: 0
};
let classes = {
  randomClass: 0,
  archer: 0,
  ranger: 0,
  fighter: 0,
  samurai: 0,
  mage: 0,
  cleric: 0,
  rogue: 0,
  enemy: 0
};
let raceSprites;
let classIcons;
let boxChoiceX, boxChoiceY;
let movementSpeed = 100;
let playerSprite = {
  playerHasChosenRace: 0,
  playerHasChosenClass: 0,
  xPos: 0,
  yPos: 0
};

// checking random char creation, state 2

// playing the game, state 3
let miniMap = {
  playerDot: 0,
  baddieDot: 0,
  x: 0,
  y: 0,
  xSize: 0,
  ySize: 0
};
let settingsIsOpen = false;


// preloading images
function preload() {
  homePage = loadImage("assets/lovelyHomepage.png");
  enviormentBack.image = loadImage("assets/enviorment.png");

  enemyFlag = loadImage("assets/enemyFlag.png");
  badGuy.sprite = loadImage("assets/EnemyGuys.png");

  sprites.randomSprite = loadImage("assets/Races/Random.png");
  sprites.human = loadImage("assets/Races/Human.png");
  sprites.halfElf = loadImage("assets/Races/Half-Elf.png");
  sprites.elf = loadImage("assets/Races/Elf.png");
  sprites.dwarf = loadImage("assets/Races/Dwarf.png");
  sprites.halfling = loadImage("assets/Races/Halfling.png");
  sprites.goblin = loadImage("assets/Races/Goblin.png");
  sprites.orc = loadImage("assets/Races/Orc.png");
  sprites.urukHai = loadImage("assets/Races/Uruk-Hai.png");

  classes.randomClass = loadImage("assets/Classes/Random.png");
  classes.archer = loadImage("assets/Classes/Archer.png");
  classes.ranger = loadImage("assets/Classes/Ranger.png");
  classes.fighter = loadImage("assets/Classes/Fighter.png");
  classes.samurai = loadImage("assets/Classes/Samurai.png");
  classes.mage = loadImage("assets/Classes/Mage.png");
  classes.cleric = loadImage("assets/Classes/Cleric.png");
  classes.rogue = loadImage("assets/Classes/Rogue.png");
  classes.enemy = loadImage("assets/Classes/Enemy.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Font Style Bold", (width*0.03 + height*0.03)/2);
  imageMode(CENTER);

  // character creation stuff
  allRaces = ["Random", "Human", "Half-Elf", "Elf", "Dwarf", "Halfling", "Goblin", "Orc", "Uruk-Hai"];
  raceSprites = [sprites.randomSprite, sprites.human, sprites.halfElf, sprites.elf, sprites.dwarf, sprites.halfling, sprites.goblin, sprites.orc, sprites.urukHai];

  allCharClasses = ["Random", "Archer", "Ranger", "Fighter", "Samurai", "Mage", "Cleric", "Rogue", "Enemy"];
  classIcons = [classes.randomClass, classes.archer, classes.ranger, classes.fighter, classes.samurai, classes.mage, classes.cleric, classes.rogue, classes.enemy];

  boxChoiceX = width*0.30;
  boxChoiceY = height*0.10;

  // the size of the enviorment
  enviorment.xMin = 0;
  enviorment.xMax = width*10;
  enviorment.yMin = 0;
  enviorment.yMax = height*10;

  // enviormentBack

  // the screen thats on the canvas
  visibleScreen.xMin = 0;
  visibleScreen.xMax = width;
  visibleScreen.yMin = 0;
  visibleScreen.yMax = height;

  // minimap general size, and sprite dot sizes
  miniMap.playerDot = width*0.005;
  miniMap.baddieDot = height*0.005;
  miniMap.x = width*0.01;
  miniMap.y = height*0.01;
  miniMap.xSize = width*0.15;
  miniMap.ySize = height*0.20;

  // player starting position
  playerSprite.xPos = enviorment.xMax*0.50;
  playerSprite.yPos = enviorment.yMax*0.50;

  badGuy.x = enviorment.xMax*0.50;
  badGuy.y = enviorment.yMax*0.50;
}

function resizeSetup() {
  textFont("Font Style Bold", (width*0.03 + height*0.03)/2);

  boxChoiceX = width*0.30;
  boxChoiceY = height*0.10;

  // the size of the enviorment
  enviorment.xMin = 0;
  enviorment.xMax = width*10;
  enviorment.yMin = 0;
  enviorment.yMax = height*10;

  // the screen thats on the canvas
  visibleScreen.xMin = 0;
  visibleScreen.xMax = width;
  visibleScreen.yMin = 0;
  visibleScreen.yMax = height;

  // minimap general size, and sprite dot sizes
  miniMap.playerDot = width*0.005;
  miniMap.baddieDot = height*0.005;
  miniMap.x = width*0.01;
  miniMap.y = height*0.01;
  miniMap.xSize = width*0.15;
  miniMap.ySize = height*0.20;
}

// if player resizes window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resizeSetup();
}

//------------------------------------------------------------------------------
// CREATING A CHARACTER, state 1     START
//------------------------------------------------------------------------------

// RACE

// drawing the race options
function raceGroup(x, y, w, h) {
  rect(x, y, w, h);
  for (let race = 0; race < allRaces.length; race++) {
    rect(x, y + race*boxChoiceY, boxChoiceX, boxChoiceY);
    fill("black");
    text(allRaces[race], x, y + race*boxChoiceY + height*0.05);
    fill(255, 0, 0);
  }
}

// highlighting players choice for their Race
function highlightRace(x, y, w, h, whichRace) {
  fill(0, 255, 0);
  rect(x, y + whichRace*h, w, h);
  fill("black");
  text(allRaces[whichRace], x, y + whichRace*h + height*0.05);
  fill(255, 0, 0);
}

// creating the race sprite
function displayRace(race) {
  image(raceSprites[race], width*0.50, height*0.50, width*0.25, height*0.40);
}

// letting player select a race
function chooseRace(x, y, w, h) {
  if (mouseIsPressed && mouseX >= x && mouseX <= x + w) {
    for (let choices = 0; choices < allRaces.length; choices++) {
      if (mouseY >= y + h*choices && mouseY <= y + h*(choices + 1)) {
        playerSprite.playerHasChosenRace = choices;
      }
    }
  }
  highlightRace(x, y, w, h, playerSprite.playerHasChosenRace);
  displayRace(playerSprite.playerHasChosenRace);
}


// CLASS

// drawing the class options
function charClassGroup(x, y, w, h) {
  rect(x, y, w, h);
  for (let charClass = 0; charClass < allCharClasses.length; charClass++) {
    rect(x, y + charClass*boxChoiceY, boxChoiceX, boxChoiceY);
    fill("black");
    text(allCharClasses[charClass], x, y + charClass*boxChoiceY + height*0.05);
    fill(255, 0, 0);
  }
}

// highlighting players choice for their Class
function highlightClass(x, y, w, h, whichClass) {
  fill(0, 255, 0);
  rect(x, y + whichClass*h, w, h);
  fill("black");
  text(allCharClasses[whichClass], x, y + whichClass*h + height*0.05);
  fill(255, 0, 0);
}

// creating the class accessories
function displayClass(classChar) {
  image(classIcons[classChar], width*0.60, height*0.20, width*0.10, height*0.15);
}

// letting player slect a class
function chooseCharClass(x, y, w, h) {
  if (mouseIsPressed && mouseX >= x && mouseX <= x + w) {
    for (let choices = 0; choices < allCharClasses.length; choices++) {
      if (mouseY >= y + h*choices && mouseY <= y + h*(choices + 1)) {
        playerSprite.playerHasChosenClass = choices;
      }
    }
  }
  highlightClass(x, y, w, h, playerSprite.playerHasChosenClass);
  displayClass(playerSprite.playerHasChosenClass);
}


// CONT BUTTON

// when the player has decided their race and class
function continueButton(x, y, w, h) {
  fill(0, 255, 0);
  rect(x, y, w, h);
  fill("black");
  text("CONTINUE", x, y*2);
  fill(255, 0, 0);
  if (mouseIsPressed && mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    state = 2;
  }
}

//------------------------------------------------------------------------------
// CREATING A CHARACTER, state 1     END
//------------------------------------------------------------------------------

// state 2 happens

//------------------------------------------------------------------------------
// PLAYING THE GAME, state 3     START
//------------------------------------------------------------------------------

// MOVING BACKGROUND

// creating the illusion of moving around the enviorment
function movingBackground() {
  // if (keyIsDown(65)) { // "a"
  //   enviormentBack.x -= movementSpeed;
  // }
  // if (keyIsDown(68)) { // "d"
  //   enviormentBack.x += movementSpeed;
  // }
  //
  // if (keyIsDown(87)) { // "w"
  //   enviormentBack.y -= movementSpeed;
  // }
  // if (keyIsDown(83)) { // "s"
  //   enviormentBack.y += movementSpeed;
  // }

  // if (keyIsDown(65)) { // "a"
  //   playerSprite.xPos += movementSpeed;
  // }
  // if (keyIsDown(68)) { // "d"
  //   playerSprite.xPos -= movementSpeed;
  // }
  //
  // if (keyIsDown(87)) { // "w"
  //   playerSprite.yPos += movementSpeed;
  // }
  // if (keyIsDown(83)) { // "s"
  //   playerSprite.yPos -= movementSpeed;
  // }
}


// MINIMAP

// the minimap
function showMiniMap() {
  fill("gold");
  rect(0, 0, miniMap.xSize + width*0.02, miniMap.ySize + height*0.02);
  fill(0, 255, 0);
  rect(miniMap.x, miniMap.y, miniMap.xSize, miniMap.ySize);
}


// PLAYER

// display
function playerShow(spriteList, listSpot) {
  image(spriteList[listSpot], width*0.50, height*0.50, width*0.05, height*0.10);
}

// movement
function playerMovement(xMin = enviorment.xMin, yMin = enviorment.yMin, xMax = enviorment.xMax, yMax = enviorment.yMax) {
  // x-axis
  if (playerSprite.xPos <= xMin) {
    playerSprite.xPos += movementSpeed;
  }
  else if (playerSprite.xPos >= xMax) {
    playerSprite.xPos -= movementSpeed;
  }
  else {
    if (keyIsDown(65)) { // "a"
      playerSprite.xPos -= movementSpeed;
    }
    if (keyIsDown(68)) { // "d"
      playerSprite.xPos += movementSpeed;
    }
  }

  // y-axis
  if (playerSprite.yPos <= yMin) {
    playerSprite.yPos += movementSpeed;
  }
  else if (playerSprite.yPos >= yMax) {
    playerSprite.yPos -= movementSpeed;
  }
  else {
    if (keyIsDown(87)) { // "w"
      playerSprite.yPos -= movementSpeed;
    }
    if (keyIsDown(83)) { // "s"
      playerSprite.yPos += movementSpeed;
    }
  }
}

// putting player dot on minimap
function playerMap(playerDot, playerX, playerY,
  xMin, yMin, xMax, yMax,
  mapXMin, mapYMin, mapXMax, mapYMax) {

  let mapX = map(playerX, xMin, xMax, mapXMin + playerDot/2, mapXMax + width*0.01 - playerDot/2);
  let mapY = map(playerY, yMin, yMax, mapYMin + playerDot/2, mapYMax + height*0.01 - playerDot/2);
  let rectW = map(width, xMin, xMax, mapXMin, mapXMax);
  let rectH = map(height, yMin, yMax, mapYMin, mapYMax);

  // player of position
  fill("blue");
  noStroke();
  ellipse(mapX, mapY, playerDot);

  // rectangle of vision
  noFill();
  stroke(255);
  strokeWeight(2);
  rectMode(CENTER);
  rect(mapX, mapY, rectW, rectH);

  // fixing the brakeables
  rectMode(CORNER);
  stroke(0);
  strokeWeight(1);
}


// SETTINGS MENU

// display settings menu
function keyPressed() {
  if (keyCode === ESCAPE) {
    settingsIsOpen = !settingsIsOpen;
  }
}

// settings menu buttons
function settingsMenu() {
  rectMode(CENTER);
  fill("blue");
  rect(width*0.50, height*0.50, width*0.25, height*0.50);
  rectMode(CORNER);
}

//------------------------------------------------------------------------------
// PLAYING THE GAME, state 3     END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// WHERE THE GAME TAKES PLACE     START
//------------------------------------------------------------------------------

// checking what state the game is in
function checkState() {
  if (state === 1) {
    // CREATING A CHARACTER
    background(50);
    raceGroup(width*0.05, height*0.05, boxChoiceX, height*0.90);
    charClassGroup(width*0.65, height*0.05, boxChoiceX, height*0.90);
    chooseRace(width*0.05, height*0.05, boxChoiceX, boxChoiceY);
    chooseCharClass(width*0.65, height*0.05, boxChoiceX, boxChoiceY);
    continueButton(width*0.425, height*0.05, width*0.15, height*0.05);
  }

  else if (state === 2) {
    // chosing race and class for the player
    if (playerSprite.playerHasChosenRace === 0) {
      playerSprite.playerHasChosenRace = int(random(1, allRaces.length));
    }

    if (playerSprite.playerHasChosenClass === 0) {
      playerSprite.playerHasChosenClass = int(random(1, allCharClasses.length));
    }

    // moving to state 3
    state = 3;
    clear();

    // baddie tester
    createBaddie = new baddies(badGuy.sprite, badGuy.x, badGuy.y);
  }

  else if (state === 3) {
    if (!settingsIsOpen) {
      // PLAYING THE GAME
      background(100);

      // illusion of moving
      movingBackground();

      // miniMap display
      showMiniMap();

      // player
      playerShow(raceSprites, playerSprite.playerHasChosenRace);
      playerMovement();
      playerMap(miniMap.playerDot, playerSprite.xPos, playerSprite.yPos,
        enviorment.xMin, enviorment.yMin, enviorment.xMax, enviorment.yMax,
        miniMap.x, miniMap.y, miniMap.xSize, miniMap.ySize);

      // player.js
      // createPlayer.show(raceSprites, playerSprite.playerHasChosenRace);
      // createPlayer.movement(movementSpeed, enviorment.xMin, enviorment.yMin, enviorment.xMax, enviorment.yMax);
      // createPlayer.mapping(miniMap.playerDot,
      //   enviorment.xMin, enviorment.yMin, enviorment.xMax, enviorment.yMax,
      //   miniMap.x, miniMap.y, miniMap.xSize, miniMap.ySize);

      // bad guys
      createBaddie.show();
      createBaddie.movement(movementSpeed*0.90, movementSpeed, enviorment.xMin, enviorment.yMin, enviorment.xMax, enviorment.yMax);
      createBaddie.mapping(miniMap.baddieDot,
        enviorment.xMin, enviorment.yMin, enviorment.xMax, enviorment.yMax,
        miniMap.x, miniMap.y, miniMap.xSize, miniMap.ySize);
    }

    else {
      // settings
      settingsMenu();
    }
  }
}

function draw() {
  checkState();
}

//------------------------------------------------------------------------------
// WHERE THE GAME TAKES PLACE     END
//------------------------------------------------------------------------------
