/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    return Math.max(...accounts.map(a => a.reduce((a, b) => a + b)));
};