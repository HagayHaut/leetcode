/**
 * @param {number[][]} grid
 * @return {number}
 */

// need multi-source bfs (could have many rotten)
// O(n * m) time and space
const orangesRotting = function(grid) {
    const q = [],
          directions = [[0,1],[0,-1],[1,0],[-1,0]];
    let time = 0,
        fresh = 0;
    
    // put all rotting oranges into queue and
    // counting initial number of fresh oranges
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) q.push([i,j]);
            if (grid[i][j] === 1) fresh++;
        }
    }
    
    while (q.length && fresh > 0) {
        const qLen = q.length;
        
        for (let x = 0; x < qLen; x++) {
            const [i,j] = q.shift();
            for (const [di,dj] of directions) {
                const row = di + i,
                      col = dj + j;
                if (
                    row >= 0 && 
                    col >= 0 && 
                    row < grid.length && 
                    col < grid[0].length && 
                    grid[row][col] === 1
                ) {
                    grid[row][col] = 2;
                    q.push([row,col]);
                    fresh--;
                }
            }
        }
        time++;
    }

    if (!fresh) return time;
    
    return -1;
};