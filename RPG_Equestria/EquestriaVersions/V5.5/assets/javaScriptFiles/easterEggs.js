function secretSoundsFoo() {
  // // background
  sounds.overWorld = sounds.secret.blipBackground;

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
  sounds.gameOver = sounds.secret.blipGameOver;

  // stop any current sounds
  sounds.startMenu.stop();
  sounds.overWorld.stop();
  sounds.itemShop.stop();
  sounds.caves.stop();
  sounds.demonGate.stop();
  soundEasterEgg = true;
  setup();
}
