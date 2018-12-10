function draw() {
  translate(width/2, height/2);
  image(worldBackgrounds.homePage, 0, 0, width, height);

  // start menu
  if (startingState === 0)
    startMenu();

  // create character
  else if (startingState === 1)
    createChar();

  // playing the game
  else if (startingState === 2)
    playingGame();

  // endings
  else if (startingState === -1) {
    if (state === "cheaterEnding")
      cheaterEnding();

    else if (state === "gameOver")
      gameOver();
  }
}

function buttonClick(theButton, changeState1, changeState2, backButton = false) {
  push();
  if (backButton)
    textSize(textFontSize/2);

  if (theButton.clicked()) {
    startingState = changeState1;
    state = changeState2;
  }
  pop();
}
