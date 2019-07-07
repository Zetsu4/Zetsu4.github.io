function draw() {
  translate(width/2, height/2);
  if (drawingBack)
    image(worldBackgrounds.homePage, 0, 0, width, height);

  if (sounds.startMenu.isPlaying() && startingState === 2)
    sounds.startMenu.stop();

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

function buttonClick(theButton, changeState1, changeState2) {
  // button that changes states
  if (theButton.clicked()) {
    clickWait()
    startingState = changeState1;
    state = changeState2;
  }
}

function static(size) {
  // creates and keeps track of a static variable
  if (typeof static.counter == "undefined")
    static.counter = 0;

  if (static.counter >= size)
    static.counter = 0;

  return static.counter++;
}

function clickWait() {
  // called after clicking a button
  // so that the button is only clicked once
  let waiting = millis();
  while (millis() - waiting <= WAIT_TIME) {
    continue;
  }
}

function timerFoo(lastTime, theTimer) {
  let elapsedTime = millis() - lastTime;
  return elapsedTime > theTimer;
}
