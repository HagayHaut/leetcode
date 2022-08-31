/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// avoid O((n*m)^2), work in from oceans

// top & left values reach pacific,
// bottom & right values reach atlantic

// working in from that, mapping 
// which nodes can reach pacific, 
// which can reach atlantic

// find nodes that reach both (intersection of two sets)

// O(n*m) time & space
const pacificAtlantic = function(heights) {
    const ROWS = heights.length,
          COLS = heights[0].length,
          dirs = [[1,0], [-1,0],[0,1],[0,-1]];
    
    const pac = Array(ROWS).fill().map(_ => Array(COLS).fill(false)),
          atl = Array(ROWS).fill().map(_ => Array(COLS).fill(false));
    
    const dfs = (r, c, ocean, prevHeight) => {
        if (
            r < 0 ||
            c < 0 ||
            r >= ROWS ||
            c >= COLS ||
            ocean[r][c] ||
            heights[r][c] < prevHeight
        ) {
            return;
        }
        
        ocean[r][c] = true;
        dirs.forEach(([row, col]) => {
            dfs(r+row, c+col, ocean, heights[r][c]);
        });
    }
    
    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac, -Infinity);
        dfs(r, COLS - 1, atl, -Infinity);
    }
    
    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pac, -Infinity);
        dfs(ROWS - 1, c, atl, -Infinity);
    }
    
    const res = [];
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (pac[r][c] && atl[r][c]) {
                res.push([r,c]);
            }
        }
    }
    
    
    return res;
};





































