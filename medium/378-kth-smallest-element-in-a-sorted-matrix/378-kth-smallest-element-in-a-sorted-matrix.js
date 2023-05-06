/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(matrix, k) {
    const flat = [];
    matrix.forEach(row => flat.push(...row));
    flat.sort((a, b) => a - b);
    return flat[k-1];
};