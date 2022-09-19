/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function(board) {
    const m = board.length,
          n = board[0].length,
          safe = Array(m).fill().map(() => Array(n).fill(false)),
          directions = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const isInbounds = (r, c) => r >= 0 && c >= 0 && r < m && c < n;
    
    const markSafe = (r, c) => {
        if (isInbounds(r, c) && board[r][c] === 'O' && !safe[r][c]) {
            safe[r][c] = true;
            directions.forEach(([dr, dc]) => markSafe(r + dr, c + dc));
        }
    }
    
    for (let r = 0; r < m; r++) {
        if (board[r][0]) {
            markSafe(r, 0);
        }
        if (board[r][n - 1]) {
            markSafe(r, n - 1);
        }
    }
    
    for (let c = 0; c < n; c++) {
        if (board[0][c]) {
            markSafe(0, c);
        }
        if (board[m - 1][c]) {
            markSafe(m - 1, c);
        }
    }
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 'O' && !safe[r][c]) {
                board[r][c] = 'X';
            }
        }
    }
};