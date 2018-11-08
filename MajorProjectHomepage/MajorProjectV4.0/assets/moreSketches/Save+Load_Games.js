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
  // let blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
  //
  // if (title !== null) {
  //   saveAs(blob, title + ".js");
  // }

  let saveVars = {};

  saveVars.keyBinds = {};

  // changable key binds
  saveVars.keyBinds.toggleRanged = keyBindings.toggleRanged = 82; // r
  saveVars.keyBinds = keyBindings.toggleMagic = 84; // t
  saveVars.keyBinds = keyBindings.placeTrap = 81; // q
  saveVars.keyBinds = keyBindings.up = 87; // w
  saveVars.keyBinds = keyBindings.left = 65; // a
  saveVars.keyBinds = keyBindings.down = 83; // s
  saveVars.keyBinds = keyBindings.right = 68; // d
  saveVars.keyBinds = keyBindings.interact = 70; // f
  saveVars.keyBinds = keyBindings.inventory = 69; // e
  saveVars.keyBinds = keyBindings.openMap = 77; // m
  saveVars.keyBinds = keyBindArray = [ // displayed bindings
                              keyBindings.toggleRanged,
                              keyBindings.toggleMagic,
                              keyBindings.placeTrap,
                              keyBindings.up,
                              keyBindings.left,
                              keyBindings.down,
                              keyBindings.right,
                              keyBindings.interact,
                              keyBindings.inventory,
                              keyBindings.openMap];


}

//------------------------------------------------------------------------------
//  START MENU------                             END
//------------------------------------------------------------------------------
