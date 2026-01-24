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
    return {name, mark};
}

let player1 = player('Tanzim','X');
let player2 = player('Bot', 'O');

