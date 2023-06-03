
// const rooms = require("./rooms")

// const entrance = require("./entrance")

/*Entrance Rooms*/
const entrance = [
    {
        name: "Entrance 1",
        type: "room",
        image: "images/entrance/Entrance 1.png"
    },
    {
        name: "Entrance 2",
        type: "room",
        image: "images/Entrance 2.png"
    },
    {
        name: "Entrance 3",
        type: "corridor",
        image: "images/Entrance 3.png"
    },
    {
        name: "Entrance 4",
        type: "room",
        image: "images/Entrance 4.png"
    },
    {
        name: "Entrance 5",
        type: "corridor",
        image: "images/Entrance 5.png"
    },
    {
        name: "Entrance 6",
        type: "room",
        image: "images/Entrance 6.png"
    }
]
 
/*Rooms*/
const rooms = [
    {
        name: "Room 11",
        type: "corridor",
        image: "images/rooms/Room 1.png"
    },
    {
        name: "Room 12",
        type: "corridor",
        image: "images/rooms/Room 2.png"
    },
    {
        name: "Room 13",
        type: "corridor",
        image: "images/rooms/Room 3.png"
    },
    {
        name: "Room 14",
        type: "corridor",
        image: "images/rooms/Room 4.png"
    },
    {
        name: "Room 15",
        type: "room",
        image: "images/rooms/Room 5.png"
    },
    {
        name: "Room 16",
        type: "room",
        image: "images/rooms/Room 6.png"
    },
    {
        name: "Room 21",
        type: "room",
        image: "images/rooms/Room 7.png"
    },
    {
        name: "Room 22",
        type: "room",
        image: "images/rooms/Room 8.png"
    },
    {
        name: "Room 23",
        type: "room",
        image: "images/rooms/Room 9.png"
    },
    {
        name: "Room 24",
        type: "room",
        image: "images/rooms/Room 10.png"
    },
    {
        name: "Room 25",
        type: "room",
        image: ""
    },
    {
        name: "Room 26",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 31",
        type: "room",
        image: ""
    },
    {
        name: "Room 32",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 33",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 34",
        type: "room",
        image: ""
    },
    {
        name: "Room 35",
        type: "room",
        image: ""
    },
    {
        name: "Room 36",
        type: "room",
        image: ""
    },
    {
        name: "Room 41",
        type: "room",
        image: ""
    },
    {
        name: "Room 42",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 43",
        type: "room",
        image: ""
    },
    {
        name: "Room 44",
        type: "room",
        image: ""
    },
    {
        name: "Room 45",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 46",
        type: "room",
        image: ""
    },
    {
        name: "Room 51",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 52",
        type: "room",
        image: ""
    },
    {
        name: "Room 53",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 54",
        type: "room",
        image: ""
    },
    {
        name: "Room 55",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 56",
        type: "room",
        image: ""
    },
    {
        name: "Room 61",
        type: "room",
        image: ""
    },
    {
        name: "Room 62",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 63",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 64",
        type: "room",
        image: ""
    },
    {
        name: "Room 65",
        type: "corridor",
        image: ""
    },
    {
        name: "Room 66",
        type: "room",
        image: ""
    }
]

/* This is for rolling the dice */
const dice = {
    d2: Math.floor(Math.random() * 2),
    d3: Math.floor(Math.random() * 3),
    d4: Math.floor(Math.random() * 4),
    d6: Math.floor(Math.random() * 6),
    d11: Math.floor(Math.random() * 11),
    d12: Math.floor(Math.random() * 11) + 2,
    d16: Math.floor(Math.random() * 16),
    d36: Math.floor(Math.random() * 36),
    d18: Math.floor(Math.random() * 16) + 3
}

/* Vermin */
const vermin = {
    one: `${dice.d18} Rat(s) Level 1, no treasure. Any character wounded has a 1 in 6
    chance of losing 1 additional life due to an infected wound.
    Reactions (d6): 1–3 flee, 4–6 fight`,
    two:`${dice.d18} Vampire Bat(s), level 1, no treasure. Spells are cast at -1 due to
    their distracting shrieking. Despite the Vampire moniker, these are
    NOT Undead creatures.
    Reactions (d6): 1–3 flee, 4–6 fight`,
    three:`${dice.d12} Goblin Swarmling(s), level 3, treasure -1, morale -1. Dwarves
    attack them at +1.
    Reactions (d6): 1 flee, 2-3 flee if outnumbered, 4 bribe (5 gp x goblin),
    5–6 fight.`,
    four:`${dice.d6+1} Giant Centipede(s), level 3, no treasure. Any character wounded
    by a giant centipede must save versus level 2 poison or lose 1
    additional life.
    Reactions (d6): 1 flee, 2-3 flee if outnumbered, 4-6 fight.`,
    five:`${dice.d6+1} Vampire Frog(s), level 4, treasure -1. Despite the Vampire moniker,
    these are not Undead creatures.
    Reactions (d6): 1 flee, 2-4 fight, 5-6 fight to the death`,
    six:`${dice.d12} Skeletal Rat(s), level 3 undead, no treasure. Crushing weapon
    attacks are at +1 against skeletal rats, but they cannot be attacked
    by bows and slings. Clerics add +L when attacking them because
    they are undead.
    Reactions (d6): 1-2 flee, 3-6 fight`
}

/* Minions */

function undead() {
    let result = dice.d2
    if (result === 0) {
        return `${dice.d6+3} Skeleton(s), Level 3 undead.
        No treasure. Crushing weapons attack Skeletons at +1. Arrows are at -1 against them. Skeleton never test morale.
        Reactions: Always fight to the death.`
    } else {
        return `${dice.d6+1} Zombie(s), Level 3 undead.
        No treasure. Arrows are at -1 against zombies. Zombies never test morale.
        Reactions: Always fight to the death.`
    }
}

const minions = {
    one: `${undead()}`,
    two:`${dice.d6+4} Goblin(s). Level 3, treasure -1. Goblins have a 1 in 6 chance of
    gaining surprise, thus acting before the party. If they do act before the
    party, roll on their reactions table below. Dwarves attack goblins at +1.
    Reactions (d6): 1 flee if outnumbered, 2-3 bribe (5 gp per goblin), 4–6 fight.`,
    three: `${dice.d6+1} Hobgoblin(s). Level 4, Treasure +1.
    Reactions (d6): 1 flee if outnumbered, 2–3 bribe (10 gp per hobgoblin),
    4–5 fight, 6 fight to the death.`,
    four:`${dice.d6+2} Orc(s). Level 4, Treasure: normal. Orcs are afraid of magic and must
    test morale each time one or more is killed by a spell. If a spell caused
    their number to drop below 50%, they will test morale at -1. They never
    have magic items in their treasure: treat any rolled magic as d6 x d6
    gold pieces instead. Elves attack and cast spells against orcs at +1.
    Reactions (d6): 1-2 bribe (10 gp per orc), 3–5 fight, 6 fight to the death.`,
    five:`${dice.d3+1} Troll(s). Level 5, Treasure: normal. Trolls regenerate, unless killed by a
    spell, or unless a character uses one attack to chop an already killed
    troll to bits. If this does not happen, roll a die for every killed troll on its
    next turn. On a 5 or 6, the troll will come back to life and continue to
    fight. Halflings add +L to their Defense roll against trolls.
    Reactions (d6): 1–2 fight, 3–6 fight to the death. If a dwarf is present in
    the party, trolls will automatically fight to the death.`,
    six:`${dice.d12} Fungi Folk. Level 3, Treasure: normal. Any character taking
    damage from the fungi folk must save versus level 3 poison or lose 1
    life. Halflings add their level on this save.
    Reactions (d6): 1-2 ask for bribe (d6 gp per fungus), 3–6 fight.`
}

/* Weird Monsters */
const weirdMonsters = {
    one: `Minotaur. Level 5, 4 life points, 2 attacks, normal treasure. Due to the
    power of his bull-rush charge, the first Defense roll against a minotaur is
    at -1. Minotaurs love to eat halflings. Halflings may not use Luck in an
    encounter with a Minotaur.
    Reactions (d6): 1-2 bribe (60 gp), 3–4 fight, 6 fight to the death.`,
    two: `Iron Eater. Level 3, 4 life, 3 attacks, no treasure. Defense rolls against
    the iron eater do not enjoy bonus from heavy armor (shield and light
    armor count). If the monster hits, the character takes no damage but
    loses his armor, shield, main weapon, or 3d6 gp, in this order.
    Reactions (d6): 1 flee, 2-3 bribe (d6 gp to distract the creature; you may
    not use fools’ gold for this bribe), 4-6 fight.`,
    three: `Chimera. Level 5, 6 life points, 3 attacks, normal treasure. On every of
    the chimera’s turns, roll d6. On a 1 or 2 the chimera breathes fire
    instead of performing multiple attacks. All characters must save versus
    level 4 fire or lose 1 life.
    Reactions (d6): 1 bribe (50 gp), 2–6 fight.`,
    four: `Catoblepas. Level 4, 4 life points, treasure +1. All characters at the
    beginning of the battle must save versus a level 4 gaze attack or lose 1
    life. Reactions (d6): 1 flee, 2-6 fight`,
    five:`Giant Spider. Level 5, 3 life, 2 attacks, 2 treasure rolls. Characters taking
    a wound must save versus level 3 poison or lose an additional life. Due
    to the spider’s webbing, the party may not withdraw from this fight
    unless they cast a Fireball spell to burn the webs.
    Reactions: always fight.`,
    six: `Invisible Gremlins. A band of invisible gremlins steal d6+3 objects from
    the party. You must surrender objects from any of your characters in
    this order of preference: magic items, scrolls, potions, weapons, gems,
    coins (in bundles of 10 gp each). If the gremlins steal ALL of your
    equipment, they will leave a thank you message that counts as a clue.
    The gremlins have no combat stats because it is impossible to fight
    them. Encountering them gives no XP roll.`
}

/* Bosses */
const bosses = {
    one: `Mummy. Level 5 undead, 4 life points, 2 attacks, treasure +2. Any
    character killed by a mummy becomes another mummy and must be
    fought by the party. Mummies are attacked at +2 by the Fireball spell.
    Mummies never test morale.
    Reactions: always fight.`,
    two: `Orc Brute. Level 5, 5 life points, 2 attacks, treasure +1 but may not have
    any magic items, treat as 2d6 x d6 gold pieces instead.
    Reactions (d6): 1 bribe (50 gp), 2–5 fight, 6 fight to the death.`,
    three: `Ogre. Level 5, 6 life points, normal treasure. Each hit from an ogre
    inflicts 2 life points of damage.
    Reactions (d6): 1 bribe (30 gp), 2–3 fight, 4–6 fight to the death.`,
    four: `Medusa. Level 4, 4 life points, treasure +1. All characters at the
    beginning of the battle must save versus a level 4 gaze attack or be
    turned to stone. Petrified characters are out of the game until a Blessing
    spell is cast on them. Rogues add half their level to this save.
    Reactions (d6): 1 bribe (6d6 gp), 2 quest, 3–5 fight, 6 fight to the death.`,
    five: `Chaos Lord. Level 6, 4 life, 3 attacks, 2 treasure rolls at +1. Before the
    fight begins, roll d6 to determine if the Chaos Lord has any special
    powers: 1–3 no powers, 4 evil eye (characters must roll 4+ or be at -1 on
    all defense rolls until the chaos lord is slain), 5 energy drain (any
    character taking a wound from the chaos lord must roll 4+ or lose 1
    level), 6 hellfire blast (before combat, all characters must roll 6+ or lose
    2 life points; Clerics add ½ level to this roll). When you kill a chaos lord,
    roll a die; on a 5 or 6 a character of your choice finds a clue (see p.58).
    Reactions (d6): 1 flee if outnumbered, 2 fight, 3–6 fight to the death.`,
    six: `Small Dragon. Level 6, 5 life points, 2 attacks, 3 treasure rolls at +1. On
    each turn of the dragon, roll d6 to determine what it does. On a 1 or 2
    the dragon breathes fire, inflicting 1 life to all characters who fail to
    save versus level 6 dragon breath (each character adds ½ level, rounded
    down). On a 3 to 6, the Dragon does not breathe and bites 2 random
    characters instead. Small dragons are never met as random monsters.
    Reactions (d6): 1 Sleeping (all characters can attack at +2 on their first
    attack), 2–3 bribe (all the gold of the party, with a minimum of 100 gold
    or one magic item), 4–5 fight, 6 quest.`
}

/* Traps */
const traps = {
    one: `A dart (level 2) attacks a random character.`,
    two: `Poison gas (level 3) attacks all the characters.`,
    three: `A trapdoor (level 4) opens under the feet of
    the character leading the marching order.`,
    four:`Bear trap (level 4) hitting the character
    leading the marching order.`,
    five: `Spears coming out from a wall (level 5)
    attack two random characters.`,
    six: `A giant stone block (level 5) falls on the last
    character in the marching order.`
}

/* Special Features */
const specialFeatures = {
    one: `Fountain: All wounded characters recover 1 Life the first time they
    encounter a fountain in an adventure. Further fountains have no effect.`,
    two: `Blessed Temple: A character of your choice gains a +1 on Attack
    against undead monsters or demons. As soon as the character kills one
    undead or demon, the bonus disappears.`,
    three: `Armory: All characters can change their weapons if they want, within
    the limits of the weapons allowed to their character type. For example,
    a Warrior who was using a sword and shield may discard his shield and
    take a two-handed weapon, or exchange his sword for a mace.`,
    four: `Cursed Altar: As you enter the room, an eerie glow emanates from a
    sinister altar. A random character is cursed and has now -1 on his
    Defense rolls. To break the curse, the character must either slay a boss
    monster alone, or enter a Blessed Temple (see 2, above), or have a
    Blessing spell cast on himself by a cleric.`,
    five: `Statue: you may leave the statue alone or touch it. If you touch it, roll
    d6. On a 1–3, the statue awakens and attacks your party (level 4 boss
    with 6 life points, immune to all spells; if you defeat it, you find 3d6 x 10
    gold pieces inside). On a 4-6, the statue breaks, and you find 3d6 x 10
    gold pieces inside.`,
    six: `Puzzle Room: the room contains a puzzle box. Its level is d6. You may
    leave it alone or try to solve it. For every failed attempt, the character
    trying to solve it loses 1 life. Wizards and rogues add their level to their
    puzzle-solving roll. If the puzzle is solved, the box opens: make a
    Treasure roll to determine its contents.`
}

/* Special Events */
const specialEvents = {
    one: `A ghost passes through the party. All characters must save versus level
    4 fear or lose 1 life. A cleric adds his level to this roll.`,
    two: `Wandering monster(s) attack the party. A boss monster met as
    a wandering monster has no chance of being the final boss.`,
    three: `A lady in white appears and asks the party to complete a quest. If you
    accept, roll on the Quest table. If you refuse, she disappears. Ignore any
    further appearances of the Lady in White in the game.`,
    four: `Trap! ${rollTable(traps)}`,
    five: `You meet a wandering healer. He will heal your party at the cost of 10
    gold pieces per life healed. You may heal as many life points as you can
    afford. You can meet the healer only once per game. If you meet him
    again, reroll this result.`,
    six: `You meet a wandering alchemist. He will sell you up to one potion of
    healing per party member (50 gold pieces each) or a single dose of
    blade poison (30 gold pieces). The potion of healing will heal all lost life
    points to a single character, and can be swallowed at any moment
    during the game as a free action. The blade poison lets you envenom a
    single arrow or slashing weapon (not a crushing weapon). That weapon
    will have a +1 on Attack against the first enemy you fight. Poison will not
    work on undead monsters, demons, blobs, automatons, or living
    statues.
    You can meet a wandering alchemist only once per game. If you meet
    him again, treat this result as a trap: ${rollTable(traps)}`
}

/* Magic Treasure */
const magicTreasure = {
    one: `Wand of Sleep: User may cast Sleep spell 3 times before its energy is
    depleted. Only wizards and elves may use it. Add the user’s level to
    determine the spell roll, as you would do for a Sleep spell cast by that
    character.`,
    two: `Ring of Teleportation: Allows user to automatically pass a Defense
    roll by moving that character out of the room. That character may not
    take part in the current combat, but rejoins the party as soon as the
    combat is over. After one use, the ring loses its powers and becomes
    a simple golden ring worth 1d6+1 gold pieces.`,
    three: `Fools’ Gold: These magical (but fake) gold pieces will let the user
    automatically bribe the next monster that asks for a bribe. No matter
    what the monster asks, the gold will appear enough to satisfy his
    greed. This is a one-use magic item.`,
    four: `Magic Weapon: Gives +1 to its user’s Attack rolls. This is a permanent
    magic item. Roll d6 to determine its type: 1 crushing light hand
    weapon, 2 slashing light hand weapon, 3 crushing hand weapon, 4-5
    slashing hand weapon, 6 bow.`,
    five: `Potion of Healing: Can be swallowed at any moment, healing all lost
    life to a single character. Drinking it does not require an action. This is
    a one-use magic item, usable by all classes except barbarians.`,
    six: `Fireball Staff: Allows its user to cast Fireball spell twice, then its
    powers are depleted. Only wizards may use it. Add the user’s level to
    determine the spell roll, as you would do for a Fireball spell cast by
    that character.`
}

/* Scrolls */
const scrolls = {
    one: "Blessing",
    two: "Fireball",
    three: "Lightning Bolt",
    four: "Sleep",
    five: "Escape",
    six: "Protect"
}

/* Treasure */
const treasure = {
    zero: "No treasure found",
    one: `${dice.d6+1} gold pieces`,
    two: `${dice.d11+2} gold pieces`,
    three: `${rollTable(scrolls)}`,
    four: `One gem worth ${(dice.d11+2) * 5} gold pieces`,
    five: `One item of jewelry worth ${(dice.d16+3)*10} gold pieces`,
    six: `${rollTable(magicTreasure)}` 
}

/* Rolling for Entrance */ 

function entranceRoll() {
    let finalRoom = entrance[dice.d6]
     return finalRoom
 }

//  console.log(entranceRoll())

/* Rolling for Rooms/Corridors */ 

// Currently working

function roomRoll() {
    let nextRoom = rooms[dice.d36]
    if (nextRoom.type === 'room') {
        return `${nextRoom.name}, ${roomContent()}`
    } else {
        return `${nextRoom.name}, ${corridorContent()}`
    }
}

console.log(roomRoll())

/* Room Contents Table */

function roomContent() {
    let contentRoll = ['Treasure found', 'Treasure protected by a trap', 'Special Event', 'Empty, Special Feature', 'Vermin', 'Minions', 'Minions', 'Empty', 'Weird Monsters', 'Boss', 'Small Dragon Lair']
    let result = contentRoll[dice.d11]
    if(result === 'Treasure found') {
        return `Treasure found! ${rollTable(treasure)}`
    } else if (result === 'Treasure protected by a trap') {
        return `Trap: ${rollTable(traps)} Treasure: ${rollTable(treasure)}`
    } else if (result === 'Special Event') {
        return `${rollTable(specialEvents)}`
    } else if (result === 'Empty, Special Feature'){
        return  `Empty, ${rollTable(specialFeatures)}`
    } else if (result === 'Vermin'){
        return `Oh No! You ran across some vermin! ${rollTable(vermin)}`
    } else if (result === 'Minions') {
        return `Oh No! You ran across some minions! ${rollTable(minions)}`
    } else if (result === 'Minions') {
        return `Oh No! You ran across some minions! ${rollTable(minions)}`
    } else if (result === 'Empty'){
        return 'Empty, wish to search the room?'
    } else if (result === 'Weird Monsters'){
        return `Oh No! You ran across a weird monster! ${rollTable(weirdMonsters)}`
    } else if (result === 'Boss') {
        return `Oh No! You ran across a Boss! ${rollTable(bosses)}`
    } else if (result === 'Small Dragon Lair'){
        return bosses.six
    }
}

// console.log(roomContent())

/* Corridor Contents Table */

function corridorContent() {
    let contentRoll = ['Treasure found', 'Treasure protected by a trap', 'Corridor(Empty)', 'Empty, Special Feature', 'Vermin', 'Minions', 'Corridor(Empty)', 'Empty', 'Corridor(Empty)', 'Boss', 'Corridor(Empty)']
    let result = contentRoll[dice.d11]
    if(result === 'Treasure found') {
        return `Treasure found! ${rollTable(treasure)}`
    } else if (result === 'Treasure protected by a trap') {
        return `Trap: ${rollTable(traps)} Treasure: ${rollTable(treasure)}`
    } else if (result === 'Corridor(Empty)'){
        return 'Corridor(Empty)'
    } else if (result === 'Empty, Special Feature'){
        return  `Empty, ${rollTable(specialFeatures)}`
    } else if (result === 'Vermin'){
        return `Oh No! You ran across some vermin! ${rollTable(vermin)}`
    } else if (result === 'Minions') {
        return `Oh No! You ran across some minions! ${rollTable(minions)}`
    } else if (result === 'Boss') {
        return `Oh No! You ran across a Boss! ${rollTable(bosses)}`
    } else if (result === 'Empty'){
        return 'Empty, wish to search the room?'
    }
}

// console.log(corridorContent())

/* Dynamic Table */

function rollTable(object) {
    let result = dice.d6
    if (result === 0) {
        return object.one
    } else if (result === 1) {
        return object.two
    } else if (result === 2) {
        return object.three
    } else if (result === 3) {
        return object.four
    } else if (result === 4) {
        return object.five
    } else if (result === 5) {
        return object.six
    }
}

// console.log(rollTable(minions))

