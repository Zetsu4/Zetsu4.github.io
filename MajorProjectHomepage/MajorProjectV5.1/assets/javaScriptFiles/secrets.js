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
