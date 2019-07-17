// Store Adventure Game
// Travis Ahern
// Jul. 11, 2019

// vars
// images
let shopImgs = {};

let gameState;

// main menu
let mainChoices = [];



function preload() {
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