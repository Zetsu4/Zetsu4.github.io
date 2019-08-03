// By: Travis Ahern

function advtPreload() {
    // sounds
    advtVars.sounds = {};

        // background
    advtVars.sounds.overWorld = loadSound("assets/sounds_music/music/overWorld.mp3");
    advtVars.sounds.advtShop = loadSound("assets/sounds_music/music/advtShop.mp3");
    advtVars.sounds.caves = loadSound("assets/sounds_music/music/caves.mp3");
    advtVars.sounds.demonGate = loadSound("assets/sounds_music/music/demonGate.wav");
    advtVars.sounds.demonRealm = loadSound("assets/sounds_music/music/demonRealm.mp3");
    advtVars.sounds.castle = loadSound("assets/sounds_music/music/castle.mp3");
    advtVars.sounds.dungeon = loadSound("assets/sounds_music/music/dungeon.mp3");
    advtVars.sounds.gameOver = loadSound("assets/sounds_music/music/gameOver.mp3");

        // attack
    advtVars.sounds.swordAttack = loadSound("assets/sounds_music/sounds/slash.wav");
    advtVars.sounds.swordHit = loadSound("assets/sounds_music/sounds/slashHit.mp3");
    advtVars.sounds.arrowAttack = loadSound("assets/sounds_music/sounds/arrowShot.mp3");
    advtVars.sounds.arrowHit = loadSound("assets/sounds_music/sounds/arrowHit.mp3");
    advtVars.sounds.fireballAttack = loadSound("assets/sounds_music/sounds/fireballCast.mp3");
    advtVars.sounds.fireballHit = loadSound("assets/sounds_music/sounds/fireballHit.mp3");
    advtVars.sounds.trapHit = loadSound("assets/sounds_music/sounds/trapHit.wav");

        // other
    advtVars.sounds.pickUp = loadSound("assets/sounds_music/sounds/pickUp.mp3");
    advtVars.sounds.consumePotion = loadSound("assets/sounds_music/sounds/consumePotion.wav");
    advtVars.sounds.enemyDeath = loadSound("assets/sounds_music/sounds/enemyDeath.wav");

    setSoundVolumeAdvt();

    // backgrounds
    advtVars.worldImgs = {};
        // over world
    advtVars.worldImgs.grass = loadImage("assets/images/backgrounds/grass.png");
    advtVars.worldImgs.town = loadImage("assets/images/backgrounds/town.png");
    advtVars.worldImgs.desert = loadImage("assets/images/backgrounds/sand.png");
    advtVars.worldImgs.forest = loadImage("assets/images/backgrounds/forest.png");
    advtVars.worldImgs.mountain = loadImage("assets/images/backgrounds/mountain.png");

        // cave
    advtVars.worldImgs.caveOpening = loadImage("assets/images/backgrounds/caveOpening.png");
    advtVars.worldImgs.cave = loadImage("assets/images/backgrounds/cave.png");
    advtVars.worldImgs.caveExit = loadImage("assets/images/backgrounds/caveExit.png");

        // demon realm
    advtVars.worldImgs.demonGate = loadImage("assets/images/backgrounds/demonGate.png");
    advtVars.worldImgs.demonRealm = loadImage("assets/images/backgrounds/demonRealm.png");

        // castle
    advtVars.worldImgs.castleEntrance = loadImage("assets/images/backgrounds/castleEntrance.png");
    advtVars.worldImgs.throneRoom = loadImage("assets/images/backgrounds/throneRoom.png");

        // dungeon
    advtVars.worldImgs.dungeon = loadImage("assets/images/backgrounds/dungeon.png");

        // other
    advtVars.worldImgs.stairs = loadImage("assets/images/backgrounds/stairs.png");
    advtVars.worldImgs.door = loadImage("assets/images/backgrounds/door.png");

    // guild ticket
    advtVars.guildTicketBack = loadImage("assets/images/items/guildTicketBack.png");
    advtVars.guildTicketFront = loadImage("assets/images/items/guildTicketFront.png");

    // inventory delete button
    advtVars.otherImgs = {};
    advtVars.otherImgs.garbageClosed = loadImage("assets/images/inventory/garbageClosed.png");
    advtVars.otherImgs.garbageOpened = loadImage("assets/images/inventory/garbageOpened.png");
    advtVars.otherImgs.inventoryLayout = loadImage("assets/images/inventory/inventroyEquipLayout.png");

    // attack icons
    advtVars.otherImgs.swordIcon = loadImage("assets/images/sprites/attackIcons/swordIcon.png");
    advtVars.otherImgs.bowIcon = loadImage("assets/images/sprites/attackIcons/bowIcon.png");
    advtVars.otherImgs.magicIcon = loadImage("assets/images/sprites/attackIcons/magicIcon.png");
    
    // attacks
    advtVars.attack = {};
    advtVars.attack.swordAttack = loadImage("assets/images/items/sword.png");
    advtVars.attack.arrowAttack = loadImage("assets/images/items/arrows.png");
    advtVars.attack.fireBallAttack = loadImage("assets/images/items/fireBall.png");
    
    // sprites
    advtVars.sprites = {};
    advtVars.sprites.random = loadImage("assets/images/sprites/random.png");
    advtVars.sprites.death = loadImage("assets/images/sprites/enemyDeath.png");
    
    advtVars.sprites.race = {};
        // player choices
    advtVars.sprites.race.human = loadImage("assets/images/sprites/races/human.png");
    advtVars.sprites.race.halfElf = loadImage("assets/images/sprites/races/half-elf.png");
    advtVars.sprites.race.elf = loadImage("assets/images/sprites/races/elf.png");
    advtVars.sprites.race.dwarf = loadImage("assets/images/sprites/races/dwarf.png");
    advtVars.sprites.race.halfling = loadImage("assets/images/sprites/races/halfling.png");
    advtVars.sprites.race.goblin = loadImage("assets/images/sprites/races/goblin.png");
    advtVars.sprites.race.orc = loadImage("assets/images/sprites/races/orc.png");
    advtVars.sprites.race.urukHai = loadImage("assets/images/sprites/races/uruk-hai.png");
    
    advtVars.sprites.race.boss = loadImage("assets/images/sprites/races/boss.png");
    advtVars.sprites.race.undeadKnight = loadImage("assets/images/sprites/races/undeadKnight.png");
    advtVars.sprites.race.rat = loadImage("assets/images/sprites/races/rat.png");
    advtVars.sprites.race.ghost = loadImage("assets/images/sprites/races/ghost.png");
    advtVars.sprites.race.skeleton = loadImage("assets/images/sprites/races/skeleton.png");
    advtVars.sprites.race.gateGaurd = loadImage("assets/images/sprites/races/gateGaurd.png");
    advtVars.sprites.race.gateGaurd2 = loadImage("assets/images/sprites/races/gateGaurd2.png");
    advtVars.sprites.race.fireImp = loadImage("assets/images/sprites/races/fireImp.png");
    advtVars.sprites.race.demonBig = loadImage("assets/images/sprites/races/demonBig.png");
    advtVars.sprites.race.demonSmall = loadImage("assets/images/sprites/races/demonSmall.png");
    advtVars.sprites.race.demon1 = loadImage("assets/images/sprites/races/demon1.png");

    // skill sprites
    advtVars.sprites.skill = {};
        // player choices
    advtVars.sprites.skill.archer = loadImage("assets/images/sprites/skills/archer.png");
    advtVars.sprites.skill.ranger = loadImage("assets/images/sprites/skills/ranger.png");
    advtVars.sprites.skill.fighter = loadImage("assets/images/sprites/skills/fighter.png");
    advtVars.sprites.skill.samurai = loadImage("assets/images/sprites/skills/samurai.png");
    advtVars.sprites.skill.mage = loadImage("assets/images/sprites/skills/mage.png");
    advtVars.sprites.skill.cleric = loadImage("assets/images/sprites/skills/cleric.png");
    advtVars.sprites.skill.rogue = loadImage("assets/images/sprites/skills/rogue.png");
    advtVars.sprites.skill.trapper = loadImage("assets/images/sprites/skills/trapper.png");

    advtVars.sprites.skill.boss = loadImage("assets/images/sprites/skills/boss.png");
    advtVars.sprites.skill.knight = loadImage("assets/images/sprites/skills/knight.png");
    advtVars.sprites.skill.spiritMage = loadImage("assets/images/sprites/skills/spiritMage.png");
    advtVars.sprites.skill.demonMelee = loadImage("assets/images/sprites/skills/demonMelee.png");
    advtVars.sprites.skill.demonMagic = loadImage("assets/images/sprites/skills/demonMagic.png");

}

function setSoundVolumeAdvt() {
    // background
    advtVars.sounds.overWorld.setVolume(0.3);
    advtVars.sounds.advtShop.setVolume(0.3);
    advtVars.sounds.caves.setVolume(1);
    advtVars.sounds.demonGate.setVolume(1);
    advtVars.sounds.demonRealm.setVolume(1);
    advtVars.sounds.castle.setVolume(1);
    advtVars.sounds.dungeon.setVolume(1);
    advtVars.sounds.gameOver.setVolume(1.25);

    // attack
    advtVars.sounds.swordAttack.setVolume(3);
    advtVars.sounds.arrowAttack.setVolume(1.5);
    advtVars.sounds.fireballAttack.setVolume(1);
    advtVars.sounds.swordHit.setVolume(0.25);
    advtVars.sounds.arrowHit.setVolume(0.95);
    advtVars.sounds.fireballHit.setVolume(1);
    advtVars.sounds.trapHit.setVolume(0.25);

    // other
    advtVars.sounds.pickUp.setVolume(1);
    advtVars.sounds.consumePotion.setVolume(0.7);
    advtVars.sounds.enemyDeath.setVolume(2.5);
}

function advtSetup() {
    // loop and stop background music
    advtVars.sounds.overWorld.loop();
    advtVars.sounds.advtShop.loop();
    advtVars.sounds.caves.loop();
    advtVars.sounds.demonGate.loop();

    advtVars.sounds.overWorld.stop();
    advtVars.sounds.advtShop.stop();
    advtVars.sounds.caves.stop();
    advtVars.sounds.demonGate.stop();

    // prime adventure mode variables
    startAdvt();

    // setting enemy/guild attack types
    let widHei = (width + height) * 0.50;
    advtVars.meleeAttacker = {
        npcDist: widHei * 0.075,
        attackDist: widHei * 0.10,
        attackSpeed: 2,
        img: advtVars.attack.swordAttack,
        soundAttack: advtVars.sounds.swordAttack,
        soundHit: advtVars.sounds.swordHit
    };

    advtVars.rangedAttacker = {
        npcDist: widHei * 0.50,
        attackDist: widHei * 0.70,
        attackSpeed: 3,
        img: advtVars.attack.arrowAttack,
        soundAttack: advtVars.sounds.arrowAttack,
        soundHit: advtVars.sounds.arrowHit
    };

    advtVars.spellCaster = {
        npcDist: widHei * 0.40,
        attackDist: widHei * 0.60,
        attackSpeed: 2.5,
        img: advtVars.attack.fireBallAttack,
        soundAttack: advtVars.sounds.fireballAttack,
        soundHit: advtVars.sounds.fireballHit
    };

    advtSettingKeyBindings();
    advtSetSprites();
    advtSetWorldAreas();
    advtSetInventory();
    advtSetPlayer();
    advtSetQuests();
    advtSetNPCs();
    advtSetShops();
}

function startAdvt() {
    // called every time adventure mode begins
    itemsGround = [];
    advtVars.startingState = 0;
    advtVars.state = 0;
    advtVars.recentPickUps = "";
    advtVars.enemyArr = [];
    advtVars.guildMembers = [];
    advtVars.drawingBack = true;
    advtVars.refreshTimer = 30 * 1000;
    advtVars.lastRefresh = millis();
    advtVars.recentsTimer = 5000;
    advtVars.recentsLastTime = millis();
}

// key bindings----------------------------------
function advtSettingKeyBindings() {
    // key bindings
    keyBindings.advt = new Map();

        // the "button" value is for rebinding respective key
    keyBindings.advt.set("Settings", { code: 27 /* Escape */, state: "settings", button: 0 });
    keyBindings.advt.set("Open Map", { code: 77 /* M */, state: "map", button: 0 });
    keyBindings.advt.set("Inventory", { code: 69 /* E */, state: "inventory", button: 0 });
    keyBindings.advt.set("Toggle Ranged", { code: 49 /* 1 */, state: "ranged", button: 0 });
    keyBindings.advt.set("Toggle Magic", { code: 50 /* 2 */, state: "magic", button: 0 });
    keyBindings.advt.set("Place Trap", { code: 81 /* Q */, button: 0 });
    keyBindings.advt.set("Move Up", { code: 87 /* W */, button: 0 });
    keyBindings.advt.set("Move Left", { code: 65 /* A */, button: 0 });
    keyBindings.advt.set("Move Down", { code: 83 /* S */, button: 0 });
    keyBindings.advt.set("Move Right", { code: 68 /* D */, button: 0 });
    keyBindings.advt.set("Toggle Walk", { code: 16 /* Shift */, button: 0 });
    keyBindings.advt.set("Health Potion", { code: 70 /* F */, button: 0 });
    keyBindings.advt.set("Mana Potion", { code: 71 /* G */, button: 0 });
    keyBindings.advt.set("Town Portal", { code: 84 /* T */, button: 0 });
    keyBindings.advt.set("Interact", { code: 32 /* Space */, button: 0 });
    keyBindings.advt.set("Enter Area", { code: 67 /* C */, button: 0 });

    keyBindings.advt.forEach(setRebindButtons);
}

function setRebindButtons(value, key, map) {
    // buttons to rebind keys
    let i = static(map.size);
    let butHeight = calcButListHei(map.size);
    let yPos = buttonVars.top + (i * butHeight)
    // let yPos = -height * 0.48 + (i * fontSize.default * 1.2);
    map.get(key).button = new Button(
        buttonVars.left, yPos,
        fontSize.default * 2, butHeight,
        buttonCol.get("orange"), buttonCol.get("light orange"),
        buttonCol.get("black"), buttonCol.get("grey"),
        String.fromCharCode(value.code), fonts.special, fontSize.default
    );
}
//-----------------------------------------------
// sprites---------------------------------------
function advtSetSprites() {
    advtSetCharacterStats();

    // races
    advtVars.races = new Map();
        // player choices
    advtVars.races.set("Human", { name: "Human", img: advtVars.sprites.race.human, stats: advtVars.raceStats.human });
    advtVars.races.set("Half-Elf", { name: "Half-Elf", img: advtVars.sprites.race.halfElf, stats: advtVars.raceStats.halfElf });
    advtVars.races.set("Elf", { name: "Elf", img: advtVars.sprites.race.elf, stats: advtVars.raceStats.elf });
    advtVars.races.set("Dwarf", { name: "Dwarf", img: advtVars.sprites.race.dwarf, stats: advtVars.raceStats.dwarf });
    advtVars.races.set("Halfling", { name: "Halfling", img: advtVars.sprites.race.halfling, stats: advtVars.raceStats.halfling });
    advtVars.races.set("Goblin", { name: "Goblin", img: advtVars.sprites.race.goblin, stats: advtVars.raceStats.goblin });
    advtVars.races.set("Orc", { name: "Orc", img: advtVars.sprites.race.orc, stats: advtVars.raceStats.orc });
    advtVars.races.set("Uruk-Hai", { name: "Uruk-Hai", img: advtVars.sprites.race.urukHai, stats: advtVars.raceStats.urukHai });

    advtVars.races.set("Boss", { img: advtVars.sprites.race.boss, stats: advtVars.raceStats.boss });
    advtVars.races.set("Undead Knight", { img: advtVars.sprites.race.undeadKnight, stats: advtVars.raceStats.undeadKnight });
    advtVars.races.set("Rat", { img: advtVars.sprites.race.rat, stats: advtVars.raceStats.rat });
    advtVars.races.set("Ghost", { img: advtVars.sprites.race.ghost, stats: advtVars.raceStats.ghost });
    advtVars.races.set("Skeleton", { img: advtVars.sprites.race.skeleton, stats: advtVars.raceStats.skeleton });
    advtVars.races.set("Gate Gaurd", { img: advtVars.sprites.race.gateGaurd, stats: advtVars.raceStats.gateGaurd });
    advtVars.races.set("Gate Gaurd2", { img: advtVars.sprites.race.gateGaurd2, stats: advtVars.raceStats.gateGaurd2 });
    advtVars.races.set("Fire Imp", { img: advtVars.sprites.race.fireImp, stats: advtVars.raceStats.fireImp });
    advtVars.races.set("Demon Big", { img: advtVars.sprites.race.demonBig, stats: advtVars.raceStats.demonBig });
    advtVars.races.set("Demon Small", { img: advtVars.sprites.race.demonSmall, stats: advtVars.raceStats.demonSmall });
    advtVars.races.set("Demon1", { img: advtVars.sprites.race.demon1, stats: advtVars.raceStats.demon1 });

    // skills
    advtVars.skills = new Map();
        // player choices
    advtVars.skills.set("Archer", { name: "Archer", img: advtVars.sprites.skill.archer, stats: advtVars.skillStats.archer });
    advtVars.skills.set("Ranger", { name: "Ranger", img: advtVars.sprites.skill.ranger, stats: advtVars.skillStats.ranger });
    advtVars.skills.set("Fighter", { name: "Fighter", img: advtVars.sprites.skill.fighter, stats: advtVars.skillStats.fighter });
    advtVars.skills.set("Samurai", { name: "Samurai", img: advtVars.sprites.skill.samurai, stats: advtVars.skillStats.samurai });
    advtVars.skills.set("Mage", { name: "Mage", img: advtVars.sprites.skill.mage, stats: advtVars.skillStats.mage });
    advtVars.skills.set("Cleric", { name: "Cleric", img: advtVars.sprites.skill.cleric, stats: advtVars.skillStats.cleric });
    advtVars.skills.set("Rogue", { name: "Rogue", img: advtVars.sprites.skill.rogue, stats: advtVars.skillStats.rogue });
    advtVars.skills.set("Trapper", { name: "Trapper", img: advtVars.sprites.skill.trapper, stats: advtVars.skillStats.trapper });
    
    advtVars.skills.set("Boss", { img: advtVars.sprites.skill.boss, stats: advtVars.skillStats.boss });
    advtVars.skills.set("Knight", { img: advtVars.sprites.skill.knight, stats: advtVars.skillStats.knight });
    advtVars.skills.set("Spirit Mage", { img: advtVars.sprites.skill.spiritMage, stats: advtVars.skillStats.spiritMage });
    advtVars.skills.set("Demon Melee", { img: advtVars.sprites.skill.demonMelee, stats: advtVars.skillStats.demonMelee });
    advtVars.skills.set("Demon Magic", { img: advtVars.sprites.skill.demonMagic, stats: advtVars.skillStats.demonMagic });

    advtGroups();
}

function advtSetCharacterStats() {
    // race
    advtVars.raceStats = {};
        // player
    advtVars.raceStats.secretRace = {
        int: 100,
        agi: 100,
        str: 100,
        dex: 100,
        vit: 100,
        expGained: 1
    };
    advtVars.raceStats.human = {
        int: 10,
        agi: 10,
        str: 10,
        dex: 10,
        vit: 10,
        expGained: 20
    };
    advtVars.raceStats.halfElf = {
        int: 10,
        agi: 11,
        str: 6,
        dex: 12,
        vit: 11,
        expGained: 25
    };
    advtVars.raceStats.elf = {
        int: 15,
        agi: 8,
        str: 5,
        dex: 8,
        vit: 14,
        expGained: 30
    };
    advtVars.raceStats.dwarf = {
        int: 6,
        agi: 6,
        str: 16,
        dex: 8,
        vit: 14,
        expGained: 30
    };
    advtVars.raceStats.halfling = {
        int: 10,
        agi: 12,
        str: 8,
        dex: 14,
        vit: 6,
        expGained: 20
    };
    advtVars.raceStats.goblin = {
        int: 1,
        agi: 18,
        str: 9,
        dex: 18,
        vit: 4,
        expGained: 25
    };
    advtVars.raceStats.orc = {
        int: 2,
        agi: 8,
        str: 15,
        dex: 13,
        vit: 12,
        expGained: 25
    };
    advtVars.raceStats.urukHai = {
        int: 2,
        agi: 4,
        str: 16,
        dex: 12,
        vit: 16,
        expGained: 30
    };
        // boss
    advtVars.raceStats.boss = {
        int: 100,
        agi: 100,
        str: 100,
        dex: 100,
        vit: 100,
        expGained: 100
    };
        // dungeons
    advtVars.raceStats.undeadKnight = {
        int: 0,
        agi: 3,
        str: 25,
        dex: 5,
        vit: 20,
        expGained: 30
    };
    advtVars.raceStats.rat = {
        int: 0,
        agi: 20,
        str: 5,
        dex: 10,
        vit: 4,
        expGained: 20
    };
    advtVars.raceStats.ghost = {
        int: 0,
        agi: 15,
        str: 30,
        dex: 10,
        vit: 15,
        expGained: 25
    };
    advtVars.raceStats.skeleton = {
        int: 5,
        agi: 5,
        str: 5,
        dex: 5,
        vit: 10,
        expGained: 5
    };
        // demons
    advtVars.raceStats.gateGaurd = {
        int: 25,
        agi: 0,
        str: 25,
        dex: 0,
        vit: 20,
        expGained: 50
    };
    advtVars.raceStats.gateGaurd2 = {
        int: 30,
        agi: 0,
        str: 25,
        dex: 0,
        vit: 15,
        expGained: 50
    };
    advtVars.raceStats.fireImp = {
        int: 20,
        agi: 18,
        str: 20,
        dex: 5,
        vit: 7,
        expGained: 40
    };
    advtVars.raceStats.demonBig = {
        int: 5,
        agi: 5,
        str: 30,
        dex: 5,
        vit: 25,
        expGained: 60
    };
    advtVars.raceStats.demonSmall = {
        int: 15,
        agi: 15,
        str: 15,
        dex: 15,
        vit: 15,
        expGained: 30
    };
    advtVars.raceStats.demon1 = {
        int: 45,
        agi: 20,
        str: 5,
        dex: 5,
        vit: 15,
        expGained: 40
    };

    // skill
    advtVars.skillStats = {};
        // player
    advtVars.skillStats.secretSkill = {
        melee: +1.00,
        ranged: +1.00,
        magic: +1.00,
        trap: +1.00,
        startingHpPotions: 20,
        startingMpPotions: 20,
        startingArrows: 100,
        startingTraps: 75,
        expGained: 1,
    };
    advtVars.skillStats.archer = {
        melee: +0.05,
        ranged: +0.20,
        magic: -0.10,
        trap: +0.10,
        startingHpPotions: 6,
        startingMpPotions: 3,
        startingArrows: 120,
        startingTraps: 30,
        expGained: 20,
    };
    advtVars.skillStats.ranger = {
        melee: +0.12,
        ranged: +0.12,
        magic: -0.05,
        trap: +0.06,
        startingHpPotions: 8,
        startingMpPotions: 3,
        startingArrows: 70,
        startingTraps: 20,
        expGained: 30,
    };
    advtVars.skillStats.fighter = {
        melee: +0.20,
        ranged: +0.15,
        magic: -0.10,
        trap: +0.00,
        startingHpPotions: 13,
        startingMpPotions: 0,
        startingArrows: 10,
        startingTraps: 5,
        expGained: 30,
    };
    advtVars.skillStats.samurai = {
        melee: +0.20,
        ranged: -0.10,
        magic: +0.20,
        trap: -0.05,
        startingHpPotions: 12,
        startingMpPotions: 12,
        startingArrows: 0,
        startingTraps: 0,
        expGained: 30,
    };
    advtVars.skillStats.mage = {
        melee: -0.15,
        ranged: -0.10,
        magic: +0.60,
        trap: -0.10,
        startingHpPotions: 3,
        startingMpPotions: 15,
        startingArrows: 20,
        startingTraps: 20,
        expGained: 25,
    };
    advtVars.skillStats.cleric = {
        melee: +0.15,
        ranged: -0.05,
        magic: +0.20,
        trap: -0.05,
        startingHpPotions: 20,
        startingMpPotions: 20,
        startingArrows: 10,
        startingTraps: 10,
        expGained: 15,
    };
    advtVars.skillStats.rogue = {
        melee: +0.15,
        ranged: +0.15,
        magic: -0.20,
        trap: +0.15,
        startingHpPotions: 15,
        startingMpPotions: 10,
        startingArrows: 50,
        startingTraps: 50,
        expGained: 20,
    };
    advtVars.skillStats.trapper = {
        melee: +0.05,
        ranged: +0.05,
        magic: -0.15,
        trap: +0.30,
        startingHpPotions: 5,
        startingMpPotions: 2,
        startingArrows: 100,
        startingTraps: 70,
        expGained: 20,
    };
        // boss
    advtVars.skillStats.boss = {
        melee: 5,
        ranged: 5,
        magic: 5,
        expGained: 100
    };
        // dungeons
    advtVars.skillStats.knight = {
        melee: 0.75,
        ranged: 0.0,
        magic: 0.0,
        expGained: 35
    };
    advtVars.skillStats.spiritMage = {
        melee: 0.0,
        ranged: 0.0,
        magic: 1.0,
        expGained: 40
    };
        // demons
    advtVars.skillStats.demonMelee = {
        melee: 0.2,
        ranged: 0.0,
        magic: 0.0,
        expGained: 25
    };
    advtVars.skillStats.demonMagic = {
        melee: 0.0,
        ranged: 0.0,
        magic: 0.5,
        expGained: 35
    };
}

function advtGroups() {
    // character combanations for spesific areas
    advtVars.npcGroups = {};
    advtVars.npcGroups.player = {
        race: ["Human", "Half-Elf", "Elf", "Dwarf", "Halfling", "Goblin", "Orc", "Uruk-Hai"],
        skill: ["Archer", "Ranger", "Fighter", "Samurai", "Mage", "Cleric", "Rogue", "Trapper"]
    };
    advtVars.npcGroups.guild = {
        race: ["Human", "Half-Elf", "Elf", "Dwarf", "Halfling"],
        skill: ["Archer", "Fighter", "Mage"]
    };
    advtVars.npcGroups.overWorld = {
        race: ["Human", "Half-Elf", "Elf", "Dwarf", "Halfling", "Goblin", "Orc", "Uruk-Hai"],
        skill: ["Archer", "Ranger", "Fighter", "Samurai", "Mage", "Rogue"]
    };
    advtVars.npcGroups.cave = {
        race: ["Goblin", "Orc", "Uruk-Hai", "Rat"],
        skill: ["Archer", "Fighter", "Rogue"]
    };
    advtVars.npcGroups.demonGate = {
        race: ["Gate Gaurd", "Gate Gaurd2"],
        skill: ["Knight"]
    };
    advtVars.npcGroups.demons = {
        race: ["Fire Imp", "Demon Big", "Demon Small", "Demon1"],
        skill: ["Demon Melee", "Demon Magic"]
    };
    advtVars.npcGroups.castle = {
        race: ["Human", "Half-Elf", "Dwarf", "Gate Gaurd"],
        skill: ["Archer", "Fighter", "Samurai", "Mage", "Knight"]
    };
    advtVars.npcGroups.dungeon = {
        race: ["Goblin", "Undead Knight", "Rat", "Ghost", "Skeleton"],
        skill: ["Archer", "Knight", "Spirit Mage"]
    };
    advtVars.npcGroups.boss = {
        race: ["Boss"],
        skill: ["Boss"]
    };
}
//-----------------------------------------------
// world areas-----------------------------------
function advtSetWorldAreas() {
    // variables of the world
    advtVars.worldVars = {};
    advtVars.worldVars.sizeLarge = { wid: width * 20, hei: height * 20 };
    advtVars.worldVars.sizeMedium = { wid: width * 15, hei: height * 15 };
    advtVars.worldVars.sizeSmall = { wid: width * 10, hei: height * 10 };
    advtVars.worldVars.playerX = 0;
    advtVars.worldVars.playerY = 0;

    // big areas and areas
        // Over World
    let areaSize = advtVars.worldVars.sizeLarge;
    advtVars.bigArea = new Map();
    advtVars.bigArea.set("Over World", new Map());
    advtVars.bigArea.get("Over World").set("Meadows", { img: advtVars.worldImgs.grass, enterable: false, color: color(249, 166, 6), numOfEnemys: 30, enemy: { lvlMin: 0, lvlMax: 2, group: advtVars.npcGroups.overWorld }, zone: { x: 0, y: 0, wid: areaSize.wid, hei: areaSize.hei } });
    advtVars.bigArea.get("Over World").set("Town", { img: advtVars.worldImgs.town, enterable: false, color: color(0, 255, 0), numOfEnemys: 0, zone: { x: 0, y: 0, wid: areaSize.wid * 0.15, hei: areaSize.hei * 0.15 } });
    advtVars.bigArea.get("Over World").set("Desert", { img: advtVars.worldImgs.desert, enterable: false, color: color(0, 0, 255), numOfEnemys: 40, enemy: { lvlMin: 1, lvlMax: 4, group: advtVars.npcGroups.overWorld }, zone: { x: -areaSize.wid * 0.2125, y: areaSize.hei * 0.30, wid: areaSize.wid * 0.575, hei: areaSize.hei * 0.40 } });
    advtVars.bigArea.get("Over World").set("Forest", { img: advtVars.worldImgs.forest, enterable: false, color: color(135, 96, 66), numOfEnemys: 40, enemy: { lvlMin: 3, lvlMax: 6, group: advtVars.npcGroups.overWorld }, zone: { x: areaSize.wid * 0.30, y: areaSize.hei * 0.325, wid: areaSize.wid * 0.40, hei: areaSize.hei * 0.35 } });
    advtVars.bigArea.get("Over World").set("Mountains", { img: advtVars.worldImgs.mountain, enterable: false, color: color(162, 206, 228), numOfEnemys: 45, enemy: { lvlMin: 5, lvlMax: 10, group: advtVars.npcGroups.overWorld }, zone: { x: areaSize.wid * 0.40, y: areaSize.hei * 0.275, wid: areaSize.wid * 0.20, hei: areaSize.hei * 0.45 } });
    advtVars.bigArea.get("Over World").set("Cave Opening", { img: advtVars.worldImgs.caveOpening, enterable: { bigArea: "Cave", area: "Cave Exit" }, color: color(255, 255, 255), numOfEnemys: 0, zone: { x: areaSize.wid * 0.35, y: areaSize * 0.35, wid: areaSize.wid * 0.05, hei: areaSize * 0.05 } });
    advtVars.bigArea.get("Over World").set("Castle Gate", { img: advtVars.worldImgs.castleEntrance, enterable: { bigArea: "Castle", area: "Castle Exit" }, color: color(255, 255, 255), numOfEnemys: 0, zone: { x: 0, y: -areaSize * 0.40, wid: areaSize.wid * 0.05, hei: areaSize.hei * 0.05 } });

        // Cave
    areaSize = advtVars.worldVars.sizeMedium;
    advtVars.bigArea.set("Cave", new Map());
    advtVars.bigArea.get("Cave").set("Cave", { img: advtVars.worldImgs.cave, enterable: false, color: color(139, 15, 205), numOfEnemys: 30, enemy: { lvlMin: 10, lvlMax: 15, group: advtVars.npcGroups.cave }, zone: { x: 0, y: 0, wid: areaSize, hei: areaSize } });
    advtVars.bigArea.get("Cave").set("Cave Exit", { img: advtVars.worldImgs.caveExit, enterable: { bigArea: "Over World", area: "Cave Opening" }, color: color(200, 200, 200), numOfEnemys: 3, enemy: { lvlMin: 8, lvlMax: 12, group: advtVars.npcGroups.cave }, zone: { x: areaSize.wid * 0.35, y: areaSize.hei * 0.35, wid: areaSize.wid * 0.05, hei: areaSize.hei * 0.05 } });
    advtVars.bigArea.get("Cave").set("Castle Cave Exit", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Castle", area: "Cave Entrance" }, color: color(200, 200, 200), numOfEnemys: 0, zone: { x: -areaSize.wid * 0.20, y: areaSize.hei * 0.45, wid: areaSize.wid * 0.05, hei: areaSize.hei * 0.05 } });
    advtVars.bigArea.get("Cave").set("Demon Gate", { img: advtVars.worldImgs.demonGate, enterable: { bigArea: "Demon Realm", area: "Demon Gate" }, color: color(25, 255, 199), numOfEnemys: 40, enemy: { lvlMin: 13, lvlMax: 25, group: advtVars.npcGroups.demonGate }, zone: { x: 0, y: 0, wid: areaSize.wid * 0.20, hei: areaSize.hei * 0.20 } });

        // Demon Realm
    areaSize = advtVars.worldVars.sizeMedium;
    advtVars.ares.set("Demon Realm", new Map());
    advtVars.bigArea.get("Demon Realm").set("Demon Realm", { img: advtVars.worldImgs.demonRealm, enterable: false, color: color(212, 0, 57), numOfEnemys: 50, enemy: { lvlMin: 20, lvlMax: 30, group: advtVars.npcGroups.demons }, zone: { x: 0., y: 0, wid: areaSize.wid, hei: areaSize.hei } });
    advtVars.bigArea.get("Demon Realm").set("Demon Gate", { img: advtVars.worldImgs.demonGate, enterable: { bigArea: "Cave", area: "Demon Gate" }, color: color(212, 0, 57), numOfEnemys: 20, enemy: { lvlMin: 17, lvlMax: 27, group: advtVars.npcGroups.demons }, zone: { x: 0, y: 0, wid: areaSize.wid * 0.10, hei: areaSize.hei * 0.10 } });

        // Castle
    areaSize = advtVars.worldVars.sizeLarge;
    advtVars.ares.set("Castle", new Map());
    advtVars.bigArea.get("Castle").set("Throne Room", { img: advtVars.worldImgs.throneRoom, enterable: false, color: color(212, 0, 57), numOfEnemys: 40, enemy: { lvlMin: 15, lvlMax: 25, group: advtVars.npcGroups.castle }, zone: { x: 0, y: 0, wid: areaSize.wid, hei: areaSize.hei } });
    advtVars.bigArea.get("Castle").set("Castle Exit", { img: advtVars.worldImgs.door, enterable: { bigArea: "Over World", area: "Castle Gate" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: 0, y: -areaSize.hei * 0.45, wid: areaSize.wid * 0.05, hei: areaSize.hei * 0.025 } });
    advtVars.bigArea.get("Castle").set("Cave Entrance", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Cave", area: "Castle Cave Exit" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: -areaSize.wid * 0.20, y: areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });
    advtVars.bigArea.get("Castle").set("Dungeon Entrance", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Exit" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: areaSize.wid * 0.20, y: areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });

        // Dungeons
    areaSize = advtVars.worldVars.sizeLarge;
    advtVars.ares.set("Dungeon", new Map());
    advtVars.bigArea.get("Dungeon").set("Exit", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Castle ", area: "Dungeon Entrance" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: areaSize.wid * 0.20, y: areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0. } });
    advtVars.bigArea.get("Dungeon").set("Level 1", { img: advtVars.worldImgs.dungeon, enterable: false, color: color(212, 0, 57), numOfEnemys: 30, enemy: { lvlMin: 20, lvlMax: 40, group: advtVars.npcGroups.dungeon }, zone: { x: 0, y: 0, wid: areaSize.wid, hei: areaSize.hei } });
    advtVars.bigArea.get("Dungeon").set("Down 2", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Up 1" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: -areaSize.wid * 0.45, y: -areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });

    advtVars.bigArea.get("Dungeon").set("Up 1", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Down 2" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: -areaSize.wid * 0.45, y: -areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });
    advtVars.bigArea.get("Dungeon").set("Level 2", { img: advtVars.worldImgs.dungeon, enterable: false, color: color(212, 0, 57), numOfEnemys: 35, enemy: { lvlMin: 35, lvlMax: 55, group: advtVars.npcGroups.dungeon }, zone: { x: 0, y: 0, wid: areaSize.wid, hei: areaSize.hei } });
    advtVars.bigArea.get("Dungeon").set("Down 3", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Up 2" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: areaSize.wid * 0.45, y: areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });

    advtVars.bigArea.get("Dungeon").set("Up 2", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Down 3" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: areaSize.wid * 0.45, y: areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });
    advtVars.bigArea.get("Dungeon").set("Level 3", { img: advtVars.worldImgs.dungeon, enterable: false, color: color(212, 0, 57), numOfEnemys: 40, enemy: { lvlMin: 50, lvlMax: 70, group: advtVars.npcGroups.dungeon }, zone: { x: 0, y: 0, wid: areaSize.wid, hei: areaSize.hei } });
    advtVars.bigArea.get("Dungeon").set("Down 4", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Up 3" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: -areaSize.wid * 0.45, y: -areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });

    advtVars.bigArea.get("Dungeon").set("Up 3", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Down 4" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: -areaSize.wid * 0.45, y: -areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });
    advtVars.bigArea.get("Dungeon").set("Level 4", { img: advtVars.worldImgs.dungeon, enterable: false, color: color(212, 0, 57), numOfEnemys: 45, enemy: { lvlMin: 75, lvlMax: 95, group: advtVars.npcGroups.dungeon }, zone: { x: 0, y: 0, wid: areaSize.wid, hei: areaSize.hei } });
    advtVars.bigArea.get("Dungeon").set("Down 5", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Up 4" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: areaSize.wid * 0.45, y: areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });
    
    advtVars.bigArea.get("Dungeon").set("Up 4", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Down 5" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: areaSize.wid * 0.45, y: areaSize.hei * 0.45, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });
    advtVars.bigArea.get("Dungeon").set("Level 5", { img: advtVars.worldImgs.dungeon, enterable: false, color: color(212, 0, 57), numOfEnemys: 50, enemy: { lvlMin: 90, lvlMax: 100, group: advtVars.npcGroups.dungeon }, zone: { x: 0, y: 0, wid: areaSize.wid, hei: areaSize.hei } });
    advtVars.bigArea.get("Dungeon").set("Bottom", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Up 5" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: 0, y: 0, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });
    
    advtVars.bigArea.get("Dungeon").set("Up 5", { img: advtVars.worldImgs.stairs, enterable: { bigArea: "Dungeon", area: "Bottom" }, color: color(212, 0, 57), numOfEnemys: 0, zone: { x: 0, y: 0, wid: areaSize.wid * 0.025, hei: areaSize.hei * 0.025 } });
    advtVars.bigArea.get("Dungeon").set("Boss", { img: advtVars.worldImgs.dungeon, enterable: false, color: color(212, 0, 57), numOfEnemys: 10, enemy: { lvlMin: 100, lvlMax: 200, group: advtVars.npcGroups.dungeon }, zone: { x: 0, y: 0, wid: areaSize.wid, hei: areaSize.hei } });

    // more variables of the world
    advtVars.worldVars.bigArea = "Over World";
    advtVars.worldVars.area = "Town";
    advtVars.worldVars.checkingState = true;
    advtVars.worldVars.checkTimer = 4000;
    advtVars.worldVars.lastCheck = millis();

    advtMinimapVars();
}

function advtMinimapVars() {
    // minimap variables
    advtVars.minimap = {};
    advtVars.minimap.padWidth = width * 0.25;
    advtVars.minimap.padHeight = height * 0.30;
    advtVars.minimap.imgWidth = advtVars.minimap.padWidth - width * 0.02;
    advtVars.minimap.imgHeight = advtVars.minimap.padHeight - height * 0.02;
    advtVars.minimap.x = -width * 0.50 + advtVars.minimap.padWidth * 0.50;
    advtVars.minimap.y = height * 0.50 - advtVars.minimap.padHeight * 0.50;
}
//-----------------------------------------------
// inventory variables---------------------------
function advtSetInventory() {
    // set player inventory and other inventory variables
    // inventory size
    advtVars.inventory = {};
    advtVars.inventory.boxSize = (width + height) * 0.04;
    advtVars.inventory.cols = 4;
    advtVars.inventory.rows = 6;

    // shop/guild inventory size
    advtVars.inventory.shop = {};
    advtVars.inventory.shop.cols = 6;
    advtVars.inventory.shop.rows = 6;
    advtVars.inventory.shop.offsetX = 7; // shift 7 boxs right

    // equip slots
    let x = width * 0.25;
    let y = -height * 0.10;
    let w = advtVars.inventory.boxSize;
    let h = advtVars.inventory.boxSize;
    let equipArea = advtVars.inventory.boxSize * 5;

    advtVars.inventory.equipSlots = new Map();
    advtVars.inventory.equipSlots.set("Weapon",          new EquipBox(x - equipArea * 0.50, y                   , w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Weapon"));
    advtVars.inventory.equipSlots.set("Head",            new EquipBox(x                   , y - equipArea * 0.50, w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Head"));
    advtVars.inventory.equipSlots.set("Chest",           new EquipBox(x                   , y                   , w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Chest"));
    advtVars.inventory.equipSlots.set("Legs",            new EquipBox(x + equipArea * 0.25, y + equipArea * 0.33, w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Legs"));
    advtVars.inventory.equipSlots.set("Feet Left",       new EquipBox(x - equipArea * 0.25, y + equipArea * 0.50, w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Feet"));
    advtVars.inventory.equipSlots.set("Feet Right",      new EquipBox(x + equipArea * 0.25, y + equipArea * 0.50, w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Feet"));
    advtVars.inventory.equipSlots.set("Shoulders Left",  new EquipBox(x - equipArea * 0.25, y - equipArea * 0.33, w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Shoulders"));
    advtVars.inventory.equipSlots.set("Shoulders Right", new EquipBox(x + equipArea * 0.25, y - equipArea * 0.33, w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Shoulders"));
    advtVars.inventory.equipSlots.set("Hands Left",      new EquipBox(x - equipArea * 0.50, y + h * 1.10        , w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Hands"));
    advtVars.inventory.equipSlots.set("Hands Right",     new EquipBox(x + equipArea * 0.50, y + h * 1.10        , w, h, butotnCol.get("brown"), buttonCol.get("light brown"), buttonCol.get("bright brown"), "Hands"));
}
//-----------------------------------------------
// NPCs and shops--------------------------------
function advtSetNPCs() {
    advtVars.allNPCs = [];
    for (let i = 0; i < advtVars.numOfNPCs; i++) {
        let xSpawn = random(advtVars.bigArea.get("Over World").get("Town").zone.x - advtVars.bigArea.get("Over World").get("Town").zone.wid * 0.50, advtVars.bigArea.get("Over World").get("Town").zone.x + advtVars.bigArea.get("Over World").get("Town").zone.wid * 0.50);
        let ySpawn = random(advtVars.bigArea.get("Over World").get("Town").zone.y - advtVars.bigArea.get("Over World").get("Town").zone.hei * 0.50, advtVars.bigArea.get("Over World").get("Town").zone.y + advtVars.bigArea.get("Over World").get("Town").zone.hei * 0.50);
        advtVars.allNPCs.push(new NPC(xSpawn, ySpawn, spriteSize.width, spriteSize.height, npcImg.genericNPC, randomTalk));
    }

    // special NPC's
        // Over World - Town
    /* Shop Keeper */advtVars.allNPCs.push(new NPC(width * 0.25, 0, spriteSize.width, spriteSize.height, npcImg.shopKeeper, "Welcome to the Shop.", "Shop"));
    /* Guild Keeper */advtVars.allNPCs.push(new NPC(-width * 0.25, 0, spriteSize.width, spriteSize.height, npcImg.guildMaster, "Welcome to the Guild.", "Guild"));
}

function advtSetShops() {
    shopInventory = make2DArray();
    
}
//-----------------------------------------------
// quests and player-----------------------------

//-----------------------------------------------