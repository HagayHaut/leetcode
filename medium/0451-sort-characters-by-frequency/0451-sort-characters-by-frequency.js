/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
     return Object.entries(
        [...s].reduce((obj, c) => {
            obj[c] = obj[c] ? obj[c] + 1 : 1;
            return obj;
        }, {}))
            .sort((a, z) => z[1] - a[1])
            .map(([c, f]) => c.repeat(f))
            .join('');
};