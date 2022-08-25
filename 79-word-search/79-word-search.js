/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// use dfs / backtracking

// O(n*m*(4^n))
const exist = function(board, word) {
    const ROWS = board.length,
          COLS = board[0].length,
          path = new Set();
    
    const dfs = (r, c, i) => {
        if (i === word.length) return true;
        
        if (
            r < 0 || c < 0 || 
            r >= ROWS || c >= COLS || 
            word[i] !== board[r][c] ||
            path.has(`${r},${c}`)
        ) {
            return false;
        }
        
        path.add(`${r},${c}`);
        
        const res = dfs(r + 1, c, i + 1) ||
                    dfs(r - 1, c, i + 1) ||
                    dfs(r, c + 1, i + 1) ||
                    dfs(r, c - 1, i + 1) 
        path.delete(`${r},${c}`)
        return res;
    } 
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === word[0]) {
                if (dfs(r, c, 0)) return true;
            }
        }
    }
    
    return false;
};