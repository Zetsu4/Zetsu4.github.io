// vars
// general
let gameState;
let spriteSize = {};
let killedEnemys = 0;

// images
let npcImgs = {};
let otherImgs = {};

// text
let fontSize = {};
let fonts = {};

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
    fonts.default = loadFont("assets/Bold.ttf");
    fonts.titleDisplay = loadFont("assets/fonts/LOTR.TTF");

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

    preloadAdvt();
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // alligning
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    rectMode(CENTER);
    ellipseMode(CENTER);

    fontSize.default = (width + height) * 0.01;
    textFont(fonts.default, fontSize.default);

    setupAdvt();


    gameState = "Adventure";

    fill("green");
}

function draw(){
    translate(width/2, height/2);
    background("black");
    text("Text looks like this.!?", 0, 0);
    //if (gameState = "Adventure") playAdvt();
}