function createChar() {
  if (state === 0) {
    raceButtons = [];
    for (let i = 0; i < allRaces.length; i++)
      raceButtons.push(new Button(buttonAtributes.race.x, buttonAtributes.listStart, buttonAtributes.width, buttonAtributes.race.height, buttons.red, buttons.green, allRaces[i].name));

    skillButtons = [];
    for (let i = 0; i < allSkills.length; i++)
      skillButtons.push(new Button(buttonAtributes.skill.x, buttonAtributes.listStart, buttonAtributes.width, buttonAtributes.skill.height, buttons.red, buttons.green, allSkills[i].name));
  }

  else if (state === 1) {
    if (buttons.back.clicked()) {
      startingState = 0;
      state = 0;
    }

    if (buttons.continue.clicked()) {
      startingState = 2;
      state = 0;
    }

    // race
    selectingRaces();
    displayRace();

    // skill
    selectingSkills();
    displaySkill();
  }
}

// creating character
// race
function selectingRaces() {
  for (let i = 0; i < allRaces.length; i++)
    if (raceButtons[i].clicked())
      player.race = allRaces[i];
}

function displayRace() {
  image(player.race.img, 0, 0, spriteSize.sampleWidth, spriteSize.sampleHeight);
}

// skill
function selectingSkills() {
  for (let i = 0; i < allSkills.length; i++)
    if (skillButtons[i].clicked())
      player.skill = allSkills[i];
}

function displaySkill() {
  image(player.race.img, spriteSize.sampleWidth/2, spriteSize.sampleHeight/2, spriteSize.sampleWidth/4, spriteSize.sampleHeight/4);
}
