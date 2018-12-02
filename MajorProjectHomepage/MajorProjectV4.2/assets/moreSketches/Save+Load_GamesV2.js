//------------------------------------------------------------------------------
//  START MENU------                             START
//------------------------------------------------------------------------------

function newGameButton() {
  // new game button in start menu
  if (buttonFoo(width/2, height*0.55, box.width*2, box.height, "red", greenColor, "CREATE NEW FILE")) {
    startingState = 1;
  }
}

function loadGameButton() {
  // load game button in start menu
  if (buttonFoo(width/2, height*0.80, box.width*2, box.height, "red", greenColor, "LOAD SAVE FILE")) {
    state = 1;
  }
}

function loadSavedFile() {
  // load game

}

function saveGame() {
  // save game
  
}

//------------------------------------------------------------------------------
//  START MENU------                             END
//------------------------------------------------------------------------------
