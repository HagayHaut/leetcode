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
          dirs = [[1,0],[-1,0],[0,1],[0,-1]],
          path = new Set();
    
    const isIB = (r, c) => r >= 0 && c >= 0 && r < n && c < m;
    
    const dfs = (r, c, i) => {
        if (i === word.length) return true;
        if (
            isIB(r, c) &&
            !path.has(`${r},${c}`) &&
            word[i] === board[r][c]
        ) {
            path.add(`${r},${c}`);
            let res = false;
            dirs.forEach(([row, col]) => res ||= dfs(r+row, c+col, i+1));
            path.delete(`${r},${c}`);
            return res;
        }
        return false;
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