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

function showSavedFiles() {
  // load game
  // let path = window.open("file://PCNAME/E$");
  let savedVars = loadJSON(path);

  // key binds
  keyBindings.settings = savedVars.keyBinds.settings;
  keyBindings.toggleRanged = savedVars.keyBinds.toggleRanged;
  keyBindings.toggleMagic = savedVars.keyBinds.toggleMagic;
  keyBindings.placeTrap = savedVars.keyBinds.placeTrap;
  keyBindings.up = savedVars.keyBinds.up;
  keyBindings.left = savedVars.keyBinds.left;
  keyBindings.down = savedVars.keyBinds.down;
  keyBindings.right = savedVars.keyBinds.right;
  keyBindings.interact = savedVars.keyBinds.interact;
  keyBindings.inventory = savedVars.keyBinds.inventory;
  keyBindings.openMap = savedVars.keyBinds.openMap;
  keyBindArray = savedVars.keyBinds.keyBindArray;

  // objects
  objects.melee = savedVars.objects.melee;
  objects.arrows = savedVars.objects.arrows;
  objects.traps = savedVars.objects.traps;
  maxTraps = savedVars.maxTraps;

  badGuysObjects.melee = savedVars.badGuysObjects.melee;
  badGuysObjects.arrows = savedVars.badGuysObjects.arrows;

  arrayCopy(savedVars.badGuysObjects.badGuysArray, badGuys);

  // player
  player.racePosistion = savedVars.player.racePosistion;
  player.skillPosistion = savedVars.player.skillPosistion;
  player.raceImage = savedVars.player.raceImage;
  player.skillImage = savedVars.player.skillImage;

    // stats
  player.int = savedVars.player.int;
  player.agi = savedVars.player.agi;
  player.str = savedVars.player.str;
  player.dex = savedVars.player.dex;
  player.vit = savedVars.player.vit;

    // damage and health
  player.hp = savedVars.player.hp;
  player.mDmg = savedVars.player.mDmg; // melee damage
  player.rDmg = savedVars.player.rDmg; // ranged damage
  player.sDmg = savedVars.player.sDmg; // magic damage

  player.x = savedVars.player.x;
  player.y = savedVars.player.y;
  player.speed = savedVars.player.speed;

    // inventory
  mouseHolding = savedVars.inventory.mouseHolding;
  itemsOnGround = savedVars.inventory.itemsOnGround;

  numOfHpPotions = savedVars.inventory.numOfHpPotions;
  numOfMpPotions = savedVars.inventory.numOfMpPotions;
  numOfArrows = savedVars.inventory.numOfArrows;
  numOfTraps = savedVars.inventory.numOfTraps;
}

function saveGame() {
  // save game
  let title = prompt("Name of File", "");
  let saveVars = {};

  // key binds
  saveVars.keyBinds = {};

  saveVars.keyBinds.settings = keyBindings.settings;
  saveVars.keyBinds.toggleRanged = keyBindings.toggleRanged;
  saveVars.keyBinds.toggleMagic = keyBindings.toggleMagic;
  saveVars.keyBinds.placeTrap = keyBindings.placeTrap;
  saveVars.keyBinds.up = keyBindings.up;
  saveVars.keyBinds.left = keyBindings.left;
  saveVars.keyBinds.down = keyBindings.down;
  saveVars.keyBinds.right = keyBindings.right;
  saveVars.keyBinds.interact = keyBindings.interact;
  saveVars.keyBinds.inventory = keyBindings.inventory;
  saveVars.keyBinds.openMap = keyBindings.openMap;
  saveVars.keyBinds.keyBindArray = keyBindArray;

  // objects
  saveVars.objects = {};

  saveVars.objects.melee = objects.melee;
  saveVars.objects.arrows = objects.arrows;
  saveVars.objects.traps = objects.traps;
  saveVars.maxTraps = maxTraps;

  saveVars.badGuysObjects = {};

  saveVars.badGuysObjects.melee = badGuysObjects.melee;
  saveVars.badGuysObjects.arrows = badGuysObjects.arrows;

  saveVars.badGuysObjects.badGuysArray = [];
  arrayCopy(badGuys, saveVars.badGuysObjects.badGuysArray);

  // player
  saveVars.player = {};

  saveVars.player.racePosistion = player.racePosistion;
  saveVars.player.skillPosistion = player.skillPosistion;
  saveVars.player.raceImage = player.raceImage;
  saveVars.player.skillImage = player.skillImage;

    // stats
  saveVars.player.int = player.int;
  saveVars.player.agi = player.agi;
  saveVars.player.str = player.str;
  saveVars.player.dex = player.dex;
  saveVars.player.vit = player.vit;

    // damage and health
  saveVars.player.hp = player.hp;
  saveVars.player.mDmg = player.mDmg; // melee damage
  saveVars.player.rDmg = player.rDmg; // ranged damage
  saveVars.player.sDmg = player.sDmg; // magic damage

  saveVars.player.x = player.x;
  saveVars.player.y = player.y;
  saveVars.player.speed = player.speed;

    // inventory
  saveVars.inventory = {};

  saveVars.inventory.mouseHolding = mouseHolding;
  saveVars.inventory.itemsOnGround = itemsOnGround;

  saveVars.inventory.numOfHpPotions = numOfHpPotions;
  saveVars.inventory.numOfMpPotions = numOfMpPotions;
  saveVars.inventory.numOfArrows = numOfArrows;
  saveVars.inventory.numOfTraps = numOfTraps;

  // saving file
  saveJSON(saveVars, title);
}

//------------------------------------------------------------------------------
//  START MENU------                             END
//------------------------------------------------------------------------------
