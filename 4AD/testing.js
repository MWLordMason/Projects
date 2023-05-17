
/* This is for rolling the dice */

const d4 = Math.floor(Math.random() * 4)
const d6 = Math.floor(Math.random() * 6)
const d11 = Math.floor(Math.random() * 11)
const d36 = Math.floor(Math.random() * 36)


/* Rolling for Rooms/Corridors */ 

// function roomRoll() {
//    const rooms = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
//    let finalRoom = rooms[d36]
//     return finalRoom
// }

// console.log(roomRoll(d36))

/* Room Contents Table */

/* Need to list all the different tables into arrays and change variables in the function to reflect it */

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
        return 'Vermin'
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

console.log(roomContent())
