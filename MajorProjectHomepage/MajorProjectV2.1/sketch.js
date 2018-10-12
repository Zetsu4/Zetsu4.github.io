// V2.1
// Travis Ahern
// oct. 11/18

// vars
let state = 1; // state variable
let badGuys = []; // where bad guy objects go
let leEarth; // le Lovely Homepage
let world = {}; // world bounds
let allRaces, allSkills; // all races and skills
let raceSprites = {}; // race sprites
let skillImages = {}; // skill images
let boxX; // choice box 'X'
let boxY = {}; // choice box 'Y'

function preload() {
  leEarth = loadImage("assets/lovelyHomepage.png");
  world.image = loadImage("assets/enviorment.png");

  raceSprites.randomSprite = loadImage("assets/Races/Random.png");
  raceSprites.human = loadImage("assets/Races/Human.png");
  raceSprites.halfElf = loadImage("assets/Races/Half-Elf.png");
  raceSprites.elf = loadImage("assets/Races/Elf.png");
  raceSprites.dwarf = loadImage("assets/Races/Dwarf.png");
  raceSprites.halfling = loadImage("assets/Races/Halfling.png");
  raceSprites.goblin = loadImage("assets/Races/Goblin.png");
  raceSprites.orc = loadImage("assets/Races/Orc.png");
  raceSprites.urukHai = loadImage("assets/Races/Uruk-Hai.png");

  skillImages.randomSkill = loadImage("assets/Skills/Random.png");
  skillImages.archer = loadImage("assets/Skills/Archer.png");
  skillImages.ranger = loadImage("assets/Skills/Ranger.png");
  skillImages.fighter = loadImage("assets/Skills/Fighter.png");
  skillImages.samurai = loadImage("assets/Skills/Samurai.png");
  skillImages.mage = loadImage("assets/Skills/Mage.png");
  skillImages.cleric = loadImage("assets/Skills/Cleric.png");
  skillImages.rogue = loadImage("assets/Skills/Rogue.png");
  skillImages.enemy = loadImage("assets/Skills/Enemy.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // setting text font
  textFont("Font Style Bold", (width*0.03 + height*0.03)/2);

  // setting image origin to center
  imageMode(CENTER);

  // race options
  allRaces = [
    ["Random", raceSprites.randomSprite], ["Human", raceSprites.human], ["Half-Elf", raceSprites.halfElf],
    ["Elf", raceSprites.elf], ["Dwarf", raceSprites.dwarf], ["Halfling", raceSprites.halfling],
    ["Goblin", raceSprites.goblin], ["Orc", raceSprites.orc], ["Uruk-Hai", raceSprites.urukHai]];

  // skill options
  allSkills = [
    ["Random", skillImages.randomSkill], ["Archer", skillImages.archer], ["Ranger", skillImages.Ranger],
    ["Fighter", skillImages.fighter], ["Samurai", skillImages.samurai], ["Mage", skillImages.mage],
    ["Cleric", skillImages.cleric], ["Rogue", skillImages.rogue], ["Enemy", skillImages.enemy]];

  boxX = width*0.30;
  boxY.race = height*0.10/allRaces.length;
  boxY.skill = height*0.10/allSkills.length;


}

//------------------------------------------------------------------------------
//  CREATING A CHARACTER, state 1         START
//------------------------------------------------------------------------------

function displayRaceOptions() {
  rect();
}

function displaySkillOptions() {

}

//------------------------------------------------------------------------------
//  CREATING A CHARACTER, state 1         END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  PLAYING THE GAME, state 2         START
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//  PLAYING THE GAME, state 2         END
//------------------------------------------------------------------------------

function checkState() {
  if (state === 1) {
    image(leEarth, width/2, height/2, width, height);
    displayRaceOptions();
    displaySkillOptions();
  }
}

function draw() {
  checkState();
  // image(world.image, );
}
