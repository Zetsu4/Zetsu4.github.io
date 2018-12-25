function nonPlayableCharacters() {
  for (let i=0; i < allNPCs.length; i++) {
    allNPCs[i].display(worldEnviorment.get("Town").zone, player.x, player.y);
    if (dist(0, 0, allNPCs[i].x, allNPCs[i].y) <= spriteSize.height)
      allNPCs[i].interact(keyBindings.get("Interact").code);
  }

  for (let i=0; i < shopKeeps.length; i++) {
    shopKeeps[i].display(worldEnviorment.get("Town").zone, player.x, player.y);
    shopKeeps[i].mapping();
    if (dist(0, 0, shopKeeps[i].x, shopKeeps[i].y) <= spriteSize.height)
      if (shopKeeps[i].interact(keyBindings.get("Interact").code))
        state = "Shop";
  }
}

// move with player
function moveNPCsX(dir) {
  let speed = player.speed*dir;

  for (let i=allNPCs.length-1; i >= 0; i--)
    allNPCs[i].moveNPCX(player.speed, dir);

  for (let i=shopKeeps.length-1; i >= 0; i--)
    shopKeeps[i].moveNPCX(player.speed, dir);
}

function moveNPCsY(dir) {
  let speed = player.speed*dir;

  for (let i=allNPCs.length-1; i >= 0; i--)
    allNPCs[i].moveNPCY(player.speed, dir);

  for (let i=shopKeeps.length-1; i >= 0; i--)
    shopKeeps[i].moveNPCY(player.speed, dir);
}
