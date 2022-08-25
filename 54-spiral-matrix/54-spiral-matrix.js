/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// use 4 pointers:
// left, right, top, bottom

// O(n * m) space
// O(1) space if you don't count output
const spiralOrder = function(matrix) {
    const result = [];
    let l = 0,
        r = matrix[0].length,
        t = 0,
        b = matrix.length;
    
    while (l < r && t < b) {
        // left to right
        for (let i = l; i < r; i++) {
            result.push(matrix[t][i]);
        }
        t++;
        // top to bottom
        for (let i = t; i < b; i++) {
            result.push(matrix[i][r-1]);
        }
        r--;
        // if just one col or row left
        if (!(l < r && t < b)) break;
        
        // right to left
        for (let i = r - 1; i >= l; i--) {
            result.push(matrix[b-1][i]);
        }
        b--;
        // bottom to top 
        for (let i = b - 1; i >= t; i--) {
            result.push(matrix[i][l]);
        }
        l++;
    }
    return result;
};