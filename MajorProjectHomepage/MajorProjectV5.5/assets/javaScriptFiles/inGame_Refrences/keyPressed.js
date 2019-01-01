function keyPressed() {
  if (startingState === 2) {
    // toggle menus
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
        items.playerAttack.push(new Trap(0, 0, 0, 0, player.tDmg, itemImg.trap, sounds.trapHit));
        allItems.get("Traps").amount--;
        if (allItems.get("Traps").amount <= 0)
          checkEmpty("Traps");
      }

      // consume potions
      if (keyCode === keyBindings.get("Consume HP Poition").code && allItems.get("Hp Potion").amount > 0)  // health
        consumePotion("Hp Potion", player.hp, player.totHp);

      if (keyCode === keyBindings.get("Consume MP Poition").code && allItems.get("Mp Potion").amount > 0)  // mana
        consumePotion("Mp Potion", player.mp, player.totMp);

      // use town portal
      if (keyCode === keyBindings.get("Use Town Portal").code && allItems.get("Town Portal").amount > 0)
        teleportArea("Over World");
    }

    // changing areas
    if (keyCode === keyBindings.get("Enter Area").code) {
      if (world.state.name === "Cave Exit")
        changeArea("Over World");

      else if (world.state.name === "Castle Cave Exit")
        changeArea("Castle");

      else if (world.state.name === "Cave Opening")
        changeArea("Cave");

      else if (world.state.name === "Demon Gate Enter")
        changeArea("Demon Realm");

      else if (world.state.name === "Demon Gate Exit")
        changeArea("Cave");

      else if (world.state.name === "Castle Gate")
        changeArea("Castle");

      else if (world.state.name === "Castle Exit")
        changeArea("Over World");

      else if (world.state.name === "Cave Entrance")
        changeArea("Cave");

      else if (world.state.name === "Dungeon Entrance")
        changeArea("Dungeon 1");

        // dungeons
      else if (world.state.name === "Dungeon Exit")
        changeArea("Castle");

      else if (world.state.name === "Up 1")
        changeArea("Dungeon 1");

      else if (world.state.name === "Up 2")
        changeArea("Dungeon 2");

      else if (world.state.name === "Up 3")
        changeArea("Dungeon 3");

      else if (world.state.name === "Up 4")
        changeArea("Dungeon 4");

      else if (world.state.name === "Down 2")
        changeArea("Dungeon 2");

      else if (world.state.name === "Down 3")
        changeArea("Dungeon 3");

      else if (world.state.name === "Down 4")
        changeArea("Dungeon 4");

      else if (world.state.name === "Down 5")
        changeArea("Dungeon 5");
    }
  }
}

function changeArea(newArea) {
  world.area = newArea;
  items.playerAttack = [];
  enemyArr = [];
}

function toggleStates(setState) {
  // toggle states
  if (state === 0) {
    previousState = state;
    state = setState;
  }

  else
    state = previousState;

  drawingBack = true;
}
