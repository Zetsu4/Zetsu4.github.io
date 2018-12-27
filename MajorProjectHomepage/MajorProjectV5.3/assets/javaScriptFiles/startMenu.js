function startMenu() {
  if (state === 0) {
    // set buttons
    buttons.newGame = new Button(0, height*0.05, width*0.30, height*0.20, buttons.red, buttons.green, "New Game");
    buttons.loadGame = new Button(0, height*0.30, width*0.30, height*0.20, buttons.red, buttons.green, "Load Game - not working");
    state = 1;
    drawingBack = true;
  }

  else if (state === 1) {
    // title screen
    fill(217, 128, 38);
    text("Welcome to\nEquestria", 0, -height*0.45);

    // buttons
    buttonClick(buttons.newGame, 1, 0);
    if (buttons.loadGame.clicked())
      loadGame();
  }
}
