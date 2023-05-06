/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
    const counts = {};
    for (const c of t) {
        counts[c] = ++counts[c] || 1;
    }
    for (const c of s) {
        counts[c]--;
    }
    for (const c in counts) {
        if (counts[c]) return c;
    }
};