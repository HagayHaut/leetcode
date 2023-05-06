/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    prices.forEach(price => {
        profit = price - minPrice;
        minPrice = Math.min(price, minPrice);
        maxProfit = Math.max(profit, maxProfit);
    })
    return maxProfit;
};