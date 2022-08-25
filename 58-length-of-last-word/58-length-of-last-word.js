/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    const words = s.match(/[^ ]+/gi)
    return words[words.length-1].length
};