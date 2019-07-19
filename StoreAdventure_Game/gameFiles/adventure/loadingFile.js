function preloadAdventure() {
  soundFormats("mp3", "wav");

  // sounds
    // background
  advtSounds.startMenu = loadSound("assets/sound/background/startMenu.wav");
  advtSounds.overWorld = loadSound("assets/sound/background/overWorld.mp3");
  advtSounds.itemShop = loadSound("assets/sound/background/itemShop.mp3");
  advtSounds.caves = loadSound("assets/sound/background/caves.mp3");
  advtSounds.demonGate = loadSound("assets/sound/background/demonGate.wav");
  advtSounds.demonRealm = loadSound("assets/sound/background/demonRealm.mp3");
  advtSounds.castle = loadSound("assets/sound/background/castle.mp3");
  advtSounds.dungeon = loadSound("assets/sound/background/dungeon.mp3");
  advtSounds.gameOver = loadSound("assets/sound/background/gameOver.mp3");

    // attack
  advtSounds.swordAttack = loadSound("assets/sound/attack/slash.wav");
  advtSounds.arrowAttack = loadSound("assets/sound/attack/arrowShot.mp3");
  advtSounds.fireballAttack = loadSound("assets/sound/attack/fireballCast.mp3");
  advtSounds.swordHit = loadSound("assets/sound/attack/slashHit.mp3");
  advtSounds.arrowHit = loadSound("assets/sound/attack/arrowHit.mp3");
  advtSounds.fireballHit = loadSound("assets/sound/attack/fireballHit.mp3");
  advtSounds.trapHit = loadSound("assets/sound/attack/trapHit.wav");

    // other
  advtSounds.pickUp = loadSound("assets/sound/pickUp.mp3");
  advtSounds.consumePotion = loadSound("assets/sound/consumePotion.wav");
  advtSounds.enemyDeath = loadSound("assets/sound/enemyDeath.wav");

  // backgrounds
  advtImg.worldBackgrounds.homePage = loadImage("assets/img/backgrounds/lovelyHomepage.png");

    // over world
  advtImg.worldBackgrounds.grass = loadImage("assets/img/backgrounds/grass.png");
  advtImg.worldBackgrounds.town = loadImage("assets/img/backgrounds/town.png");
  advtImg.worldBackgrounds.desert = loadImage("assets/img/backgrounds/sand.png");
  advtImg.worldBackgrounds.forest = loadImage("assets/img/backgrounds/forest.png");
  advtImg.worldBackgrounds.mountain = loadImage("assets/img/backgrounds/mountain.png");

    // cave
  advtImg.worldBackgrounds.caveOpening = loadImage("assets/img/backgrounds/caveOpening.png");
  advtImg.worldBackgrounds.cave = loadImage("assets/img/backgrounds/cave.png");
  advtImg.worldBackgrounds.caveExit = loadImage("assets/img/backgrounds/caveExit.png");

    // demon realm
  advtImg.worldBackgrounds.demonGate = loadImage("assets/img/backgrounds/demonGate.png");
  advtImg.worldBackgrounds.demonRealm = loadImage("assets/img/backgrounds/demonRealm.png");

    // castle
  advtImg.worldBackgrounds.castleEntrance = loadImage("assets/img/backgrounds/castleEntrance.png");
  advtImg.worldBackgrounds.castle = loadImage("assets/img/backgrounds/castle.png");

    // dungeon
  advtImg.worldBackgrounds.dungeon = loadImage("assets/img/backgrounds/dungeon.png");

    // other
  advtImg.worldBackgrounds.house = loadImage("assets/img/backgrounds/house.png");
  advtImg.worldBackgrounds.stairs = loadImage("assets/img/backgrounds/stairs.png");
  advtImg.worldBackgrounds.door = loadImage("assets/img/backgrounds/door.png");

  // NPC's
  advtImg.npcImg.genericNPC = loadImage("assets/img/sprites/NPC.png");
  advtImg.npcImg.shopKeep = loadImage("assets/img/sprites/shopKeep.png");
  advtImg.npcImg.guildKeeper = loadImage("assets/img/sprites/guildKeeper.png");

  advtImg.guildTicket = loadImage("assets/img/guildTicket.png");
  advtImg.guildTicketBack = loadImage("assets/img/guildTicketBack.png");

  // inventory delete button
  advtImg.itemImg.garbageClosed = loadImage("assets/img/inventory/garbageClosed.png");
  advtImg.itemImg.garbageOpened = loadImage("assets/img/inventory/garbageOpened.png");

  // layout
  advtImg.itemImg.inventoryLayout = loadImage("assets/img/inventory/inventroyEquipLayout.png");

  // items
  advtImg.itemImg.swordAttack = loadImage("assets/img/items/sword.png");
  advtImg.itemImg.arrowAttack = loadImage("assets/img/items/arrows.png");
  advtImg.itemImg.fireBallAttack = loadImage("assets/img/items/fireBall.png");
  advtImg.itemImg.hpPotion = loadImage("assets/img/items/hpPotion.png");
  advtImg.itemImg.mpPotion = loadImage("assets/img/items/mpPotion.png");
  advtImg.itemImg.trap = loadImage("assets/img/items/traps.png");
  advtImg.itemImg.townPortal = loadImage("assets/img/items/townPortal.png");
  advtImg.itemImg.money = loadImage("assets/img/items/money.png");
  advtImg.itemImg.item = loadImage("assets/img/items/item.png");

  // mouse pointers
  advtImg.itemImg.swordIcon = loadImage("assets/img/items/equippedIcons/swordIcon.png");
  advtImg.itemImg.bowIcon = loadImage("assets/img/items/equippedIcons/bowIcon.png");
  advtImg.itemImg.magicIcon = loadImage("assets/img/items/equippedIcons/magicIcon.png");

  // equipment
  advtImg.itemImg.weapon = loadImage("assets/img/items/equipment/weapon.png");
  advtImg.itemImg.head = loadImage("assets/img/items/equipment/head.png");
  advtImg.itemImg.chest = loadImage("assets/img/items/equipment/chest.png");
  advtImg.itemImg.feet = loadImage("assets/img/items/equipment/feet.png");
  advtImg.itemImg.shoulders = loadImage("assets/img/items/equipment/shoulders.png");
  advtImg.itemImg.legs = loadImage("assets/img/items/equipment/legs.png");
  advtImg.itemImg.hands = loadImage("assets/img/items/equipment/hands.png");

  // sprites
  advtImg.sprites.random = loadImage("assets/img/sprites/random.png");
  
  advtImg.sprites.race.dwarf = loadImage("assets/img/sprites/dwarf.png");
  advtImg.sprites.race.elf = loadImage("assets/img/sprites/elf.png");
  advtImg.sprites.race.goblin = loadImage("assets/img/sprites/goblin.png");
  advtImg.sprites.race.halfElf = loadImage("assets/img/sprites/half-elf.png");
  advtImg.sprites.race.halfling = loadImage("assets/img/sprites/halfling.png");
  advtImg.sprites.race.human = loadImage("assets/img/sprites/human.png");
  advtImg.sprites.race.orc = loadImage("assets/img/sprites/orc.png");
  advtImg.sprites.race.urukHai = loadImage("assets/img/sprites/uruk-hai.png");

  // enemy sprites
  advtImg.sprites.death = loadImage("assets/img/sprites/enemyDeath.png");
  advtImg.sprites.boss = loadImage("assets/img/sprites/boss.png");

  advtImg.sprites.race.rat = loadImage("assets/img/sprites/rat.png");
  advtImg.sprites.race.ghost = loadImage("assets/img/sprites/ghost.png");
  advtImg.sprites.race.skeleton = loadImage("assets/img/sprites/skeleton.png");
  advtImg.sprites.race.undeadKnight = loadImage("assets/img/sprites/undeadKnight.png");
  advtImg.sprites.race.gateGaurd = loadImage("assets/img/sprites/gateGaurd.png");
  advtImg.sprites.race.gateGaurd2 = loadImage("assets/img/sprites/gateGaurd2.png");
  advtImg.sprites.race.fireImp = loadImage("assets/img/sprites/fireImp.png");
  advtImg.sprites.race.demonBig = loadImage("assets/img/sprites/demonBig.png");
  advtImg.sprites.race.demonSmall = loadImage("assets/img/sprites/demonSmall.png");
  advtImg.sprites.race.demon1 = loadImage("assets/img/sprites/demon1.png");
  
  // player skills
  advtImg.sprites.skill.archer = loadImage("assets/img/skills/archer.png");
  advtImg.sprites.skill.cleric = loadImage("assets/img/skills/cleric.png");
  advtImg.sprites.skill.fighter = loadImage("assets/img/skills/fighter.png");
  advtImg.sprites.skill.mage = loadImage("assets/img/skills/mage.png");
  advtImg.sprites.skill.ranger = loadImage("assets/img/skills/ranger.png");
  advtImg.sprites.skill.rogue = loadImage("assets/img/skills/rogue.png");
  advtImg.sprites.skill.samurai = loadImage("assets/img/skills/samurai.png");
  advtImg.sprites.skill.trapper = loadImage("assets/img/skills/trapper.png");

  // enemy skills
  advtImg.sprites.skill.knight = loadImage("assets/img/skills/knight.png");
  advtImg.sprites.skill.spiritMage = loadImage("assets/img/skills/spiritMage.png");
  advtImg.sprites.skill.melee = loadImage("assets/img/skills/melee.png");
  advtImg.sprites.skill.demonMagic = loadImage("assets/img/skills/demonMagic.png");
  advtImg.sprites.skill.boss = loadImage("assets/img/skills/boss.png");

  setSounds();
}

function setSounds() {
  // background
  advtSounds.startMenu.setVolume(0.6);
  advtSounds.overWorld.setVolume(0.3);
  advtSounds.itemShop.setVolume(0.3);
  advtSounds.caves.setVolume(1);
  advtSounds.demonGate.setVolume(1);
  advtSounds.demonRealm.setVolume(1);
  advtSounds.castle.setVolume(1);
  advtSounds.dungeon.setVolume(1);
  advtSounds.gameOver.setVolume(1.25);

  // attack
  advtSounds.swordAttack.setVolume(3);
  advtSounds.arrowAttack.setVolume(1.5);
  advtSounds.fireballAttack.setVolume(1);
  advtSounds.swordHit.setVolume(0.25);
  advtSounds.arrowHit.setVolume(0.95);
  advtSounds.fireballHit.setVolume(1);
  advtSounds.trapHit.setVolume(0.25);

  // other
  advtSounds.pickUp.setVolume(1);
  advtSounds.consumePotion.setVolume(0.7);
  advtSounds.enemyDeath.setVolume(2.5);
}

function setupAdventure() {
  noStroke();
  
  advtSounds.startMenu.loop();
  advtSounds.overWorld.loop();
  advtSounds.itemShop.loop();
  advtSounds.caves.loop();
  advtSounds.demonGate.loop();

  advtSounds.startMenu.stop();
  advtSounds.overWorld.stop();
  advtSounds.itemShop.stop();
  advtSounds.caves.stop();
  advtSounds.demonGate.stop();

  // resetting
  advtGeneral.startingState = 0;
  advtGeneral.state = 0;
  advtGeneral.previousState = 0;
  advtItems.recentPickUps = "";
  advtEnemys.enemyArr = [];
  advtPlayer.guildMembers = [];
  advtWorldVars.drawingBack = true;
  advtNPCs.refreshTimer = 30*1000;
  advtNPCs.lastRefresh = millis();
  advtItems.recentsTimer = 5000;
  advtItems.recentsLastTime = millis();

  // text
  fontSize.default = (width+height)*0.015;
  fontSize.playersDisplay = fontSize.default/2;
  textFont(fonts.default, fontSize.default);

  // setting attack types
  let widHei = (width+height)/2;
  advtAttacks.melee = {
    enemyDist: widHei*0.075,
    attackDist: widHei*0.10,
    attackSpeed: 2,
    img: advtImg.itemImg.swordAttack,
    soundAttack: advtSounds.swordAttack,
    soundHit: advtSounds.swordHit
  };

  advtAttacks.ranged = {
    enemyDist: widHei*0.50,
    attackDist: widHei*0.70,
    attackSpeed: 3,
    img: advtImg.itemImg.arrowAttack,
    soundAttack: advtSounds.arrowAttack,
    soundHit: advtSounds.arrowHit
  };

  advtAttacks.spellCaster = {
    enemyDist: widHei*0.40,
    attackDist: widHei*0.60,
    attackSpeed: 2.5,
    img: advtImg.itemImg.fireBallAttack,
    soundAttack: advtSounds.fireballAttack,
    soundHit: advtSounds.fireballHit
  };

  // button colors
  advtButtonArrays.buttons.red = color(255, 0, 0);
  advtButtonArrays.buttons.green = color(0, 255, 0);
  advtButtonArrays.buttons.orange = color(255, 165, 0);
  advtButtonArrays.buttons.lightOrange = color(255, 220, 0);
  advtButtonArrays.buttons.brown = color(153, 77, 0);
  advtButtonArrays.buttons.lightBrown = color(179, 89, 0);

  // buttons
  advtButtonArrays.buttons.back = new Button(-width*0.475, -height*0.475, width*0.05, height*0.05, advtButtonArrays.buttons.red, advtButtonArrays.buttons.green, "Back", "BOLD", fontSize.playersDisplay);
  advtButtonArrays.buttons.continue = new Button(0, -height*0.4625, width*0.20, height*0.075, advtButtonArrays.buttons.red, advtButtonArrays.buttons.green, "Continue");
  advtButtonArrays.buttons.reName = new Button(0, -height*0.15, width*0.15, height*0.075, advtButtonArrays.buttons.red, advtButtonArrays.buttons.green, "MOI");

  // assinging variables
  settingSprites();
  setSettingsMenu();
  settingKeyBindings();
  settingWorld();
  setItems();
  setPlayer();
  setNPCs();
  setQuests();
  setShops();

  // heal button
  let shorterLine /*great variable name*/ = (advtInventory.inventory.width+1)*advtInventory.inventory.boxSize-width/2+advtInventory.inventory.boxSize; // makes the next line shorter
  advtButtonArrays.buttons.heal = new Button(shorterLine, -height*0.45, advtInventory.inventory.boxSize, advtInventory.inventory.boxSize, advtButtonArrays.buttons.brown, advtButtonArrays.buttons.lightBrown, "Heal", "BOLD");

  // level up buttons
  advtButtonArrays.buttons.lvlUp = [];
  for (let i=0; i<5; i++) {
    let x = advtInventory.inventory.width*advtInventory.inventory.boxSize + advtInventory.inventory.boxSize*1.75;
    let y = (advtInventory.inventory.boxSize+fontSize.playersDisplay*1.8*10) + (fontSize.playersDisplay/3+height*0.025)*i - height/2;
    advtButtonArrays.buttons.lvlUp.push(new Button(x-width/2, y, width*0.02, height*0.025, advtButtonArrays.buttons.brown, advtButtonArrays.buttons.lightBrown, "+", "BOLD", fontSize.playersDisplay));
  }
}

function settingSprites() {
  // sprite size
  spriteSize.sampleWidth = width*0.30;
  spriteSize.sampleHeight = height*0.50;
  spriteSize.width = width*0.05;
  spriteSize.height = height*0.10;

  // race
  advtArrays.allRaces = [
    {name: "Random", img: advtImg.sprites.random, stats: secretRace}, {name: "Human", img: advtImg.sprites.race.human, stats: human},
    {name: "Half-Elf", img: advtImg.sprites.race.halfElf, stats: halfElf}, {name: "Elf", img: advtImg.sprites.race.elf, stats: elf},
    {name: "Dwarf", img: advtImg.sprites.race.dwarf, stats: dwarf}, {name: "Halfling", img: advtImg.sprites.race.halfling, stats: halfling},
    {name: "Goblin", img: advtImg.sprites.race.goblin, stats: goblin}, {name: "Orc", img: advtImg.sprites.race.orc, stats: orc},
    {name: "Uruk-Hai", img: advtImg.sprites.race.urukHai, stats: urukHai}
  ];

  advtArrays.raceSpecific.guild = [
    {name: "Human", img: advtImg.sprites.race.human, stats: human}, {name: "Half-Elf", img: advtImg.sprites.race.halfElf, stats: halfElf},
    {name: "Elf", img: advtImg.sprites.race.elf, stats: elf}, {name: "Dwarf", img: advtImg.sprites.race.dwarf, stats: dwarf},
    {name: "Halfling", img: advtImg.sprites.race.halfling, stats: halfling}
  ];

  advtArrays.raceSpecific.overWorld = [
    { name: "Human", img: advtImg.sprites.race.human, stats: human }, { name: "Half-Elf", img: advtImg.sprites.race.halfElf, stats: halfElf},
    { name: "Elf", img: advtImg.sprites.race.elf, stats: elf }, { name: "Dwarf", img: advtImg.sprites.race.dwarf, stats: dwarf},
    { name: "Halfling", img: advtImg.sprites.race.halfling, stats: halfling }, { name: "Goblin", img: advtImg.sprites.race.goblin, stats: goblin},
    { name: "Orc", img: advtImg.sprites.race.orc, stats: orc }, { name: "Uruk-Hai", img: advtImg.sprites.race.urukHai, stats: urukHai}
  ];

  advtArrays.raceSpecific.castle = [
    { name: "Human", img: advtImg.sprites.race.human, stats: human }, { name: "Half-Elf", img: advtImg.sprites.race.halfElf, stats: halfElf}
  ];

  advtArrays.raceSpecific.dungeon = [
    { name: "Goblin", img: advtImg.sprites.race.goblin, stats: goblin }, { name: "Rat", img: advtImg.sprites.race.rat, stats: rat},
    { name: "Ghost", img: advtImg.sprites.race.ghost, stats: ghost }, { name: "Skeleton", img: advtImg.sprites.race.skeleton, stats: skeleton},
    {name: "Undead Knight", img: advtImg.sprites.race.undeadKnight, stats: undeadKnight}
  ];

  advtArrays.raceSpecific.boss = [
    { name: "Boss", img: advtImg.sprites.boss, stats: bossRace}
  ];

  advtArrays.raceSpecific.cave = [
    { name: "Goblin", img: advtImg.sprites.race.goblin, stats: goblin }, { name: "Orc", img: advtImg.sprites.race.orc, stats: orc},
    { name: "Uruk-Hai", img: advtImg.sprites.race.urukHai, stats: urukHai}
  ];

  advtArrays.raceSpecific.demonsGate = [
    { name: "Fire Imp", img: advtImg.sprites.race.fireImp, stats: fireImp }, { name: "Gate Gaurd", img: advtImg.sprites.race.gateGaurd, stats: gateGaurd},
    { name: "Gate Gaurd 2.0", img: advtImg.sprites.race.gateGaurd2, stats: gateGaurd2}
  ];

  advtArrays.raceSpecific.demons = [
    { name: "Fire Imp", img: advtImg.sprites.race.fireImp, stats: fireImp }, { name: "Demon Big", img: advtImg.sprites.race.demonBig, stats: demonBig},
    { name: "Demon Small", img: advtImg.sprites.race.demonSmall, stats: demonSmall }, { name: "Demon 1", img: advtImg.sprites.race.demon1, stats: demon1}
  ];

  // skill
  advtArrays.allSkills = [
    {name: "Random", img: advtImg.sprites.random, stats: secretSkill}, {name: "Archer", img: advtImg.sprites.skill.archer, stats: archer},
    {name: "Ranger", img: advtImg.sprites.skill.ranger, stats: ranger}, {name: "Fighter", img: advtImg.sprites.skill.fighter, stats: fighter},
    {name: "Samurai", img: advtImg.sprites.skill.samurai, stats: samurai}, {name: "Mage", img: advtImg.sprites.skill.mage, stats: mage},
    {name: "Cleric", img: advtImg.sprites.skill.cleric, stats: cleric}, {name: "Rogue", img: advtImg.sprites.skill.rogue, stats: rogue},
    {name: "Trapper", img: advtImg.sprites.skill.trapper, stats: trapper}
  ];

  advtArrays.skillSpecific.overWorld = [
    {name: "Archer", img: advtImg.sprites.skill.archer, stats: archer}, {name: "Ranger", img: advtImg.sprites.skill.ranger, stats: ranger},
    {name: "Fighter", img: advtImg.sprites.skill.fighter, stats: fighter}, {name: "Samurai", img: advtImg.sprites.skill.samurai, stats: samurai},
    {name: "Mage", img: advtImg.sprites.skill.mage, stats: mage}, {name: "Cleric", img: advtImg.sprites.skill.cleric, stats: cleric},
    {name: "Rogue", img: advtImg.sprites.skill.rogue, stats: rogue}, {name: "Trapper", img: advtImg.sprites.skill.trapper, stats: trapper}
  ];

  advtArrays.skillSpecific.guild = [
    {name: "Archer", img: advtImg.sprites.skill.archer, stats: archer}, {name: "Mage", img: advtImg.sprites.skill.mage, stats: mage}
  ];

  advtArrays.skillSpecific.castle = [
    {name: "Archer", img: advtImg.sprites.skill.archer, stats: archer}, {name: "Fighter", img: advtImg.sprites.skill.fighter, stats: fighter},
    {name: "Samurai", img: advtImg.sprites.skill.samurai, stats: samurai}
  ];

  advtArrays.skillSpecific.dungeon = [
    {name: "Archer", img: advtImg.sprites.skill.archer, stats: archer}, {name: "Knight", img: advtImg.sprites.skill.knight, stats: knight},
    {name: "Spirit Mage", img: advtImg.sprites.skill.spiritMage, stats: spiritMage}
  ];

  advtArrays.skillSpecific.boss = [
    {name: "Boss", img: advtImg.sprites.skill.boss, stats: bossSkill}
  ];

  advtArrays.skillSpecific.cave = [
    {name: "Archer", img: advtImg.sprites.skill.archer, stats: archer}, {name: "Fighter", img: advtImg.sprites.skill.fighter, stats: fighter}
  ];

  advtArrays.skillSpecific.demons = [
    {name: "Slitty Slit", img: advtImg.sprites.skill.melee, stats: demonadvtAttacks.melee}, {name: "Fire Thing", img: advtImg.sprites.skill.demonMagic, stats: demonMagic}
  ];
}

function setSettingsMenu() {
  // all options found in the settings menu
  advtSettings.options = [
    {name: "Resume", state: 0},
    {name: "Controls", state: "Controls"},
    {name: "Map", state: "Map"},
    {name: "Save", state: "Save"},
    {name: "Load", state: "Load"},
    {name: "Main Menu", state: "Main Menu"}
  ];

  setButtonAtributes();

  // buttons for the settings options
  advtSettings.boxs = [];
  for (let i=0; i < advtSettings.options.length; i++)
    advtSettings.boxs.push(new Button(
      advtButtonArrays.buttonAtributes.settings.x, advtButtonArrays.buttonAtributes.listStart+(i*advtButtonArrays.buttonAtributes.settings.height),
      advtButtonArrays.buttonAtributes.width, advtButtonArrays.buttonAtributes.settings.height,
      advtButtonArrays.buttons.orange, advtButtonArrays.buttons.lightOrange, advtSettings.options[i].name
    ));

  // main menu confirmation buttons
  advtSettings.mainMenu = {};

    // YES
  advtSettings.mainMenu.yes = new Button(
    advtButtonArrays.buttonAtributes.race.x, 0,
    advtButtonArrays.buttonAtributes.width, advtButtonArrays.buttonAtributes.settings.height,
    advtButtonArrays.buttons.orange, advtButtonArrays.buttons.lightOrange, "Yes"
  );

    // NO
  advtSettings.mainMenu.no = new Button(
    advtButtonArrays.buttonAtributes.skill.x, 0,
    advtButtonArrays.buttonAtributes.width, advtButtonArrays.buttonAtributes.settings.height,
    advtButtonArrays.buttons.orange, advtButtonArrays.buttons.lightOrange, "No"
  );
}

function settingKeyBindings() {
  // key bindings
  advtKeybindings.keyBindings = new Map();

  advtKeybindings.keyBindings.set("Settings", {code: 27, state: "settings", button: 0}); // Escape
  advtKeybindings.keyBindings.set("Open Map", {code: 77, state: "map", button: 0}); // M
  advtKeybindings.keyBindings.set("Inventory", {code: 69, state: "inventory", button: 0}); // E
  advtKeybindings.keyBindings.set("Toggle Ranged", {code: 49, state: "ranged", button: 0}); // R
  advtKeybindings.keyBindings.set("Toggle Magic", {code: 50, state: "magic", button: 0}); // T
  advtKeybindings.keyBindings.set("Place Trap", {code: 81, button: 0}); // Q
  advtKeybindings.keyBindings.set("Move Up", {code: 87, button: 0}); // W
  advtKeybindings.keyBindings.set("Move Left", {code: 65, button: 0}); // A
  advtKeybindings.keyBindings.set("Move Down", {code: 83, button: 0}); // S
  advtKeybindings.keyBindings.set("Move Right", {code: 68, button: 0}); // D
  advtKeybindings.keyBindings.set("Toggle Walk", {code: 16, button: 0}); // Shift
  advtKeybindings.keyBindings.set("Consume HP Poition", {code: 70, button: 0}); // F
  advtKeybindings.keyBindings.set("Consume MP Poition", {code: 71, button: 0}); // G
  advtKeybindings.keyBindings.set("Use Town Portal", {code: 84, button: 0}); // T
  advtKeybindings.keyBindings.set("Interact", {code: 32, button: 0}); // Space
  advtKeybindings.keyBindings.set("Enter Area", {code: 67, button: 0}); // C

  advtKeybindings.keyBindings.forEach(setKeyButtons);
}

function settingWorld() {
  // coordinates
  advtWorldVars.world.sizeMult = 20;
  advtWorldVars.world.width = width*advtWorldVars.world.sizeMult;
  advtWorldVars.world.height = height*advtWorldVars.world.sizeMult;
  advtWorldVars.world.changedX = 0;
  advtWorldVars.world.changedY = 0;

  // different enviorments
  worldEnviorment = {};

    // over world
  worldEnviorment.overWorld = new Map();
  worldEnviorment.overWorld.set("Meadows", {img: advtImg.worldBackgrounds.grass, name: "Meadows", color: color(249, 166, 6), numOfEnemys: 30, enemy: {lvlMin: 0, lvlMax: 2, race: advtArrays.raceSpecific.overWorld, skill: advtArrays.skillSpecific.overWorld}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.overWorld.set("Town", {img: advtImg.worldBackgrounds.town, name: "Town", color: color(0, 255, 0), numOfEnemys: 0, zone: {x: 0, y: 0, wid: advtWorldVars.world.width*0.15, hei: advtWorldVars.world.height*0.15}, enter: false});
  worldEnviorment.overWorld.set("Desert", {img: advtImg.worldBackgrounds.desert, name: "Desert", color: color(0, 0, 255), numOfEnemys: 40, enemy: {lvlMin: 1, lvlMax: 4, race: advtArrays.raceSpecific.overWorld, skill: advtArrays.skillSpecific.overWorld}, zone: {x: -advtWorldVars.world.width*0.2125, y: advtWorldVars.world.height*0.30, wid: advtWorldVars.world.width*0.575, hei: advtWorldVars.world.height*0.40}, enter: false});
  worldEnviorment.overWorld.set("Forest", {img: advtImg.worldBackgrounds.forest, name: "Forest", color: color(135, 96, 66), numOfEnemys: 40, enemy: {lvlMin: 3, lvlMax: 6, race: advtArrays.raceSpecific.overWorld, skill: advtArrays.skillSpecific.overWorld}, zone: {x: advtWorldVars.world.width*0.30, y: -advtWorldVars.world.height*0.325, wid: advtWorldVars.world.width*0.40, hei: advtWorldVars.world.height*0.35}, enter: false});
  worldEnviorment.overWorld.set("Mountains", {img: advtImg.worldBackgrounds.mountain, name: "Mountains", color: color(162, 206, 228), numOfEnemys: 45, enemy: {lvlMin: 5, lvlMax: 10, race: advtArrays.raceSpecific.overWorld, skill: advtArrays.skillSpecific.overWorld}, zone: {x: -advtWorldVars.world.width*0.40, y: -advtWorldVars.world.height*0.275, wid: advtWorldVars.world.width*0.20, hei: advtWorldVars.world.height*0.45}, enter: false});
  worldEnviorment.overWorld.set("Cave Opening", {img: advtImg.worldBackgrounds.caveOpening, name: "Cave Opening", color: color(255), numOfEnemys: 0, zone: {x: advtWorldVars.world.width*0.35, y: advtWorldVars.world.height*0.35, wid: advtWorldVars.world.width*0.05, hei: advtWorldVars.world.height*0.05}, enter: true, newArea: "Cave"});
  worldEnviorment.overWorld.set("Castle Gate", {img: advtImg.worldBackgrounds.castleEntrance, name: "Castle Gate", color: color(255), numOfEnemys: 0, zone: {x: 0, y: -advtWorldVars.world.height*0.40, wid: advtWorldVars.world.width*0.05, hei: advtWorldVars.world.height*0.05}, enter: true, newArea: "Castle"});

    // caves
  worldEnviorment.cave = new Map();
  worldEnviorment.cave.set("Cave", {img: advtImg.worldBackgrounds.cave, name: "Cave", color: color(139, 15, 205), numOfEnemys: 30, enemy: {lvlMin: 10, lvlMax: 15, race: advtArrays.raceSpecific.cave, skill: advtArrays.skillSpecific.cave}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.cave.set("Demon Gate", {img: advtImg.worldBackgrounds.demonGate, name: "Demon Gate Entrance", color: color(25, 255, 199), numOfEnemys: 40, enemy: {lvlMin: 13, lvlMax: 25, race: advtArrays.raceSpecific.demonsGate, skill: advtArrays.skillSpecific.demons}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width*0.20, hei: advtWorldVars.world.height*0.20}, enter: true, newArea: "Demon Realm"});
  worldEnviorment.cave.set("Cave Exit", {img: advtImg.worldBackgrounds.caveExit, name: "Cave Exit", color: color(200), numOfEnemys: 3, enemy: {lvlMin: 8, lvlMax: 12, race: advtArrays.raceSpecific.cave, skill: advtArrays.skillSpecific.cave}, zone: {x: advtWorldVars.world.width*0.35, y: advtWorldVars.world.height*0.35, wid: advtWorldVars.world.width*0.05, hei: advtWorldVars.world.height*0.05}, enter: true, newArea: "Over World"});
  worldEnviorment.cave.set("Castle Cave Exit", {img: advtImg.worldBackgrounds.stairs, name: "Castle Cave Exit", color: color(200), numOfEnemys: 0, zone: {x: -advtWorldVars.world.width*0.20, y: advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Castle"});

    // demon realm
  worldEnviorment.demonRealm = new Map();
  worldEnviorment.demonRealm.set("Demon Realm", {img: advtImg.worldBackgrounds.demonRealm, name: "Demon Realm", color: color(212, 0, 57), numOfEnemys: 50, enemy: {lvlMin: 20, lvlMax: 30, race: advtArrays.raceSpecific.demons, skill: advtArrays.skillSpecific.demons}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.demonRealm.set("Demon Gate", {img: advtImg.worldBackgrounds.demonGate, name: "Demon Gate Exit", color: color(212, 0, 57), numOfEnemys: 20, enemy: {lvlMin: 17, lvlMax: 27, race: advtArrays.raceSpecific.demonsGate, skill: advtArrays.skillSpecific.demons}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width*0.10, hei: advtWorldVars.world.height*0.10}, enter: true, newArea: "Cave"});

    // castle
  worldEnviorment.castle = new Map();
  worldEnviorment.castle.set("Castle", {img: advtImg.worldBackgrounds.castle, name: "Castle", color: color(212, 0, 57), numOfEnemys: 40, enemy: {lvlMin: 15, lvlMax: 25, race: advtArrays.raceSpecific.castle, skill: advtArrays.skillSpecific.castle}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.castle.set("Castle Exit", {img: advtImg.worldBackgrounds.door, name: "Castle Exit", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: 0, y: -advtWorldVars.world.height*0.45, wid: width*0.50, hei: height*0.25}, enter: true, newArea: "Over World"});
  worldEnviorment.castle.set("Cave Entrance", {img: advtImg.worldBackgrounds.stairs, name: "Cave Entrance", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: -advtWorldVars.world.width*0.20, y: advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Cave"});
  worldEnviorment.castle.set("Dungeon Entrance", {img: advtImg.worldBackgrounds.stairs, name: "Dungeon Entrance", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: advtWorldVars.world.width*0.20, y: advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 1"});

    // dungeon 1
  worldEnviorment.dungeon1 = new Map();
  worldEnviorment.dungeon1.set("Dungeon 1", {img: advtImg.worldBackgrounds.dungeon, name: "Dungeon 1", color: color(212, 0, 57), numOfEnemys: 30, enemy: {lvlMin: 20, lvlMax: 40, race: advtArrays.raceSpecific.dungeon, skill: advtArrays.skillSpecific.dungeon}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.dungeon1.set("Dungeon Exit", {img: advtImg.worldBackgrounds.stairs, name: "Dungeon Exit", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: advtWorldVars.world.width*0.20, y: advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Castle"});
  worldEnviorment.dungeon1.set("Down 2", {img: advtImg.worldBackgrounds.stairs, name: "Down 2", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: -advtWorldVars.world.width*0.45, y: -advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 2"});

    // dungeon 2
  worldEnviorment.dungeon2 = new Map();
  worldEnviorment.dungeon2.set("Dungeon 2", {img: advtImg.worldBackgrounds.dungeon, name: "Dungeon 2", color: color(212, 0, 57), numOfEnemys: 35, enemy: {lvlMin: 35, lvlMax: 55, race: advtArrays.raceSpecific.dungeon, skill: advtArrays.skillSpecific.dungeon}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.dungeon2.set("Up 1", {img: advtImg.worldBackgrounds.stairs, name: "Up 1", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: -advtWorldVars.world.width*0.45, y: -advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 1"});
  worldEnviorment.dungeon2.set("Down 3", {img: advtImg.worldBackgrounds.stairs, name: "Down 3", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: advtWorldVars.world.width*0.45, y: advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 3"});

    // dungeon 3
  worldEnviorment.dungeon3 = new Map();
  worldEnviorment.dungeon3.set("Dungeon 3", {img: advtImg.worldBackgrounds.dungeon, name: "Dungeon 3", color: color(212, 0, 57), numOfEnemys: 40, enemy: {lvlMin: 50, lvlMax: 70, race: advtArrays.raceSpecific.dungeon, skill: advtArrays.skillSpecific.dungeon}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.dungeon3.set("Up 2", {img: advtImg.worldBackgrounds.stairs, name: "Up 2", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: advtWorldVars.world.width*0.45, y: advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 2"});
  worldEnviorment.dungeon3.set("Down 4", {img: advtImg.worldBackgrounds.stairs, name: "Down 4", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: -advtWorldVars.world.width*0.45, y: -advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 4"});

    // dungeon 4
  worldEnviorment.dungeon4 = new Map();
  worldEnviorment.dungeon4.set("Dungeon 4", {img: advtImg.worldBackgrounds.dungeon, name: "Dungeon 4", color: color(212, 0, 57), numOfEnemys: 45, enemy: {lvlMin: 75, lvlMax: 95, race: advtArrays.raceSpecific.dungeon, skill: advtArrays.skillSpecific.dungeon}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.dungeon4.set("Up 3", {img: advtImg.worldBackgrounds.stairs, name: "Up 3", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: -advtWorldVars.world.width*0.45, y: -advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 3"});
  worldEnviorment.dungeon4.set("Down 5", {img: advtImg.worldBackgrounds.stairs, name: "Down 5", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: advtWorldVars.world.width*0.45, y: advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 5"});

    // dungeon 5
  worldEnviorment.dungeon5 = new Map();
  worldEnviorment.dungeon5.set("Dungeon 5", {img: advtImg.worldBackgrounds.dungeon, name: "Dungeon 5", color: color(212, 0, 57), numOfEnemys: 50, enemy: {lvlMin: 90, lvlMax: 100, race: advtArrays.raceSpecific.dungeon, skill: advtArrays.skillSpecific.dungeon}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.dungeon5.set("Up 4", {img: advtImg.worldBackgrounds.stairs, name: "Up 4", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: advtWorldVars.world.width*0.45, y: advtWorldVars.world.height*0.45, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 4"});
  worldEnviorment.dungeon5.set("Down Bottom", {img: advtImg.worldBackgrounds.stairs, name: "Down Bottom", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: 0, y: 0, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Bottom"});

    // dungeon bottom
  worldEnviorment.dungeonBottom = new Map();
  worldEnviorment.dungeonBottom.set("Bottom", {img: advtImg.worldBackgrounds.dungeon, name: "Bottom", color: color(212, 0, 57), numOfEnemys: 10, enemy: {lvlMin: 100, lvlMax: 200, race: advtArrays.raceSpecific.boss, skill: advtArrays.skillSpecific.boss}, zone: {x: 0, y: 0, wid: advtWorldVars.world.width, hei: advtWorldVars.world.height}, enter: false});
  worldEnviorment.dungeonBottom.set("Up 5", {img: advtImg.worldBackgrounds.stairs, name: "Up 5", color: color(212, 0, 57), numOfEnemys: 0, zone: {x: 0, y: 0, wid: width*0.25, hei: height*0.25}, enter: true, newArea: "Dungeon 5"});

  advtWorldVars.world.state = worldEnviorment.overWorld.get("Town");
  advtWorldVars.world.area = "Over World";
  advtWorldVars.world.checkingState = true;
  advtWorldVars.world.checkTimer = 4*1000;
  advtWorldVars.world.lastCheck = 0;

  // minimap
  advtWorldVars.minimap.padWidth = width*0.25;
  advtWorldVars.minimap.padHeight = height*0.30;
  advtWorldVars.minimap.imgWidth = advtWorldVars.minimap.padWidth-width*0.02;
  advtWorldVars.minimap.imgHeight = advtWorldVars.minimap.padHeight-height*0.02;
  advtWorldVars.minimap.screenWidth = map(width, 0, width, 0, advtWorldVars.minimap.imgWidth/advtWorldVars.world.sizeMult);
  advtWorldVars.minimap.screenHeight = map(height, 0, height, 0, advtWorldVars.minimap.imgHeight/advtWorldVars.world.sizeMult);
  advtWorldVars.minimap.x = -width/2 + advtWorldVars.minimap.padWidth/2;
  advtWorldVars.minimap.y = height/2 - advtWorldVars.minimap.padHeight/2;
}

function setItems() {
  advtItems.allItems = new Map();

  settingItemMap();

  // items in the world
  advtItems.items.onGround = [];
  advtItems.items.playerAttack = [];
  advtItems.items.enemyAttack = [];
}

function setPlayer() {
  // character
  advtPlayer.player.name = "MOI";
  advtPlayer.player.inGuild = false;

  advtPlayer.player.raceIndex = 0;
  advtPlayer.player.race = advtArrays.allRaces[advtPlayer.player.raceIndex];

  advtPlayer.player.skillIndex = 0;
  advtPlayer.player.skill = advtArrays.allSkills[advtPlayer.player.skillIndex];

  // stats
  advtPlayer.player.int = 0; // Intellegence
  advtPlayer.player.agi = 0; // Agillity
  advtPlayer.player.str = 0; // Strength
  advtPlayer.player.dex = 0; // Dexterity
  advtPlayer.player.vit = 0; // Vitality

  advtPlayer.player.totHp = 0;
  advtPlayer.player.hp = 0;

  advtPlayer.player.totMp = 0;
  advtPlayer.player.mp = 0;

  // atack
  advtPlayer.player.attackState = "melee";
  advtPlayer.player.coolDown = false;
  advtPlayer.player.coolDownTime = 0;
  advtPlayer.player.previousAttack = 0;
  advtPlayer.player.mDmg = 0; // melee
  advtPlayer.player.rDmg = 0; // ranged
  advtPlayer.player.sDmg = 0; // magic
  advtPlayer.player.tDmg = 0; // trap

  // movement
  advtPlayer.player.toggleSpeed = false;
  advtPlayer.player.totSpeed = 0;
  advtPlayer.player.speedMultiplier = 0;
  advtPlayer.player.speed = 0;
  advtPlayer.player.stuned = false;
  advtPlayer.player.lastStun = millis();
  advtPlayer.player.stunTimer = 0;

  // level
  advtPlayer.player.lvl = 0;
  advtPlayer.player.exp = 0;
  advtPlayer.player.nextLvl = 100;
  advtPlayer.player.points = 0;
  advtPlayer.player.expBonus = 0;

  // in world
  advtPlayer.player.x = 0;
  advtPlayer.player.y = 0;
  advtPlayer.player.dotSize = (width+height)*0.002;

  // inventory
  setInventory();
  advtPlayer.player.inventory = make2DGrid(advtInventory.inventory.width, advtInventory.inventory.height);
}

function setNPCs() {
  advtNPCs.allNPCs = [];
  for (let i=0; i < advtNPCs.numOfNPCs; i++) {
    let xSpawn = random(advtWorldVars.world.state.zone.x-advtWorldVars.world.state.zone.wid/2, advtWorldVars.world.state.zone.x+advtWorldVars.world.state.zone.wid/2);
    let ySpawn = random(advtWorldVars.world.state.zone.y-advtWorldVars.world.state.zone.hei/2, advtWorldVars.world.state.zone.y+advtWorldVars.world.state.zone.hei/2);
    advtNPCs.allNPCs.push(new NonPlayableCharacters(xSpawn, ySpawn, advtImg.npcImg.genericNPC, randomTalk));
  }

  advtNPCs.shopKeeps = [];
  advtNPCs.shopKeeps.push(new NonPlayableCharacters(width*0.25, 0, advtImg.npcImg.shopKeep, "Welcome to\nthe shop.", "Shop"));

  advtNPCs.guildKeepers = [];
  advtNPCs.guildKeepers.push(new NonPlayableCharacters(-width*0.25, 0, advtImg.npcImg.guildKeeper, "Welcome to\nthe Guild.", "Guild"));
}

function setQuests() {
  maxNumQuest = 5;
  questList = [];

  questLocaions = [
    "Mountains",
    "Cave",
    "Demon Gate Entrance",
    "Demon Realm",
    "Castle",
    "Dungeon 1",
    "Dungeon 2",
    "Dungeon 3",
    "Dungeon 4",
    "Dungeon 5",
    "Bottom",
  ];

  questEntries = [
    "Kill Enemys",
    "Kill Monsters",
    "Explore Area",
  ];

  questDetails = new Map();

  questDetails.set("Kill Enemys", { title: "Kill Enemys", keyWord: "Kill", reward: { money: function funName() { return rewardQuantity() }, exp: function funName() { return rewardQuantity() }, items: function funName() { return int(random(0, 5)) } }, required: 15 });
  questDetails.set("Kill Monsters", { title: "Kill Monsters", keyWord: "Kill100", reward: { money: function funName() { return (rewardQuantity()*5) }, exp: function funName() { return (rewardQuantity()*5) }, items: function funName() { return int(random(2, 8)) } }, required: 10 });
  questDetails.set("Explore Area", { title: "Explore Area", keyWord: (function chooseRandomArea() { return random(questLocaions) }), reward: { money: function funName() { return (rewardQuantity()*2) }, exp: function funName() { return (rewardQuantity()*2) }, items: function funName() { return int(random(1,3)) } }, required: 1 });
}

function setShops() {
  advtNPCs.shopInventory = make2DGrid(advtInventory.inventory.shop.width, advtInventory.inventory.shop.height);

  // items always in shop
  advtNPCs.shopInventory[0][0] = {name: "Hp Potion", img: advtImg.itemImg.hpPotion};
  advtNPCs.shopInventory[0][1] = {name: "Mp Potion", img: advtImg.itemImg.mpPotion};
  advtNPCs.shopInventory[0][2] = {name: "Arrows", img: advtImg.itemImg.arrowAttack};
  advtNPCs.shopInventory[0][3] = {name: "Traps", img: advtImg.itemImg.trap};
  advtNPCs.shopInventory[0][4] = {name: "Town Portal", img: advtImg.itemImg.townPortal};

  guildInventory = make2DGrid(advtInventory.inventory.shop.width, advtInventory.inventory.shop.height);

  // player not in guild
  if (!advtPlayer.player.inGuild)
    guildInventory[0][0] = { name: "Guild Ticket", description: "BUY NOW!!", race: { img: advtImg.guildTicketBack }, skill: { img: advtImg.guildTicket}, stats: {cost: 100}};

}

function setInventory() {
  advtInventory.mouseCarring = "empty";

  // inventory atributes
  advtInventory.inventory.boxSize = (width+height)*0.04;
  advtInventory.inventory.width = 4;
  advtInventory.inventory.height = 6;

  // shop inventory
  advtInventory.inventory.shop = {};
  advtInventory.inventory.shop.width = 6;
  advtInventory.inventory.shop.height = 6;
  advtInventory.inventory.shop.offsetX = 7;

  // equip slots
  let x = width*0.25;
  let y = -height*0.10;
  let wid = advtInventory.inventory.boxSize*5;
  let hei = advtInventory.inventory.boxSize*5;
  advtInventory.inventory.equipSlots = [];
  advtInventory.inventory.equipSlots.push(new EquipBox(x-wid/2, y      , advtInventory.inventory.boxSize, advtInventory.inventory.boxSize, advtButtonArrays.buttons.brown, advtButtonArrays.buttons.lightBrown, "weapon"));     // weapon
  advtInventory.inventory.equipSlots.push(new EquipBox(x      , y-hei/2, advtInventory.inventory.boxSize, advtInventory.inventory.boxSize, advtButtonArrays.buttons.brown, advtButtonArrays.buttons.lightBrown, "head"));       // head
  advtInventory.inventory.equipSlots.push(new EquipBox(x      , y      , advtInventory.inventory.boxSize, advtInventory.inventory.boxSize, advtButtonArrays.buttons.brown, advtButtonArrays.buttons.lightBrown, "chest"));      // chest
  advtInventory.inventory.equipSlots.push(new EquipBox(x      , y+hei/2, advtInventory.inventory.boxSize, advtInventory.inventory.boxSize, advtButtonArrays.buttons.brown, advtButtonArrays.buttons.lightBrown, "feet"));       // feet
  advtInventory.inventory.equipSlots.push(new EquipBox(x+wid/4, y-hei/3, advtInventory.inventory.boxSize, advtInventory.inventory.boxSize, advtButtonArrays.buttons.brown, advtButtonArrays.buttons.lightBrown, "shoulders"));  // shoulders
  advtInventory.inventory.equipSlots.push(new EquipBox(x+wid/4, y+hei/3, advtInventory.inventory.boxSize, advtInventory.inventory.boxSize, advtButtonArrays.buttons.brown, advtButtonArrays.buttons.lightBrown, "legs"));       // legs
  advtInventory.inventory.equipSlots.push(new EquipBox(x+wid/2, y      , advtInventory.inventory.boxSize, advtInventory.inventory.boxSize, advtButtonArrays.buttons.brown, advtButtonArrays.buttons.lightBrown, "hands"));      // hands
}

function setButtonAtributes() {
  // universal
  advtButtonArrays.buttonAtributes.width = width*0.15;
  advtButtonArrays.buttonAtributes.listStart = -height*0.40;

  // race
  advtButtonArrays.buttonAtributes.race.height = height*0.90/advtArrays.allRaces.length;
  advtButtonArrays.buttonAtributes.race.x = -width*0.35;

  // skill
  advtButtonArrays.buttonAtributes.skill.height = height*0.90/advtArrays.allSkills.length;
  advtButtonArrays.buttonAtributes.skill.x = width*0.35;

  // settings
  advtButtonArrays.buttonAtributes.settings.height = height*0.90/advtSettings.options.length;
  advtButtonArrays.buttonAtributes.settings.x = 0;
}

function setKeyButtons(value, key, map) {
  // buttons to rebind keys
  let i = static(map.size);
  let yPos = -height*0.48+(i*fontSize.default*1.2);
  map.get(key).button = new Button(fontSize.default*4.5, yPos, width*0.10, fontSize.default*1.1, advtButtonArrays.buttons.orange, advtButtonArrays.buttons.lightOrange, "");
}

function rewardQuantity() {
  return (advtPlayer.player.lvl * 5) + int(random(0, 10) * 10);
}

function make2DGrid(cols, rows) {
  // for inventory display purposes
  let newArray = [];
  for (let y = 0; y < rows; y++) {
    newArray.push([]);
    for (let x = 0; x < cols; x++) {
      newArray[y].push("empty");
    }
  }
  return newArray;
}
