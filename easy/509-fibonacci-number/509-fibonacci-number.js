/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
    if (n <= 2) return n < 1 ? 0 : 1;
    const fibs = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibs[i] = fibs[i-1] + fibs[i-2];
    }
    return fibs[n];
};