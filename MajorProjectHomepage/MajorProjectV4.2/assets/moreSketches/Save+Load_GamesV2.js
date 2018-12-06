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
  loadingGame = true;

  // objects
  objects.traps = [];
  for (let i = 0; i < savedVars.objects.traps.length; i++) {
    objects.traps.push(new Trap(
      savedVars.objects.traps[i].x, savedVars.objects.traps[i].y,
      savedVars.objects.traps[i].image,
      savedVars.objects.traps[i].otherX, savedVars.objects.traps[i].otherY,
      savedVars.objects.traps[i].item,
      savedVars.objects.traps[i].itemXchange, savedVars.objects.traps[i].itemYchange,
      savedVars.objects.traps[i].itemX, savedVars.objects.traps[i].itemY));
  }
  maxTraps = savedVars.maxTraps;

  badGuys = [];
  for (let i = 0; i < savedVars.badGuysObjects.badGuysArray.length; i++) {
    savedVars.badGuysObjects.badGuysArray[i].race[1] = loadImage(savedVars.badGuysObjects.badGuysArray[i].race[1]);
    savedVars.badGuysObjects.badGuysArray[i].skill[1] = loadImage(savedVars.badGuysObjects.badGuysArray[i].skill[1]);

    badGuys.push(new Baddies(
      savedVars.badGuysObjects.badGuysArray[i].race, savedVars.badGuysObjects.badGuysArray[i].skill,
      savedVars.badGuysObjects.badGuysArray[i].x, savedVars.badGuysObjects.badGuysArray[i].y,
      savedVars.badGuysObjects.badGuysArray[i].lvl, savedVars.badGuysObjects.badGuysArray[i].lvl,
      savedVars.badGuysObjects.badGuysArray[i].movedX, savedVars.badGuysObjects.badGuysArray[i].movedY));

    badGuys[i].setStats();
  }

  // player
  player.racePosistion = savedVars.player.racePosistion;
  player.skillPosistion = savedVars.player.skillPosistion;
  player.raceImage = allRaces[player.racePosistion][1];
  player.skillImage = loadImage("assets/Skills/archer.png");

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

  world.imagePath = savedVars.world.imagePath;
  world.imageX = savedVars.world.imageX;
  world.imageY = savedVars.world.imageY;

    // inventory
  mouseHolding = savedVars.inventory.mouseHolding;
  itemsOnGround = savedVars.inventory.itemsOnGround;

  numOfHpPotions = savedVars.inventory.numOfHpPotions;
  numOfMpPotions = savedVars.inventory.numOfMpPotions;
  numOfArrows = savedVars.inventory.numOfArrows;
  numOfTraps = savedVars.inventory.numOfTraps;

  calculatingStats();
  preload();
  startingState = 2;
  state = 0;
}

function saveGame() {
  // save game
  let title = prompt("Name of File", "");
  let saveVars = {};

  // objects
  saveVars.objects = {};

  saveVars.objects.melee = objects.melee;
  saveVars.objects.arrows = objects.arrows;
  saveVars.objects.traps = objects.traps;
  saveVars.maxTraps = maxTraps;

  saveVars.badGuysObjects = {};

  saveVars.badGuysObjects.melee = badGuysObjects.melee;
  saveVars.badGuysObjects.arrows = badGuysObjects.arrows;

  saveVars.badGuysObjects.badGuysArray = [...badGuys];

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
  saveVars.player.totHP = player.totHP;
  saveVars.player.totMP = player.totMP;
  saveVars.player.hp = player.hp;
  saveVars.player.mp = player.mp;
  saveVars.player.mDmg = player.mDmg; // melee damage
  saveVars.player.rDmg = player.rDmg; // ranged damage
  saveVars.player.sDmg = player.sDmg; // magic damage

  saveVars.player.x = player.x;
  saveVars.player.y = player.y;
  saveVars.player.speed = player.speed;

  saveVars.world = {};
  saveVars.world.imagePath = world.imagePath;
  saveVars.world.imageX = world.imageX;
  saveVars.world.imageY = world.imageY;

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
