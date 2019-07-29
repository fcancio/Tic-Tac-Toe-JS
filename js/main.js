/*----- constants -----*/ 
const COLORS = { // define color object for player moves
    'null': '',
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
let board, turn, winner; // to rep winner, a tie, or game in play

/*----- cached element references -----*/ 
const message = document.querySelector('h2');
const squares = document.querySelectorAll('.square')

/*----- event listeners -----*/ 
document.querySelector('button').addEventListener('click', init);
document.querySelector('.game-board').addEventListener('click', handleClick);

/*----- functions -----*/
init();

function init() {
    //syntax to create a new array and fill 
    board = new Array(9).fill(null);
    //assign a first turn
    turn = 1;
    winner = null;
    //run the game through a render function
    render();
}

function handleClick(evt) {
    //create shortcut variable
    const moveIdx = parseInt(evt.target.dataset.square);
    if(board[moveIdx] || winner) return;
    board[moveIdx] = turn;
    turn *= -1;
    winner = getWinner();
   render();
}

function getWinner() {
    for(let i = 0; i < COMBOS.length; i++){
        if(Math.abs(board[COMBOS[i][0]] + 
                    board[COMBOS[i][1]] + 
                    board[COMBOS[i][2]] === 3)) return board[COMBOS[i][0]];
    }
    if(board.includes(null)) return null;
    return "T";
}

function render() {
    // any time a move is made or the game refreshes
    board.forEach(function(elem, idx) {
        // check for the index in squares node list
        squares[idx].textContent = SPRITE[elem];
    });
    if(!winner) {
        message.textContent = `${SPRITE[turn]}'s Turn`;
    } else if(winner === "T") {
        message.textContent = 'Tie Game!';
    } else {
        message.textContent = `${SPRITE[winner]} Wins!`;

    }
    }