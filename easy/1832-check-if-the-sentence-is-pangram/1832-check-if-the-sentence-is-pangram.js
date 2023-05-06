/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
    const letters = new Set();
    for (const c of sentence) {
        letters.add(c);
    }
    return letters.size >= 26
};