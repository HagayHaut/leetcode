/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function(s) {
    let flips = 0;
    for (const c of s) c === '0' && flips++;
    let res = flips;
    for (const c of s) {
        if (c === '0') {
            flips--;
            res = Math.min(res, flips);
        } else {
            flips++;
        }
    }
    return res;
};