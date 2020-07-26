// Input: Matrix
// Output: Boolean
// Constraints: each row and col must contain 1-9, and each subgrid must contain 1-9
// Edge Cases: 

// Backtracking Approach
  // Place 1-9 in empty cell
  // Find the best empty cell

// O() Time and O() Space

function getCandidates(board, row, col) {
  const candidates = [];

  // add to candidates if there are no collisions
  for (let number = 1; number <= 9; number++) {
    const collision = false;

    for (let i = 0; i <= 8; i++) {
    if (board[row][i] === number || board[i][col] === number || board[(row-row%3) + Math.floor(i/3)][(col -col%3) + i% 3] === number) {
        collision = true;
    }
    }
    if (!collision) {
        candidates.push(number);
    }
}
return candidates;
}

function sudokuSolve(board) {
    // fo reach empty cell, see if the candidates can be placed
    const row = -1; 
    const col = -1;
    const candidates = null;

    for (let r = 0; r <= 8; r++) {
    for (let c = 0; c <= 8; c++) {
        if (board[r][c] === '.') {
        const newCandidates = getCandidates(board, r, c);
        if (candidates == null || newCandidates.size() < candidates.size()) {
            candidates = newCandidates;
            row = r; 
            col = c;
        }
        }
        return true;
    } 
    }
    for (val in candidates) {
    board[row][col] = val
    if (sudokuSolve(board)) {
        return true;
    }
    board[row][col] = '.'
    }
    return false;
}
     

// TEST

let desc = 'solvable';
let actual = sudokuSolve([[[".",".",".","7",".",".","3",".","1"],["3",".",".","9",".",".",".",".","."],[".","4",".","3","1",".","2",".","."],[".","6",".","4",".",".","5",".","."],[".",".",".",".",".",".",".",".","."],[".",".","1",".",".","8",".","4","."],[".",".","6",".","2","1",".","5","."],[".",".",".",".",".","9",".",".","8"],["8",".","5",".",".","4",".",".","."]]]);
let expected = true;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}




