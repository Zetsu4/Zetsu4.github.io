function settingItemMap() {
    // non equipable items
    allItems.set("HP Potion", {
        img: otherImgs.items.hpPotion, equipable: false, 
        stats: { cost: 20 }, amount: 0,
        drop: { chance: 20, min: 1, max: 2 },
        description: "Replenishes 25% of total health."
    });

    allItems.set("MP Potion", {
        img: otherImgs.items.mpPotion, equipable: false,
        stats: { cost: 10 }, amount: 0,
        drop: { chance: 25, min: 1, max: 4 },
        description: "Replenishes 30% of total mana."
    });

    allItems.set("Arrows", {
        img: otherImgs.items.arrows, equipable: false,
        stats: { cost: 2 }, amount: 0,
        drop: { chance: 30, min: 3, max: 20 },
        description: "Arrows for your bow."
    });

    allItems.set("Traps", {
        img: otherImgs.items.hpPotion, equipable: false,
        stats: { cost: 10 }, amount: 0,
        drop: { chance: 25, min: 1, max: 5 },
        description: "Traps to slow enemy movement."
    });

    allItems.set("Town Portal", {
        img: otherImgs.items.hpPotion, equipable: false,
        stats: { cost: 40 }, amount: 0,
        drop: { chance: 20, min: 1, max: 2 },
        description: "Teleports you to 'Town' instantly."
    });

    allItems.set("Money", {
        img: otherImgs.items.hpPotion, equipable: false,
        stats: { cost: 1 }, amount: 0,
        drop: { chance: 50, min: 1, max: 50 },
        description: "'greedisgood'... it didn't work );"
    });

    // equipment 
    setWeapons();
    setHead();
    setChest();
    setLegs();
    setFeet();
    setShoulders();
    setHands();

    allItems.size = function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    numOfItems = allItems.size;
}

function setWeapons() {
    // weapons
        // melee
    allItems.set("Pitch Fork", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 1,
            int: -2,
            agi: -1,
            str: +3,
            dex: +1,
            vit: +2,
            melee: +0.02,
            ranged: +0.00,
            magic: +0.00,
            trap: +0.00,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 30 },
        description: "A pitch fork that mobs carry"
    });

    allItems.set("Shifty Sword", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 30,
            int: -3,
            agi: +3,
            str: +2,
            dex: +1,
            vit: +4,
            melee: +0.03,
            ranged: +0.00,
            magic: -0.04,
            trap: +0.00,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 25 },
        description: "Careful, it's shifty!"
    });

    allItems.set("Ice Pick", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 30,
            int: -4,
            agi: +2,
            str: +6,
            dex: +0,
            vit: +3,
            melee: +0.04,
            ranged: -0.01,
            magic: -0.04,
            trap: +0.00,
            expBonus: +3
        }, amount: 0,
        drop: { chance: 22 },
        description: "Pick for breaking the ice"
    });

    allItems.set("Halberd", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 40,
            int: -4,
            agi: +1,
            str: +5,
            dex: +1,
            vit: +5,
            melee: +0.06,
            ranged: +0.00,
            magic: -0.05,
            trap: -0.02,
            expBonus: +4
        }, amount: 0,
        drop: { chance: 20 },
        description: "Halberd thing"
    });

        // ranged
    allItems.set("Normal Bow", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 15,
            int: -1,
            agi: +2,
            str: -2,
            dex: +3,
            vit: +1,
            melee: -0.01,
            ranged: +0.03,
            magic: +0.00,
            trap: +0.00,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 30 },
        description: "It's a normal bow"
    });

    allItems.set("Cross Bow", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 30,
            int: -3,
            agi: +3,
            str: -5,
            dex: +5,
            vit: +2,
            melee: -0.04,
            ranged: +0.05,
            magic: +0.00,
            trap: +0.02,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 25 },
        description: "When bows get crosssed"
    });

        // magic
    allItems.set("Real Wand", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 15,
            int: +3,
            agi: -1,
            str: -1,
            dex: -1,
            vit: -1,
            melee: -0.03,
            ranged: +0.01,
            magic: +0.05,
            trap: +0.01,
            expBonus: +0
        }, amount: 0,
        drop: { chance: 35 },
        description: "Totally a real wand"
    });

    allItems.set("Real Staff", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 30,
            int: +5,
            agi: -2,
            str: -2,
            dex: -1,
            vit: +1,
            melee: -0.04,
            ranged: +0.02,
            magic: +0.07,
            trap: +0.03,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 25 },
        description: "Totally a real staff"
    });

        // other
    allItems.set("Small Rock", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 1,
            int: +1,
            agi: +1,
            str: +1,
            dex: +1,
            vit: -2,
            melee: +0.01,
            ranged: +0.01,
            magic: +0.01,
            trap: +0.01,
            expBonus: -2
        }, amount: 0,
        drop: { chance: 95 },
        description: "A small rock"
    });

    allItems.set("Whip", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 40,
            int: -6,
            agi: +2,
            str: +3,
            dex: +6,
            vit: -2,
            melee: +0.07,
            ranged: +0.08,
            magic: -0.04,
            trap: -0.03,
            expBonus: +3
        }, amount: 0,
        drop: { chance: 25 },
        description: "Whips and stuff"
    });

    allItems.set("Hand Fan", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 50,
            int: +6,
            agi: +2,
            str: -5,
            dex: +4,
            vit: +8,
            melee: +0.02,
            ranged: +0.06,
            magic: +0.10,
            trap: -0.06,
            expBonus: +4
        }, amount: 0,
        drop: { chance: 20 },
        description: "For a hot day"
    });

        // special
    allItems.set("Stick", {
        img: otherImgs.equipment.weapon,
        equipable: true, equipSlot: "Weapon",
        stats: {
            cost: 1,
            int: +15,
            agi: +15,
            str: +15,
            dex: +15,
            vit: +15,
            melee: +0.25,
            ranged: +0.25,
            magic: +0.25,
            trap: +0.25,
            expBonus: +10
        }, amount: 0,
        drop: { chance: 1 },
        description: "Just a stick... I swear"
    });
}

function setHead() {
    // head
    allItems.set("Flat Rock", {
        img: otherImgs.equipment.head,
        equipable: true, equipSlot: "Head",
        stats: {
            cost: 10,
            int: -5,
            agi: -2,
            str: +5,
            dex: -1,
            vit: +3,
            melee: +0.01,
            ranged: -0.03,
            magic: -0.03,
            trap: +0.01,
            expBonus: +7
        }, amount: 0,
        drop: { chance: 50 },
        description: "A flat rock for your head"
    });

    allItems.set("Paper Bag", {
        img: otherImgs.equipment.head,
        equipable: true, equipSlot: "Head",
        stats: {
            cost: 20,
            int: +2,
            agi: +3,
            str: +5,
            dex: +2,
            vit: -2,
            melee: +0.00,
            ranged: +0.00,
            magic: +0.00,
            trap: +0.05,
            expBonus: -2
        }, amount: 0,
        drop: { chance: 45 },
        description: "To cover your ugly mug"
    });

    allItems.set("Helm", {
        img: otherImgs.equipment.head,
        equipable: true, equipSlot: "Head",
        stats: {
            cost: 25,
            int: -1,
            agi: +0,
            str: +2,
            dex: +0,
            vit: +4,
            melee: +0.04,
            ranged: +0.00,
            magic: -0.02,
            trap: +0.00,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 40 },
        description: "You take the helm"
    });

    allItems.set("Cap", {
        img: otherImgs.equipment.head,
        equipable: true, equipSlot: "Head",
        stats: {
            cost: 25,
            int: +1,
            agi: +2,
            str: -4,
            dex: +3,
            vit: +3,
            melee: -0.03,
            ranged: +0.02,
            magic: +0.02,
            trap: +0.04,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 40 },
        description: "Head cap"
    });

    allItems.set("Cloth Cap", {
        img: otherImgs.equipment.head,
        equipable: true, equipSlot: "Head",
        stats: {
            cost: 20,
            int: +2,
            agi: +2,
            str: -4,
            dex: +1,
            vit: +3,
            melee: -0.05,
            ranged: +0.02,
            magic: +0.03,
            trap: +0.02,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 35 },
        description: "Cap made from coth"
    });

    allItems.set("Helmet", {
        img: otherImgs.equipment.head,
        equipable: true, equipSlot: "Head",
        stats: {
            cost: 35,
            int: -3,
            agi: +2,
            str: +4,
            dex: -1,
            vit: +7,
            melee: +0.05,
            ranged: +0.00,
            magic: -0.03,
            trap: +0.01,
            expBonus: +4
        }, amount: 0,
        drop: { chance: 30 },
        description: "Helmet for your head"
    });

    allItems.set("Leather Cap", {
        img: otherImgs.equipment.head,
        equipable: true, equipSlot: "Head",
        stats: {
            cost: 35,
            int: +2,
            agi: +4,
            str: -3,
            dex: +6,
            vit: +5,
            melee: -0.02,
            ranged: +0.06,
            magic: +0.02,
            trap: +0.03,
            expBonus: +4
        }, amount: 0,
        drop: { chance: 30 },
        description: "Cap made from leather"
    });

    allItems.set("Hat", {
        img: otherImgs.equipment.head,
        equipable: true, equipSlot: "Head",
        stats: {
            cost: 35,
            int: +1,
            agi: +5,
            str: +1,
            dex: +1,
            vit: +5,
            melee: +0.01,
            ranged: +0.01,
            magic: +0.01,
            trap: +0.03,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 27 },
        description: "Plain hat"
    });
}

function setChest() {
    // chest
    allItems.set("Wood Shirt", {
        img: otherImgs.equipment.chest,
        equipable: true, equipSlot: "Chest",
        stats: {
            cost: 10,
            int: +0,
            agi: +0,
            str: +0,
            dex: -1,
            vit: +3,
            melee: +0.02,
            ranged: -0.02,
            magic: +0.00,
            trap: +0.00,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 30 },
        description: "It's made out of wood"
    });

    allItems.set("Grey Shirt", {
        img: otherImgs.equipment.chest,
        equipable: true, equipSlot: "Chest",
        stats: {
            cost: 20,
            int: +1,
            agi: +2,
            str: +1,
            dex: -2,
            vit: +4,
            melee: +0.01,
            ranged: +0.01,
            magic: +0.01,
            trap: +0.01,
            expBonus: -4
        }, amount: 0,
        drop: { chance: 25 },
        description: "I thought it was steel"
    });

    allItems.set("Tattered Robe", {
        img: otherImgs.equipment.chest,
        equipable: true, equipSlot: "Chest",
        stats: {
            cost: 30,
            int: +8,
            agi: -4,
            str: -2,
            dex: -1,
            vit: +4,
            melee: -0.03,
            ranged: +0.03,
            magic: +0.05,
            trap: +0.01,
            expBonus: -4
        }, amount: 0,
        drop: { chance: 20 },
        description: "A tattered robe"
    });

    allItems.set("Leather Armor", {
        img: otherImgs.equipment.chest,
        equipable: true, equipSlot: "Chest",
        stats: {
            cost: 30,
            int: -5,
            agi: +6,
            str: -3,
            dex: +3,
            vit: +5,
            melee: -0.05,
            ranged: +0.07,
            magic: -0.05,
            trap: +0.05,
            expBonus: -5
        }, amount: 0,
        drop: { chance: 20 },
        description: "Armor, made from leather"
    });

    allItems.set("Chain Mail", {
        img: otherImgs.equipment.chest,
        equipable: true, equipSlot: "Chest",
        stats: {
            cost: 30,
            int: -7,
            agi: -3,
            str: +3,
            dex: -1,
            vit: +6,
            melee: +0.10,
            ranged: -0.05,
            magic: -0.05,
            trap: -0.05,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 20 },
        description: "Rings all, a round"
    });

    allItems.set("New Robe", {
        img: otherImgs.equipment.chest,
        equipable: true, equipSlot: "Chest",
        stats: {
            cost: 90,
            int: +20,
            agi: -2,
            str: -12,
            dex: -6,
            vit: +5,
            melee: -0.07,
            ranged: -0.07,
            magic: +0.10,
            trap: +0.05,
            expBonus: -3
        }, amount: 0,
        drop: { chance: 15 },
        description: "Brand new robe"
    });

    allItems.set("Hard Leather", {
        img: otherImgs.equipment.chest,
        equipable: true, equipSlot: "Chest",
        stats: {
            cost: 90,
            int: -10,
            agi: +5,
            str: -6,
            dex: +15,
            vit: +8,
            melee: -0.07,
            ranged: +0.07,
            magic: -0.07,
            trap: +0.10,
            expBonus: -3
        }, amount: 0,
        drop: { chance: 15 },
        description: "Hardened leather"
    });

    allItems.set("Iron Plate", {
        img: otherImgs.equipment.chest,
        equipable: true, equipSlot: "Chest",
        stats: {
            cost: 90,
            int: -10,
            agi: -12,
            str: +15,
            dex: -8,
            vit: +11,
            melee: +0.12,
            ranged: -0.07,
            magic: -0.07,
            trap: -0.07,
            expBonus: -3
        }, amount: 0,
        drop: { chance: 15 },
        description: "Hard as iron, because it is iron"
    });
}

function setLegs() {
    // legs
    allItems.set("Grass Pants", {
        img: otherImgs.equipment.legs,
        equipable: true, equipSlot: "Legs",
        stats: {
            cost: 50,
            int: -5,
            agi: -5,
            str: -5,
            dex: -5,
            vit: -5,
            melee: -0.10,
            ranged: -0.10,
            magic: -0.10,
            trap: -0.10,
            expBonus: +50
        }, amount: 0,
        drop: { chance: 10 },
        description: "Pants made from grass"
    });

    allItems.set("Pants", {
        img: otherImgs.equipment.legs,
        equipable: true, equipSlot: "Legs",
        stats: {
            cost: 35,
            int: +1,
            agi: +1,
            str: +1,
            dex: +1,
            vit: +3,
            melee: +0.02,
            ranged: +0.02,
            magic: +0.02,
            trap: +0.02,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 30 },
        description: "Generic pants"
    });

    allItems.set("Blue Pants", {
        img: otherImgs.equipment.legs,
        equipable: true, equipSlot: "Legs",
        stats: {
            cost: 25,
            int: +1,
            agi: +2,
            str: -2,
            dex: -1,
            vit: +3,
            melee: -0.02,
            ranged: +0.02,
            magic: +0.04,
            trap: -0.02,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 30 },
        description: "Blue Pants"
    });

    allItems.set("Cargo Shorts", {
        img: otherImgs.equipment.legs,
        equipable: true, equipSlot: "Legs",
        stats: {
            cost: 50,
            int: +3,
            agi: +3,
            str: +3,
            dex: +3,
            vit: +6,
            melee: +0.04,
            ranged: +0.04,
            magic: +0.04,
            trap: +0.06,
            expBonus: +5
        }, amount: 0,
        drop: { chance: 20 },
        description: "Can hold lots of stuff"
    });

    allItems.set("Camo Pants", {
        img: otherImgs.equipment.legs,
        equipable: true, equipSlot: "Legs",
        stats: {
            cost: 25,
            int: +0,
            agi: +2,
            str: -2,
            dex: +3,
            vit: +4,
            melee: -0.02,
            ranged: +0.04,
            magic: +0.00,
            trap: +0.03,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 30 },
        description: "You won't be spotted"
    });

    allItems.set("Metal Pants", {
        img: otherImgs.equipment.legs,
        equipable: true, equipSlot: "Legs",
        stats: {
            cost: 25,
            int: -2,
            agi: -3,
            str: +4,
            dex: -3,
            vit: +8,
            melee: +0.04,
            ranged: -0.02,
            magic: -0.03,
            trap: -0.02,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 30 },
        description: "The stuff squires wear"
    });

    allItems.set("Fire Pants", {
        img: otherImgs.equipment.legs,
        equipable: true, equipSlot: "Legs",
        stats: {
            cost: 60,
            int: +10,
            agi: +4,
            str: -8,
            dex: +2,
            vit: -5,
            melee: +0.05,
            ranged: +0.02,
            magic: +0.08,
            trap: -0.04,
            expBonus: +5
        }, amount: 0,
        drop: { chance: 10 },
        description: "Liar"
    });

    allItems.set("Soft Pants", {
        img: otherImgs.equipment.legs,
        equipable: true, equipSlot: "Legs",
        stats: {
            cost: 60,
            int: +2,
            agi: +5,
            str: +2,
            dex: +2,
            vit: +1,
            melee: +0.02,
            ranged: +0.01,
            magic: +0.01,
            trap: +0.03,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 20 },
        description: "Oh, so soft"
    });
}

function setFeet() {
    // feet
    allItems.set("Old Shoes", {
        img: otherImgs.equipment.feet,
        equipable: true, equipSlot: "Feet",
        stats: {
            cost: 5,
            int: +0,
            agi: +1,
            str: +0,
            dex: +0,
            vit: +1,
            melee: +0,
            ranged: +0,
            magic: +0,
            trap: +0,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 40 },
        description: "Worn down shoes"
    });

    allItems.set("Shoes", {
        img: otherImgs.equipment.feet,
        equipable: true, equipSlot: "Feet",
        stats: {
            cost: 15,
            int: +0,
            agi: +2,
            str: +0,
            dex: +1,
            vit: +2,
            melee: +0.02,
            ranged: +0,
            magic: +0,
            trap: +0,
            expBonus: -1
        }, amount: 0,
        drop: { chance: 30 },
        description: "Plain shoes"
    });

    allItems.set("Leather Boots", {
        img: otherImgs.equipment.feet,
        equipable: true, equipSlot: "Feet",
        stats: {
            cost: 25,
            int: +0,
            agi: +3,
            str: -2,
            dex: +3,
            vit: +1,
            melee: -0.05,
            ranged: +0.08,
            magic: -0.00,
            trap: +0.05,
            expBonus: -2
        }, amount: 0,
        drop: { chance: 20 },
        description: "We need boots on the ground"
    });

    allItems.set("Eather Shoes", {
        img: otherImgs.equipment.feet,
        equipable: true, equipSlot: "Feet",
        stats: {
            cost: 25,
            int: +3,
            agi: +2,
            str: -1,
            dex: +0,
            vit: +1,
            melee: -0.07,
            ranged: +0.00,
            magic: +0.08,
            trap: +0.00,
            expBonus: -1
        }, amount: 0,
        drop: { chance: 20 },
        description: "They're eathernal"
    });

    allItems.set("Rock Boots", {
        img: otherImgs.equipment.feet,
        equipable: true, equipSlot: "Feet",
        stats: {
            cost: 25,
            int: -4,
            agi: -1,
            str: +3,
            dex: -1,
            vit: +3,
            melee: +0.07,
            ranged: -0.02,
            magic: -0.05,
            trap: +0.02,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 20 },
        description: "Rock on"
    });

    allItems.set("Camo Boots", {
        img: otherImgs.equipment.feet,
        equipable: true, equipSlot: "Feet",
        stats: {
            cost: 70,
            int: +0,
            agi: +6,
            str: +0,
            dex: +10,
            vit: +3,
            melee: +0.01,
            ranged: +0.12,
            magic: +0.02,
            trap: +0.05,
            expBonus: -3
        }, amount: 0,
        drop: { chance: 25 },
        description: "They'll never spot you"
    });

    allItems.set("Ethereal Shoes", {
        img: otherImgs.equipment.feet,
        equipable: true, equipSlot: "Feet",
        stats: {
            cost: 70,
            int: +8,
            agi: +2,
            str: -5,
            dex: +1,
            vit: +2,
            melee: -0.02,
            ranged: +0.04,
            magic: +0.15,
            trap: +0.01,
            expBonus: -2
        }, amount: 0,
        drop: { chance: 25 },
        description: "As real as ether"
    });

    allItems.set("Steel Boots", {
        img: otherImgs.equipment.feet,
        equipable: true, equipSlot: "Feet",
        stats: {
            cost: 70,
            int: -4,
            agi: +1,
            str: +6,
            dex: -1,
            vit: +4,
            melee: +0.20,
            ranged: -0.07,
            magic: -0.07,
            trap: -0.02,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 25 },
        description: "We need boots on the ground"
    });
}

function setShoulders() {
    // shoulders
    allItems.set("Round Rocks", {
        img: otherImgs.equipment.shoulders,
        equipable: true, equipSlot: "Shoulders",
        stats: {
            cost: 20,
            int: -3,
            agi: -3,
            str: +4,
            dex: -2,
            vit: +5,
            melee: +0.04,
            ranged: -004,
            magic: -0.02,
            trap: +0.02,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 25 },
        description: "Round rocks for your round shoulders"
    });

    allItems.set("Padded Shoulders", {
        img: otherImgs.equipment.shoulders,
        equipable: true, equipSlot: "Shoulders",
        stats: {
            cost: 100,
            int: +3,
            agi: +5,
            str: +3,
            dex: +3,
            vit: +2,
            melee: +0.02,
            ranged: +0.02,
            magic: +0.02,
            trap: +0.05,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 5 },
        description: "Padded shoulder peice"
    });

    allItems.set("Weak Plates", {
        img: otherImgs.equipment.shoulders,
        equipable: true, equipSlot: "Shoulders",
        stats: {
            cost: 20,
            int: -2,
            agi: -2,
            str: +1,
            dex: +1,
            vit: +3,
            melee: +0.02,
            ranged: +0.01,
            magic: +0.00,
            trap: +0.00,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 30 },
        description: "Shoulder plates that are weak"
    });

    allItems.set("Ragged Shoulders", {
        img: otherImgs.equipment.shoulders,
        equipable: true, equipSlot: "Shoulders",
        stats: {
            cost: 20,
            int: +0,
            agi: +2,
            str: -2,
            dex: +2,
            vit: +2,
            melee: -0.02,
            ranged: +0.02,
            magic: +0.00,
            trap: +0.02,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 30 },
        description: "Ragged shoulder peice"
    });

    allItems.set("Cloth Shoulders", {
        img: otherImgs.equipment.shoulders,
        equipable: true, equipSlot: "Shoulders",
        stats: {
            cost: 20,
            int: +2,
            agi: +1,
            str: -3,
            dex: +0,
            vit: +2,
            melee: -0.04,
            ranged: +0.01,
            magic: +0.03,
            trap: +0.00,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 30 },
        description: "Cloth shoulder peice"
    });

    allItems.set("Padded Plates", {
        img: otherImgs.equipment.shoulders,
        equipable: true, equipSlot: "Shoulders",
        stats: {
            cost: 75,
            int: -4,
            agi: -3,
            str: +12,
            dex: -3,
            vit: +9,
            melee: +0.08,
            ranged: -0.04,
            magic: -0.04,
            trap: -0.01,
            expBonus: +6
        }, amount: 0,
        drop: { chance: 15 },
        description: "Padded shoulder plates"
    });

    allItems.set("Eathernal Shoulders", {
        img: otherImgs.equipment.shoulders,
        equipable: true, equipSlot: "Shoulders",
        stats: {
            cost: 75,
            int: +8,
            agi: +2,
            str: -5,
            dex: +2,
            vit: +4,
            melee: -0.05,
            ranged: +0.02,
            magic: +0.06,
            trap: +0.02,
            expBonus: +6
        }, amount: 0,
        drop: { chance: 15 },
        description: "They're ethernal"
    });

    allItems.set("Leather Shoulders", {
        img: otherImgs.equipment.shoulders,
        equipable: true, equipSlot: "Shoulders",
        stats: {
            cost: 75,
            int: -3,
            agi: +4,
            str: -5,
            dex: +7,
            vit: +5,
            melee: -0.03,
            ranged: +0.07,
            magic: -0.02,
            trap: +0.02,
            expBonus: +6
        }, amount: 0,
        drop: { chance: 15 },
        description: "Leather shoulder peice"
    });
}

function setHands() {
    // hands
    allItems.set("Leather Gloves", {
        img: otherImgs.equipment.hands,
        equipable: true, equipSlot: "Hands",
        stats: {
            cost: 10,
            int: -1,
            agi: +0,
            str: +3,
            dex: +1,
            vit: +1,
            melee: +0.02,
            ranged: +0.01,
            magic: -0.02,
            trap: +0.03,
            expBonus: -2
        }, amount: 0,
        drop: { chance: 40 },
        description: "Gloves made out of leather"
    });

    allItems.set("Rock Gloves", {
        img: otherImgs.equipment.hands,
        equipable: true, equipSlot: "Hands",
        stats: {
            cost: 5,
            int: -3,
            agi: -3,
            str: +5,
            dex: -3,
            vit: -1,
            melee: +0.05,
            ranged: -0.02,
            magic: -0.02,
            trap: -0.02,
            expBonus: -3
        }, amount: 0,
        drop: { chance: 40 },
        description: "Rough rocks for your hands"
    });

    allItems.set("Cloth Gloves", {
        img: otherImgs.equipment.hands,
        equipable: true, equipSlot: "Hands",
        stats: {
            cost: 15,
            int: +2,
            agi: +0,
            str: -1,
            dex: +1,
            vit: +1,
            melee: -0.01,
            ranged: +0.01,
            magic: +0.02,
            trap: +0.00,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 27 },
        description: "Gloves made out of cloth"
    });

    allItems.set("Tough Gloves", {
        img: otherImgs.equipment.hands,
        equipable: true, equipSlot: "Hands",
        stats: {
            cost: 15,
            int: -2,
            agi: +0,
            str: +2,
            dex: +0,
            vit: +1,
            melee: +0.02,
            ranged: +0.00,
            magic: -0.01,
            trap: -0.01,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 27 },
        description: "Tough glove"
    });

    allItems.set("Gloves", {
        img: otherImgs.equipment.hands,
        equipable: true, equipSlot: "Hands",
        stats: {
            cost: 15,
            int: +0,
            agi: +2,
            str: -2,
            dex: +3,
            vit: +0,
            melee: -0.01,
            ranged: +0.02,
            magic: +0.02,
            trap: +0.02,
            expBonus: -1
        }, amount: 0,
        drop: { chance: 27 },
        description: "Plain gloves"
    });

    allItems.set("Cotton Gloves", {
        img: otherImgs.equipment.hands,
        equipable: true, equipSlot: "Hands",
        stats: {
            cost: 40,
            int: +4,
            agi: +0,
            str: -4,
            dex: +0,
            vit: +2,
            melee: -0.03,
            ranged: +0.00,
            magic: +0.08,
            trap: +0.00,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 20 },
        description: "Gloves made out of cotton"
    });

    allItems.set("Strong Gloves", {
        img: otherImgs.equipment.hands,
        equipable: true, equipSlot: "Hands",
        stats: {
            cost: 40,
            int: -4,
            agi: +1,
            str: +5,
            dex: -2,
            vit: +2,
            melee: +0.08,
            ranged: -0.04,
            magic: -0.04,
            trap: +0.01,
            expBonus: +1
        }, amount: 0,
        drop: { chance: 20 },
        description: "Strong gloves"
    });

    allItems.set("Padded Gloves", {
        img: otherImgs.equipment.hands,
        equipable: true, equipSlot: "Hands",
        stats: {
            cost: 40,
            int: -1,
            agi: +1,
            str: +2,
            dex: +1,
            vit: +4,
            melee: +0.02,
            ranged: +0.03,
            magic: +0.02,
            trap: +0.02,
            expBonus: -2
        }, amount: 0,
        drop: { chance: 20 },
        description: "Gloves with more protection"
    });

    allItems.set("Rubber Gloves", {
        img: otherImgs.equipment.hands,
        equipable: true, equipSlot: "Hands",
        stats: {
            cost: 20,
            int: +3,
            agi: +1,
            str: -4,
            dex: +1,
            vit: +1,
            melee: -0.02,
            ranged: +0.01,
            magic: +0.03,
            trap: -0.02,
            expBonus: +2
        }, amount: 0,
        drop: { chance: 30 },
        description: "Gloves made out of rubber"
    });
}