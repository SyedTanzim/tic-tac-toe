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

    let container = document.querySelector('#blocksContainer');

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let block = document.createElement('div');
            block.className = 'block';
            block.addEventListener('click', () => {
                console.log(i, j);
            })
            container.appendChild(block);
        }
    }
};

RenderBoard();

// function PlayerFactory(userName , symbol) {
//     return {userName , symbol};
// };

// const player1 = PlayerFactory(prompt('Enter player1 Name: '), 'X');
// const player2 = PlayerFactory(prompt('Enter player1 Name: '), '0');

// function WinChecker() {

//     if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][0] != null) {
//         return true;
//     }

//     if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][0] != null) {
//         return true;
//     }

//     if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][0] != null) {
//         return true;
//     }

//     if (board[1][1] == board[0][0] && board[1][1] == board[2][2] && board[1][1] != null) {
//         return true;
//     }

//     if (board[1][1] == board[0][2] && board[1][1] == board[2][0] && board[1][1] != null) {
//         return true;
//     }

//     if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[0][0] != null) {
//         return true;
//     }

//     if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[0][1] != null) {
//         return true;
//     }

//     if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2] != null) {
//         return true;
//     }

//     return false;

// }

// function TurnManager() {
//     let move = ''
//     let name = '';

//     function setMoveAndName() {
//         if (move == '' || move == player2.symbol) {
//             move = player1.symbol;
//             name = player1.name;
//         } else {
//             move = player2.symbol;
//             name = player2.name;
//         }
//     }

//     function getMove() {
//         return move;
//     }
//     function getName(){
//         return name;
//     }
//     return { getMove, getName, setMoveAndName };
// };

// const turn = TurnManager();

// function GameFlow() {
//     let count = row * col;

//     while (count > 0) {

//         let rowInput = parseInt(prompt('enter row b/w 0-2: '));
//         if (rowInput > 2 || rowInput < 0) {
//             console.log('Invalid Input, Try again');
//             continue;
//         }

//         let colInput = parseInt(prompt('enter col b/w 0-2: '));
//         if (colInput > 2 || colInput < 0) {
//             console.log('Invalid Input, Try again');
//             continue;
//         }

//         if (board[rowInput][colInput] != null) {
//             console.log('Cell already occupied');
//             continue;
//         }

//         turn.setMoveAndName();
//         InputManager(rowInput, colInput, turn.getMove());
//         count--;
//         RenderBoard();

//         let result = WinChecker();

//         if (result == true) {
//             console.log(turn.getName(), 'Won the game');
//             break;
//         } else if (count == 0) {
//             console.log('Game is Draw');
//         }
//     }
// };

// GameFlow();