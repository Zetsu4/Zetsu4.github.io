function playingGame() {
  textFont("BOLD");
  if (state === "Settings") // settings
    settingsMenu();

  else if (state === "Controls") // controls
    openControls();

  else if (state === "Map") // map
    worldMap();

  else if (state === "Inventory") // inventory
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

  else if (state === "Main Menu")
    setup();
}
