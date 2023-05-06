/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function(num) {
    const d = `${num}`.split('').sort();
    return parseInt(d[0] + d[3]) + parseInt(d[1] + d[2]);
};