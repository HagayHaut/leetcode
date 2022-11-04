/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
    const cols = new Set();
    const posDiag = new Set(); // (r + c)
    const negDiag = new Set(); // (r - c)
    
    const res = [];
    const board = Array(n).fill().map(() => Array(n).fill().map(() => '.'));
                                      
    const shouldSkip = (r, c) => {
        return cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c);
    }
                                      
    const backtrack = (r) => {
        if (r === n) {
            return res.push(board.map(row => row.join('')));
        }
        
        for (let c = 0; c < n; c++) {
            if (shouldSkip(r, c)) continue;
            
            cols.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            board[r][c] = 'Q';
            
            backtrack(r + 1);
            
            cols.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
            board[r][c] = '.';
        }
    }
    
    backtrack(0);
    
    return res;
};