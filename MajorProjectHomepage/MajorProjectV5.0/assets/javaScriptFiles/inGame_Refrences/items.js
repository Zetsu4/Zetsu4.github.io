function itemsInWorld() {
  for (let i=items.playerAttack.length-1; i >= 0; i--) {
    items.playerAttack[i].display();
    items.playerAttack[i].move();
  }
}
