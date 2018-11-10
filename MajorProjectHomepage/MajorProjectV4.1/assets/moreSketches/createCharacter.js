//------------------------------------------------------------------------------
//  CREATE CHARACTER, startingState 2            START
//------------------------------------------------------------------------------

// RACE------------
function selectRace() {
  // races
  for (let i = 0; i < allRaces.length; i++) {
    let yPos = box.yStart + i*box.heightRace;
    if (buttonFoo(box.xRace, yPos, box.width, box.heightRace, "red", greenColor, allRaces[i][0])) {
      player.racePosistion = i;
      player.raceImage = allRaces[i][1];
    }
  }
}

function selectedRace() {
  let boxPosY = box.yStart + player.racePosistion*box.heightRace;

  // creating the selected box
  fill(0, 255, 0);
  rect(box.xRace, boxPosY, box.width, box.heightRace);

  // writing the skill name
  fill("black");
  text(allRaces[player.racePosistion][0], box.xRace, boxPosY + box.heightRace/4, box.width, box.heightRace);

  image(player.raceImage, width/2, height*0.70, sprite.DISPLAY_WIDTH, sprite.DISPLAY_HEIGHT);
}

// SKILL-----------
function selectSkill() {
  // skills
  for (let i = 0; i < allSkills.length; i++) {
    let yPos = box.yStart + i*box.heightSkill;
    if (buttonFoo(box.xSkill, yPos, box.width, box.heightSkill, "red", greenColor, allSkills[i][0])) {
      player.skillPosistion = i;
      player.skillImage = allSkills[i][1];
    }
  }
}

function selectedSkill() {
  let boxPosY = box.yStart + player.skillPosistion*box.heightSkill;

  // creating the selected box
  fill(0, 255, 0);
  rect(box.xSkill, boxPosY, box.width, box.heightSkill);

  // writing the skill name
  fill("black");
  text(allSkills[player.skillPosistion][0], box.xSkill, boxPosY + box.heightSkill/4, box.width, box.heightSkill);

  image(player.skillImage, box.xSkill - box.width, box.yStart, sprite.WIDTH + box.width/4, sprite.HEIGHT + box.heightSkill/2);
}

// STATS-----------
function playerStats() {
  // stats
  player.int = allRaces[player.racePosistion][2].int;
  player.agi = allRaces[player.racePosistion][2].agi;
  player.str = allRaces[player.racePosistion][2].str;
  player.dex = allRaces[player.racePosistion][2].dex;
  player.vit = allRaces[player.racePosistion][2].vit;

  // damage and health
  player.totHP = 10*(player.vit+1);
  player.totMP = 10*(player.int+1);
  player.hp = player.totHP;
  player.mp = player.totMP;
  player.mDmg = player.str*2; // melee damage
  player.rDmg = player.dex*2; // ranged damage
  player.sDmg = player.int*2; // spell damage

  player.totSpeed = width*0.006 + width*player.agi*pow(10, -4);
  player.walk = player.totSpeed*0.70;
  player.speed = player.totSpeed;

  // starting items
  numOfHpPotions += allSkills[player.skillPosistion][2].startingHpPotions;
  numOfMpPotions += allSkills[player.skillPosistion][2].startingMpPotions;
  numOfArrows += allSkills[player.skillPosistion][2].startingArrows;
  numOfTraps += allSkills[player.skillPosistion][2].startingTraps;
  maxTraps += allSkills[player.skillPosistion][2].maxTraps;
}

//------------------------------------------------------------------------------
//  CREATE CHARACTER, startingState 2            END
//------------------------------------------------------------------------------
