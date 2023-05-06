/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// DYNAMIC PROGRAMMING

// from each cell, num paths is down paths + right paths
// use tabulation => end to start;
// base case is at end (1 paths) => cal rest off that
// start with bottom row, then next till top
// bottom row is all 1s, same with right column
const uniquePaths = function(m, n, memo = {}) {
    const key = `${m},${n}`;
    if (m === 1 && n === 1) return 1;
    if (`${n},${m}` in memo || key in memo) return memo[key] ?? memo[`${n},${m}`];
    if (!m || !n) return 0;
    
    memo[key] = uniquePaths(m-1,n,memo) + uniquePaths(m, n-1,memo);
    
    return memo[key];
};