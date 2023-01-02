/**
 * @param {string} word
 * @return {boolean}
 */
const isLower = c => c === c.toLowerCase();
const isUpper = c => c === c.toUpperCase();

var detectCapitalUse = function(word) {
    const [first, ...rest] = [...word];
    return isLower(first)
        ? [...rest].every(isLower)
        : (rest.every(isLower) || rest.every(isUpper));
};