/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const counts = new Map;
    for (const c of s) {
        counts.set(c, (counts.get(c) + 1) || 1);
    }
    for (const [key, val] of counts) {
        if (val === 1) return s.indexOf(key);
    }
    return -1;
};