//------------------------------------------------------------------------------
//   SETTINGS-------, startingState 3   START
//------------------------------------------------------------------------------

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
    waiting();
    saveGame();
    settingsChoice = -1;
  }

  else if (settingsChoice === "Load") {
    waiting();
    loadSavedFile();
    settingsChoice = -1;
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

  fill("black");

  // hard set controls
  text("ESC - OPEN SETTINGS\n\LEFT MOUSE BUTTON - ATTACK", width/2, textTop);

  for (let i = 0; i < keyBindings.get("keyArray").length; i++) {
    // changable controls
    let y = (i+3)*textTop*1.275;
    text(String.fromCharCode(keyBindings.get("keyArray")[i][1]) + " - " + keyBindings.get("keyArray")[i][0], width/2, y);
  }

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

  for (let i = 0; i < keyBindings.get("keyArray").length; i++) {
    let yPos = box.yStart + i*boxHeight + textTop;

    if (buttonFoo(xPos, yPos, boxWidth, boxHeight, "orange", "lightorange", String.fromCharCode(keyBindings.get("keyArray")[i][1]))) {
      waiting();
      let newKey = prompt("Please enter new key", String.fromCharCode(keyBindings.get("keyArray")[i][1]));

      if (newKey === "") {
        // empty string
        break;
      }

      else if (newKey != newKey.toUpperCase() && newKey == newKey.toLowerCase()) {
        // lower case letter
        keyBindings.get("keyArray")[i][1] = newKey.charCodeAt(0) - 32;
      }

      else {
        // other keys
        keyBindings.get("keyArray")[i][1] = newKey.charCodeAt(0);
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

  let allMinimapObjects = objects.traps.length + itemsOnGround.length + badGuys.length;

  // things needed on map
  for (let i = 0; i < allMinimapObjects; i++) {
    // baddies
    if (i < badGuys.length) {
      badGuys[i].mapping(
        world.WIDTH, world.HEIGHT,
        width/2, height/2,
        width, height,
        player.DOT*4);
    }

    // floating items
    if (i < itemsOnGround.length) {
      itemsOnGround[i].mapping(
        world.WIDTH, world.HEIGHT,
        width/2, height/2,
        width, height,
        player.DOT*0.75*4, "white");
    }

    // player traps
    if (i < objects.traps.length) {
      objects.traps[i].mapping(
        world.WIDTH, world.HEIGHT,
        width/2, height/2,
        width, height,
        player.DOT*4, color(0, 255, 255));
    }
  }
}

//------------------------------------------------------------------------------
//   SETTINGS-------, startingState 3   END
//------------------------------------------------------------------------------
