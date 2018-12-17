function mousePressed() {
  if (startingState === 2 && state === 0) {
    if (!player.coolDown) {
      // player attacks
      if (player.attackState === "melee")
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.0025, width*0.075, player.mDmg, itemImg.swordAttack));

      if (player.attackState === "ranged")
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.01, width*0.75, player.rDmg, itemImg.arrowAttack, spriteSize.width, spriteSize.height/2));

      if (player.attackState === "magic")
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.008, width*0.50, player.sDmg, itemImg.fireBallAttack));

      player.coolDown = true;
      player.previousAttack = millis();
    }
  }
}
