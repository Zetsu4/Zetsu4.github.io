function settingsMenu() {
  for (let i=0; i < settings.boxs.length; i++)
    if (settings.boxs[i].clicked()) {
      clickWait();
      state = settings.options[i].state;
    }
}

// controls
function openControls() {
  fill("orange");
  rect(0, 0, width*0.60, height);

  fill("black");
  keyBindings.forEach(displayControls);

  buttonClick(buttons.back, 2, "Settings");
}

function displayControls(value, key, map) {
  let i = static(map.size);
  let yPos = -height*0.48+(i*fontSize.default*1.5);
  let charValue = String.fromCharCode(value.code);
  if (value.code === 27) // Escape
    charValue = "Escape";

  else if (value.code === 16) // Shift
    charValue = "Shift";

  else if (value.code === 32) // Space
    charValue = "Space";

  // rebinding
  if (value.button.clicked()) {
    clickWait();
    let newValue = prompt("Input a key or type 'Escape', 'Shift', or 'Space'.", charValue);

    if (newValue === "" || newValue === null)
      map.get(key).code = map.get(key).code;

    else if (newValue === 'Escape')
      map.get(key).code = 27;

    else if (newValue === 'Shift')
      map.get(key).code = 16;

    else if (newValue === 'Space')
      map.get(key).code = 32;

    else if (newValue !== newValue.toUpperCase() && newValue === newValue.toLowerCase())
      map.get(key).code = newValue.charCodeAt(0) - 32;

    else
      map.get(key).code = newValue.charCodeAt(0);
  }

  push();
  textAlign(RIGHT, CENTER);
  text(key+" - ", fontSize.default*2, yPos);
  textAlign(LEFT, CENTER);
  text(charValue, fontSize.default*2.5, yPos);
  pop();
}

// map
function worldMap() {
  image(world.state.img, 0, 0, width, height);

  mapPlayer(0, 0, width + minimap.padWidth/2, height + minimap.padHeight/2, player.dotSize*1.5);

  buttonClick(buttons.back, 2, "Settings");
}
