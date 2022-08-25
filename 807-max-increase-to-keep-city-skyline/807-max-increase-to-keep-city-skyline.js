/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = function(grid) {
    const maxRowVals = grid.map(row => Math.max(...row)),
          maxColVals = [];
    
    let result = 0;
    
    for (let c = 0; c < grid.length; c++) {
        let max = -Infinity;
        for (let r = 0; r < grid.length; r++) {
            max = Math.max(max, grid[r][c]);
        }
        maxColVals.push(max);
    }
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid.length; c++) {
            result += Math.min(maxRowVals[r], maxColVals[c]) - grid[r][c];
        }
    }
    
    return result;
};