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