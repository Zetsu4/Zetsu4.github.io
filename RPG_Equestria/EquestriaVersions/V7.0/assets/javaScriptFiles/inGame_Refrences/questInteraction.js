function questAqquire() {
    if (questList.length < maxNumQuest)
        questList.push(new Quest(questDetails.get(random(questEntries))));
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