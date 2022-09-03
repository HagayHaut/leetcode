/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(c) {
    let result = 0;
    const OFFSET = 'A'.charCodeAt(0) - 1;
    for (let i = 0; i < c.length; i++) {
        const charVal = c[c.length - 1 - i].charCodeAt(0) - OFFSET; 
        result += charVal * (26**i);
    }
    return result;
};