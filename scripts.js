// need a global here to determine board play size and other maximum globals
const LIMIT = 10


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

handleClick = () => {
    console.log("handling click")
    console.log(Math.random())
};

clearBoard = () => {
    for (i=0; i < LIMIT; i++){
        for (j=0; j < LIMIT; j++){
            cell = document.getElementById(`${i}${j}`)
            cell.setAttribute('class', 'box')
        }
    }
}

randomizeBoard = () => {
    // clear the board
    clearBoard()
    // get a number of turns to apply a toggle
    numberOfTurns = getRandomArbitrary(1,LIMIT);
    //for each turn
    for (i=0; i < numberOfTurns; i++){
        // pick a random column
        column = getRandomArbitrary(0,LIMIT)
        // pick a random row
        row = getRandomArbitrary(0, LIMIT)
        // turn the cell on
        console.log(`${column}${row}`)
        cell = document.getElementById(`${column}${row}`)

        cell.setAttribute('class', 'box box-on')

    }
};

turnOn = (id) => {
    cell = document.getElementById(id)
    cell.setAttribute('class', 'box box-on')
};