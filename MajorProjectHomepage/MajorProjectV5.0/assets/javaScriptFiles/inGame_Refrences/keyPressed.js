function keyPressed() {
  // single press buttons
  if (keyCode === keyBindings.get("Settings").code)
    toggleStates("Settings");

  if (keyCode === keyBindings.get("Inventory").code)
    toggleStates("Inventory");

  if (keyCode === keyBindings.get("Open Map").code)
    toggleStates("Map");

  // toggle speed
  if (keyCode === keyBindings.get("Toggle Walk"))
    player.toggleSpeed = !player.toggleSpeed;
}

function toggleStates(setState) {
  if (state === 0) {
    previousState = state;
    state = setState;
  }

  else
    state = previousState;
}
