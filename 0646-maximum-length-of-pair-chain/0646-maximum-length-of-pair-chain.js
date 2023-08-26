/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    const n = pairs.length;
    const helper = (i, memo) => {
        if (memo[i]) return memo[i];
        memo[i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (pairs[i][1] < pairs[j][0]) {
                memo[i] = Math.max(memo[i], helper(j, memo) + 1);
            }
        }
        return memo[i];
    }
    pairs.sort((a, z) => a[0] - z[0]);
    let res = 0;
    const memo = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        res = Math.max(res, helper(i, memo));
    }
    return res;
};