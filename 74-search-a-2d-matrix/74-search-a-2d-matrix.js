/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const searchMatrix = function(matrix, target) {
    
    const findRow = () => {
        let l = 0,
            r = matrix.length - 1;

        while (l <= r) {
            const m = (l + r) >> 1;
            if (
                target >= matrix[m][0] && 
                target <= matrix[m][matrix[m].length - 1]
            ) {
                return m;
            }
            if (target > matrix[m][matrix[m].length - 1]) {
                l = m + 1;
            }
            else r = m - 1;
        }
        return false;
    }
    
    const row = findRow(matrix, target);
    if (row === false) return row;
    
    let l = 0,
        r = matrix[row].length - 1;
    
    while (l <=r) {
        const m = (l + r) >> 1;
        if (matrix[row][m] === target) return true;
        if (matrix[row][m] < target) l = m + 1;
        else r = m - 1;
    }
    
    return false;
};