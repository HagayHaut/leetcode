/**
 * @param {number[][]} grid
 * @return {number}
 */

const maxAreaOfIsland = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let maxIsland = 0;
    
    const isOB = (r, c) => r < 0 || c < 0 || c >= COLS || r >= ROWS;
    
    const dfs = (r, c) => {
        if (isOB(r, c) || !grid[r][c]) {
            return 0;
        }
        grid[r][c] = 0;
        let island = 0;
        directions.forEach(([row, col]) => {
            island += dfs(r + row, c + col);
        })
        return 1 + island;
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c]) {
                maxIsland = Math.max(maxIsland, dfs(r, c));
            }
        }
    }
    
    return maxIsland;
};

