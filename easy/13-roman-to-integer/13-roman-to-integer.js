/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const integers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = 0;
    if (s.length === 1) return integers[s[0]];
    for (let i = 0; i < s.length ; i++) {
        const curr = integers[s[i]]
        if (curr < integers[s[i+1]]) {
            sum += curr;
        } else {
            sum -= curr;
        }
    }
    return Math.abs(sum);
};