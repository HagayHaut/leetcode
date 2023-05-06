/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const digits = `${n}`.split('').map(s => parseInt(s));
    return digits.reduce((a, b) => a * b, 1) - digits.reduce((a, b) => a + b, 0);
};