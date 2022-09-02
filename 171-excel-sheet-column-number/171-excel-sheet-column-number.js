/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(c) {
    let res = 0;
    const ACode = 'A'.charCodeAt(0)
    for (let i = 0; i < c.length; i++) {
        const charVal = c[c.length - 1 - i].charCodeAt(0) - ACode + 1;
        res += charVal * (26**i);
    }
    return res;
};