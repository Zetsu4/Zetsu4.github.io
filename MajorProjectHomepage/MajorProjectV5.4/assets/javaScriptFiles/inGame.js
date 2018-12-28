function playingGame() {
  textFont("BOLD");
  drawingBack = (state !== 0);

  if (state === 0) {
    // draw enviorments
    checkState();

    // guild
    guildMemberFoo();

    // player
    playerMovement();
    playerCoolDown();
    playerDisplays();

    // enemys
    enemys();

    // items
    itemsInWorld();

    // NPC's
    nonPlayableCharacters();
    if (world.state.name === "Town")
      if (timerFoo(lastRefresh, refreshTimer))
        // refresh items in the shop
        refreshMerchandise();
  }

  else if (state === "Settings") // settings
    settingsMenu();

  else if (state === "Controls") // controls
    openControls();

  else if (state === "Map") // map
    worldMap();

  else if (state === "Inventory") // inventory
    inventoryMenu();

  else if (state === "Save")  // save game
    saveGame();

  else if (state === "Load")  // load game
    loadGame();

  else if (state === "Main Menu") // main menu
    setup();

  // other menu's
  else if (state === "Shop")
    shopMenu();

  else if (state === "Guild")
    guildMenu();
}

function checkState() {
  if (world.area === "Over World") {
    worldEnviorment.overWorld.forEach(onScreen);

    // over world music
    if (!sounds.overWorld.isPlaying()) {
      sounds.caves.stop();
      sounds.overWorld.play();
    }

    if (sounds.itemShop.isPlaying())
      sounds.itemShop.stop();
  }

  else if (world.area === "Cave") {
    worldEnviorment.cave.forEach(onScreen);

    // cave music
    if (!sounds.caves.isPlaying()) {
      sounds.overWorld.stop();
      sounds.caves.play();
    }

    // demon gate music
    if (world.state.name === "Demon Gate") {
      if (!sounds.demonGate.isPlaying())
        sounds.demonGate.play();
    }
    else
      sounds.demonGate.stop();
  }
}

function onScreen(value, key, map) {
  let xMin = value.zone.x-value.zone.wid/2;
  let xMax = value.zone.x+value.zone.wid/2;
  let yMin = value.zone.y-value.zone.hei/2;
  let yMax = value.zone.y+value.zone.hei/2;

  let backX = value.zone.x+world.changedX;
  let backY = value.zone.y+world.changedY;

  if (player.x-width/2 >= xMin && player.x-width/2 <= xMax
   && player.y-height/2 >= yMin && player.y-height/2 <= yMax)
    image(value.img, backX, backY, value.zone.wid, value.zone.hei);

  else if (player.x+width/2 >= xMin && player.x+width/2 <= xMax
   && player.y-height/2 >= yMin && player.y-height/2 <= yMax)
    image(value.img, backX, backY, value.zone.wid, value.zone.hei);

  else if (player.x+width/2 >= xMin && player.x+width/2 <= xMax
   && player.y+height/2 >= yMin && player.y+height/2 <= yMax)
    image(value.img, backX, backY, value.zone.wid, value.zone.hei);

  else if (player.x-width/2 >= xMin && player.x-width/2 <= xMax
   && player.y+height/2 >= yMin && player.y+height/2 <= yMax)
    image(value.img, backX, backY, value.zone.wid, value.zone.hei);

  if (player.x >= xMin && player.x <= xMax
   && player.y >= yMin && player.y <= yMax)
     world.state = map.get(key);
}

function refreshMerchandise() {
  // resetting items
  lastRefresh = millis();
  setShops();
  changeShopItems();
  changeGuildOptions();
}

function boundaryFoo(x, y, ) {

}
