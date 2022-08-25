/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    const rows = {},
          cols = {},
          squares = {};
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
             const value = board[r][c],
                   s = `${Math.floor(r/3)}${Math.floor(c/3)}`;
            if (value === '.') continue;
            rows[r] = rows[r] || new Set();
            cols[c] = cols[c] || new Set();
            squares[s] = squares[s] || new Set();
            if (
                rows[r].has(value) || cols[c].has(value)
                || squares[s].has(value)
            ) return false;
            rows[r].add(value);
            cols[c].add(value);
            squares[s].add(value);
        }
    }
    return true;
};