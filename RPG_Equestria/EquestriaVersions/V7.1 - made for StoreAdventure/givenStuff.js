// vars
// general
let gameState;
let settings = {};
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
let maxNumQuest;
let questList = [];
let questLocaions = [];
let questEntries = [];
let questDetails;

// main menu
let mainChoices = [];

// adventure
let advtVars = {};

// click wait
let waiting;
const WAIT_TIME = 150;

function preload() {
    soundFormats("mp3", "wav");

    // fonts
    fonts.default = "NORMAL";
    fonts.special = loadFont("assets/fonts/LOTR.TTF");

    // NPC's
    npcImgs = {};
    npcImgs.genericNPC = loadImage("assets/images/sprites/NPC.png");
    npcImgs.shopKeep = loadImage("assets/images/sprites/shopKeep.png");
    npcImgs.guildKeeper = loadImage("assets/images/sprites/guildKeeper.png");

    // items
    otherImgs.items = {};
    otherImgs.items.arrow = loadImage("assets/images/items/arrows.png");
    otherImgs.items.hpPotion = loadImage("assets/images/items/hpPotion.png");
    otherImgs.items.mpPotion = loadImage("assets/images/items/mpPotion.png");
    otherImgs.items.trap = loadImage("assets/images/items/traps.png");
    otherImgs.items.townPortal = loadImage("assets/images/items/townPortal.png");
    otherImgs.items.money = loadImage("assets/images/items/money.png");
    
    // equipment
    otherImgs.equipment = {};
    otherImgs.equipment.weapon = loadImage("assets/images/items/weapon.png");
    otherImgs.equipment.head = loadImage("assets/images/items/head.png");
    otherImgs.equipment.chest = loadImage("assets/images/items/chest.png");
    otherImgs.equipment.feet = loadImage("assets/images/items/feet.png");
    otherImgs.equipment.shoulders = loadImage("assets/images/items/shoulders.png");
    otherImgs.equipment.legs = loadImage("assets/images/items/legs.png");
    otherImgs.equipment.hands = loadImage("assets/images/items/hands.png");

    // advtPreload();
}

function setup() {
    createCanvas(windowWidth, windowHeight);

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

    // set sprite sizes
    spriteSize.sampleWidth = width * 0.30;
    spriteSize.sampleHeight = height * 0.50;
    spriteSize.width = width * 0.05;
    spriteSize.height = height * 0.10;

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

    // locations
    buttonVars.left = -width*0.35;
    buttonVars.center = 0;
    buttonVars.right = width*0.35;
    buttonVars.top = -height*0.40;
    buttonVars.width = width*0.15;
}

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
            buttonVars.center, buttonVars.top+(i*butHeight),
            buttonVars.width, butHeight,
            buttonCol.get("orange"), buttonCol.get("light orange"),
            buttonCol.get("light orange"), buttonCol.get("orange"),
            settings.options[i], fonts.special, fontSize.default))
    }

    settings.quit = {};
    settings.quit.yes = new Button(
        buttonVars.right, buttonVars.center,
        buttonVars.width, butHeight,
        buttonCol.get("light red"), buttonCol.get("red"),
        buttonCol.get("black"), buttonCol.get("grey"),
        settings.options[i], fonts.special, fontSize.default
    )
}

function calcButListHei(length) {
    return height*0.90/length;
}

function draw(){
    translate(width/2, height/2);
    background("black");
    // if (gameState = "Adventure") playAdvt();
}