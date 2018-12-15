function keyPressed() {
  // single press buttons
  if (keyCode === keyBindings.get("Settings").code)
    toggleStates("Settings");

  if (keyCode === keyBindings.get("Inventory").code)
    toggleStates("Inventory");

  if (keyCode === keyBindings.get("Open Map").code)
    toggleStates("Map");

  if (state === 0) {
    // toggle speed
    if (keyCode === keyBindings.get("Toggle Walk").code)
      player.toggleSpeed = !player.toggleSpeed;

    // toggle equip
    if (keyCode === keyBindings.get("Toggle Ranged").code) {
      if (player.attackState === "melee" || player.attackState === "magic")
        player.attackState = "ranged";
      else
        player.attackState = "melee";
    }

    if (keyCode === keyBindings.get("Toggle Magic").code) {
      if (player.attackState === "melee" || player.attackState === "ranged")
        player.attackState = "magic";
      else
        player.attackState = "melee";
    }

    // place trap
    if (keyCode === keyBindings.get("Place Trap").code)
      items.playerAttack.push(new Trap(0, 0, 0, 0, player.tDmg, itemImg.trap));
  }
}

function toggleStates(setState) {
  if (state === 0) {
    previousState = state;
    state = setState;
  }

  else
    state = previousState;
}
