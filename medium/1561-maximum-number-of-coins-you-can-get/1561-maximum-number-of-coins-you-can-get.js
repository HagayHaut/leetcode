/**
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = function(piles) {
    piles.sort((a, b) => b - a);
    let me = 1,
        bob = piles.length - 1,
        res = 0;
    
    while (me < bob) {
        res += piles[me];
        me += 2;
        bob--;
    }
    
    return res;
};