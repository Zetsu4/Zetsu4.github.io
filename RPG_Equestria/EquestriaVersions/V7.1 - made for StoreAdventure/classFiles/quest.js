class Quest {
    constructor(quest, txtFont, txtSize, progress = 0) {
        // location
        this.x = 0;
        this.y = 0;

        // dimensions
        this.width = txtSize * 7.50;
        this.height = txtSize * 2.25;

        // quest details
        this.title = quest.title;
        this.keyWord = ((typeof quest.keyWord === "string") ? quest.keyWord : quest.keyWord());
        this.required = quest.required();
        this.progress = progress;
        this.reward = quest.reward;

        // text
        this.txtFont = txtFont;
        this.txtSize = txtSize;
        this.txtCol = "white";

        // cancel button
        this.cancelBut = new Button(
            0, 0,
            this.width, this.height,
            color(255, 0), "green",
            color(255, 0), "black",
            "Cancel", this.txtFont, this.txtSize
        );
    }

    display(x, y) {
        this.x = x;
        this.y = y;
        push();
            rectMode(CORNER);
            textAlign(LEFT, TOP);
            textFont(this.txtFont, this.txtSize);
            fill(this.txtCol);
            if (this.title === "Explore Area")
                text("Explore " + this.keyWord.area + "\n" + this.progress + "/" + this.required, this.x, this.y, this.width, this.height);
            else
                text(this.title + "\n" + this.progress + "/" + this.required, this.x, this.y, this.width, this.height);
        pop();

        return this.buttonDisplay();
    }

    buttonDisplay() {
        this.cancelBut.x = this.x + (this.width / 2);
        this.cancelBut.y = this.y + (this.height / 2);

        return this.cancelBut.clicked();
    }
}

function displayQuestProgress() {
    // track quest progress on screen
    push();
    textAlign(LEFT, TOP);
    for (let i = questList.length - 1; i >= 0; i--) {
        let x = -width * 0.49;
        let y = -height * 0.325 + fontSize.default * i * 2.5;

        if (questList[i].display(x, y)) {
            questList.splice(i, 1);
            clickWait();
        }
    }
    pop();
}

function questAqquire() {
    if (questList.length < maxNumQuest)
        questList.push(new Quest(questDetails.get(random(questTasks)), fonts.default, fontSize.default));
}

function updateQuests(event) {
    for (let i = questList.length - 1; i >= 0; i--)
        // checking if player progressed in the quest
        if (event === questList[i].keyWord) {
            questList[i].progress++;
            // completing quest
            if (questList[i].progress >= questList[i].required)
                questComplete(questList[i].reward, i);
        }
}

function questComplete(reward, index) {
    player.money += reward.money();
    playerExp(reward.exp());

    for (let i = 0; i < reward.items(); i++)
        itemDropChance(player);

    questList.splice(index, 1);
}