function mousePressed() {
  if (startingState === 2 && state === 0) {
    if (!player.coolDown) {
      let attacked = false;
      // player attacks
      if (player.attackState === "melee") {
        items.playerAttack.push(new Attack(0, 0, 0, 0, player.totSpeed*melee.attackSpeed, melee.attackDist, player.mDmg, melee.img, sounds.swordHit));
        attacked = true;
        sounds.swordAttack.play();
      }

      if (player.attackState === "ranged" && allItems.get("Arrows").amount > 0) {
        allItems.get("Arrows").amount--;
        items.playerAttack.push(new Attack(0, 0, 0, 0, player.totSpeed*ranged.attackSpeed, ranged.attackDist, player.rDmg, ranged.img, sounds.arrowHit));
        attacked = true;
        sounds.arrowAttack.play();
        if (allItems.get("Arrows").amount <= 0)
          checkEmpty("Arrows");
      }

      if (player.attackState === "magic" && player.mp >= 10) {
        player.mp -= 10;
        items.playerAttack.push(new Attack(0, 0, 0, 0, player.totSpeed*spellCaster.attackSpeed, spellCaster.attackDist, player.sDmg, spellCaster.img, sounds.fireballHit));
        attacked = true;
        sounds.fireballAttack.play();
      }

      player.coolDown = attacked;
      player.previousAttack = millis();
    }
  }
}
