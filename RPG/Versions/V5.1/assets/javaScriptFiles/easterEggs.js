function easterEggs() {
  if (easterEgg.backgrounds) {
    secretBackgroundsFoo();
    easterEgg.backgrounds = false;
  }
  else if (easterEgg.sounds) {
    secretSoundsFoo();
    easterEgg.sounds = false;
  }
  else if (easterEgg.images) {
    secretImagesFoo();
    easterEgg.images = false;
  }
  else if (easterEgg.spritesOG) {
    secretSpritesOGFoo();
    easterEgg.spritesOG = false;
  }
}

function secretBackgroundsFoo() {

}

function secretSoundsFoo() {
  // sounds.attack = sounds.secret.blipAttack;
  // sounds.pickUp = sounds.secret.blipPickUp;
  // sounds.enemyDeath = sounds.secret.blipEnemyDeath;
  // sounds.lose = sounds.secret.blipLose;
}

function secretImagesFoo() {

}

function secretSpritesOGFoo() {
  // setting sprites
  sprites.death = sprites.secret.death;
  sprites.random = sprites.secret.random;

  sprites.race.dwarf = sprites.secret.race.dwarf;
  sprites.race.elf = sprites.secret.race.elf;
  sprites.race.goblin = sprites.secret.race.goblin;
  sprites.race.halfElf = sprites.secret.race.halfElf;
  sprites.race.halfling = sprites.secret.race.halfling;
  sprites.race.human = sprites.secret.race.human;
  sprites.race.orc = sprites.secret.race.orc;
  sprites.race.urukHai = sprites.secret.race.urukHai;

  sprites.skill.archer = sprites.secret.skill.archer;
  sprites.skill.cleric = sprites.secret.skill.cleric;
  sprites.skill.fighter = sprites.secret.skill.fighter;
  sprites.skill.mage = sprites.secret.skill.mage;
  sprites.skill.ranger = sprites.secret.skill.ranger;
  sprites.skill.rogue = sprites.secret.skill.rogue;
  sprites.skill.samurai = sprites.secret.skill.samurai;
  sprites.skill.trapper = sprites.secret.skill.trapper;


  npcImg.genericNPC = npcImg.secret.genericNPC;
  npcImg.shopKeep = npcImg.secret.shopKeep;

  // remaking
  settingSprites();

    // enemys
  enemyArr = [];

    // player
  player.race = allRaces[player.raceIndex];
  player.skill = allRaces[player.skillIndex];

    // NPC's
  allNPCs = [];
  shopKeeps = [];
  setNPCs();
}
