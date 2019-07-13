// game loop
function draw() {
    if (gameState === "Main Menu") // main menu
        mainMenu();

    else if (gameState === "In Game") // play game
        inGame();

    else if (gameState === "Settings") // setting menu
        settingsMenu();
}

function mainMenu() {
    
}

function inGame() {
    if (shopOpen)
        shopScreen();
    else 
        adventureScreen();
}