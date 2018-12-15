function mousePressed() {
  if (startingState === 2 && state === 0) {
    if (!player.coolDown) {
      if (player.attackState === "melee")
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.0025, width*0.075, itemImg.swordAttack));

      if (player.attackState === "ranged")
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.01, width*0.75, itemImg.arrowAttack, spriteSize.width, spriteSize.height/2));

      if (player.attackState === "magic")
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.008, width*0.50, itemImg.fireBallAttack));

      player.coolDown = true;
      player.previousAttack = millis();
    }
  }
}
