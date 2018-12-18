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
  // dead or other ways that the player failed
  startingState = -1;
  state = "gameOver";
  background(0);
  fill("red");
  text("GAME OVER,\nyou suck", 0, 0);
  text("Press 'Esc' to return to main menu", 0, height*0.40);

  if (keyCode === 27) // Escape
    setup();
}
