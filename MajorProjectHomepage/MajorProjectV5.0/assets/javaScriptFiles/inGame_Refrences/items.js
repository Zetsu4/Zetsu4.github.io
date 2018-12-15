function itemsInWorld() {
  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].display();
    if (items.playerAttack[i].move())
      items.playerAttack.splice(i, 1);
  }
}

function moveItemsX(dir) {
  let speed = player.speed*dir;

  for (let i=items.onGround.length-1; i >= 0; i--) {
    items.onGround[i].changeX += speed;
  }

  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].changeX += speed;
  }

  for (let i=items.enemyAttack.length-1; i >= 0; i--) {
    items.enemyAttack[i].changeX += speed;
  }
}

function moveItemsY(dir) {
  let speed = player.speed*dir;

  for (let i=items.onGround.length-1; i >= 0; i--) {
    items.onGround[i].changeY += speed;
  }

  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].changeY += speed;
  }

  for (let i=items.enemyAttack.length-1; i >= 0; i--) {
    items.enemyAttack[i].changeY += speed;
  }
}
