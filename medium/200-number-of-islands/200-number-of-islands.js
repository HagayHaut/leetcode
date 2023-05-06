/**
 * @param {character[][]} grid
 * @return {number}
 */

// 
const numIslands = (grid) => {
    const ROWS = grid.length,
          COLS = grid[0].length;
    
    let islands = 0;
    
    const flood = (r, c) => {
        if (
            r < 0 || 
            c < 0 || 
            r >= ROWS || 
            c >= COLS || 
            grid[r][c] === '0'
        ) {
            return;
        }
        grid[r][c] = '0';
        flood(r+1,c);
        flood(r-1,c);
        flood(r,c+1);
        flood(r,c-1);
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === '1') {
                islands++;
                flood(r, c);
            }
            
        }
    }
    
    return islands;
};