/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length) return false;
    
    const n = matrix.length,
          m = matrix[0].length;
    
    let r = 0,
        c = m - 1;
    
    while (r < n && c >= 0) {
        if (matrix[r][c] === target) return true;
        else if (matrix[r][c] < target) r++;
        else c--;
    }
    
    return false;
};