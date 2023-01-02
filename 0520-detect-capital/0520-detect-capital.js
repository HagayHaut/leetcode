/**
 * @param {string} word
 * @return {boolean}
 */
const isLower = c => c === c.toLowerCase();
const isUpper = c => c === c.toUpperCase();

var detectCapitalUse = function(word) {
    if (isLower(word[0])) {
        return [...word].every(isLower)
    } else {
        const [_, ...rest] = [...word];
        return rest.every(isLower) || rest.every(isUpper);
    }
};