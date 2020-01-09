class Quest {
    constructor(quest, progress = 0) {
        this.title = quest.title;
        this.keyWord = ((typeof quest.keyWord === "string") ? quest.keyWord : quest.keyWord());
        this.required = quest.required;
        this.progress = progress;
        this.reward = quest.reward;
    }

    display(x, y) {
        if (this.title === "Explore Area")
            text("Explore " + this.keyWord + "\n" + this.progress + "/" + this.required, x, y);
        else
            text(this.title + "\n" + this.progress + "/" + this.required, x, y);
    }
}