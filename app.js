function Player(name, mark) {
    return { name, mark };
}

let player1 = Player('Tanzim', 'X');
let player2 = Player('Bot', 'O');

const gameBoard = (function () {
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
        return board;
    }

    function setMark(row, col, mark) {
        if (board[row][col] === null) {
            board[row][col] = mark;
            return true;
        }

        return false;
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
})();

const gameController = (function () {
    let currentPlayer = player1;
    let isGameOver = false;

    function switchTurn() {
        if (currentPlayer === player2) {
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

    function checkTie(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    function playTurn(row, col) {
        if (isGameOver === true) {
            return;
        }

        const currentPlayer = gameController.getCurrentPlayer();

        const success = gameBoard.setMark(row, col, currentPlayer.mark);
        if (success === false) {
            return;
        }

        if (gameController.checkWin(gameBoard.getBoard())) {
            console.log(currentPlayer.name, ' won the game');
            isGameOver = true;
            return;
        }

        if (gameController.checkTie(gameBoard.getBoard())) {
            console.log('game is tied');
            isGameOver = true;
            return;
        }

        gameController.switchTurn();
    }

    function restart() {
        gameBoard.resetBoard();
    }

    return { switchTurn, getCurrentPlayer, checkWin, checkTie, playTurn, restart }
})();