
/* This is for rolling the dice */

// Math.floor(Math.random() * 6)




/* Rolling for Rooms/Corridors */

// function roomRoll(num1,num2) {
//     const rollOne = [[1,2,3,4,5,6], [7,8,9,10,11,12], [13,14,15,16,17,18], [19,20,21,22,23,24], [25,26,27,28,29,30], [31,32,33,34,35,36]]
//     let rollTwo = rollOne[num1]
//     let finalRoom = rollTwo[num2]
//     return finalRoom
// }

// let dieRoll = Math.floor(Math.random() * 6)

// console.log(roomRoll(dieRoll,dieRoll))

/* Room Contents Table */

/* Need to list all the different tables into arrays and change variables in the function to reflect it */

let dieRoll = Math.floor(Math.random() * 11)

function roomContent(num) {
    let contentRoll = ['Treasure found', 'Treasure protected by a trap', 'Corridor(Empty) or Special Event', 'Empty, Special Feature', 'Vermin', 'Minions', 'Corridor(Empty) or Minions', 'Empty', 'Corridor(Empty) or Weird Monsters', 'Boss', 'Corridor(Empty) or Small Dragon Lair']
    let result = contentRoll[num]
    if(result === 'Treasure found') {
        return 'Treasure found'
    } else if (result === 'Treasure protected by a trap') {
        let traps = [0,1,3,4]
        let treasure = ['gold ', 'sword ', 'gem ', 'cup ']
        let roll = Math.floor(Math.random() * 4)
        return treasure[roll] + traps[roll]
    } else if (result === 'Corridor(Empty) or Special Event') {
        return 'Corridor(Empty) or Special Event'
    } else {
        return 'another result'
    }
}


console.log(roomContent(dieRoll))
