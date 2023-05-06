/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    let f1 = 1, f2 = 1;
    for (let i = 1; i < n; i++) {
        [f1, f2] = [f1 + f2, f1];
    }
    return f1;
};