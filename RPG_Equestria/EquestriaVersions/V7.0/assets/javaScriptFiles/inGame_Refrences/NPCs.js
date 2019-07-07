function nonPlayableCharacters() {
  if (world.area === "Over World") {
    let stateChange = "empty";
    for (let i=0; i < allNPCs.length; i++) {
      allNPCs[i].display(worldEnviorment.overWorld.get("Town").zone, player.x, player.y);
      if (dist(0, 0, allNPCs[i].x, allNPCs[i].y) <= spriteSize.height)
        allNPCs[i].interact(keyBindings.get("Interact").code);
    }

    for (let i=0; i < shopKeeps.length; i++) {
      shopKeeps[i].display(worldEnviorment.overWorld.get("Town").zone, player.x, player.y);
      shopKeeps[i].mapping();
      if (dist(0, 0, shopKeeps[i].x, shopKeeps[i].y) <= spriteSize.height)
        stateChange = shopKeeps[i].interact(keyBindings.get("Interact").code);
    }

    for (let i=0; i < guildKeepers.length; i++) {
      guildKeepers[i].display(worldEnviorment.overWorld.get("Town").zone, player.x, player.y);
      guildKeepers[i].mapping();
      if (dist(0, 0, guildKeepers[i].x, guildKeepers[i].y) <= spriteSize.height)
        stateChange = guildKeepers[i].interact(keyBindings.get("Interact").code);
    }

    if (stateChange !== "empty")
      state = stateChange;
  }
}

// move with player
function moveNPCsX(dir) {
  for (let i=allNPCs.length-1; i >= 0; i--)
    allNPCs[i].moveNPCX(player.speed, dir);

  for (let i=shopKeeps.length-1; i >= 0; i--)
    shopKeeps[i].moveNPCX(player.speed, dir);

  for (let i=guildKeepers.length-1; i >= 0; i--)
    guildKeepers[i].moveNPCX(player.speed, dir);
}

function moveNPCsY(dir) {
  for (let i=allNPCs.length-1; i >= 0; i--)
    allNPCs[i].moveNPCY(player.speed, dir);

  for (let i=shopKeeps.length-1; i >= 0; i--)
    shopKeeps[i].moveNPCY(player.speed, dir);

  for (let i=guildKeepers.length-1; i >= 0; i--)
    guildKeepers[i].moveNPCY(player.speed, dir);
}
