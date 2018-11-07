//------------------------------------------------------------------------------
//  START MENU------                             START
//------------------------------------------------------------------------------

function newGame() {
  // new game
  if (buttonFoo(width/2, height*0.55, box.width*2, box.height, "red", greenColor, "CREATE NEW FILE")) {
    startingState = 1;
  }
}

function loadGameButton() {
  if (buttonFoo(width/2, height*0.80, box.width*2, box.height, "red", greenColor, "LOAD SAVE FILE")) {
    state = 1;
  }
}

function showSavedFiles() {
  // load game

}

function saveGame() {
  // save game
  let title = prompt("Enter Title", "");
  let blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});

  if (title !== null) {
    saveAs(blob, title + ".js");
  }
}

//------------------------------------------------------------------------------
//  START MENU------                             END
//------------------------------------------------------------------------------
