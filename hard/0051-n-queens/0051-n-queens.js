/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
    const res = [];
    const board = Array(n).fill().map(() => Array(n).fill().map(() => '.'));
                                      
    const backtrack = (r, cols = new Set(), posDiag = new Set(), negDiag = new Set()) => {
        
        if (r === n) {
            return res.push(board.map(row => row.join('')));
        }
        
        for (let c = 0; c < n; c++) {
            if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue;
            }
            board[r][c] = 'Q';
            backtrack(r + 1, new Set([...cols, c]), new Set([...posDiag, r + c]), new Set([...negDiag, r - c]));
            board[r][c] = '.';
        }
    }
    
    backtrack(0);
    
    return res;
};