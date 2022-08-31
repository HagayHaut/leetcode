/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(column) {
    let res = 0;
    for (let i = 0; i < column.length; i++) {
        const charVal = column[column.length - 1 - i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        const val = charVal * (26**i);
        res += val;
    }
    return res;
};