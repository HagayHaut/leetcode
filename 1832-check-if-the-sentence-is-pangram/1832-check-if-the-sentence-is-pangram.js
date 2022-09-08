/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
    const aCode = 'a'.charCodeAt();
    const letters = {};
    for (const c of sentence) {
        letters[c] = true;
    }
    for (let i = 0; i < 26; i++) {
        if (!letters[String.fromCharCode(aCode + i)]) {
            return false;
        }
    }
    return true;
};