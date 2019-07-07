//------------------------------------------------------------------------------
//  ENDINGS---------, end game states   START
//------------------------------------------------------------------------------

function secretEnding() {
  // secret ending
  startingState = "ending";
  state = "secretEnding";
  background(255);
  fill("orange");
  text("YOU'VE DISCOVERED THE SECRET ENDING!\
  \nGOOD FOR YOU!!", width/2, height/2);
  textFont("Font Style Normal", textTop/2);
  text("you cheater", width/2, height*0.80);
  textFont("BOLD", textTop);
}

function gameOver() {
  // game over screen
  startingState = "ending";
  state = "gameOver";
  background(0);
  fill("red");
  text("GAME OVER,\nyou suck", width/2, height/2);
  text("Press 'Esc' to return to main menu", width/2, height*0.80);

  if (keyCode === keyBindings.get("settings")) {
    startingState = 0;
    state = 0;
    settingsIsOpen = false;
    badGuys = [];
    setup();
  }
}

//------------------------------------------------------------------------------
//   ENDINGS--------, end game states   END
//------------------------------------------------------------------------------
