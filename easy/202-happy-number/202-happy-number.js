/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const set = new Set();
    
    while (!set.has(n)) {
        if (n === 1) return true;
        set.add(n);
        const sum = sumSquares(n);
        n = sum;
    }
    
    return false;
};

function sumSquares(n) {
    let res = 0;
    
    while (n) {
        const digit = n % 10;
        res += digit**2;
        n = Math.floor(n/10);
    }
    
    return res;
}