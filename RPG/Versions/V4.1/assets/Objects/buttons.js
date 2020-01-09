//------------------------------------------------------------------------------
//  BUTTONS---------,            START
//------------------------------------------------------------------------------

// draw button
function buttonFoo(boxPosX, boxPosY,
  boxWidth, boxHeight,
  restColor, hoverColor,
  words) {
  // draw one button
  if (mouseX >= boxPosX - boxWidth/2 && mouseX <= boxPosX + boxWidth/2
    && mouseY >= boxPosY - boxHeight/2 && mouseY <= boxPosY + boxHeight/2) {
    fill(hoverColor);

    if (mouseIsPressed) {
      // clicking button
      return true;
    }
  }

  else {
    // not hovering over box
    fill(restColor);
  }

  //create box
  rect(boxPosX, boxPosY, boxWidth, boxHeight);

  // writing text
  fill("Black");
  text(words, boxPosX, boxPosY + textTop/4);
  return false;
}

// BACK/CONTINUE---
function backButton() {
  // back button
  let restColor;
  let hoverColor;
  if (startingState === 1) {
    // settings menu
    restColor = "red";
    hoverColor = greenColor;
  }
  else {
    // start menu
    restColor = "orange";
    hoverColor = "lightOrange";
  }
  push();
  textSize(textTop/2);
  if (buttonFoo(box.width*0.15, box.yStart/4, box.width*0.30, box.yStart/2, restColor, hoverColor, "BACK")) {
    if (settingsIsOpen) {
      // settings menu
      settingsChoice = -1;
    }
    else {
      // start menu
      startingState = 0;
      state = 0;
    }
  }
  pop();
}

function continueButton() {
  // continue button
  if (buttonFoo(width/2, box.yStart/4, box.width*1.50, box.yStart/2, greenColor, greenColor, "CONTINUE")) {
    state = 1;
  }
}

//------------------------------------------------------------------------------
//  BUTTONS---------,            END
//------------------------------------------------------------------------------
