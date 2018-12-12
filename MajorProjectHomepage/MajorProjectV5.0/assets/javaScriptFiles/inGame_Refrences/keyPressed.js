function keyPressed() {
  // single press buttons
  if (keyCode === keyBindings.get("Settings"))
    toggleStates("Settings");

  if (keyCode === keyBindings.get("Inventory"))
    toggleStates("Inventory");
}

function toggleStates(setState) {
  if (state === 0) {
    previousState = state;
    state = setState;
  }

  else
    state = previousState;
}
