// By: Travis Ahern

function preloadAdvt() {
    /*
    // sounds
        // background
    advtVars.sounds.overWorld = loadSound("assets/sounds_music/music/overWorld.mp3");
    advtVars.sounds.shopKeep = loadSound("assets/sounds_music/music/itemShop.mp3");
    advtVars.sounds.caves = loadSound("assets/sounds_music/music/caves.mp3");
    advtVars.sounds.demonGate = loadSound("assets/sounds_music/music/demonGate.wav");
    advtVars.sounds.demonRealm = loadSound("assets/sounds_music/music/demonRealm.mp3");
    advtVars.sounds.castle = loadSound("assets/sounds_music/music/castle.mp3");
    advtVars.sounds.dungeon = loadSound("assets/sounds_music/music/dungeon.mp3");
    advtVars.sounds.gameOver = loadSound("assets/sounds_music/music/gameOver.mp3");

        // attack
    advtVars.sounds.swordAttack = loadSound("assets/sounds_music/soundsattack/slash.wav");
    advtVars.sounds.swordHit = loadSound("assets/sounds_music/soundsattack/slashHit.mp3");
    advtVars.sounds.arrowAttack = loadSound("assets/sounds_music/soundsattack/arrowShot.mp3");
    advtVars.sounds.arrowHit = loadSound("assets/sounds_music/soundsattack/arrowHit.mp3");
    advtVars.sounds.fireballAttack = loadSound("assets/sounds_music/soundsattack/fireballCast.mp3");
    advtVars.sounds.fireballHit = loadSound("assets/sounds_music/soundsattack/fireballHit.mp3");
    advtVars.sounds.trapHit = loadSound("assets/sounds_music/soundsattack/trapHit.wav");

        // other
    advtVars.sounds.pickUp = loadSound("assets/sounds_music/soundspickUp.mp3");
    advtVars.sounds.consumePotion = loadSound("assets/sounds_music/soundsconsumePotion.wav");
    advtVars.sounds.enemyDeath = loadSound("assets/sounds_music/soundsenemyDeath.wav");

    setSoundVolumeAdvt();
    */

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
    advtVars.worldImgs.castle = loadImage("assets/images/backgrounds/castle.png");

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
    advtVars.sprites.race.dwarf = loadImage("assets/images/sprites/races/dwarf.png");
    advtVars.sprites.race.elf = loadImage("assets/images/sprites/races/elf.png");
    advtVars.sprites.race.goblin = loadImage("assets/images/sprites/races/goblin.png");
    advtVars.sprites.race.halfElf = loadImage("assets/images/sprites/races/half-elf.png");
    advtVars.sprites.race.halfling = loadImage("assets/images/sprites/races/halfling.png");
    advtVars.sprites.race.human = loadImage("assets/images/sprites/races/human.png");
    advtVars.sprites.race.orc = loadImage("assets/images/sprites/races/orc.png");
    advtVars.sprites.race.urukHai = loadImage("assets/images/sprites/races/uruk-hai.png");
    
    advtVars.sprites.race.boss = loadImage("assets/images/sprites/races/boss.png");
    advtVars.sprites.race.rat = loadImage("assets/images/sprites/races/rat.png");
    advtVars.sprites.race.ghost = loadImage("assets/images/sprites/races/ghost.png");
    advtVars.sprites.race.skeleton = loadImage("assets/images/sprites/races/skeleton.png");
    advtVars.sprites.race.undeadKnight = loadImage("assets/images/sprites/races/undeadKnight.png");
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
    advtVars.sprites.skill.cleric = loadImage("assets/images/sprites/skills/cleric.png");
    advtVars.sprites.skill.fighter = loadImage("assets/images/sprites/skills/fighter.png");
    advtVars.sprites.skill.mage = loadImage("assets/images/sprites/skills/mage.png");
    advtVars.sprites.skill.ranger = loadImage("assets/images/sprites/skills/ranger.png");
    advtVars.sprites.skill.rogue = loadImage("assets/images/sprites/skills/rogue.png");
    advtVars.sprites.skill.samurai = loadImage("assets/images/sprites/skills/samurai.png");
    advtVars.sprites.skill.trapper = loadImage("assets/images/sprites/skills/trapper.png");

    advtVars.sprites.skill.knight = loadImage("assets/images/sprites/skills/knight.png");
    advtVars.sprites.skill.spiritMage = loadImage("assets/images/sprites/skills/spiritMage.png");
    advtVars.sprites.skill.demonMelee = loadImage("assets/images/sprites/skills/demonMelee.png");
    advtVars.sprites.skill.demonMagic = loadImage("assets/images/sprites/skills/demonMagic.png");
    advtVars.sprites.skill.boss = loadImage("assets/images/sprites/skills/boss.png");

}

function setSoundVolumeAdvt() {
    // background
    advtVars.sounds.overWorld.setVolume(0.3);
    advtVars.sounds.itemShop.setVolume(0.3);
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

function setupAdvt() {
    /*
    advtVars.sounds.overWorld.loop();
    advtVars.sounds.itemShop.loop();
    advtVars.sounds.caves.loop();
    advtVars.sounds.demonGate.loop();

    advtVars.sounds.overWorld.stop();
    advtVars.sounds.itemShop.stop();
    advtVars.sounds.caves.stop();
    advtVars.sounds.demonGate.stop();
    */

    // enter adventure mode
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