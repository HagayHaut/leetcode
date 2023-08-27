/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let flips = curr = 0;
    for (const c of target) {
        if (+c !== curr) {
            flips++;
            curr ^= 1;
        }
    }
    return flips;
};