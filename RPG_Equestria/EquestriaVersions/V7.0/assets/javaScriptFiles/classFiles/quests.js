class Quest {
    constructor(quest) {
        this.title = quest.title;
        this.keyWord = quest.keyWord;
        this.required = quest.required;
        this.progress = 0;
        this.reward = quest.reward;
    }

    display(x, y) {
        text(this.title + "\n" + this.progress + "/" + this.required, x, y);
    }
}