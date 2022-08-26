/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = function(sentences) {
    return sentences
            .map(s => s.split(' ').length)
            .reduce((a, b) => Math.max(a,b));
};