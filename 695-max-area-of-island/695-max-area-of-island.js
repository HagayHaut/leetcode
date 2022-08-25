/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function(grid) {
    const seen = new Set(),
          ROWS = grid.length,
          COLS = grid[0].length;
    
    let maxIsland = 0;
    
    const dfs = (r, c) => {
        if (
            r < 0 || 
            c < 0 ||
            r >= ROWS || 
            c >= COLS || 
            grid[r][c] === 0 ||
            seen.has(`${r},${c}`)
        ) {
            return 0;
        }
        
        seen.add(`${r},${c}`);
        const island = 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1);
        maxIsland = Math.max(maxIsland, island);
        return island;
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
                dfs(r, c);
            }
        }
    }
    return maxIsland;
};

