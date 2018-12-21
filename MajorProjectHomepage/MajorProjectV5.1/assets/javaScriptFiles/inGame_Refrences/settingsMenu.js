function settingsMenu() {
  textFont(fonts.default);
  // settings options
  for (let i=0; i < settings.boxs.length; i++) {
    if (settings.boxs[i].clicked()) {
      clickWait();
      state = settings.options[i].state;
    }
  }
}

// controls
function openControls() {
  textFont(fonts.default);

  // rectangle of controls
  fill("orange");
  rect(0, 0, width*0.60, height);

  fill("black");
  keyBindings.forEach(displayControls);

  buttonClick(buttons.back, 2, "Settings");
}

function displayControls(value, key, map) {
  let i = static(map.size);
  let yPos = -height*0.48+(i*fontSize.default*1.4);
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
    // function of key
    textAlign(RIGHT, CENTER);
    text(key+" - ", fontSize.default*2, yPos);

    // key
    textAlign(LEFT, CENTER);
    text(charValue, fontSize.default*2.5, yPos);
  pop();
}

// map
function worldMap() {
  textFont(fonts.default);
  image(world.state.img, 0, 0, width, height);

  // player
  let playrDot = player.dotSize*1.5;
  mapPlayer(0, 0, width + minimap.padWidth/2, height + minimap.padHeight/2, playrDot, true);

  // enemys
  for (let i=enemyArr.length-1; i >= 0; i--)
    enemyArr[i].mapping(
      world.width, world.height,
      0, 0,
      width + minimap.padWidth/2, height + minimap.padHeight/2,
      playrDot*0.75
    );

  // items
  for (let theItem of items.onGround)
    theItem.mapping(
      world.width, world.height,
      0, 0,
      width + minimap.padWidth/2, height + minimap.padHeight/2,
      playrDot*0.70
    );

  // traps
  for (let trap of items.playerAttack)
    trap.mapping(
      world.width, world.height,
      0, 0,
      width + minimap.padWidth/2, height + minimap.padHeight/2,
      playrDot*0.70
    );

  buttonClick(buttons.back, 2, "Settings");
}

// saving
