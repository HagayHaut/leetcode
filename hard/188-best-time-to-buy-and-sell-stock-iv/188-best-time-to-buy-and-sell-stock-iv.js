/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(k, prices) {
    if (!k || !prices.length) return 0;
    if (k >= prices.length) return simpleMaxProfit(prices);
    let dp = new Array(prices.length).fill(0);
    for(let t = 0; t < k; t++){ 
        let min = prices[0];
        let max = 0;
        for(let i = 1; i < prices.length; i++){
            min = Math.min(min, prices[i] - dp[i]);
            max = Math.max(max, prices[i] - min);
            dp[i] = max;
        }
    }
    return dp.pop();
};

function simpleMaxProfit(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
}