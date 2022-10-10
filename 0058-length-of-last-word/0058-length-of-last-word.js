/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    const words = s.match(/[^ ]+/gi)
    return words.at(-1).length
};