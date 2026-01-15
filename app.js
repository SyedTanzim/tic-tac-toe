const prompt = require("prompt-sync")({ sigint: true });

let row = 3;
let col = 3;
let board = [];

(function GameBoard() {
    for (let i = 0; i < row; i++) {
        let internalBoard = [];
        for (let j = 0; j < col; j++) {
            internalBoard.push(null);
        }
        board.push(internalBoard);
    }
})();

function RenderBoard() {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] != null) {
                process.stdout.write(` ${board[i][j]} `);
            } else {
                process.stdout.write(' . ');
            }
        }
        console.log();
    }
};

RenderBoard();

function Player(name, symbol) {
    return { name, symbol };
};

const player1 = Player('Tanzim', 'X');
const player2 = Player('Random', 'O');

function InputValue(i, j, value) {
    board[i][j] = value;
};

let playerTurn = player1;

function playerTurnFunction() {
    let value = ''

    if (playerTurn == player1) {
        value = player1.symbol;
        playerTurn = player2;
    } else {
        value = player2.symbol;
        playerTurn = player1
    }

    return value;
};

function GameFlow() {
    let count = row * col;
    while (count > 0) {

        let rowInput = parseInt(prompt('enter row b/w 0-2: '));
        if (rowInput > 2 || rowInput < 0) {
            console.log('Invalid Input, Try again');
            continue;
        }

        let colInput = parseInt(prompt('enter col b/w 0-2: '));
        if (colInput > 2 || colInput < 0) {
            console.log('Invalid Input, Try again');
            continue;
        }

        if(board[rowInput][colInput] != null){
            console.log('Cell already occupied');
            continue;            
        }

        let playerMove = playerTurnFunction();
        InputValue(rowInput, colInput, playerMove);
        count--;
        RenderBoard();
        
    }
};

GameFlow();