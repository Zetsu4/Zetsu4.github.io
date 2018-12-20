function createChar() {
  if (state === 0) {
    // race options
    raceButtons = [];
    for (let i = 0; i < allRaces.length; i++)
      raceButtons.push(new Button(
        buttonAtributes.race.x, (i*buttonAtributes.race.height)+buttonAtributes.listStart,
        buttonAtributes.width, buttonAtributes.race.height,
        buttons.red, buttons.green, allRaces[i].name
      ));

    // skill options
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
    if (drawingBack) {
      raceDescription();
      skillDescription();
    }
    drawingBack = false;
    // character select
    selectingRaces();
    selectingSkills();

    // back/continue
    buttonClick(buttons.back, 0, 0, true);
    buttonClick(buttons.continue, 2, 0);
    if (buttons.reName.clicked()) {
      clickWait();
      reName();
    }

    // continued
    if (startingState === 2) {
      clickWait();
      selectRandom();
      setPlayerStats();

      // spawn initial enemys
      for (let i=0; i < NUM_OF_ENEMYS; i++)
        spawnEnemys();
    }
  }

}

function reName() {
  // re-name character
  let newName = prompt("Input New Name:", player.name);

  if (newName !== null) {
    if (newName !== "") {
      player.name = newName;
      buttons.reName.text = player.name;
    }
  }
}

// race
function selectingRaces() {
  for (let i = 0; i < allRaces.length; i++) {
    if (raceButtons[i].clicked()) {
      player.raceIndex = i;
      player.race = allRaces[i];
      drawingBack = true;
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

function raceDescription() {
  push();
  let x = buttonAtributes.race.x+buttonAtributes.width*0.60;
  rectMode(CORNER);
  textAlign(LEFT, TOP);
  textSize(fontSize.playersDisplay);
  strokeWeight(5);
  stroke(51, 249, 255);
  fill("white");
  rect(x, buttonAtributes.listStart, buttonAtributes.width, buttonAtributes.race.height+fontSize.playersDisplay*3);
  noStroke();
  fill("black");
  let runningText = "";
  for (let stat in player.race.stats)
      runningText += stat+"- "+player.race.stats[stat]+"\n";
  text(runningText, x+fontSize.playersDisplay*0.25, buttonAtributes.listStart);
  pop();
}

// skill
function selectingSkills() {
  for (let i = 0; i < allSkills.length; i++) {
    if (skillButtons[i].clicked()) {
      player.skillIndex = i;
      player.skill = allSkills[i];
      drawingBack = true;
    }
    highlightSkill();
  }

  image(player.skill.img, spriteSize.sampleWidth/2+spriteSize.sampleWidth/8, height*0.0125, spriteSize.sampleWidth/4, spriteSize.sampleHeight/4);
}

function highlightSkill() {
  let y = (player.skillIndex*buttonAtributes.skill.height)+buttonAtributes.listStart;
  fill(buttons.green);
  rect(buttonAtributes.skill.x, y, buttonAtributes.width, buttonAtributes.skill.height);

  fill("black");
  text(player.skill.name, buttonAtributes.skill.x, y);
}

function skillDescription() {
  push();
  let x = buttonAtributes.skill.x-buttonAtributes.width*1.60;
  rectMode(CORNER);
  textAlign(LEFT, TOP);
  textSize(fontSize.playersDisplay);
  strokeWeight(5);
  stroke(51, 249, 255);
  fill("white");
  rect(x, buttonAtributes.listStart, buttonAtributes.width, buttonAtributes.skill.height+fontSize.playersDisplay*5.5);
  noStroke();
  fill("black");
  let runningText = "";
  for (let stat in player.skill.stats)
      runningText += stat+"- "+player.skill.stats[stat]+"\n";
  text(runningText, x+fontSize.playersDisplay*0.25, buttonAtributes.listStart);
  pop();
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
  // stats
  player.int = player.race.stats.int;
  player.agi = player.race.stats.agi;
  player.str = player.race.stats.str;
  player.dex = player.race.stats.dex;
  player.vit = player.race.stats.vit;

  // set starting equipment
  if (player.skill.stats.startingHpPotions > 0) { // starting Hp potions
    player.inventory[0][0] = allItems.get("Hp Potion");
    player.inventory[0][0].amount = player.skill.stats.startingHpPotions;
  }

  if (player.skill.stats.startingMpPotions > 0) { // starting Mp potions
    player.inventory[0][1] = allItems.get("Mp Potion");
    player.inventory[0][1].amount = player.skill.stats.startingMpPotions;
  }

  if (player.skill.stats.startingArrows > 0) { // starting Arrows
    player.inventory[0][2] = allItems.get("Arrows");
    player.inventory[0][2].amount = player.skill.stats.startingArrows;
  }

  if (player.skill.stats.startingTraps > 0) { // starting Traps
    player.inventory[0][3] = allItems.get("Traps");
    player.inventory[0][3].amount = player.skill.stats.startingTraps;
  }

  calculateStats();

  //set current health and mana
  player.hp = player.totHp;
  player.mp = player.totMp;
}

function calculateStats() {
  let runningStats = {
    int: 0,
    agi: 0,
    str: 0,
    dex: 0,
    vit: 0,
    melee: 0,
    ranged: 0,
    magic: 0,
    trap: 0,
    expBonus: 0
  };

  // calculating equipment bonuses
  for (let i=0; i < inventory.equipSlots.length; i++) {
    for (let theStat in inventory.equipSlots[i].equipped.stats) {
      for (let runningStat in runningStats) {
        if (runningStat === theStat)
          runningStats[runningStat] += inventory.equipSlots[i].equipped.stats[theStat];
      }
    }
  }

  player.expBonus = runningStats.expBonus;

  // total health and mana
  player.totHp = 10*(player.vit+1+runningStats.vit)+pow(player.lvl, 2);
  player.hp = constrain(player.hp, 0, player.totHp);

  player.totMp = 10*(player.int+1+runningStats.int)+pow(player.lvl, 2);
  player.mp = constrain(player.mp, 0, player.totMp);

  // attack
  player.coolDownTime = 1000 - (player.vit+runningStats.vit + player.agi+runningStats.agi)*20;
  player.mDmg = int((player.str+runningStats.str)*(1 + (player.skill.stats.melee+runningStats.melee))); // melee damage
  player.rDmg = int((player.dex+runningStats.dex)*(1 + (player.skill.stats.ranged+runningStats.ranged))); // ranged damage
  player.sDmg = int((player.int+runningStats.int)*(1 + (player.skill.stats.magic+runningStats.magic))); // spell damage
  player.tDmg = int((player.agi+runningStats.agi)*(1.75+runningStats.trap));

  // movement
  player.totSpeed = width*0.003 + width*(player.agi+runningStats.agi)*pow(10, -4);
  player.speedMultiplier = 0.75;
  player.speed = player.totSpeed;
}
