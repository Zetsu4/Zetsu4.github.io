function mousePressed() {
  if (startingState === 2 && state === 0) {
    if (!player.coolDown) {
      let attacked = false;
      // player attacks
      if (player.attackState === "melee") {
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.0025, width*0.075, player.mDmg, itemImg.swordAttack));
        attacked = true;
      }

      if (player.attackState === "ranged" && allItems.get("Arrows").amount > 0) {
        allItems.get("Arrows").amount--;
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.01, width*0.75, player.rDmg, itemImg.arrowAttack, spriteSize.width, spriteSize.height/2));
        attacked = true;
        if (allItems.get("Arrows").amount <= 0)
          checkEmpty("Arrows");
      }

      if (player.attackState === "magic" && player.mp >= 10) {
        player.mp -= 10;
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.008, width*0.50, player.sDmg, itemImg.fireBallAttack));
        attacked = true;
      }

      player.coolDown = attacked;
      player.previousAttack = millis();
    }
  }
}
