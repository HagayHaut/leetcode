function coinChange(coins: number[], amount: number, memo = {}): number {
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    if (memo[amount]) return memo[amount];
    
    let minCombo = -1
    for (const coin of coins) {
        const curr = coinChange(coins, amount - coin, memo);
        if (curr !== -1) {
            if (minCombo === -1 || minCombo > curr) {
                minCombo = curr + 1;
            }
        }
    }
    memo[amount] = minCombo;
    return minCombo;
};