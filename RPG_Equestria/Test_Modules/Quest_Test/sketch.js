// Quests
// Travis Ahern
// Jul. 7, 2019

// vars
let questList = [];
let listOfAreas = [];
let sizeOfText;
let allQuests;
let QuestEntries = [];

let stats = {};
let items;

class Quest {
    constructor(quest) {
        this.title = quest.title;
        this.keyWord = (typeof quest.keyWord === "string" ? quest.keyWord : quest.keyWord());
        this.required = quest.required;
        this.progress = 0;
        this.reward = quest.reward;
    }

    display(x, y) {
        text(this.title + "\n" + this.progress + "/" + this.required, x, y);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    textAlign(CENTER);
    sizeOfText = (width + height) * 0.01;
    textSize(sizeOfText);

    stats.money = 0;
    stats.exp = 0;
    items = 0;

    establishQuests();

    listOfAreas = ["Mountains", "Desert", "Forest"];

    for (let i = 7; i > 0; i--)
        questList.push(new Quest(allQuests.get(random(QuestEntries))));
}

function establishQuests() {
    allQuests = new Map();
    QuestEntries = [
        "Kill Quest",
        "Big Kill Quest",
        "Explore Quest",
    ];

    allQuests.set("Kill Quest", { title: "Kill Enemys", keyWord: "Kill", reward: { money: 100, exp: 100, items: 3 }, required: 10 });
    allQuests.set("Big Kill Quest", { title: "Kill Monsters", keyWord: "Kill100", reward: { money: 100, exp: 100, items: 3 }, required: 10 });
    allQuests.set("Explore Quest", { title: "Explore Area", keyWord: function chooseArea() { return random(listOfAreas) }, reward: { money: 100, exp: 100, items: 4 }, required: 1 });
}

function draw() {
    background(255);
    
    // display quest log on screen
    fill(0);
    for (let i = questList.length-1; i >= 0; i--) {
        let x = sizeOfText + (width * 0.03);
        let y = sizeOfText + (sizeOfText * i * 2.5);

        questList[i].display(x, y);
    }
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
    stats.money += reward.money;
    stats.exp += reward.exp;

    items += reward.items;

    questList.splice(index, 1);
}

function mousePressed() {
    updateQuests(allQuests.get("Kill Quest").keyWord);
}

function keyPressed() {
    if (keyCode === 32)
        updateQuests(allQuests.get("Explore Quest").keyWord);

    else if (keyCode === 66) {
        updateQuests(allQuests.get("Big Kill Quest").keyWord);
        updateQuests(allQuests.get("Kill Quest").keyWord);
    }
}