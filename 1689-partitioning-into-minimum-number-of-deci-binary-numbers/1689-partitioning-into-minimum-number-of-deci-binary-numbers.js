/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = function(n) {
    return parseInt(Math.max(...n.split('')))
};