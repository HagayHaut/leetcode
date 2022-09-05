/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function(n) {
    const tribs = [0,1,1];
    if (n < 3) return tribs[n];
    for (let i = 3; i <= n; i++) {
        const next = tribs.slice(-3).reduce((a, b) => a + b);
        tribs.push(next);
    }
    return tribs[tribs.length - 1];
};