function createChar() {
  if (state === 0) {
    raceButtons = [];
    for (let i = 0; i < allRaces.length; i++)
      raceButtons.push(new Button(
        buttonAtributes.race.x, (i*buttonAtributes.race.height)+buttonAtributes.listStart,
        buttonAtributes.width, buttonAtributes.race.height,
        buttons.red, buttons.green, allRaces[i].name));

    skillButtons = [];
    for (let i = 0; i < allSkills.length; i++)
      skillButtons.push(new Button(
        buttonAtributes.skill.x, (i*buttonAtributes.skill.height)+buttonAtributes.listStart,
        buttonAtributes.width, buttonAtributes.skill.height,
        buttons.red, buttons.green, allSkills[i].name));

    state = 1;
  }

  else if (state === 1) {
    // character select
    selectingRaces();
    selectingSkills();

    // back/continue
    buttonClick(buttons.back, 0, 0, true);
    buttonClick(buttons.continue, 2, 0);

    // random character
    if (state !== 1)
      selectRandom();
  }

}

// race
function selectingRaces() {
  for (let i = 0; i < allRaces.length; i++) {
    if (raceButtons[i].clicked()) {
      player.raceIndex = i;
      player.race = allRaces[i];
    }
    highlightRace();
  }

  image(player.race.img, 0, height*0.20, spriteSize.sampleWidth, spriteSize.sampleHeight);
}

function highlightRace() {
  let y = (player.raceIndex*buttonAtributes.race.height)+buttonAtributes.listStart;
  fill(buttons.green);
  rect(buttonAtributes.race.x, y, buttonAtributes.width, buttonAtributes.race.height);

  fill("black");
  text(player.race.name, buttonAtributes.race.x, y);
}

// skill
function selectingSkills() {
  for (let i = 0; i < allSkills.length; i++) {
    if (skillButtons[i].clicked()) {
      player.skillIndex = i;
      player.skill = allSkills[i];
    }
    highlightSkill();
  }

  image(player.skill.img, spriteSize.sampleWidth*0.60, height*0.0125, spriteSize.sampleWidth/4, spriteSize.sampleHeight/4);
}

function highlightSkill() {
  let y = (player.skillIndex*buttonAtributes.skill.height)+buttonAtributes.listStart;
  fill(buttons.green);
  rect(buttonAtributes.skill.x, y, buttonAtributes.width, buttonAtributes.skill.height);

  fill("black");
  text(player.skill.name, buttonAtributes.skill.x, y);
}

// random character
function selectRandom() {
  if (player.race.name === "Random") {
    let randomIndex = int(random(1, allRaces.length));
    player.raceIndex = randomIndex;
    player.race = allRaces[player.raceIndex];
  }

  if (player.skill.name === "Random") {
    let randomIndex = int(random(1, allSkills.length));
    player.skillIndex = randomIndex;
    player.skill = allSkills[player.skillIndex];
  }
}
