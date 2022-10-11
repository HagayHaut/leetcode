/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n, memo = {}) {
    if (n < 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};