let currentPlayer = 'X';
let isGameActive = true;

function makeMove(cell) {
    if (!isGameActive || cell.textContent !== '') return;

    cell.textContent = currentPlayer;
    

    if (checkWin()) {
        document.getElementById('message').textContent = `${currentPlayer} wins!`;
        isGameActive = false;
    } else if (isBoardFull()) {
        document.getElementById('message').textContent = "It's a draw!";
        isGameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            document.querySelector(`.cell:nth-child(${a + 1}`).textContent === currentPlayer &&
            document.querySelector(`.cell:nth-child(${b + 1}`).textContent === currentPlayer &&
            document.querySelector(`.cell:nth-child(${c + 1}`).textContent === currentPlayer
        ) {
            return true;
        }
    }

    return false;
}

function isBoardFull() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        if (cell.textContent === '') return false;
    }
    return true;
}

function resetBoard() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
    document.getElementById('message').textContent = '';
    currentPlayer = 'X';
    isGameActive = true;
}

