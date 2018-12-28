function settingsMenu() {
  textFont(fonts.default);
  // settings options
  for (let i=0; i < settings.boxs.length; i++) {
    if (settings.boxs[i].clicked()) {
      clickWait();
      state = settings.options[i].state;
    }
  }
}

// controls
function openControls() {
  textFont(fonts.default);

  // rectangle of controls
  fill("orange");
  rect(0, 0, width*0.60, height);

  fill("black");
  keyBindings.forEach(displayControls);

  buttonClick(buttons.back, 2, "Settings");
}

function displayControls(value, key, map) {
  let i = static(map.size);
  let yPos = -height*0.48+(i*fontSize.default*1.4);
  let charValue = String.fromCharCode(value.code);
  if (value.code === 27) // Escape
    charValue = "Escape";

  else if (value.code === 16) // Shift
    charValue = "Shift";

  else if (value.code === 32) // Space
    charValue = "Space";

  // rebinding
  if (value.button.clicked()) {
    clickWait();
    let newValue = prompt("Input a key or type 'Escape', 'Shift', or 'Space'.", charValue);

    if (newValue === "" || newValue === null)
      map.get(key).code = map.get(key).code;

    else if (newValue === 'Escape')
      map.get(key).code = 27;

    else if (newValue === 'Shift')
      map.get(key).code = 16;

    else if (newValue === 'Space')
      map.get(key).code = 32;

    else if (newValue !== newValue.toUpperCase() && newValue === newValue.toLowerCase())
      map.get(key).code = newValue.charCodeAt(0) - 32;

    else
      map.get(key).code = newValue.charCodeAt(0);
  }

  push();
    // function of key
    textAlign(RIGHT, CENTER);
    text(key+" - ", fontSize.default*2, yPos);

    // key
    textAlign(LEFT, CENTER);
    text(charValue, fontSize.default*2.5, yPos);
  pop();
}

// map
function worldMap() {
  textFont(fonts.default);
  image(world.state.img, 0, 0, width, height);

  // player
  let dotSizes = player.dotSize*2;
  mapPlayer(0, 0, width, height, dotSizes, true);

  // enemys
  for (let theEnemy of enemyArr)
    theEnemy.mapping(
      world.width, world.height,
      0, 0,
      width, height,
      dotSizes*0.75
    );

  // items
  for (let theItem of items.onGround)
    theItem.mapping(
      world.width, world.height,
      0, 0,
      width, height,
      dotSizes*0.70
    );

  // traps
  for (let trap of items.playerAttack)
    trap.mapping(
      world.width, world.height,
      0, 0,
      width, height,
      dotSizes*0.70
    );

  // shops
  for (let shopKeep of shopKeeps)
    shopKeep.mapping(
      world.width, world.height,
      0, 0,
      width, height,
      dotSizes*2
    );

  buttonClick(buttons.back, 2, "Settings");
}



var docCookies = {
  getItem: function (sKey) {
    if (!sKey) { return null; }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          /*
          Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
          version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
          the end parameter might not work as expected. A possible solution might be to convert the the
          relative time to an absolute time. For instance, replacing the previous line with:
          */
          /*
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
          */
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};

// saving
function saveGame() {
  let savingGame = {};

  // key bindings
  savingGame.keyBindingsCode = {};

  savingGame.keyBindingsCode.settings = keyBindings.get("Settings").code;
  savingGame.keyBindingsCode.openMap = keyBindings.get("Open Map").code;
  savingGame.keyBindingsCode.inventory = keyBindings.get("Inventory").code;
  savingGame.keyBindingsCode.toggleRanged = keyBindings.get("Toggle Ranged").code;
  savingGame.keyBindingsCode.toggleMagic = keyBindings.get("Toggle Magic").code;
  savingGame.keyBindingsCode.placeTrap = keyBindings.get("Place Trap").code;
  savingGame.keyBindingsCode.moveUp = keyBindings.get("Move Up").code;
  savingGame.keyBindingsCode.moveLeft = keyBindings.get("Move Left").code;
  savingGame.keyBindingsCode.moveDown = keyBindings.get("Move Down").code;
  savingGame.keyBindingsCode.moveRight = keyBindings.get("Move Right").code;
  savingGame.keyBindingsCode.toggleWalk = keyBindings.get("Toggle Walk").code;
  savingGame.keyBindingsCode.consumeHpPoition = keyBindings.get("Consume HP Poition").code;
  savingGame.keyBindingsCode.consumeMpPoition = keyBindings.get("Consume MP Poition").code;
  savingGame.keyBindingsCode.interact = keyBindings.get("Interact").code;

  // player
  savingGame.player = {};

    // inventory
  savingGame.player.inventory = make2DGrid(inventory.width, inventory.height);
  arrayCopy(player.inventory, savingGame.player.inventory);

  savingGame.player.name = player.name;

  savingGame.player.raceIndex = player.raceIndex;
  savingGame.player.skillIndex = player.skillIndex;

    // stats
  savingGame.player.hp = player.hp;
  savingGame.player.mp = player.mp;

  savingGame.player.int = player.int;
  savingGame.player.agi = player.agi;
  savingGame.player.str = player.str;
  savingGame.player.dex = player.dex;
  savingGame.player.vit = player.vit;

  savingGame.player.lvl = player.lvl;
  savingGame.player.exp = player.exp;
  savingGame.player.nextLvl = player.nextLvl;
  savingGame.player.points = player.points;

  savingGame.player.inGuild = player.inGuild;

  // equip slots
  savingGame.equipSlots = [];

  for (let theItem of inventory.equipSlots)
    savingGame.equipSlots.push(theItem.equipped);

  // party members
  savingGame.guildMembers = [];
  arrayCopy(guildMembers, savingGame.guildMembers);

  state = "Settings";
  docCookies.setItem("saved cookie", JSON.stringify(savingGame), 31536e3);
}

// loading
function loadGame() {
  clickWait();
  if (docCookies.hasItem("saved cookie")) {
    setup();
    let loadingGame = JSON.parse(docCookies.getItem("saved cookie"));

    // key bindings
    keyBindings.get("Settings").code = loadingGame.keyBindingsCode.settings;
    keyBindings.get("Open Map").code = loadingGame.keyBindingsCode.openMap;
    keyBindings.get("Inventory").code = loadingGame.keyBindingsCode.inventory;
    keyBindings.get("Toggle Ranged").code = loadingGame.keyBindingsCode.toggleRanged;
    keyBindings.get("Toggle Magic").code = loadingGame.keyBindingsCode.toggleMagic;
    keyBindings.get("Place Trap").code = loadingGame.keyBindingsCode.placeTrap;
    keyBindings.get("Move Up").code = loadingGame.keyBindingsCode.moveUp;
    keyBindings.get("Move Left").code = loadingGame.keyBindingsCode.moveLeft;
    keyBindings.get("Move Down").code = loadingGame.keyBindingsCode.moveDown;
    keyBindings.get("Move Right").code = loadingGame.keyBindingsCode.moveRight;
    keyBindings.get("Toggle Walk").code = loadingGame.keyBindingsCode.toggleWalk;
    keyBindings.get("Consume HP Poition").code = loadingGame.keyBindingsCode.consumeHpPoition;
    keyBindings.get("Consume MP Poition").code = loadingGame.keyBindingsCode.consumeMpPoition;
    keyBindings.get("Interact").code = loadingGame.keyBindingsCode.interact;

    // player
      // inventory
    for (let y = 0; y < loadingGame.player.inventory.length; y++)
      for (let x = 0; x < loadingGame.player.inventory[y].length; x++)
        if (loadingGame.player.inventory[y][x] !== "empty")
          putInInventory(loadingGame.player.inventory[y][x], loadingGame.player.inventory[y][x].amount);

    player.name = loadingGame.player.name;

    player.raceIndex = loadingGame.player.raceIndex;
    player.race = allRaces[player.raceIndex];

    player.skillIndex = loadingGame.player.skillIndex;
    player.skill = allSkills[player.skillIndex];


      // stats
    player.hp = loadingGame.player.hp;
    player.mp = loadingGame.player.mp;

    player.int = loadingGame.player.int;
    player.agi = loadingGame.player.agi;
    player.str = loadingGame.player.str;
    player.dex = loadingGame.player.dex;
    player.vit = loadingGame.player.vit;

    player.lvl = loadingGame.player.lvl;
    player.exp = loadingGame.player.exp;
    player.nextLvl = loadingGame.player.nextLvl;
    player.points = loadingGame.player.points;

    player.inGuild = loadingGame.player.inGuild;

    // equip slots
    for (let i=0; i < loadingGame.equipSlots.length; i++) {
      if (loadingGame.equipSlots[i] !== "empty") {
        allItems.get(loadingGame.equipSlots[i].name).amount = loadingGame.equipSlots[i].amount;
        inventory.equipSlots[i].equipped = allItems.get(loadingGame.equipSlots[i].name);
        inventory.equipSlots[i].requip();
      }
    }

    // party members
    for (let i=0; i < loadingGame.guildMembers.length; i++)
      guildMembers.push(new GuildMember(loadingGame.guildMembers[i].raceIndex, guildInventory[i].skillIndex, guildInventory[i].lvl));

    calculateStats();
    startingState = 2;
    state = 0;
  }
}
