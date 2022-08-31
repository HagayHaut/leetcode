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
    const rows = heights.length,
          cols = heights[0].length;
    
    
    const pac = Array(rows).fill().map(() => Array(cols).fill(false)),
          atl = Array(rows).fill().map(() => Array(cols).fill(false));
    
    const dfs = (r, c, ocean, prevHeight) => {
        if (
            r < 0 || 
            c < 0 || 
            r >= rows || 
            c >= cols || 
            ocean[r][c] || 
            heights[r][c] < prevHeight
        ) {
            return;
        }
        
        ocean[r][c] = true;
        dfs(r+1, c, ocean, heights[r][c]);
        dfs(r-1, c, ocean, heights[r][c]);
        dfs(r, c+1, ocean, heights[r][c]);
        dfs(r, c-1, ocean, heights[r][c]);
    }
    
    // go through top and bottom
    for (let c = 0; c < cols; c++) {
        dfs(0, c, pac, -Infinity);
        dfs(rows-1, c, atl, -Infinity);
    }
    // go through left and right
    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pac, -Infinity);
        dfs(r, cols-1, atl, -Infinity);
    }
    
    const intersection = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pac[r][c] && atl[r][c]) {
                intersection.push([r,c]);
            }
        }
    }
    return intersection;
};





































