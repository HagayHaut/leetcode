/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
    const freqs = {};
    for (const c of s) {
        freqs[c] = ++freqs[c] || 1;
    }
    const entries = Object.entries(freqs).sort((a,b) => b[1] - a[1]);
    let result = '';
    entries.forEach(([char, count]) => {
        for (let i = 0; i < count; i++) {
            result += char;
        }
    })
    return result;
};