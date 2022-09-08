/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function(mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i];
        if (i !== mat.length - 1 - i) {
            sum += mat[i][mat.length - 1 - i]
        }
    }
    return sum;
};