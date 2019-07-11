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