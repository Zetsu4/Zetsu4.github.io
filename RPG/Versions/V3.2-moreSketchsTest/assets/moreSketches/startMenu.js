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
