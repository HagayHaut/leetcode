/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let flag = true;
    let flips = 0;
    for (const c of target) {
        if (!!(+c) === flag) {
            flips++;
            flag = !flag;
        }
    }
    return flips;
};