function playingGame() {
  textFont("BOLD");
  drawingBack = (state !== 0);

  // dungeon 5 easter egg unlock
  if (!soundEasterEgg && world.state.name === "Dungeon 5")
    secretSoundsFoo();

  if (state === 0) {
    // draw enviorments
      // mini-map padding
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
    confirmationScreen();

  // other menu's
  else if (state === "Shop")
    shopMenu();

  else if (state === "Guild")
    guildMenu();
}

function checkState() {
  // checking world state

  // demon gate music
  if (world.state.name === "Demon Gate Enter")
    if (!sounds.demonGate.isPlaying())
      sounds.demonGate.play();
  else
    sounds.demonGate.stop();

  // over world
  if (world.area === "Over World") {
    worldEnviorment.overWorld.forEach(onScreen);
    minimapBackground(worldEnviorment.overWorld);

    // over world music
    if (!sounds.overWorld.isPlaying()) {
      sounds.overWorld.play();
      sounds.caves.stop();
      sounds.demonRealm.stop();
      sounds.castle.stop();
      sounds.dungeon.stop();
    }

    if (sounds.itemShop.isPlaying())
      sounds.itemShop.stop();
  }

  // cave
  else if (world.area === "Cave") {
    worldEnviorment.cave.forEach(onScreen);
    minimapBackground(worldEnviorment.cave);

    // cave music
    if (!sounds.caves.isPlaying()) {
      sounds.overWorld.stop();
      sounds.caves.play();
      sounds.demonRealm.stop();
      sounds.castle.stop();
      sounds.dungeon.stop();
    }
  }

  // demon realm
  else if (world.area === "Demon Realm") {
    worldEnviorment.demonRealm.forEach(onScreen);
    minimapBackground(worldEnviorment.demonRealm);

    // demon realm music
    if (!sounds.demonRealm.isPlaying()) {
      sounds.overWorld.stop();
      sounds.caves.stop();
      sounds.demonRealm.play();
      sounds.castle.stop();
      sounds.dungeon.stop();
    }
  }

  // castle
  else if (world.area === "Castle") {
    worldEnviorment.castle.forEach(onScreen);
    minimapBackground(worldEnviorment.castle);

    // castle music
    if (!sounds.castle.isPlaying()) {
      sounds.overWorld.stop();
      sounds.caves.stop();
      sounds.demonRealm.stop();
      sounds.castle.play();
      sounds.dungeon.stop();
    }
  }

  // dungeons
  else {
    // dungeon music
    if (!sounds.dungeon.isPlaying()) {
      sounds.overWorld.stop();
      sounds.caves.stop();
      sounds.demonRealm.stop();
      sounds.castle.stop();
      sounds.dungeon.play();
    }

    if (world.area === "Dungeon 1") {
      worldEnviorment.dungeon1.forEach(onScreen);
      minimapBackground(worldEnviorment.dungeon1);
    }

    else if (world.area === "Dungeon 2") {
      worldEnviorment.dungeon2.forEach(onScreen);
      minimapBackground(worldEnviorment.dungeon2);
    }

    else if (world.area === "Dungeon 3") {
      worldEnviorment.dungeon3.forEach(onScreen);
      minimapBackground(worldEnviorment.dungeon3);
    }

    else if (world.area === "Dungeon 4") {
      worldEnviorment.dungeon4.forEach(onScreen);
      minimapBackground(worldEnviorment.dungeon4);
    }

    else if (world.area === "Dungeon 5") {
      worldEnviorment.dungeon5.forEach(onScreen);
      minimapBackground(worldEnviorment.dungeon5);
    }
  }
}

function minimapBackground(theMap) {
  fill("gold");
  rect(minimap.x, minimap.y, minimap.padWidth, minimap.padHeight);
  theMap.forEach(minimapImg);
}

function onScreen(value, key, theMap) {
  let x = width/2+value.zone.wid/2;
  let y = height/2+value.zone.hei/2;

  let xMin = value.zone.x-value.zone.wid/2;
  let xMax = value.zone.x+value.zone.wid/2;
  let yMin = value.zone.y-value.zone.hei/2;
  let yMax = value.zone.y+value.zone.hei/2;

  let backX = value.zone.x+world.changedX;
  let backY = value.zone.y+world.changedY;

  if (backX > -x && backX < x && backY > -y && backY < y)
    image(value.img, backX, backY, value.zone.wid, value.zone.hei);

  if (player.x >= xMin && player.x <= xMax && player.y >= yMin && player.y <= yMax)
    world.state = theMap.get(key);
}

function minimapImg(value, key, theMap) {
  // mini-map
  let x = map(value.zone.x, -world.width/2, world.width/2, minimap.x-minimap.imgWidth/2, minimap.x+minimap.imgWidth/2);
  let y = map(value.zone.y, -world.height/2, world.height/2, minimap.y-minimap.imgHeight/2, minimap.y+minimap.imgHeight/2);
  let w = map(value.zone.wid, 0, world.width, 0, minimap.imgWidth);
  let h = map(value.zone.hei, 0, world.height, 0, minimap.imgHeight);

  image(value.img, x, y, w, h);
}

function refreshMerchandise() {
  if (timerFoo(lastRefresh, refreshTimer)) {
    // resetting items
    lastRefresh = millis();
    setShops();
    changeShopItems();
    changeGuildOptions();
  }
}
