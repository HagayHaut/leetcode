/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let maxRows = 0;
    const map = nums.reduce((acc, cur) => {
        acc.set(cur, acc.get(cur) ?? 0);
        acc.set(cur, acc.get(cur) + 1);
        maxRows = Math.max(maxRows, acc.get(cur))
        return acc;
    }, new Map());
    
    const mat = [];
    
    for (const [num, count] of map) {
        while (mat.length < count) mat.push([]);
        let i = 0;
        while (i < count) {
            mat[i++].push(num);
        }
    }
    return mat;
};