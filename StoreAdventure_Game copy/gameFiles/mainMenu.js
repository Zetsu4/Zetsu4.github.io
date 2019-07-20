// game loop
function draw() {
    translate(width / 2, height / 2);
    background("green");
    
    // fireworkd to make sure program is working
    dealWithBits();
    moveFireworks();

    if (gameState === "Main Menu") // main menu
        mainMenu();

    else if (gameState === "In Game") // play game
        inGame();

    else if (gameState === "Settings") // setting menu
        settingsMenu();
}

function mainMenu() {
    title();
    displayMenuChoices();
}

function title() {
    fill("darkred");
    text("Kill and Sell\nStuff Game", 0, -height*0.45);
}

function displayMenuChoices() {
    for (let i = 0; i < mainChoices.length; i++) {
        if (mainChoices[i].clicked()) {
            gameState = mainChoices.text;
        }
    }
}

function inGame() {
    if (shopOpen)
        drawShop();
    else 
        drawAdventure();
}