// Shop Adventure Game
// Travis Ahern
// Jul. 11, 2019

// vars
let shopImg = {};

let gameState;


function preload() {
    shopImg.background = loadImage("assets/img/shop/shopBackground.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    gameState = "Main Menu";
}