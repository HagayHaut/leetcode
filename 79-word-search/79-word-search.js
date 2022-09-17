/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// use dfs / backtracking

// O(n*m*(4^n))
const exist = function(board, word) {
    const n = board.length,
          m = board[0].length,
          directions = [[1,0],[-1,0],[0,1],[0,-1]],
          seen = new Set();
    
    const isOB = (r, c) => r < 0 || c < 0 || r >= n || c >= m;
    
    const dfs = (r, c, i) => {
        if (i === word.length) return true;
        
        if (
            isOB(r, c) ||
            seen.has(`${r},${c}`) ||
            board[r][c] !== word[i]
        ) {
            return false;
        }
        
        seen.add(`${r},${c}`);
        let res = false;
        directions.forEach(([row, col]) => res ||= dfs(r+row,c+col,i+1));
        seen.delete(`${r},${c}`);
        return res;
    }
    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (board[r][c] === word[0]) {
                if (dfs(r, c, 0)) return true;
            }
        }
    }
    
    return false;
};