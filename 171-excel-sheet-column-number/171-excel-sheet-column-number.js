/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(column) {
    const map = {};
    const ACode = 'A'.charCodeAt(0);
    for (let i = 1; i < 27; i++) {
        map[String.fromCharCode(ACode + i - 1)] = i;
    }
    let res = 0;
    const lastIdx = column.length - 1;
    for (i = 0; i < column.length; i++) {
        const indexVal = map[column[lastIdx - i]];
        const val = indexVal * (26**i)
        res += val;
    }
    return res;
};