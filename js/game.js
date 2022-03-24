const cvs = document.getElementById('tetris');
const ctx = cvs.getContext('2d');
const scoreElement = document.getElementById('score');

const ROW = 14;
const COL = 15;
const SQ = 8;
const defaultColor = '#889E56';
const defaultBorder = '#767F59';

let canMove = true;
let speed = 500;
let dropStart = Date.now();
let score = 0;

let board = [];
for (let currentRow = 0; currentRow < ROW; currentRow++){
    board[currentRow] = [];
    for(let currentCol = 0; currentCol < COL; currentCol++ ){
        board[currentRow][currentCol] = defaultColor;
    }
}

drawBoard();

const PIECES = [
    [Z, '#0D1A1A'],
    [S, '#0D1A1A'],
    [T, '#0D1A1A'],
    [O, '#0D1A1A'],
    [L, '#0D1A1A'],
    [I, '#0D1A1A'],
    [J, '#0D1A1A'],
];

let piece = randomPiece();

drop();

document.addEventListener("keydown", CONTROL);