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
      sounds.startMenu.stop();

      // spawn initial enemys
      for (let i=0; i < world.state.numOfEnemys; i++)
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
  rect(x, buttonAtributes.listStart, buttonAtributes.width, buttonAtributes.race.height+fontSize.playersDisplay*1.5);
  noStroke();
  fill("black");
  let runningText = "";
  for (let stat in player.race.stats) {
    if (stat !== "expGained") {
      runningText += stat+"- "+player.race.stats[stat]+"\n";
    }
  }
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
  rect(x, buttonAtributes.listStart, buttonAtributes.width, buttonAtributes.skill.height+fontSize.playersDisplay*4);
  noStroke();
  fill("black");
  let runningText = "";
  for (let stat in player.skill.stats) {
    if (stat !== "expGained") {
      runningText += stat+"- "+player.skill.stats[stat]+"\n";
    }
  }
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

  setPlayerStartEquipment();
  player.totHp = constrain((10*(player.vit+1)+pow(player.lvl, 2)), 10, Infinity);
  player.totMp = constrain((10*(player.int+1)+pow(player.lvl, 2)), 1, Infinity);
  calculateStats();

  //set current health and mana
  player.hp = player.totHp;
  player.mp = player.totMp;
}

function setPlayerStartEquipment() {
  // set starting equipment
  if (player.skill.stats.startingTraps > 0) // starting Traps
    items.onGround.push(new ItemOnGround(0, 0, allItems.get("Traps"), world.area, player.skill.stats.startingTraps));

  if (player.skill.stats.startingArrows > 0) // starting Arrows
    items.onGround.push(new ItemOnGround(0, 0, allItems.get("Arrows"), world.area, player.skill.stats.startingArrows));

  if (player.skill.stats.startingMpPotions > 0) // starting Mp potions
    items.onGround.push(new ItemOnGround(0, 0, allItems.get("Mp Potion"), world.area, player.skill.stats.startingMpPotions));

  if (player.skill.stats.startingHpPotions > 0) // starting Hp potions
    items.onGround.push(new ItemOnGround(0, 0, allItems.get("Hp Potion"), world.area, player.skill.stats.startingHpPotions));
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
  for (let i=0; i < inventory.equipSlots.length; i++)
    for (let theStat in inventory.equipSlots[i].equipped.stats)
      for (let runningStat in runningStats)
        if (runningStat === theStat)
          runningStats[runningStat] += inventory.equipSlots[i].equipped.stats[theStat]*constrain((inventory.equipSlots[i].equipped.amount/2), 1, Infinity);

  player.expBonus = runningStats.expBonus;

  // total health and mana
  let percentHp = player.hp/player.totHp;
  player.totHp = constrain((10*(player.vit+1+runningStats.vit)+pow(player.lvl, 2)), 10, Infinity);
  player.hp = int(player.totHp*percentHp);

  let percentMp = player.mp/player.totMp;
  player.totMp = constrain((10*(player.int+1+runningStats.int)+pow(player.lvl, 2)), 1, Infinity);
  player.mp = int(player.totMp*percentMp);

  // attack
  player.coolDownTime = constrain((2500 - (player.vit+runningStats.vit + player.agi+runningStats.agi)*15), 150, 3500);
  player.mDmg = constrain(int((player.str+runningStats.str)*(0.75 + (player.skill.stats.melee+runningStats.melee))), 1, Infinity); // melee damage
  player.rDmg = constrain(int((player.dex+runningStats.dex)*(0.75 + (player.skill.stats.ranged+runningStats.ranged))), 1, Infinity); // ranged damage
  player.sDmg = constrain(int((player.int+runningStats.int)*(0.75 + (player.skill.stats.magic+runningStats.magic))), 1, Infinity); // spell damage
  player.tDmg = constrain(int((player.agi+runningStats.agi)*(1+runningStats.trap)), 1, Infinity);

  // movement
  player.stunTimer = constrain((1000 - (player.vit+player.agi)), 100, 1000);
  player.totSpeed = constrain((width*0.003 + width*(player.agi+runningStats.agi)*pow(10, -4)), width*0.0001, width*0.10);
  player.speedMultiplier = 0.60;
}
