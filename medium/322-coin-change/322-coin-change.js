/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// dynamic programming problem
// use tabulation/ dfs backtracking:
// bottom up on decision tree

// coinChange(coins, 0) === 0 
// can figure out the rest
const coinChange = function(coins, amount) {
    if (!amount) return amount;
    const dp = Array(amount + 1).fill(false);
    dp[0] = 0
    
    for (let i = 1; i <= amount; i++) {
        const poss = [];
        coins.forEach(c => {
            if (c <= i && typeof dp[i-c] === 'number') {
                poss.push(dp[i-c]);
            }
        })
        if (poss.length) dp[i] = Math.min(...poss) + 1;
    }
    return dp.at(-1) ? dp.at(-1) : -1;
};


