// Quests
// Travis Ahern
// Jul. 7, 2019

// vars
let questList = [];
let listOfAreas = [];
let sizeOfText;
let allQuests = [
    {title: "Kill Enemys", keyWord: "Kill", reward: {}, required: },
    {title: "Explore Area", keyWord: "", reward: {money:}, required: },
];

class Quest {
    constructor(quest) {
        this.title = quest.title;
    }
}

class Quest_KillEnemys {
    constructor() {
        this.keyWord = "Kill";
        this.required = int(random(5, 10)); // amount needed to complete
        this.progress = 0;                  // running total
        this.reward = {                     // reward for completion
            money: this.required*100,
            exp: this.required*150,
            items: int(random(0, this.required/2.5))
        };
        this.title = "Kill Enemys"
    }

    display(x, y) {
        text(this.title + "\n" + this.progress + "/" + this.required, x, y);
    }
}

class Quest_GoToArea {
    constructor(areas) {
        this.keyWord = random(areas/* .name //final vesion*/); // area needed to journey too
        this.required = 1;                                     // making things easy
        this.progress = 0;                                     // tracking progress
        this.reward = /* will be based on lvl */{
            money: 100, 
            exp: 100,
            items: 2
        };
        this.title = "Explore " + this.keyWord;
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

    listOfAreas = ["Mountains", "Desert", "Forest"];


    questList.push(new Quest(allQuests));

    
    questList.push(new Quest_GoToArea(listOfAreas));
    questList.push(new Quest_KillEnemys());
    questList.push(new Quest_KillEnemys());
}

function draw() {
    bsackground(255);
    
    // display quest log on screen
    fill(0);
    for (let i = questList.length-1; i >= 0; i--) {
        let x = sizeOfText + (width * 0.025);
        let y = sizeOfText + (sizeOfText*i*2.5);

        questList[i].display(x, y);
    }
}

function updateQuests(event) {
    for (let i = questList.length - 1; i >= 0; i--) {
        // checking if player progressed in the quest
        if (event === questList[i].keyWord) {
            questList[i].progress++;

            // completing quest
            if (questList[i].progress >= questList[i].required) {

            }
        }
    }
}

function mousePressed() {
    updateQuests("Kill")
}