class EquipBox {
    constructor(x, y, w, h, rest, hover, text) {
        // position
        this.x = x;
        this.y = y;

        // sprite
        this.width = w;
        this.height = h;
        this.img = null;

        // color
        this.restCol = rest;
        this.hoverCol = hover;

        // equip slot
        this.equipSlot = text;
        this.equipped = "empty";
    }

    display() {
        push();
        // decaratory edges
        stroke(204, 102, 0);

        if (this.hovering())
            fill(this.hoverCol);
        else
            fill(this.restCol);

        // box
        rect(this.x, this.y, this.width, this.height);
        pop();

        if (this.equipped === "empty")
            text(this.equipSlot, this.x, this.y);
        else
            image(this.img, this.x, this.y, this.width, this.height);
    }

    requip() {
        // changing the equip slot
        if (this.equipped === "empty")
            this.img = null;
        else
            this.img = this.equipped.img;
    }

    hovering() {
        return mouseX - width / 2 > this.x - this.width / 2 && mouseX - width / 2 < this.x + this.width / 2
            && mouseY - height / 2 > this.y - this.height / 2 && mouseY - height / 2 < this.y + this.height / 2;
    }
}
