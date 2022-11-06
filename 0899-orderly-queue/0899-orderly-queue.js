/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const orderlyQueue = function(s, k) {
    if (!k) return s;
    if (k > 1) return s.split('').sort((a, b) => a < b ? -1 : 1).join('');
    
    let curr = `${s}`;
    let min = `${s}`;
    
    for (let i = 0; i < s.length; i++) {
        curr = curr.slice(1) + curr[0];
        if (curr < min) s = min = curr;
    }
    
    return min;
};