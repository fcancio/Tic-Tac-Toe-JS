/*----- constants -----*/ 
const COLORS = {
    '0': 'null',
    '1': 'grey',
    '-1': 'black' 
};

const winningArr = [];
    winningArr.push([1, 2, 3]);
    winningArr.push([4, 5, 6]);
    winningArr.push([7, 8, 9]);
    winningArr.push([1, 4, 7]);
    winningArr.push([2, 5, 8]);
    winningArr.push([3, 6, 9]);
    winningArr.push([1, 5, 9]);
    winningArr.push([3, 5, 7]);


/*----- app's state (variables) -----*/ 
let board, turn, winner;

/*----- cached element references -----*/ 


/*----- event listeners -----*/ 


/*----- functions -----*/

function init() {
    boardArr = [
        [1, 0, 0, 0, 0, 0, 0, 0, -1], // board array represeting 9 spaces
    ];
    turn = 1;  // start with player 1
    winner = null;          // 1, -1, null (no winner), 'T' (tie)
    render();
}

function render() {
    boardArr.forEach(function(i) {
        let div = document.getElementById(`s${i}`);
        div.style.backgroundColor = COLORS[cell];
});

function handleClick(evt) {
    let idx = parseInt(evt.target.id.replace(`s`, ''));

}

if (winner) {
1 || -1 === [winArr];
return 'winMsg';

}

