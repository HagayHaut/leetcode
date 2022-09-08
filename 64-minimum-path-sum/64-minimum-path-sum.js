/**
 * @param {number[][]} grid
 * @return {number}
 */

// DP solution => 
// each cell is gets added the minimum
// path sum from top and left
// if OB, compare with Infinity
// last element is result
const minPathSum = function(grid) {
    const safeGet = (r, c) => (
        r < 0 || c < 0 ? Infinity : grid[r][c]
    );
    
    grid.forEach((row, i) => {
        row.forEach((n, j) => {
            if (!i && !j) return;
            grid[i][j] += Math.min(safeGet(i - 1, j), safeGet(i, j - 1));
        })
    })
    
    return grid[grid.length - 1][grid[0].length - 1];
};