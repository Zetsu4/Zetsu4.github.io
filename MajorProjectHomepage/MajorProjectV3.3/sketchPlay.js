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
