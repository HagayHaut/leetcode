/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// DP bottom up => go from last character 
// dp[dp.length - 1] is base case
// dp[0] is result

const wordBreak = function(s, wordDict) {
    const dp = Array(s.length + 1).fill(false);
    dp[s.length] = true;
    
    for (let i = s.length - 1; i >= 0; i--) {
        for (const word of wordDict) {
            if (
                i + word.length <= s.length && 
                s.slice(i, i + word.length) === word
            ) {
                dp[i] = dp[i + word.length];
            }
            if (dp[i]) break;
        }
    }
    return dp[0];
};