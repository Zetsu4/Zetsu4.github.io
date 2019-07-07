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
" + String.fromCharCode(keyBindArray[1]) + " - TOGGLE MAGIC ATTACK\n\
" + String.fromCharCode(keyBindArray[2]) + " - PLACE TRAP\n\
" + String.fromCharCode(keyBindArray[3]) + " - UP\n\
" + String.fromCharCode(keyBindArray[4]) + " - LEFT\n\
" + String.fromCharCode(keyBindArray[5]) + " - DOWN\n\
" + String.fromCharCode(keyBindArray[6]) + " - RIGHT\n\
" + String.fromCharCode(keyBindArray[7]) + " - INTERACT\n\
" + String.fromCharCode(keyBindArray[8]) + " - INVENTORY\n\
" + String.fromCharCode(keyBindArray[9]) + " - OPEN MAP",
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

//------------------------------------------------------------------------------
//   SETTINGS-------, startingState 3   END
//------------------------------------------------------------------------------
