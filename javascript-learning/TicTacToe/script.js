const Gameboard = () => {
    const rowsCols = 3;
    const board = [];

    for (let i = 0; i < rowsCols; i++) {
        board[i] = [];
        for (let j = 0; j < rowsCols; j++) {
            board[i].push(Cell());
        }
    }

    const addPlayerInput = (player, row, col) => {
        try {
            board[row][col].getValue() === 0;
            board[row][col].populateCell(player);
        } catch (err) {
            console.log(err);
        }
    }

    const printBoard = () => {
        console.log(board);
    }

    return { printBoard, addPlayerInput };
}

const Cell = () => {
    let value = 0;

    const populateCell = (player) => {
        if (value != 0) {
            throw new Error("Cell is already populated");
        }
        value = player;
    }

    const getValue = () => value;

    return { populateCell, getValue };
}

const game = Gameboard();