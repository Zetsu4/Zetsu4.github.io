class Button {
    constructor(x, y, w, h, text = "", restColor = "black", hoverColor = "grey", textColor = "white", thisFont = "BOLD", fontSize = (width+height)*0.01) {
      // position
      this.x = x;
      this.y = y;
  
      // box size
      this.width = w;
      this.height = h;
  
      // colors
      this.restCol = restColor;
      this.hoverCol = hoverColor;
      this.textCol = textColor;
  
      // buttons words
      this.text = text;
      this.font = thisFont
      this.fontSize = fontSize;
    }
  
    clicked() {
      let pressed = false;
  
      if (this.hovering()) {
        // hovering
        fill(this.hoverCol);
        if (mouseIsPressed)
          pressed = true;
      }
      else
        fill(this.restCol);
  
      // box
      rect(this.x, this.y, this.width, this.height);
  
      // text
      fill(this.textCol);
      push();
      textFont(this.font, this.fontSize);
      text(this.text, this.x, this.y);
      pop();
      return pressed;
    }
  
    hovering() {
      let left = this.x - this.width/2;
      let right = this.x + this.width/2;
      let top = this.y - this.height/2;
      let bottom = this.y + this.height/2;
  
      return mouseX > left && mouseX < right &&
             mouseY > top && mouseY < bottom;
    }
  }
  