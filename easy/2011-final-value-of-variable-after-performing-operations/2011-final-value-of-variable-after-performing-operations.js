/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function(operations) {
    let sum = 0;
    operations.forEach(op => {
        op[1] === '+' ? sum++ : sum--;
    })
    return sum;
};