/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    const n = pairs.length;
    pairs.sort((a, z) => a[0] - z[0]);
    let res = 1;
    const dp = Array(n).fill(1);
    for (let i = n - 1; i > -1; i--) {
        for (let j = i + 1; j < n; j++) {
            if (pairs[i][1] < pairs[j][0]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
};