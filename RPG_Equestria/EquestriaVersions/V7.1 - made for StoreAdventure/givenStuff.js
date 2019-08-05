// vars
// general
let gameState;
let settings = {};
let keyBindings = {};
let spriteSize = {};
let killedEnemys = 0;

// images
let npcImgs = {};
let otherImgs = {};

// text
let fontSize = {};
let fonts = {};

// buttons
let buttons;
let buttonVars = {};
let buttonCol = {};

// quests
let maxNumQuest = 10;
let questList = [];
let questLocaions = [];
let questEntries = [];
let questDetails;

// items
let allItems;
let numOfAllItems;
let itemsGround = [];

// main menu
let mainChoices = [];

// adventure
let advtVars = {};

// click wait
let waiting;
const WAIT_TIME = 150;

// setup/preload---------------------------------
function preload() {
    soundFormats("mp3", "wav");

    // fonts
    fonts.default = "NORMAL";
    fonts.special = loadFont("assets/fonts/LOTR.TTF");

    // NPC's
    npcImgs = {};
    npcImgs.genericNPC  = loadImage("assets/images/sprites/NPCs/generic.png");
    npcImgs.shopKeeper  = loadImage("assets/images/sprites/NPCs/shopKeeper.png");
    npcImgs.guildMaster = loadImage("assets/images/sprites/NPCs/guildMaster.png");

    // items
    otherImgs.items = {};
    otherImgs.items.arrow      = loadImage("assets/images/items/arrows.png");
    otherImgs.items.hpPotion   = loadImage("assets/images/items/hpPotion.png");
    otherImgs.items.mpPotion   = loadImage("assets/images/items/mpPotion.png");
    otherImgs.items.trap       = loadImage("assets/images/items/traps.png");
    otherImgs.items.townPortal = loadImage("assets/images/items/townPortal.png");
    otherImgs.items.money      = loadImage("assets/images/items/money.png");
    
    // equipment
    otherImgs.equipment = {};
    otherImgs.equipment.weapon    = loadImage("assets/images/items/weapon.png");
    otherImgs.equipment.head      = loadImage("assets/images/items/head.png");
    otherImgs.equipment.chest     = loadImage("assets/images/items/chest.png");
    otherImgs.equipment.legs      = loadImage("assets/images/items/legs.png");
    otherImgs.equipment.feet      = loadImage("assets/images/items/feet.png");
    otherImgs.equipment.shoulders = loadImage("assets/images/items/shoulders.png");
    otherImgs.equipment.hands     = loadImage("assets/images/items/hands.png");

    // advtPreload();
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    // alligning
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    rectMode(CENTER);
    ellipseMode(CENTER);

    // text
    fontSize.default = (width + height) * 0.01;
    textFont(fonts.default, fontSize.default);
    
    // "buttons" is a Map
    buttons = new Map();
    setButtonCharacteristics();

    // set variable fucntions
    setSettingsMenu();
    setQuests();
    setItems();

    // set sprite sizes
    spriteSize.sampleWidth = width * 0.30;
    spriteSize.sampleHeight = height * 0.50;
    spriteSize.width = width * 0.05;
    spriteSize.height = height * 0.10;

    mouseHolding = "empty";
    // advtSetup();

    gameState = "Adventure";
}

function setButtonCharacteristics() {
    // colors
    buttonCol = new Map();

    buttonCol.set("black", color(0, 0, 0));
    buttonCol.set("grey", color(135, 135, 135));
    buttonCol.set("white", color(255, 255, 255));
    buttonCol.set("red", color(204, 0, 0));
    buttonCol.set("light red", color(255, 0, 0));
    buttonCol.set("green", color(0, 204, 102));
    buttonCol.set("light green", color(0, 255, 0));
    buttonCol.set("orange", color(255, 165, 0));
    buttonCol.set("light orange", color(255, 220, 0));
    buttonCol.set("brown", color(153, 77, 0));
    buttonCol.set("light brown", color(179, 89, 0));
    buttonCol.set("bright brown", color(204, 102, 0));

    // locations
    buttonVars.left = -width*0.35;
    buttonVars.center = 0;
    buttonVars.right = width*0.35;
    buttonVars.top = -height*0.40;
    buttonVars.width = width*0.15;
}
//-----------------------------------------------
// settings menu---------------------------------
function setSettingsMenu() {
    settings.options = [
        "Play", "Controls", "Map",
        "Save", "Load", "Main Menu"
    ];

    // button dimensions
    let butHeight = calcButListHei(settings.options.length);

    // buttons for settings
    settings.buttons = [];
    for (let i = 0; i < settings.options.length; i++) {
        settings.buttons.push(new Button(
            buttonVars.center, buttonVars.top + (i * butHeight),
            buttonVars.width, butHeight,
            buttonCol.get("orange"), buttonCol.get("light orange"),
            buttonCol.get("light orange"), buttonCol.get("orange"),
            settings.options[i], fonts.special, fontSize.default
        ));
    }

    settings.quit = {};
    settings.quit.yes = new Button(
        buttonVars.right, buttonVars.center,
        buttonVars.width, butHeight,
        buttonCol.get("light red"), buttonCol.get("red"),
        buttonCol.get("black"), buttonCol.get("grey"),
        "Main Menu", fonts.special, fontSize.default
    );

    settings.quit.no = new Button(
        buttonVars.left, buttonVars.center,
        buttonVars.width, butHeight,
        buttonCol.get("light green"), buttonCol.get("green"),
        buttonCol.get("black"), buttonCol.get("grey"),
        "Back", fonts.special, fontSize.default
    );
}

function calcButListHei(length) {
    return height * 0.90 / length;
}
//-----------------------------------------------
// quests----------------------------------------
function setQuests() {
    questLocations = [
        { bigArea: "Over World", area: "Mountains" },
        { bigArea: "Cave", area: "Cave" },
        { bigArea: "Cave", area: "Demon Gate" },
        { bigArea: "Demon Realm", area: "Demon Realm" },
        { bigArea: "Castle", area: "Throne Room" },
        { bigArea: "Dungeon", area: "Level 1" },
        { bigArea: "Dungeon", area: "Level 2" },
        { bigArea: "Dungeon", area: "Level 3" },
        { bigArea: "Dungeon", area: "Level 4" },
        { bigArea: "Dungeon", area: "Level 5" },
        { bigArea: "Dungeon", area: "Bottom" }
    ];

    questTasks = [
        "Small Enemys",
        "Big Enemys",
        "Explore Area",
        "Sell Stuff"
    ];

    questDetails = new Map();

    questDetails.set("Small Enemys", { title: "Small Enemys", keyWord: "Kill",
    required: function reqName() { return int(random(10, 20)); },
    reward: {
        money: function funName() { return rewardQuantity(); },
        exp: function funName() { return rewardQuantity(); },
        items: function funName() { return int(random(0, 5)); } }
    });
    
    questDetails.set("Big Enemys", { title: "Big Enemys", keyWord: "KillBig",
    required: function reqName() { return int(random(8, 12)); },
    reward: {
        money: function funName() { return (rewardQuantity() * 5); },
        exp: function funName() { return (rewardQuantity() * 5); },
        items: function funName() { return int(random(2, 8)); } }
    });

    questDetails.set("Explore Area", { title: "Explore Area", keyWord: (function chooseRandomArea() { return random(questLocations); }),
    required: function reqName() { return 1; },
    reward: {
        money: function funName() { return (rewardQuantity() * 2); },
        exp: function funName() { return (rewardQuantity() * 2); },
        items: function funName() { return int(random(1, 3)); } }
    });

    questDetails.set("Sell Stuff", { title: "Sell Stuff", keyWord: "Sold",
    required: function reqName() { return int(random(25, 100)); },
    reward: {
        money: function funName() { return (rewardQuantity()); },
        exp: function funName() { return (rewardQuantity() * 5); },
        items: function funName() { return int(random(5, 8)); } }
    });
}

function rewardQuantity() {
    return (player.lvl * 5) + int(random(0, 10) * 10);
}
//-----------------------------------------------
// items-----------------------------------------
function setItems() {
    allItems = new Map();

    settingItemMap();
}
//-----------------------------------------------
// other-----------------------------------------
function clickWait() {
    // called after clicking the mouse
    // so that the mouse is only clicked once
    let waiting = millis();
    while (millis() - waiting <= WAIT_TIME) {
        continue;
    }
}

function staticVariable(size) {
    // creates and keeps track of a static variable
    if (typeof static.counter == "undefined")
        static.counter = 0;

    if (static.counter >= size)
        static.counter = 0;

    return static.counter++;
}

function make2DArray(cols, rows) {
    // makes a 2-dimensinal array
    let newArray = [];
    for (let y = 0; y < rows; y++) {
        newArray.push([]);
        for (let x = 0; x < cols; x++)
            newArray[y].push("empty");
    }
    return newArray;
}
//-----------------------------------------------

function draw(){
    translate(width/2, height/2);
    background("black");
    // if (gameState = "Adventure") playAdvt();
}