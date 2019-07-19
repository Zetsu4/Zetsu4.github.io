/*
Store Adventure Game
Travis Ahern
Jul. 11, 2019

CREDITS:
sounds from: freesounds.org and openGameArt.org
sprites by: Travis Ahern
images by: Travis Ahern
made using javascript, in the Atom and Visual Code text editors.
*/

// vars
// general
let gameState;
let spriteSize = {};

// images
let otherImgs = {};

// sound
let sounds = {}

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

// shop
let shopImgs = {};

// adventure
let advtGeneral = {};
let advtImgs = {};
let advtSounds = {};
let advtArrays = {};
let advtNPCs = {};
let advtButtonArrays = {};
let advtWorldVars = {};
let advtAttacks = {};
let advtItems = {};
let advtPlayer = {};
let advtInventory = {};
let advtSettings = {};
let advtKeybindings = {};
let advtEnemys = {};

// click wait
let waiting;
const WAIT_TIME = 150;

function preload() {
    // fonts
    fonts.default = loadFont("assets/fonts/default.TTF");

    preloadAdventure();
    // preloadStore();
    shopImgs.background = loadImage("assets/img/backgrounds/shopBackground.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // alligning
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    rectMode(CENTER);
    ellipseMode(CENTER);

    setupAdventure();

    sizeOfText = (width+height)*0.015;
    textSize(sizeOfText);

    gameState = "Main Menu";
    
    mainChoices.push(new Button2(0, -height*0.30, width*0.10, height*0.10, "New Game"));
    mainChoices.push(new Button2(0, -height*0.15, width*0.10, height*0.10, "Load Game"));
}