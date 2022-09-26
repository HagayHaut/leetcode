/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    const words = s.match(/\S+/gi)
    return words.at(-1).length
};