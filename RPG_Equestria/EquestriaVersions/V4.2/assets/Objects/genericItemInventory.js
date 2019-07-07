class ItemInInventory {
  constructor(theImage, number) {
    this.img = theImage;
    this.numberOfItem = number;
  }

  showInInventory(invenY, invenX, cellSize, offSet, onMouse, textSizes) {
    // item in inventory
    let xPos = invenX*cellSize + offSet;
    let yPos = invenY*cellSize + offSet;

    if (onMouse) {
      xPos = invenX;
      yPos = invenY;
    }

    push();
    image(this.img, xPos, yPos, cellSize, cellSize);
    noStroke();
    fill("white");
    textSize(textSizes/2);
    textAlign(RIGHT);
    text(this.numberOfItem, xPos + cellSize/2 - 1, yPos + cellSize/2 - 1);
    pop();
  }

  updateNumber(newNumber) {
    this.numberOfItem = newNumber;
    return this.numberOfItem <= 0;
  }
}
