/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const isIB = (r, c) => r >= 0 && c >= 0 && r < m && c < n;
    
    for (let r = 0; r < m; r++) {
        let cc = 0, rr = r, val = matrix[r][0];
        while (isIB(rr + 1, cc + 1)) {
            rr++; 
            cc++;
            if (matrix[rr][cc] !== val) return false;
        }
    }
    
    for (let c = 1; c < n; c++) {
        let rr = 0, cc = c, val = matrix[0][c];
        while (isIB(rr + 1, cc + 1)) {
            rr++;
            cc++;
            if (matrix[rr][cc] !== val) return false;
        }
    }
    
    return true;
};