/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
    let result = Math.max(...nums),
        curMin = 1,
        curMax = 1;
    for (const n of nums) {
        // so everything isn't a 0 
        if (n === 0) {
            curMin = 1, curMax = 1;
            continue;
        }
        const temp = curMax*n;
        // important to include n 
        // for cases like [-1, 8]
        curMax = Math.max(curMin*n, temp, n);
        curMin = Math.min(curMin*n, temp, n);
        result = Math.max(result, curMax);
    }
    return result;
};