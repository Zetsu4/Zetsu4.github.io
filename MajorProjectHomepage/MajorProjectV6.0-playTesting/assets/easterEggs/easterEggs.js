function secretSoundsFoo() {
  // stop any current music
  sounds.startMenu.stop();
  sounds.overWorld.stop();
  sounds.itemShop.stop();
  sounds.caves.stop();
  sounds.demonGate.stop();
  sounds.demonRealm.stop();
  sounds.castle.stop();
  sounds.dungeon.stop();

  // attack
  sounds.swordAttack = sounds.secret.blipAttack;
  sounds.arrowAttack = sounds.secret.blipAttack;
  sounds.fireballAttack = sounds.secret.blipAttack;
  sounds.swordHit = sounds.secret.blipAttack;
  sounds.arrowHit = sounds.secret.blipAttack;
  sounds.fireballHit = sounds.secret.blipAttack;
  sounds.trapHit = sounds.secret.blipAttack;

  // other
  sounds.pickUp = sounds.secret.blipPickUp;
  sounds.enemyDeath = sounds.secret.blipEnemyDeath;
  soundEasterEgg = true;
}

function loadOP() {
  setup();

  // loading a character that is very broken
  player.name = "The Great One";

  player.raceIndex = 0;
  player.race = allRaces[player.raceIndex];

  player.skillIndex = 0;
  player.skill = allSkills[player.skillIndex];


    // stats
  player.int = player.race.stats.int;
  player.agi = player.race.stats.agi;
  player.str = player.race.stats.str;
  player.dex = player.race.stats.dex;
  player.vit = player.race.stats.vit;

  player.lvl = 0;
  player.exp = 0;
  player.nextLvl = 100;
  player.points = 0;

  player.inGuild = true;

  // equip slots
  allItems.get("Stick").amount = 1;
  inventory.equipSlots[0].equipped = allItems.get("Stick");
  inventory.equipSlots[0].requip();

  player.totHp = constrain((10*(player.vit+1)+pow(player.lvl, 2)), 10, Infinity);
  player.totMp = constrain((10*(player.int+1)+pow(player.lvl, 2)), 1, Infinity);
  calculateStats();
  player.hp = player.totHp;
  player.mp = player.totMp;
  startingState = 2;
  state = 0;
}
