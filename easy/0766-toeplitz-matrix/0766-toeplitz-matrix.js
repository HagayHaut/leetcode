/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    
    const isIB = (r, c) => r >= 0 && c >= 0 && r < m && c < n;
    
    const checkDiagonal = (r, c) => {
        const val = matrix[r][c];
        while (isIB(r + 1, c + 1)) {
            if (matrix[++r][++c] !== val) return false;
        }
        return true;
    }
    
    for (let r = 0; r < m; r++) {
        if (!checkDiagonal(r, 0)) return false;
    }
    
    for (let c = 1; c < n; c++) {
        if (!checkDiagonal(0, c)) return false;
    }
    
    return true;
};