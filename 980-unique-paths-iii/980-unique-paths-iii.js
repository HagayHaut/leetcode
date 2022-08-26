/**
 * @param {number[][]} grid
 * @return {number}
 */

// get start pos, end pos
// visited set tracks path of dfs
// remove from set and backtrack
const uniquePathsIII = function(grid) {
    const m = grid.length,
          n = grid[0].length,
          dirs = [[0,-1],[0,1],[1,0],[-1,0]],
          visited = new Set();
    
    let paths = 0;
    
    let startR,
        endR,
        startC, 
        endC,
        empty = 0;
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                startR = r;
                startC = c;
            }
            if (grid[r][c] === 2) {
                endR = r;
                endC = c;
            }
            if (grid[r][c] === 0) empty++;
        }
    }
    
    const dfs = (r, c, visited, steps) => {
        if (r === endR && c === endC ) {
            if (steps === empty + 1) {
                paths++;
            }
            return;
        }
        
        if (
            0 <= r && r < m && 
            0 <= c && c < n &&
            grid[r][c] !== -1 &&
            !visited.has(`${r},${c}`)
        ) {
            visited.add(`${r},${c}`)
            for (const [i, j] of dirs) {
                dfs(r+i, c+j, visited, steps + 1)
            }
            visited.delete(`${r},${c}`)
            
        }
    }
    
    dfs(startR, startC, visited, 0);
    
    return paths;
};