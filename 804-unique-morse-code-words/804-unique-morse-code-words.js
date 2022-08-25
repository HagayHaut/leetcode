/**
 * @param {string[]} words
 * @return {number}
 */
const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const uniqueMorseRepresentations = function(words) {
    const codeA = 'a'.charCodeAt(0);
    const codeMap = {};
    const codes = new Set;
    morse.forEach((code, i) => codeMap[String.fromCharCode(codeA + i)] = code);
    words.forEach(word => {
        let code = '';
        for (const c of word) {
            code += codeMap[c];
        }
        codes.add(code);
    })
    return codes.size
};