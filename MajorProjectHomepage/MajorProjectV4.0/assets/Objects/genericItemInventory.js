class itemInInventory {
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
    fill(201, 29, 158);
    textSize(textSizes/2);
    text(this.numberOfItem, xPos, yPos + cellSize/2);
    pop();
  }

  updateNumbers(newNumber) {
    this.numberOfItem = newNumber;
    return this.numberOfItem <= 0;
  }
}
