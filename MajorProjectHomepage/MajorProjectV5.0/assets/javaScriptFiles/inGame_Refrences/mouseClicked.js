function mousePressed() {
  if (startingState === 2) {
    if (!player.coolDown) {
      if (player.attackState === "melee")
        items.playerAttack.push(new Attack(0, 0, 0, 0, width*0.001, width*0.05, itemImg.swordAttack));

      if (player.attackState === "ranged")
        items.playerAttack.push(new Attack());

      if (player.attackState === "magic")
        items.playerAttack.push(new Attack());

      player.coolDown = true;
      player.previousAttack = millis();
    }
  }
}
