function createChar() {
  if (state === 0) {
    raceButtons = [];
    for (let i = 0; i < allRaces.length; i++)
      raceButtons.push(new Button(
        buttonAtributes.race.x, (i*buttonAtributes.race.height)+buttonAtributes.listStart,
        buttonAtributes.width, buttonAtributes.race.height,
        buttons.red, buttons.green, allRaces[i].name
      ));

    skillButtons = [];
    for (let i = 0; i < allSkills.length; i++)
      skillButtons.push(new Button(
        buttonAtributes.skill.x, (i*buttonAtributes.skill.height)+buttonAtributes.listStart,
        buttonAtributes.width, buttonAtributes.skill.height,
        buttons.red, buttons.green, allSkills[i].name
      ));

    state = 1;
  }

  else if (state === 1) {
    // character select
    selectingRaces();
    selectingSkills();

    // back/continue
    buttonClick(buttons.back, 0, 0, true);
    buttonClick(buttons.continue, 2, 0);

    // continued
    if (startingState === 2) {
      selectRandom();
      setPlayerStats();
    }
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

// set stats
function setPlayerStats() {
  player.int = player.race.stats.int;
  player.agi = player.race.stats.agi;
  player.str = player.race.stats.str;
  player.dex = player.race.stats.dex;
  player.vit = player.race.stats.vit;

  player.totHp = 10*(player.vit+1);
  player.hp = player.totHp;

  player.totMp = 10*(player.int+1);
  player.mp = player.totMp;

  player.mDmg = int(player.str*(2 - player.skill.stats.melee/75)); // melee damage
  player.rDmg = int(player.dex*(2 - player.skill.stats.ranged/75)); // ranged damage
  player.sDmg = int(player.int*(2 - player.skill.stats.magic/75)); // spell damage
  player.tDmg = int(player.agi*1.75);

  player.totSpeed = width*0.006 + width*player.agi*pow(10, -4);
  player.speedMultiplier = 0.75;
  player.speed = player.totSpeed;
}
