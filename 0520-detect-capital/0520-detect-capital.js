/**
 * @param {string} word
 * @return {boolean}
 */
const isLower = c => c === c.toLowerCase();
const isUpper = c => c === c.toUpperCase();

var detectCapitalUse = function(word) {
    const [first, ...rest] = [...word];
    const allLower = rest.every(isLower),
          allUpper = rest.every(isUpper);
    return isLower(first)
        ? allLower
        : allLower || allUpper;
};