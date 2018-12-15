function playingGame() {
  textFont("BOLD");
  if (state === "Settings")
    settingsMenu();

  else if (state === "Controls")
    openControls();

  else if (state === "Map")
    worldMap();

  else if (state === "Inventory")
    inventoryMenu();

  else if (state === 0) {
    // background
    image(world.state.img, world.changedX, world.changedY, world.width, world.height);

    // player
    playerDisplays();
    playerMovement();
    playerCoolDown();

    // enemys
    enemys();

    // items
    itemsInWorld();
  }

  else if (state === "Main Menu") {
    setup();
  }
}
