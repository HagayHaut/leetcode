/**
 * @param {string} s
 * @return {character}
 */
const repeatedCharacter = function(s) {
    const seen = new Set();
    for (const c of s) {
        if (seen.has(c)) return c;
        seen.add(c);
    }
};