function Player(name, mark) {
    return { name, mark };
}

let player1 = Player('P1', 'X');
let player2 = Player('P2', 'O');

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

    function resetBoard() {
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i][j] = null;
            };
        };
    }

    function setMark(row, col, mark) {
        if (board[row][col] === null) {
            board[row][col] = mark;
            return true;
        }

        return false;
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
            alert(`${currentPlayer.name} won the game`);
            isGameOver = true;
            return true;
        }

        if (gameController.checkTie(gameBoard.getBoard())) {
            alert('game tied');
            isGameOver = true;
            return true;
        }
        gameController.switchTurn();

        if (success === true) {
            return true;
        }
    }

    function restart() {
        currentPlayer = player1;
        isGameOver = false;
        gameBoard.resetBoard();
        displayController.renderBoard(gameBoard.getBoard());
    }

    return { switchTurn, getCurrentPlayer, checkWin, checkTie, playTurn, restart }
})();

const displayController = (function () {
    const container = document.querySelector('.container');

    function renderBoard(board) {
        container.textContent = '';

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {

                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = i;
                cell.dataset.col = j;

                let row = Number(cell.dataset.row);
                let col = Number(cell.dataset.col);

                cell.addEventListener('click', () => {
                    if (board[row][col] != null) {
                        return;
                    }
                    displayController.handleClick(row, col);
                });
                cell.textContent = board[i][j] ?? '';
                container.appendChild(cell);
            }
        }

        const restartBtn = document.querySelector('.restartBtn');
        restartBtn.addEventListener('click', () => {
            gameController.restart();
        })
    }

    function handleClick(row, col) {
        const success = gameController.playTurn(row, col);
        if (success === true) {
            displayController.renderBoard(gameBoard.getBoard());
        }
    }

    return { renderBoard, handleClick };
})();

displayController.renderBoard(gameBoard.getBoard());
