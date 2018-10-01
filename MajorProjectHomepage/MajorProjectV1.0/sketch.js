// V1.0
// Travis Ahern
// Sept. 29/18
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 1;
let homePage;
let allRaces, allCharClasses;
let boxChoiceX, boxChoiceY;
let playerRace = 0;
let playerClass = 0;
let playerHasChosenRace = 0;
let playerHasChosenClass = 0;

function preload() {
  homePage = loadImage("assets/lovelyHomepage.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Font Style Bold", height*0.05);

  allRaces = ["Random", "Human", "Half-Elf", "Elf", "Dwarf", "Halfling", "Goblins", "Orcs", "Uruk-Hai"];
  allCharClasses = ["Random", "Archer", "Ranger", "Fighter", "Samurai", "Mage", "Cleric", "Rogue", "Enemy"];

  boxChoiceX = width*0.30;
  boxChoiceY = height*0.10;
}

//------------------------------------------------------------------------------
// CREATING A CHARACTER     START
//------------------------------------------------------------------------------

// RACE

// drawing the race options
function raceGroup(x, y, w, h) {
  rect(x, y, w, h);
  for (let race = 0; race < allRaces.length; race++) {
    rect(x, y + race*boxChoiceY, boxChoiceX, boxChoiceY);
    fill("black");
    text(allRaces[race], x, y + race*boxChoiceY + height*0.05);
    fill(255, 0, 0);
  }
}

// highlighting players choice for their Race
function highlightRace(x, y, w, h, whichRace) {
  fill(0, 255, 0);
  rect(x, y + whichRace*h, w, h);
  fill("black");
  text(allRaces[whichRace], x, y + whichRace*h + height*0.05);
  fill(255, 0, 0);
}

// creating the race sprite
function displayRace() {

}

// letting player select a race
function chooseRace(x, y, w, h) {
  if (mouseIsPressed && mouseX >= x && mouseX <= x + w) {
    for (let choices = 0; choices < allRaces.length; choices++) {
      if (mouseY >= y + h*choices && mouseY <= y + h*(choices + 1)) {
        playerRace = allRaces[choices];
        playerHasChosenRace = choices;
      }
    }
  }
  highlightRace(x, y, w, h, playerHasChosenRace);
  displayRace(playerHasChosenRace);
}

// CLASS

// drawing the class options
function charClassGroup(x, y, w, h) {
  rect(x, y, w, h);
  for (let charClass = 0; charClass < allCharClasses.length; charClass++) {
    rect(x, y + charClass*boxChoiceY, boxChoiceX, boxChoiceY);
    fill("black");
    text(allCharClasses[charClass], x, y + charClass*boxChoiceY + height*0.05);
    fill(255, 0, 0);
  }
}

// highlighting players choice for their Class
function highlightClass(x, y, w, h, whichClass) {
  fill(0, 255, 0);
  rect(x, y + whichClass*h, w, h);
  fill("black");
  text(allCharClasses[whichClass], x, y + whichClass*h + height*0.05);
  fill(255, 0, 0);
}

// creating the class accessories
function displayClass() {

}

// letting player slect a class
function chooseCharClass(x, y, w, h) {
  if (mouseIsPressed && mouseX >= x && mouseX <= x + w) {
    for (let choices = 0; choices < allCharClasses.length; choices++) {
      if (mouseY >= y + h*choices && mouseY <= y + h*(choices + 1)) {
        playerClass = allCharClasses[choices];
        playerHasChosenClass = choices;
      }
    }
  }
  highlightClass(x, y, w, h, playerHasChosenClass);
  displayClass();
}

// CONT BUTTON

// when the player has decided their race and class
function continueButton(x, y, w, h) {
  rect(x, y, w, h);
  fill("black");
  text("CONTINUE", x, y*2);
  fill(255, 0, 0);
  if (mouseIsPressed && mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    state = 2;
  }
}

//------------------------------------------------------------------------------
// CREATING A CHARACTER     END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// PLAYING OR SOMETHING     START
//------------------------------------------------------------------------------

// // display settings menu
// function settingsMenu() {
//
// }
//
// // the minimap
// function miniMap() {
//
// }

// player buttons
function playerActions() {

}

function enemy() {
  
}

//------------------------------------------------------------------------------
// PLAYING OR SOMETHING     END
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// WHERE THE GAME TAKES PLACE     START
//------------------------------------------------------------------------------

// checking what state the game is in
function checkState() {
  if (state === 1) {
    // CREATING A CHARACTER
    background(50);
    raceGroup(width*0.05, height*0.05, boxChoiceX, height*0.90);
    charClassGroup(width*0.65, height*0.05, boxChoiceX, height*0.90);
    chooseRace(width*0.05, height*0.05, boxChoiceX, boxChoiceY);
    chooseCharClass(width*0.65, height*0.05, boxChoiceX, boxChoiceY);
    continueButton(width*0.425, height*0.05, width*0.15, height*0.05);
  }
  if (state === 2) {
    background(0, 0, 255);
    // settingsMenu();
    // miniMap();
    playerActions();
    enemy();
  }
}

function draw() {
  checkState();
}

//------------------------------------------------------------------------------
// WHERE THE GAME TAKES PLACE     END
//------------------------------------------------------------------------------
