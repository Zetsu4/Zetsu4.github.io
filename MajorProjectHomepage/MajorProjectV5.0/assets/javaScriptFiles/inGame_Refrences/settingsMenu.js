function settingsMenu() {
  for (let i=0; i < settings.boxs.length; i++)
    if (settings.boxs[i].clicked())
      state = settings.options[i].state;
}

function openControls() {
  fill("orange");
  rect(0, 0, width*0.60, height);

  fill("black");
  keyBindings.forEach(displayControls);
}

function displayControls(value, key, map) {
  let i = static();
  value.code === undefined ? text(key+" - "+value.code, 0, -height*0.48+(i*fontSize.default)) : text(key+" - "+value, 0, -height*0.48+(i*fontSize.default));
}

function worldMap() {

}


function static() {
    if (typeof static.counter == "undefined") {
        static.counter = 0;
    }
    if (static.counter >= 10) {
      static.counter = 0;
    }
    // static.counter++;
    return static.counter++;
}
