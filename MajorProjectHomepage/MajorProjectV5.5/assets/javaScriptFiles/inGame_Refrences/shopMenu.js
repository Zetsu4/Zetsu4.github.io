function shopMenu() {
  background("grey");
  sounds.overWorld.pause();
  if (!sounds.itemShop.isPlaying())
    sounds.itemShop.play();

  // shop inventory
  drawShopGrid();
  healButton();

  // player inventory
  let xPos = inventory.width*inventory.boxSize + inventory.boxSize/2;
  let yPos = inventory.boxSize/2;
  displayStats(xPos, yPos);
  drawGrid(xPos, yPos);
}

function drawShopGrid() {
  push();
  // show shop grid
  stroke(30, 45, 128);
  fill(125, 135, 1);
  rectMode(CORNER);
  imageMode(CORNER);
  translate(-width/2, -height/2);

  // shop
  for (let y = 0; y < shopInventory.length; y++) {
    for (let x = 0; x < shopInventory[y].length; x++) {
      let xPos = (x+inventory.shop.offsetX)*inventory.boxSize;
      let yPos = y*inventory.boxSize;

      // shop grid
      rect(xPos, yPos, inventory.boxSize, inventory.boxSize);
      if (shopInventory[y][x] !== "empty")
        // draw item
        image(shopInventory[y][x].img, xPos, yPos, inventory.boxSize, inventory.boxSize);
    }
  }
  shopHoverTile();
  pop();
}

function shopHoverTile() {
  let x = floor(mouseX/inventory.boxSize);
  let y = floor(mouseY/inventory.boxSize);
  let itemsBuying = 1;
  if (keyIsDown(16)) // Shift
    itemsBuying = 10;

  // highlight box
  if (x < inventory.shop.offsetX+inventory.shop.width && x >= inventory.shop.offsetX && y < inventory.shop.height && y >= 0) {
    let xIndex = x-inventory.shop.offsetX;
    let xPos = x*inventory.boxSize;
    let yPos = y*inventory.boxSize;
    fill(78, 54, 91);
    rect(xPos, yPos, inventory.boxSize, inventory.boxSize);

    if (shopInventory[y][xIndex] !== "empty") {
      // draw item
      image(shopInventory[y][xIndex].img, xPos, yPos, inventory.boxSize, inventory.boxSize);
      itemDescription(allItems.get(shopInventory[y][xIndex].name));
    }

    if (mouseIsPressed) {
      if (mouseCarring !== "empty") {
        // selling an item
        clickWait();
        let amountGained = floor(mouseCarring.amount*mouseCarring.stats.cost/2);

        if (allItems.get("Money").amount <= 0 && amountGained > 0)
          // selling for a penny
          putInInventory(allItems.get("Money"), 0);

        allItems.get("Money").amount += amountGained;
        mouseCarring.amount = 0;
        mouseCarring = "empty";

      }

      else if (shopInventory[y][xIndex] !== "empty") {
        // buying an item
        clickWait();
        for (let i=0; i < itemsBuying; i++) {
          if (allItems.get("Money").amount >= allItems.get(shopInventory[y][xIndex].name).stats.cost) {
            allItems.get("Money").amount -= allItems.get(shopInventory[y][xIndex].name).stats.cost;

            let itemToAdd = shopInventory[y][xIndex];
            if (allItems.get(itemToAdd.name).amount <= 0)
              // not in inventory
              putInInventory(itemToAdd);

            else
              // in inventory
              allItems.get(itemToAdd.name).amount++;
          }
        }

        // ran out of money
        if (allItems.get("Money").amount <= 0)
          checkEmpty(allItems.get("Money").name);
      }
    }
  }
}

function healButton() {
  let healCost = player.lvl*10;

  if (buttons.heal.clicked() && allItems.get("Money").amount >= healCost) {
    // money issues
    allItems.get("Money").amount -= healCost;
    if (allItems.get("Money").amount <= 0)
      checkEmpty(allItems.get("Money").name);

    // heal
    player.hp = player.totHp;
    player.mp = player.totMp;
  }

  if (buttons.heal.hovering()) {
    push();
    translate(-width/2, -height/2);
    rectMode(CORNER);
    textAlign(LEFT, TOP);

    stroke(buttons.lightBrown);
    fill(buttons.brown);
    rect(mouseX, mouseY, inventory.boxSize+fontSize.default, fontSize.default);

    noStroke();
    fill("black");
    text("Cost: "+healCost, mouseX, mouseY);
    pop();
  }
}

function changeShopItems() {
  // changing items
  let addItem = true;
  let shopInventorySize = inventory.shop.width*inventory.shop.height;

  for (let y = 0; y < shopInventory.length; y++) {
    for (let x = 0; x < shopInventory[y].length; x++) {
      // checking if empty
      if (shopInventory[y][x] === "empty" && addItem) {
        let itemSpawnChance = random(shopInventorySize-(y === 0 ? 0:y*x)/2);

        if (itemSpawnChance >= shopInventorySize/10) {
          allItems.forEach(chooseRandomItem);
          let itemAdding = shopItemRefreshName;

          // if nothing is spawned in shop, it's a rock
          if (itemAdding === "")
            itemAdding = "Small Rock";


          // add item to shop
          itemAdding = allItems.get(itemAdding);
          shopInventory[y][x] = {name: itemAdding.name, img: itemAdding.img};

          // set this back to nothing
          shopItemRefreshName = "";
        }

        else // no gaps in the shop
          addItem = false;
      }
    }
  }
}

function chooseRandomItem(value, key, map) {
  if (value.equipable && shopItemRefreshName === "") {
    let dropChance = random(500);
    if (dropChance <= value.stats.dropChance) // choose an item to put in shop
      shopItemRefreshName = value.name;
  }
}
