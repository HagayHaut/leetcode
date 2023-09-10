/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length, n = grid[0].length;
    const rowOnes = Array(m).fill(0);
    const colOnes = Array(n).fill(0);
    grid.forEach((row, i) => {
        row.forEach((val, j) => {
            if (val) {
                rowOnes[i]++;
                colOnes[j]++;
            }
        });
    });
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = (2 * rowOnes[i]) - m + (2 * colOnes[j]) - n;
        }
    }
    return grid;
};