
/* This is for rolling the dice */

const d2 = Math.floor(Math.random() * 2)
const d4 = Math.floor(Math.random() * 4)
const d6 = Math.floor(Math.random() * 6)
const d11 = Math.floor(Math.random() * 11)
const d12 = Math.floor(Math.random() * 11) + 2
const d36 = Math.floor(Math.random() * 36)
const d18 = Math.floor(Math.random() * 16) + 3


/* Rolling for Rooms/Corridors */ 

function roomRoll() {
   const rooms = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
   let finalRoom = rooms[d36]
    return finalRoom
}


// console.log(roomRoll(d36))

/* Room Contents Table */

function roomContent() {
    let contentRoll = ['Treasure found', 'Treasure protected by a trap', 'Corridor(Empty) or Special Event', 'Empty, Special Feature', 'Vermin', 'Minions', 'Corridor(Empty) or Minions', 'Empty', 'Corridor(Empty) or Weird Monsters', 'Boss', 'Corridor(Empty) or Small Dragon Lair']
    let result = contentRoll[d11]
    if(result === 'Treasure found') {
        return 'Treasure found'
    } else if (result === 'Treasure protected by a trap') {
        let traps = [0,1,3,4]
        let treasure = ['gold ', 'sword ', 'gem ', 'cup ']
        return `Trap: ${traps[d4]} Treasure: ${treasure[d4]}`
    } else if (result === 'Corridor(Empty) or Special Event') {
        return 'Corridor(Empty) or Special Event'
    } else if (result === 'Empty, Special Feature'){
        return  'Empty, Special Feature'
    } else if (result === 'Vermin'){
        return `Oh No! You ran across some vermin! ${vermin()}`
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

function vermin() {
    if (d6 === 0) {
        return `${d18} Rats Level 1, no treasure. Any character wounded has a 1 in 6
        chance of losing 1 additional life due to an infected wound.
        Reactions (d6): 1–3 flee, 4–6 fight`
    } else if (d6 === 1) {
        return `${d18} Vampire Bats, level 1, no treasure. Spells are cast at -1 due to
        their distracting shrieking. Despite the Vampire moniker, these are
        NOT Undead creatures.
        Reactions (d6): 1–3 flee, 4–6 fight`
    } else if (d6 === 2) {
        return `${d12} Goblin Swarmlings, level 3, treasure -1, morale -1. Dwarves
        attack them at +1.
        Reactions (d6): 1 flee, 2-3 flee if outnumbered, 4 bribe (5 gp x goblin),
        5–6 fight.`
    } else if (d6 === 3) {
        return `${d6 + 1} Giant Centipedes, level 3, no treasure. Any character wounded
        by a giant centipede must save versus level 2 poison or lose 1
        additional life.
        Reactions (d6): 1 flee, 2-3 flee if outnumbered, 4-6 fight.`
    } else if (d6 === 4) {
        return `${d6 + 1} Vampire Frogs, level 4, treasure -1. Despite the Vampire moniker,
        these are not Undead creatures.
        Reactions (d6): 1 flee, 2-4 fight, 5-6 fight to the death`
    } else if (d6 === 5) {
        return `${d12} Skeletal Rats, level 3 undead, no treasure. Crushing weapon
        attacks are at +1 against skeletal rats, but they cannot be attacked
        by bows and slings. Clerics add +L when attacking them because
        they are undead.
        Reactions (d6): 1-2 flee, 3-6 fight`
    }
}

/* Minion Table */

function minions() {
    let result = d6
    if (result === 0) {
        if (d2 === 0) {
            return `${d6 + 3} Skeletons, Level 3 undead.
            No treasure. Crushing weapons attack Skeletons at +1. Arrows are at -1
            against them. Skeleton never test morale.
            Reactions: Always fight to the death.`
        } else {
            return `${d6 + 1} Zombies, Level 3 undead.
            No treasure. Arrows are at -1 against zombies. Zombies never test morale.
            Reactions: Always fight to the death.`
        }
    } else if (result === 1) {
        return ``
    } else if (result === 2) {
        return ``
    } else if (result === 3) {
        return ``
    } else if (result === 4) {
        return ``
    } else if (result === 5) {
        return ``
    }
}

console.log(minions())