function settingsMenu() {
  for (let i=0; i < settings.boxs.length; i++)
    if (settings.boxs[i].clicked())
      state = settings.options[i].state;
}

// controls
function openControls() {
  fill("orange");
  rect(0, 0, width*0.60, height);

  fill("black");
  keyBindings.forEach(displayControls);
}

function displayControls(value, key, map) {
  let i = static();
  let yPos = -height*0.48+(i*fontSize.default*1.1);
  text(key+" - "+value.code, 0, yPos);
}

function static() {
  if (typeof static.counter == "undefined") {
    static.counter = 0;
  }
  if (static.counter >= keyBindings.size) {
    static.counter = 0;
  }
  return static.counter++;
}

// map
function worldMap() {
  image(world.state.img, 0, 0, width, height);

  mapPlayer(0, 0, width + minimap.padWidth/2, height + minimap.padHeight/4, player.dotSize*2);
}
