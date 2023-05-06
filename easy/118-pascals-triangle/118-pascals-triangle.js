/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1],[1,1]]
    if (numRows < 3) return result.slice(0,numRows);
    for(let i = 3; i <= numRows; i++) {
        const prevRow = result[result.length-1]
        const currentRow = [1];
        for(let j = 0; j < prevRow.length-1; j++) {
            currentRow.push(prevRow[j]+prevRow[j+1])
        }
        currentRow.push(1)
        result.push(currentRow)
    }
    return result;
};