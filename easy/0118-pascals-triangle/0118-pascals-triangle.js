/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1], [1, 1]];
    if (numRows < 3) return res.slice(0, numRows);
    for (let i = 2; i < numRows; i++) {
        const lastRow = res.at(-1);
        const nextRow = [1];
        for (let j = 1; j < lastRow.length; j++) {
            nextRow.push(lastRow[j - 1] + lastRow[j]);
        }
        nextRow.push(1);
        res.push(nextRow);
    }
    return res;
};