function playingGame() {
  if (state === "Settings")
    // settings
    settingsMenu();

  else if (state === "Inventory")
    inventoryMenu();

  else if (state === 0) {
    // player
    playerDisplays();

    // enemys

  }
}
