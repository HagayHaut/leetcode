/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    if (!prices.length) return 0;
    
    const dp = Array(prices.length).fill(0);
    
    for (let t = 0; t < 2; t++) {
        let min = prices[0];
        let max = 0;
        for (let i = 1; i < prices.length; i++) {
            min = Math.min(min, prices[i] - dp[i]);
            max = Math.max(max, prices[i] - min);
            dp[i] = max;
        }
    }
    
    return dp.pop();
};