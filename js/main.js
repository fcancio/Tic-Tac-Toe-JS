/*----- constants -----*/ 
const COLORS = { // define color object for player moves
    '0': 'white',
    '1': 'grey',
    '-1': 'black' 
};

const winArr = []
//define winning combinations
    winArr.push([1, 2, 3]); 
    winArr.push([4, 5, 6]);
    winArr.push([7, 8, 9]);
    winArr.push([1, 4, 7]);
    winArr.push([2, 5, 8]);
    winArr.push([3, 6, 9]);
    winArr.push([1, 5, 9]);
    winArr.push([3, 5, 7]);


/*----- app's state (variables) -----*/ 
let board = []
let turn = ''
let winner = '' // to rep winner, a tie, or game in play


/*----- cached element references -----*/ 
let msgEl = document.getElementById('msg');

/*----- event listeners -----*/ 
document.querySelector('section.board').addEventListener('click', handleClick);

/*----- functions -----*/

function init() {
    board = [
        0, 0, 0, 
        0, 0, 0, 
        0, 0, 0
    ]; // board array represeting 9 spaces
    turn = 1;  // start with player 1
    winner = 'null'; // -1 or 1 for winning player, T for tie
    render();
    handleClick();
}


function render() {
    for (i = 0; i < board.length; i++) {
    
    }
    }


function handleClick(evt) {
        let div = parseInt(evt.target);
        console.log(div)
    }