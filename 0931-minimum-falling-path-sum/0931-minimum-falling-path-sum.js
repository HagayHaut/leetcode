/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const m = matrix.length;
    matrix = matrix.map(row => [Infinity, ...row, Infinity]);
    
    for (let i = m - 2; i >= 0; i--) {
        for (let j = 1; j <= m; j++) {
            matrix[i][j] += Math.min(...matrix[i+1].slice(j-1,j+2));
        }
    }
    
    return Math.min(...matrix[0]);
};