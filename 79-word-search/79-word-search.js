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
          path = new Set();
    
    const dfs = (r, c, i) => {
        if (i === word.length) return true;
        if (
            r >= 0 &&
            c >= 0 &&
            r < n &&
            c < m &&
            !path.has(`${r},${c}`) &&
            word[i] === board[r][c]
        ) {
            path.add(`${r},${c}`);
            const res = dfs(r+1,c,i+1) || dfs(r-1,c,i+1) || dfs(r,c+1,i+1) || dfs(r,c-1,i+1);
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