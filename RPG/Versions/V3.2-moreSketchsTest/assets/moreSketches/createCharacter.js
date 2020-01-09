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
      player.race = allRaces[i][1];
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

  image(player.race, width/2, height*0.70, sprite.DISPLAY_WIDTH, sprite.DISPLAY_HEIGHT);
}

// SKILL-----------
function selectSkill() {
  // skills
  for (let i = 0; i < allSkills.length; i++) {
    let yPos = box.yStart + i*box.heightSkill;
    if (buttonFoo(box.xSkill, yPos, box.width, box.heightSkill, "red", greenColor, allSkills[i][0])) {
      player.skillPosistion = i;
      player.skill = allSkills[i][1];
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

  image(player.skill, box.xSkill - box.width, box.yStart, sprite.WIDTH + box.width/4, sprite.HEIGHT + box.heightSkill/2);
}

//------------------------------------------------------------------------------
//  CREATE CHARACTER, startingState 2            END
//------------------------------------------------------------------------------
