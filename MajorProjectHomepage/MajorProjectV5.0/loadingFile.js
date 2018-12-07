// V5.0
// Travis Ahern
// Dec. 6, 2018
//
// PROBLEMS:
// - nothing exists
//
// CREDITS:
// art by Steven Valley and Travis Ahern.
// made using javascript, in the atom text editor.
// - Asir added - I am the best, no one can defeat me, not even Mr. Schellenberg!!
//
// TO DO:
// everything ----- 0%


// lets play
let skillStats = {};
let sprites = {};
let inventory = [];


function preload() {
  // sprites
  sprites.random = loadImage("assets/img/random.png");

  sprites.race.dwarf = loadImage("assets/races/img/dwarf.png");
  sprites.race.elf = loadImage("assets/races/img/elf.png");
  sprites.race.goblin = loadImage("assets/races/img/goblin.png");
  sprites.race.halfElf = loadImage("assets/races/img/half-elf.png");
  sprites.race.halfling = loadImage("assets/races/img/halfing.png");
  sprites.race.human = loadImage("assets/races/img/human.png");
  sprites.race.orc = loadImage("assets/races/img/orc.png");
  sprites.race.urukHai = loadImage("assets/races/img/uruk-hai.png");

  sprites.skill.archer = loadImage("assets/skills/img/archer.png");
  sprites.skill.cleric = loadImage("assets/skills/img/cleric.png");
  sprites.skill.fighter = loadImage("assets/skills/img/fighter.png");
  sprites.skill.mage = loadImage("assets/skills/img/mage.png");
  sprites.skill.ranger = loadImage("assets/skills/img/ranger.png");
  sprites.skill.rogue = loadImage("assets/skills/img/rogue.png");
  sprites.skill.samurai = loadImage("assets/skills/img/samurai.png");
  sprites.skill.trapper = loadImage("assets/skills/img/trapper.png");
}

function setup() {
  // canvas
  createCanvas(windowWidth, windowHeight);

  setRaceSkillS();
  setSkillStates();
}

function setRaceStats() {
  raceStats.dwarf;
  raceStats.elf;
  raceStats.goblin;
  raceStats.halfElf;
  raceStats.halfling;
  raceStats.human;
  raceStats.orc;
  raceStats.urukHai;
}

function setSkillStats() {
  skillStats.archer;
  skillStats.cleric;
  skillStats.fighter;
  skillStats.mage;
  skillStats.ranger;
  skillStats.rogue;
  skillStats.samurai;
  skillStats.trapper;
}
