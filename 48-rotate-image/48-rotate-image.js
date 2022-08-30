/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */



const rotate = function(matrix) {
    const swap = (r, c) => {
        const temp = matrix[r][c];
        matrix[r][c] = matrix[c][r];
        matrix[c][r] = temp;
    }
    const n = matrix.length;
    for (let r = 0; r < n; r++) {
        for (let c = r; c < n; c++) {
            swap(r, c);
        }
    }
    matrix.forEach(row => row.reverse())
};

