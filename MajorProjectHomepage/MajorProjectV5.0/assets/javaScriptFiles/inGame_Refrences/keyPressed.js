function keyPressed() {
  // single press buttons
  if (keyCode === keyBindings.get("Settings").code) // open settings
    toggleStates("Settings");

  if (keyCode === keyBindings.get("Inventory").code) // open inventory
    toggleStates("Inventory");

  if (keyCode === keyBindings.get("Open Map").code) // open world map
    toggleStates("Map");

  if (state === 0) {
    // toggle speed
    if (keyCode === keyBindings.get("Toggle Walk").code)
      player.toggleSpeed = !player.toggleSpeed;

    // toggle equip
    if (keyCode === keyBindings.get("Toggle Ranged").code) { // ranged
      if (player.attackState === "melee" || player.attackState === "magic")
        player.attackState = "ranged";
      else
        player.attackState = "melee";
    }

    if (keyCode === keyBindings.get("Toggle Magic").code) { // magic
      if (player.attackState === "melee" || player.attackState === "ranged")
        player.attackState = "magic";
      else
        player.attackState = "melee";
    }

    // place trap
    if (keyCode === keyBindings.get("Place Trap").code && allItems.get("Traps").amount > 0) {
      items.playerAttack.push(new Trap(0, 0, 0, 0, player.tDmg, itemImg.trap));
      allItems.get("Traps").amount--;
      if (allItems.get("Traps").amount <= 0)
        checkEmpty("Traps");
    }

    // consume potions
    if (keyCode === keyBindings.get("Consume HP Poition").code && allItems.get("Hp Potion").amount > 0) { // helath
      player.hp += (player.lvl+1)*player.vit/2;
      player.hp = constrain(player.hp, 0, player.totHp);
      allItems.get("Hp Potion").amount--;
      if (allItems.get("Hp Potion").amount <= 0)
        checkEmpty("Hp Potion");
    }

    if (keyCode === keyBindings.get("Consume MP Poition").code && allItems.get("Mp Potion").amount > 0) { // mana
      player.mp += (player.lvl+1)*player.int/2;
      player.mp = constrain(player.mp, 0, player.totMp);
      allItems.get("Mp Potion").amount--;
      if (allItems.get("Mp Potion").amount <= 0)
        checkEmpty("Mp Potion");
    }
  }
}

function toggleStates(setState) {
  // toggle states
  if (state === 0) {
    previousState = state;
    state = setState;
  }

  else
    state = previousState;
}
