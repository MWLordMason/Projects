
// const rooms = require("./rooms")

// const entrance = require("./entrance")

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

console.log(entrance)
console.log("hello")

/* This is for rolling the dice */
const dice = {
    d2: Math.floor(Math.random() * 2),
    d3: Math.floor(Math.random() * 3),
    d4: Math.floor(Math.random() * 4),
    d6: Math.floor(Math.random() * 6),
    d11: Math.floor(Math.random() * 11),
    d12: Math.floor(Math.random() * 11) + 2,
    d36: Math.floor(Math.random() * 36),
    d18: Math.floor(Math.random() * 16) + 3
}

/* Vermin */
const vermin = {
    rats: `${dice.d18} Rat(s) Level 1, no treasure. Any character wounded has a 1 in 6
    chance of losing 1 additional life due to an infected wound.
    Reactions (d6): 1–3 flee, 4–6 fight`,
    vampireBats:`${dice.d18} Vampire Bat(s), level 1, no treasure. Spells are cast at -1 due to
    their distracting shrieking. Despite the Vampire moniker, these are
    NOT Undead creatures.
    Reactions (d6): 1–3 flee, 4–6 fight`,
    goblinSwarmlings:`${dice.d12} Goblin Swarmling(s), level 3, treasure -1, morale -1. Dwarves
    attack them at +1.
    Reactions (d6): 1 flee, 2-3 flee if outnumbered, 4 bribe (5 gp x goblin),
    5–6 fight.`,
    giantCentipedes:`${dice.d6+1} Giant Centipede(s), level 3, no treasure. Any character wounded
    by a giant centipede must save versus level 2 poison or lose 1
    additional life.
    Reactions (d6): 1 flee, 2-3 flee if outnumbered, 4-6 fight.`,
    vampireFrogs:`${dice.d6+1} Vampire Frog(s), level 4, treasure -1. Despite the Vampire moniker,
    these are not Undead creatures.
    Reactions (d6): 1 flee, 2-4 fight, 5-6 fight to the death`,
    skeletalRats:`${dice.d12} Skeletal Rat(s), level 3 undead, no treasure. Crushing weapon
    attacks are at +1 against skeletal rats, but they cannot be attacked
    by bows and slings. Clerics add +L when attacking them because
    they are undead.
    Reactions (d6): 1-2 flee, 3-6 fight`
}

/* Minions */
const minions = {
    skeletons: `${dice.d6+3} Skeleton(s), Level 3 undead.
    No treasure. Crushing weapons attack Skeletons at +1. Arrows are at -1
    against them. Skeleton never test morale.
    Reactions: Always fight to the death.`,
    zombies: `${dice.d6+1} Zombie(s), Level 3 undead.
    No treasure. Arrows are at -1 against zombies. Zombies never test morale.
    Reactions: Always fight to the death.`,
    goblins:`${dice.d6+4} Goblin(s). Level 3, treasure -1. Goblins have a 1 in 6 chance of
    gaining surprise, thus acting before the party. If they do act before the
    party, roll on their reactions table below. Dwarves attack goblins at +1.
    Reactions (d6): 1 flee if outnumbered, 2-3 bribe (5 gp per goblin), 4–6 fight.`,
    hobgoblins: `${dice.d6+1} Hobgoblin(s). Level 4, Treasure +1.
    Reactions (d6): 1 flee if outnumbered, 2–3 bribe (10 gp per hobgoblin),
    4–5 fight, 6 fight to the death.`,
    orcs:`${dice.d6+2} Orc(s). Level 4, Treasure: normal. Orcs are afraid of magic and must
    test morale each time one or more is killed by a spell. If a spell caused
    their number to drop below 50%, they will test morale at -1. They never
    have magic items in their treasure: treat any rolled magic as d6 x d6
    gold pieces instead. Elves attack and cast spells against orcs at +1.
    Reactions (d6): 1-2 bribe (10 gp per orc), 3–5 fight, 6 fight to the death.`,
    trolls:`${dice.d3+1} Troll(s). Level 5, Treasure: normal. Trolls regenerate, unless killed by a
    spell, or unless a character uses one attack to chop an already killed
    troll to bits. If this does not happen, roll a die for every killed troll on its
    next turn. On a 5 or 6, the troll will come back to life and continue to
    fight. Halflings add +L to their Defense roll against trolls.
    Reactions (d6): 1–2 fight, 3–6 fight to the death. If a dwarf is present in
    the party, trolls will automatically fight to the death.`,
    fungiFolk:`${dice.d12} Fungi Folk. Level 3, Treasure: normal. Any character taking
    damage from the fungi folk must save versus level 3 poison or lose 1
    life. Halflings add their level on this save.
    Reactions (d6): 1-2 ask for bribe (d6 gp per fungus), 3–6 fight.`
}

/* Bosses */
const bosses = {
    mummy: `Mummy. Level 5 undead, 4 life points, 2 attacks, treasure +2. Any
    character killed by a mummy becomes another mummy and must be
    fought by the party. Mummies are attacked at +2 by the Fireball spell.
    Mummies never test morale.
    Reactions: always fight.`,
    orcBrute: `Orc Brute. Level 5, 5 life points, 2 attacks, treasure +1 but may not have
    any magic items, treat as 2d6 x d6 gold pieces instead.
    Reactions (d6): 1 bribe (50 gp), 2–5 fight, 6 fight to the death.`,
    ogre: `Ogre. Level 5, 6 life points, normal treasure. Each hit from an ogre
    inflicts 2 life points of damage.
    Reactions (d6): 1 bribe (30 gp), 2–3 fight, 4–6 fight to the death.`,
    medusa: `Medusa. Level 4, 4 life points, treasure +1. All characters at the
    beginning of the battle must save versus a level 4 gaze attack or be
    turned to stone. Petrified characters are out of the game until a Blessing
    spell is cast on them. Rogues add half their level to this save.
    Reactions (d6): 1 bribe (6d6 gp), 2 quest, 3–5 fight, 6 fight to the death.`,
    chaosLord: `Chaos Lord. Level 6, 4 life, 3 attacks, 2 treasure rolls at +1. Before the
    fight begins, roll d6 to determine if the Chaos Lord has any special
    powers: 1–3 no powers, 4 evil eye (characters must roll 4+ or be at -1 on
    all defense rolls until the chaos lord is slain), 5 energy drain (any
    character taking a wound from the chaos lord must roll 4+ or lose 1
    level), 6 hellfire blast (before combat, all characters must roll 6+ or lose
    2 life points; Clerics add ½ level to this roll). When you kill a chaos lord,
    roll a die; on a 5 or 6 a character of your choice finds a clue (see p.58).
    Reactions (d6): 1 flee if outnumbered, 2 fight, 3–6 fight to the death.`,
    smallDragon: `Small Dragon. Level 6, 5 life points, 2 attacks, 3 treasure rolls at +1. On
    each turn of the dragon, roll d6 to determine what it does. On a 1 or 2
    the dragon breathes fire, inflicting 1 life to all characters who fail to
    save versus level 6 dragon breath (each character adds ½ level, rounded
    down). On a 3 to 6, the Dragon does not breathe and bites 2 random
    characters instead. Small dragons are never met as random monsters.
    Reactions (d6): 1 Sleeping (all characters can attack at +2 on their first
    attack), 2–3 bribe (all the gold of the party, with a minimum of 100 gold
    or one magic item), 4–5 fight, 6 quest.`
}

/* Rolling for Entrance */ 

function entranceRoll() {
    const rooms = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
    let finalRoom = rooms[dice.d6]
     return finalRoom
 }

/* Rolling for Rooms/Corridors */ 

function roomRoll() {
   const rooms = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
   let finalRoom = rooms[dice.d36]
    return finalRoom
}

// console.log(roomRoll(d36))

/* Room Contents Table */

function roomContent() {
    let contentRoll = ['Treasure found', 'Treasure protected by a trap', 'Corridor(Empty) or Special Event', 'Empty, Special Feature', 'Vermin', 'Minions', 'Corridor(Empty) or Minions', 'Empty', 'Corridor(Empty) or Weird Monsters', 'Boss', 'Corridor(Empty) or Small Dragon Lair']
    let result = contentRoll[dice.d11]
    if(result === 'Treasure found') {
        return 'Treasure found'
    } else if (result === 'Treasure protected by a trap') {
        let traps = [0,1,3,4]
        let treasure = ['gold ', 'sword ', 'gem ', 'cup ']
        return `Trap: ${traps[dice.d4]} Treasure: ${treasure[dice.d4]}`
    } else if (result === 'Corridor(Empty) or Special Event') {
        return 'Corridor(Empty) or Special Event'
    } else if (result === 'Empty, Special Feature'){
        return  'Empty, Special Feature'
    } else if (result === 'Vermin'){
        return `Oh No! You ran across some vermin! ${verminTable()}`
    } else if (result === 'Minions') {
        return 'Minions'
    } else if (result === 'Corridor(Empty) or Minions') {
        return 'Corridor(Empty) or Minions'
    } else if (result === 'Empty'){
        return 'Empty'
    } else if (result === 'Corridor(Empty) or Weird Monsters'){
        return 'Corridor(Empty) or Weird Monsters'
    } else if (result === 'Boss'){
        return 'Boss'
    } else if (result === 'Corridor(Empty) or Small Dragon Lair'){
        return 'Corridor(Empty) or Small Dragon Lair'
    }
}

//console.log(roomContent())

/* Vermin Table */

function verminTable() {
    let result = dice.d6
    if (result === 0) {
        return vermin.rats
    } else if (result === 1) {
        return vermin.vampireBats
    } else if (result === 2) {
        return vermin.goblinSwarmlings
    } else if (result === 3) {
        return vermin.giantCentipedes
    } else if (result === 4) {
        return vermin.vampireFrogs
    } else if (result === 5) {
        return vermin.skeletalRats
    }
}

// console.log(verminTable())

/* Minion Table */

function minionTable() {
    let result = dice.d6
    if (result === 0) {
        if (d2 === 0) {
            return minions.skeletons
        } else {
            return minions.zombies
        }
    } else if (result === 1) {
        return minions.goblins
    } else if (result === 2) {
        return minions.hobgoblins
    } else if (result === 3) {
        return minions.orcs
    } else if (result === 4) {
        return minions.trolls
    } else if (result === 5) {
        return minions.fungiFolk
    }
}

// console.log(minionTable())

/* Boss Table */

function bossTable() {
    let result = dice.d6
    if (result === 0) {
        return bosses.mummy
    } else if (result === 1) {
        return bosses.orcBrute
    } else if (result === 2) {
        return bosses.ogre
    } else if (result === 3) {
        return bosses.medusa
    } else if (result === 4) {
        return bosses.chaosLord
    } else if (result === 5) {
        return bosses.smallDragon
    }
}

// console.log(bossTable())
