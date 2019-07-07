function guildMenu() {
  background("purple");
  sounds.overWorld.pause();
  if (!sounds.itemShop.isPlaying())
    sounds.itemShop.play();

  // guild inventory
  drawGuildInventory();

  // player stats
  let xPos = inventory.width*inventory.boxSize + inventory.boxSize/2;
  let yPos = inventory.boxSize/2;
  displayStats(xPos, yPos);
}

function drawGuildInventory() {
  push();
  // show options in guild
  stroke(30, 45, 128);
  fill(125, 135, 1);
  rectMode(CORNER);
  imageMode(CORNER);
  translate(-width/2, -height/2);

  // guild
  for (let y = 0; y < guildInventory.length; y++) {
    for (let x = 0; x < guildInventory[y].length; x++) {
      let xPos = (x+inventory.shop.offsetX)*inventory.boxSize;
      let yPos = y*inventory.boxSize;

      // guild grid
      rect(xPos, yPos, inventory.boxSize, inventory.boxSize);
      if (guildInventory[y][x] !== "empty") {
        // draw options
        image(guildInventory[y][x].race.img, xPos, yPos, inventory.boxSize, inventory.boxSize);
        image(guildInventory[y][x].skill.img, xPos, yPos, inventory.boxSize, inventory.boxSize);
      }
    }
  }
  guildHoverTile();
  pop();
}

function guildHoverTile() {
  let x = floor(mouseX/inventory.boxSize);
  let y = floor(mouseY/inventory.boxSize);

  // highlight box
  if (x < inventory.shop.offsetX+inventory.shop.width && x >= inventory.shop.offsetX && y < inventory.shop.height && y >= 0) {
    let xIndex = x-inventory.shop.offsetX;
    let xPos = x*inventory.boxSize;
    let yPos = y*inventory.boxSize;
    fill(78, 54, 91);
    rect(xPos, yPos, inventory.boxSize, inventory.boxSize);

    if (guildInventory[y][xIndex] !== "empty") {
      // draw opiton
      image(guildInventory[y][xIndex].race.img, xPos, yPos, inventory.boxSize, inventory.boxSize);
      image(guildInventory[y][xIndex].skill.img, xPos, yPos, inventory.boxSize, inventory.boxSize);
      itemDescription(guildInventory[y][xIndex]);
    }

    if (mouseIsPressed) {
      if (guildInventory[y][xIndex] !== "empty") {
        if (allItems.get("Money").amount >= guildInventory[y][xIndex].stats.cost) {
          // hiring a party member
          clickWait();
          if (guildInventory[y][xIndex].name === "Guild Ticket") {
            player.inGuild = true;
            changeGuildOptions();
          }

          else
            guildMembers.push(new GuildMember(guildInventory[y][xIndex].raceIndex, guildInventory[y][xIndex].skillIndex, guildInventory[y][xIndex].stats.lvl));

          allItems.get("Money").amount -= guildInventory[y][xIndex].stats.cost;
          guildInventory[y][xIndex] = "empty";
          // ran out of money
          if (allItems.get("Money").amount <= 0)
            checkEmpty(allItems.get("Money").name);
        }
      }
    }
  }
}

function changeGuildOptions() {
  // change options in guild
  if (player.inGuild) {
    let addOption = true;
    let guildInventorySize = inventory.shop.width*inventory.shop.height;

    for (let y = 0; y < guildInventory.length; y++) {
      for (let x = 0; x < guildInventory[y].length; x++) {
        // checking if empty
        if (guildInventory[y][x] === "empty" && addOption) {
          let itemSpawnChance = random(guildInventorySize-(y === 0 ? 0:y*x));

          if (itemSpawnChance >= guildInventorySize/10) {
            // guild member
            guildInventory[y][x] = {name: random(names), description: "A party member\nwho fights with you.",
            raceIndex: random(raceSpecific.guild.length-1), race: 0, skillIndex: random(skillSpecific.guild.length-1), skill: 0,
            stats: {lvl: constrain(int(random(player.lvl-5, player.lvl+3)), 0, Infinity), cost: 0}};

            // set race, skill, and cost
            guildInventory[y][x].race = raceSpecific.guild[guildInventory[y][x].raceIndex];
            guildInventory[y][x].skill = skillSpecific.guild[guildInventory[y][x].skillIndex];
            guildInventory[y][x].stats.cost = (guildInventory[y][x].stats.lvl+10)*15;
          }

          else
            addOption = false;
        }
      }
    }
  }

  else
    guildInventory[0][0] = {name: "Guild Ticket", description: "BUY NOW!!", race: {img: guildTicketBack}, skill: {img: guildTicket}, stats: {cost: 100}};
}

// guild members
function guildMemberFoo() {
  for (let i=guildMembers.length-1; i >= 0; i--) {
    for (let j=enemyArr.length-1; j >= 0; j--) {
      // attack enemys
      if (enemyArr[j].onScreen()) {
        let guildAttack = guildMembers[i].attackEnemy(enemyArr[j].x, enemyArr[j].y);

        if (guildAttack !== "empty")
          items.playerAttack.push(guildAttack);
      }
    }

    // if alive
    if (guildMembers[i].hp > 0)
      // follow player
      guildMembers[i].movement();

    // otherwise
    else {
      // guild is dead
      sounds.enemyDeath.play();
      guildMembers.splice(i, 1);
    }
  }
}

// move with player
function moveGuildX(dir) {
  let speed = player.speed*dir;

  for (let i=guildMembers.length-1; i >= 0; i--)
    guildMembers[i].moveX(player.speed, dir);
}

function moveGuildY(dir) {
  let speed = player.speed*dir;

  for (let i=guildMembers.length-1; i >= 0; i--)
    guildMembers[i].moveY(player.speed, dir);
}
