/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */

// place lower of row/col sum in each spot
var restoreMatrix = function(rowSum, colSum) {
    const n = rowSum.length,
          m = colSum.length,
          res = Array(n).fill().map(() => Array(m).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= res[i][j];
            colSum[j] -= res[i][j];
        }
    }
    
    return res;
};