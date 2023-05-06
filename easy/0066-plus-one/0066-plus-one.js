/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    let all9s = true;
    digits.forEach(n => {
        if (n !== 9) all9s = false;
    })
    if (all9s) {
        return [...digits.map((_, i) => i ? 0 : 1), 0];
    }
    let carry = 1, i = digits.length - 1;
    while (carry) {
        digits[i] += carry;
        carry = ~~(digits[i] / 10);
        digits[i] %= 10;
        i--;
    }
    return digits;
};