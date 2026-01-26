function GameBoard() {
    let board = [];

    (function setCells() {
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i][j] = null;
            };
        };
    })();

    function getBoard() {
        return { board };
    }

    function setMark(row, col, mark) {
        if (board[row][col] === null) {
            board[row][col] = mark;
        }
    }

    function resetBoard() {
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i][j] = null;
            };
        };
    }

    return { getBoard, setMark, resetBoard }
};

function player(name, mark) {
    return { name, mark };
}

let player1 = player('Tanzim', 'X');
let player2 = player('Bot', 'O');

function GameController() {
    let currentPlayer = undefined;

    function switchTurn() {
        if (currentPlayer === undefined || currentPlayer == player2) {
            currentPlayer = player1;
        } else { currentPlayer = player2 }
    }

    function getCurrentPlayer() {
        return currentPlayer
    }

    function checkWin(board) {

        for (let i = 0; i < board.length; i++) {
            for (let j = 1; j < board.length - 1; j++) {
                if (board[i][j - 1] != null && board[i][j - 1] === board[i][j] && board[i][j] === board[i][j + 1]) {
                    return true
                }
            }
        }

        for (let i = 1; i < board.length - 1; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[j][i - 1] != null && board[j][i - 1] === board[j][i] && board[j][i] === board[j][i + 1]) {
                    return true
                }
            }
        }

        if (board[0][0] != null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return true;
        }

        if (board[0][2] != null && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return true;
        }

        return false;
    }

    return { switchTurn, getCurrentPlayer, checkWin
        
     }
}


