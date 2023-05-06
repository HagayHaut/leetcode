/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
    const rows = new Set(),
          cols = new Set(),
          m = matrix.length,
          n = matrix[0].length;
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === 0) {
                rows.add(r);
                cols.add(c);
            }
        }
    }
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (rows.has(r) || cols.has(c)) {
                matrix[r][c] = 0;
            }
        }
    }
};