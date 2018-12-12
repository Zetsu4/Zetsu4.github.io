function playerDisplays() {
  // background
  checkWorld();
  displayBackground();

  // mini-map
  miniMap();

  // player
  playerSprite();
}

// background
function checkWorld() {

}

function displayBackground() {
  image(world.state.img, world.changedX, world.changedY, world.width, world.height);
}

// mini-map
function miniMap() {
  // padding
  fill("gold");
  rect(minimap.x, minimap.y, minimap.padWidth, minimap.padHeight);

  // background image
  image(world.state.img, minimap.x, minimap.y, minimap.imgWidth, minimap.imgHeight);
}

// player
function playerSprite() {
  image(player.race.img, 0, 0, spriteSize.width, spriteSize.height);
  push();
  fill("");
  text(player.skill.name, minimap.x + minimap.padWidth/2 + spriteSize.width/2, minimap.y - minimap.padHeight/2 + spriteSize.height/2);
}
