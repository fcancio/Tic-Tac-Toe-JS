/*----- constants -----*/ 
const COLORS = { // define color object for player moves
    '0': 'white',
    '1': 'grey',
    '-1': 'black' 
};

const winCombos = [
//define winning combinations
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/ 
let board = [];
let turn, winner; // to rep winner, a tie, or game in play

/*----- cached element references -----*/ 
let msgEl = document.getElementById('msg');

/*----- event listeners -----*/ 
document.querySelector('section.board').addEventListener('click', handleClick);
// document.querySelector('reset').addEventListener('click', resetGame);

/*----- functions -----*/

function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // board array represeting 9 spaces
    turn = 1;  // start with player 1
    winner = null; // -1 or 1 for winning player, T for tie
    msgEl.textContent = (`${COLORS[turn].toUpperCase()}'s TURN`);
    handleClick(evt);
    render();
    console.log(init)

}

function handleClick(evt) {
    // define square index variable as a mapped value
    let square = parseInt(evt.target.id);
    // don't allow player to move on an already marked square
    if (board[square] !== 0) return;
    if (winner !== false) return;
    if (isWinner === false) {
        msgEl.textContent = (`${COLORS[turn].toUpperCase()}'s TURN`);
        board[idx] = turn;
        } 
        if (turn === 1) {
            setLetter.textContent = "X"
            document.getElementById(`${idx}`).style.backgroundColor = COLORS[turn];
            msgEl.textContent = "O's TURN"
        }
        else if (turn === -1) {
            setLetter.textContent = "O"
            document.getElementById(`${idx}`).style.backgroundColor = COLORS[turn];
            msgEl.textContent = "X's TURN"
        }
        else {
        }
    }
}
    
    board[idx] = turn;
    turns *= -1;
    setWinner();
    render();

}
        

function render() {
    for (let i = 0; i < board.length; i++) {
        let div = document.getElementById(`${i}`);
        div.style.backgroundColor = COLORS[turn]


function setWinner() {
    // winner = ''
    // winCombos.forEach(function(combo) {
    // if (combo === ) {
    //     msgEl.textContent.toUpperCase = `${COLORS[turn]} HAS WON!`;
    // } else {
    //     msgEl.textContent.toUpperCase = `${COLORS[turn]}'s Turn`;
    // }
}

function resetGame() {
    // init();
}