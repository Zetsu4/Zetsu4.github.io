function playingGame() {
  if (state === "Settings")
    settingsMenu();

  else if (state === "Controls")
    openControls();

  else if (state === "Map")
    worldMap();

  else if (state === "Inventory")
    inventoryMenu();

  else if (state === 0) {
    // enemys


    // player
    playerDisplays();
    playerMovement();
    playerCoolDown();

    // items
    itemsInWorld();
  }

  else if (state === "Main Menu") {
      startingState = 0;
      state = 0;
  }
}
