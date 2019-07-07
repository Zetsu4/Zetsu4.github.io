function cheaterEnding() {
  // for those that broke the game
  startingState = -1;
  state = "cheaterEnding";
  background(255);
  fill("orange");
  text("YOU'VE DISCOVERED THE SECRET ENDING!\nGOOD FOR YOU!!", 0, 0);
  push();
  textSize(textFontSize/2);
  text("you cheater", width/2, height*0.80);
  pop();
}

function gameOver() {

  if (!sounds.gameOver.isPlaying()) {
    // background music stop
    sounds.startMenu.stop();
    sounds.overWorld.stop();
    sounds.itemShop.stop();
    sounds.caves.stop();
    sounds.demonGate.stop();
    sounds.demonRealm.stop();
    sounds.castle.stop();
    sounds.dungeon.stop();

    sounds.gameOver.play();
  }

  // dead or other ways that the player failed
  startingState = -1;
  state = "gameOver";
  background(0);
  fill("red");
  text("GAME OVER,\nBetter Luck Next Time", 0, 0);
  text("Press 'Esc' to return to main menu", 0, height*0.40);

  if (keyIsDown(27)) { // Escape
    sounds.gameOver.stop();
    setup();
  }
}
