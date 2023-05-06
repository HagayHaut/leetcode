/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    if ([1, 3].includes(n)) return true;
    if (n < 9) return false;
    return isPowerOfThree(n/3);
};