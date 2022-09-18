/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function(board) {
    const m = board.length,
          n = board[0].length,
          safe = new Set(),
          dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const isIB = (r, c) => r >= 0 && c >= 0 && r < m && c < n;
    
    const dfs = (r, c) => {
        if (
            isIB(r, c) && 
            !safe.has(`${r},${c}`) && 
            board[r][c] === 'O'
        ) {
            safe.add(`${r},${c}`);
            dirs.forEach(([dr,dc]) => dfs(r+dr,c+dc));
        }
    }
    
    for (let r = 0; r < m; r++) {
        if (board[r][0] === 'O') {
            dfs(r, 0);
        }
        if (board[r][n - 1] === 'O') {
            dfs(r, n - 1);
        }
    }
    
    for (let c = 0; c < n; c++) {
        if (board[0][c] === 'O') {
            dfs(0, c);
        }
        if (board[m - 1][c] === 'O') {
            dfs(m - 1, c);
        }
    }
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 'O' && !safe.has(`${r},${c}`)) {
                board[r][c] = 'X';
            }
        }
    }
};